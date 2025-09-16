"use client";

import { keepPreviousData } from "@tanstack/react-query";
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useMemo, useRef, useState } from "react";
import { useFormState } from "react-hook-form";

import dayjs from "@calcom/dayjs";
import {
  DataTableWrapper,
  DataTableToolbar,
  DataTableProvider,
  ColumnFilterType,
  useDataTable,
  useFilterValue,
  ZDateRangeFilterValue,
  DataTableFilters,
  DataTableSegment,
} from "@calcom/features/data-table";
import { useSegments } from "@calcom/features/data-table/hooks/useSegments";
import SettingsHeader from "@calcom/features/settings/appDir/SettingsHeader";
import ServerTrans from "@calcom/lib/components/ServerTrans";
import { getUserAvatarUrl } from "@calcom/lib/getAvatarUrl";
import { useCompatSearchParams } from "@calcom/lib/hooks/useCompatSearchParams";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Avatar } from "@calcom/ui/components/avatar";
import { Button } from "@calcom/ui/components/button";
import { EmptyScreen } from "@calcom/ui/components/empty-screen";
import { Icon } from "@calcom/ui/components/icon";
import { SkeletonText } from "@calcom/ui/components/skeleton";
import { showToast } from "@calcom/ui/components/toast";
import { Tooltip } from "@calcom/ui/components/tooltip";

import CreateNewOutOfOfficeEntryButton from "./CreateNewOutOfOfficeEntryButton";
import { CreateOrEditOutOfOfficeEntryModal } from "./CreateOrEditOutOfOfficeModal";
import type { BookingRedirectForm } from "./CreateOrEditOutOfOfficeModal";
import { OutOfOfficeTab, OutOfOfficeToggleGroup } from "./OutOfOfficeToggleGroup";

interface OutOfOfficeEntry {
  id: number;
  uuid: string;
  start: Date;
  end: Date;
  toUserId: number | null;
  toUser: {
    username: string;
    name: string;
  } | null;
  reason: {
    id: number;
    emoji: string;
    reason: string;
    userId: number;
  } | null;
  notes: string | null;
  user: { id: number; avatarUrl: string; username: string; email: string; name: string } | null;
  canEditAndDelete: boolean;
}

export default function OutOfOfficeEntriesList() {
  const { t } = useLocale();

  return (
    <SettingsHeader
      title={t("out_of_office")}
      description={t("out_of_office_description")}
      CTA={
        <div className="flex gap-2">
          <OutOfOfficeToggleGroup />
          <CreateNewOutOfOfficeEntryButton data-testid="add_entry_ooo" />
        </div>
      }>
      <DataTableProvider useSegments={useSegments}>
        <OutOfOfficeEntriesListContent />
      </DataTableProvider>
    </SettingsHeader>
  );
}

