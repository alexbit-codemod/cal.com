import type { Table } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";
import { useState, Fragment } from "react";

import { DataTableSelectionBar } from "@calcom/features/data-table";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { SchedulingType } from "@calcom/prisma/enums";
import { trpc } from "@calcom/trpc";
import type { RouterOutputs } from "@calcom/trpc/react";
import classNames from "@calcom/ui/classNames";
import { Button } from "@calcom/ui/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@calcom/ui/components/command";
import { Icon } from "@calcom/ui/components/icon";
import { Popover, PopoverContent, PopoverTrigger } from "@calcom/ui/components/popover";
import { showToast } from "@calcom/ui/components/toast";

import type { UserTableUser } from "../types";

interface Props {
  table: Table<UserTableUser>;
  orgTeams: RouterOutputs["viewer"]["organizations"]["getTeams"] | undefined;
}

export function EventTypesList({ table, orgTeams }: Props) {
  const { t } = useLocale();
  const utils = trpc.useUtils();
  const teamIds = orgTeams?.map((team) => team.id);
  const { data } = trpc.viewer.eventTypes.getByViewer.useQuery({
    filters: { teamIds, schedulingTypes: [SchedulingType.ROUND_ROBIN] },
  });
  const addMutation = trpc.viewer.organizations.addMembersToEventTypes.useMutation({
    onError: (error) => {
      showToast(error.message, "error");
    },
    onSuccess: () => {
      showToast(
        `${selectedUsers.length} users added to ${Array.from(selectedEvents).length} events`,
        "success"
      );

      utils.viewer.organizations.listMembers.invalidate();
      utils.viewer.eventTypes.invalidate();

      // Clear the selected values
      setSelectedEvents(new Set());
      setSelectedTeams(new Set());
      table.toggleAllRowsSelected(false);
    },
  });
  const removeHostsMutation = trpc.viewer.organizations.removeHostsFromEventTypes.useMutation({
    onError: (error) => {
      showToast(error.message, "error");
    },
    onSuccess: () => {
      showToast(
        `${selectedUsers.length} users were removed from ${Array.from(removeHostFromEvents).length} events`,
        "success"
      );

      utils.viewer.organizations.listMembers.invalidate();
      utils.viewer.eventTypes.invalidate();

      // Clear the selected values
      setRemoveHostFromEvents(new Set());
      table.toggleAllRowsSelected(false);
    },
  });
  const [selectedEvents, setSelectedEvents] = useState<Set<number>>(new Set());
  const [selectedTeams, setSelectedTeams] = useState<Set<number>>(new Set());
  const [removeHostFromEvents, setRemoveHostFromEvents] = useState<Set<number>>(new Set());
  const teams = data?.eventTypeGroups;
  const selectedUsers = table.getSelectedRowModel().flatRows.map((row) => row.original);

  // Add value array to the set
  const addValue = (set: Set<number>, setSet: Dispatch<SetStateAction<Set<number>>>, value: number[]) => {
    const updatedSet = new Set(set);
    value.forEach((v) => updatedSet.add(v));
    setSet(updatedSet);
  };

  // Remove value array from the set
  const removeValue = (set: Set<number>, setSet: Dispatch<SetStateAction<Set<number>>>, value: number[]) => {
    const updatedSet = new Set(set);
    value.forEach((v) => updatedSet.delete(v));
    setSet(updatedSet);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <DataTableSelectionBar.Button icon="link" color="secondary">
            {t("add_to_event_type")}
          </DataTableSelectionBar.Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 shadow-md" align="start" sideOffset={12}>
          <Command>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            <CommandList>
              // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
              $$$
              <CommandGroup>
                {teams &&
                  teams.map((team) => {
                    const events = team.eventTypes;
                    const teamId = team.teamId;

                    if (events.length === 0 || !teamId) return null;

                    const ids = events.map((event) => event.id);
                    const areAllUsersHostForTeam = selectedUsers.every((user) =>
                      events.every((event) => event.hosts.some((host) => host.userId === user.id))
                    );
                    const isSelected = ids.every(
                      (id) =>
                        selectedEvents.has(id) || (areAllUsersHostForTeam && !removeHostFromEvents.has(id))
                    );
                    return (
                      <Fragment key={team.teamId}>
                        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                        $$$
                        {events.map((event) => {
                          const hosts = event.hosts;
                          const areAllUsersHostForEventType = selectedUsers.every((user) =>
                            hosts.some((host) => host.userId === user.id)
                          );
                          const isSelected =
                            (selectedEvents.has(event.id) || areAllUsersHostForEventType) &&
                            !removeHostFromEvents.has(event.id);
                          return (
                            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                            $$$
                          );
                        })}
                      </Fragment>
                    );
                  })}
              </CommandGroup>
            </CommandList>
          </Command>
          <div className="my-1.5 flex w-full">
            <Button
              className="ml-auto mr-1.5 rounded-md"
              size="sm"
              onClick={() => {
                const userIds = selectedUsers.map((user) => user.id);
                if (selectedEvents.size > 0) {
                  addMutation.mutateAsync({
                    userIds: userIds,
                    teamIds: Array.from(selectedTeams),
                    eventTypeIds: Array.from(selectedEvents),
                  });
                }

                if (removeHostFromEvents.size > 0) {
                  removeHostsMutation.mutateAsync({
                    userIds,
                    eventTypeIds: Array.from(removeHostFromEvents),
                  });
                }
              }}>
              {t("apply")}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}

interface ListItemProps {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
  isTeam: boolean;
}

const ListItem = ({ onSelect, text, isSelected, isTeam }: ListItemProps) => {
  return (
    <CommandItem
      key={text}
      onSelect={onSelect}
      className={classNames(isTeam && "text-subtle text-xs font-normal")}>
      {text}
      <div
        className={classNames(
          "border-subtle ml-auto flex h-4 w-4 items-center justify-center rounded-sm border",
          isSelected ? "text-emphasis" : "opacity-50 [&_svg]:invisible"
        )}>
        <Icon name="check" className={classNames("h-4 w-4")} />
      </div>
    </CommandItem>
  );
};