function OutOfOfficeEntriesListContent() {
  const { t } = useLocale();
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [deletedEntry, setDeletedEntry] = useState(0);
  const [currentlyEditingOutOfOfficeEntry, setCurrentlyEditingOutOfOfficeEntry] =
    useState<BookingRedirectForm | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const editOutOfOfficeEntry = (entry: BookingRedirectForm) => {
    setCurrentlyEditingOutOfOfficeEntry(entry);
    setOpenModal(true);
  };

  const { searchTerm } = useDataTable();
  const searchParams = useCompatSearchParams();
  const selectedTab = searchParams?.get("type") ?? OutOfOfficeTab.MINE;

  const endDateRange = useFilterValue("dateRange", ZDateRangeFilterValue)?.data;

  const { data, isPending, fetchNextPage, isFetching, refetch, hasNextPage } =
    trpc.viewer.ooo.outOfOfficeEntriesList.useInfiniteQuery(
      {
        limit: 10,
        fetchTeamMembersEntries: selectedTab === OutOfOfficeTab.TEAM,
        searchTerm,
        endDateFilterStartRange: endDateRange?.startDate ?? undefined,
        endDateFilterEndRange: endDateRange?.endDate ?? undefined,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        placeholderData: keepPreviousData,
      }
    );

  useEffect(() => {
    refetch();
  }, [deletedEntry, selectedTab, refetch]);

  const totalRowCount = data?.pages?.[0]?.meta?.totalRowCount ?? 0;
  const flatData = useMemo(
    () =>
      isPending || isFetching ? new Array(5).fill(null) : data?.pages?.flatMap((page) => page.rows) ?? [],
    [data, selectedTab, isPending, isFetching, searchTerm]
  ) as OutOfOfficeEntry[];

  const memoColumns = useMemo(() => {
    const columnHelper = createColumnHelper<OutOfOfficeEntry>();
    return [
      columnHelper.accessor((row) => row, {
        id: "dateRange",
        header: t("date_range"),
        enableColumnFilter: true,
        enableSorting: false,
        cell: () => null,
        filterFn: () => true,
        meta: {
          filter: {
            type: ColumnFilterType.DATE_RANGE,
            dateRangeOptions: {
              range: "past",
            },
          },
        },
      }),
      ...(selectedTab === OutOfOfficeTab.TEAM
        ? [
            columnHelper.display({
              id: "member",
              header: `Member`,
              size: 300,
              cell: ({ row }) => {
                if (!row.original || !row.original.user || isPending || isFetching) {
                  return <SkeletonText className="h-8 w-full" />;
                }
                const { avatarUrl, username, email, name } = row.original.user;
                const memberName =
                  name ||
                  (() => {
                    const emailName = email.split("@")[0];
                    return emailName.charAt(0).toUpperCase() + emailName.slice(1);
                  })();
                return (
                  <div className="flex items-center gap-2">
                    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                    $$$
                    <div className="">
                      <div
                        data-testid={`ooo-member-${username}-username`}
                        className="text-emphasis text-sm font-medium leading-none">
                        {memberName}
                      </div>
                      <div
                        data-testid={`ooo-member-${username}-email`}
                        className="text-subtle mt-1 text-sm leading-none">
                        {email}
                      </div>
                    </div>
                  </div>
                );
              },
            }),
          ]
        : []),
      columnHelper.display({
        id: "outOfOffice",
        header: `${t("out_of_office")} (${totalRowCount})`,
        size: selectedTab === OutOfOfficeTab.TEAM ? 370 : 660,
        cell: ({ row }) => {
          const item = row.original;
          return (
            <>
              {row.original && !isPending && !isFetching ? (
                <div
                  className="flex flex-row justify-between p-2"
                  data-testid={`table-redirect-${item.toUser?.username || "n-a"}`}>
                  <div className="flex flex-row items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50">
                      {item?.reason?.emoji || "🏝️"}
                    </div>

                    <div className="ml-2 flex flex-col">
                      <p className="px-2 font-bold">
                        {dayjs.utc(item.start).format("ll")} - {dayjs.utc(item.end).format("ll")}
                      </p>
                      <p className="px-2">
                        {item.toUser?.username ? (
                          <ServerTrans
                            t={t}
                            i18nKey="ooo_forwarding_to"
                            values={{
                              username: item.toUser?.username,
                            }}
                            components={[<span key="ooo-username" className="text-subtle font-bold" />]}
                          />
                        ) : (
                          <>{t("ooo_not_forwarding")}</>
                        )}
                      </p>
                      {item.notes && (
                        <p className="px-2">
                          <span className="text-subtle">{t("notes")}: </span>
                          <span data-testid={`ooo-entry-note-${item.toUser?.username || "n-a"}`}>
                            {item.notes}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <SkeletonText className="h-8 w-full" />
              )}
            </>
          );
        },
      }),
      columnHelper.display({
        id: "actions",
        size: 90,
        cell: ({ row }) => {
          const item = row.original;
          return (
            <>
              {row.original && !isPending && !isFetching ? (
                <div className="flex flex-row items-center justify-end gap-x-2" data-testid="ooo-actions">
                  <Tooltip content={t("edit")}>
                    <Button
                      className="self-center rounded-lg border"
                      type="button"
                      color="secondary"
                      variant="icon"
                      data-testid={`ooo-edit-${item.toUser?.username || "n-a"}`}
                      StartIcon="pencil"
                      onClick={() => {
                        const startDateOffset = -1 * item.start.getTimezoneOffset();
                        const endDateOffset = -1 * item.end.getTimezoneOffset();
                        const outOfOfficeEntryData: BookingRedirectForm = {
                          uuid: item.uuid,
                          dateRange: {
                            startDate: dayjs(item.start).subtract(startDateOffset, "minute").toDate(),
                            endDate: dayjs(item.end).subtract(endDateOffset, "minute").startOf("d").toDate(),
                          },
                          startDateOffset,
                          endDateOffset,
                          toTeamUserId: item.toUserId,
                          reasonId: item.reason?.id ?? 1,
                          notes: item.notes ?? undefined,
                          forUserId: item.user?.id || null,
                          forUserName:
                            item.user?.name ||
                            (item.user?.email &&
                              (() => {
                                const emailName = item.user?.email.split("@")[0];
                                return emailName.charAt(0).toUpperCase() + emailName.slice(1);
                              })()),
                          forUserAvatar: item.user?.avatarUrl,
                          toUserName: item.toUser?.name || item.toUser?.username,
                        };
                        editOutOfOfficeEntry(outOfOfficeEntryData);
                      }}
                      disabled={isPending || isFetching || !item.canEditAndDelete}
                    />
                  </Tooltip>
                  <Tooltip content={t("delete")}>
                    <Button
                      className="self-center rounded-lg border"
                      type="button"
                      color="destructive"
                      variant="icon"
                      disabled={
                        deleteOutOfOfficeEntryMutation.isPending ||
                        isPending ||
                        isFetching ||
                        !item.canEditAndDelete
                      }
                      StartIcon="trash-2"
                      data-testid={`ooo-delete-${item.toUser?.username || "n-a"}`}
                      onClick={() => {
                        deleteOutOfOfficeEntryMutation.mutate({
                          outOfOfficeUid: item.uuid,
                          userId: selectedTab === OutOfOfficeTab.TEAM ? item.user?.id : undefined,
                        });
                      }}
                    />
                  </Tooltip>
                </div>
              ) : (
                <SkeletonText className="h-8 w-full" />
              )}
            </>
          );
        },
      }),
    ];
  }, [selectedTab, isPending, isFetching]);

  const table = useReactTable({
    data: flatData,
    columns: memoColumns,
    initialState: {
      columnVisibility: {
        dateRange: false,
      },
    },
    enableRowSelection: false,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const deleteOutOfOfficeEntryMutation = trpc.viewer.ooo.outOfOfficeEntryDelete.useMutation({
    onSuccess: () => {
      showToast(t("success_deleted_entry_out_of_office"), "success");
      setDeletedEntry((previousValue) => previousValue + 1);
      useFormState;
    },
    onError: () => {
      showToast(`An error occurred`, "error");
    },
  });

  return (
    <>
      <DataTableWrapper
        testId="ooo-list-data-table"
        rowClassName={selectedTab === OutOfOfficeTab.MINE ? "hidden" : ""}
        table={table}
        isPending={isPending}
        hasNextPage={hasNextPage}
        fetchNextPage={fetchNextPage}
        isFetching={isFetching}
        totalRowCount={totalRowCount}
        tableContainerRef={tableContainerRef}
        paginationMode="infinite"
        ToolbarLeft={
          <>
            <DataTableToolbar.SearchBar />
            <DataTableFilters.FilterBar table={table} />
          </>
        }
        ToolbarRight={
          <>
            <DataTableFilters.ClearFiltersButton />
            <DataTableSegment.SaveButton />
            <DataTableSegment.Select />
          </>
        }
        EmptyView={
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                      $$$
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        }
      />
      {openModal && (
        <CreateOrEditOutOfOfficeEntryModal
          openModal={openModal}
          closeModal={() => {
            setOpenModal(false);
            setCurrentlyEditingOutOfOfficeEntry(null);
          }}
          currentlyEditingOutOfOfficeEntry={currentlyEditingOutOfOfficeEntry}
        />
      )}
    </>
  );
}
