import { useState, useEffect } from "react";

import type { EventTypeAppSettingsComponent } from "@calcom/app-store/types";
import { trpc } from "@calcom/trpc/react";
import { Select } from "@calcom/ui/components/form";

const EventTypeAppSettingsInterface: EventTypeAppSettingsComponent = ({}) => {
  const [projects, setProjects] = useState();
  const [selectedProject, setSelectedProject] = useState<undefined | { label: string; value: string }>();
  const { data } = trpc.viewer.appBasecamp3.projects.useQuery();
  const setProject = trpc.viewer.appBasecamp3.projectMutation.useMutation();

  useEffect(
    function refactorMeWithoutEffect() {
      setSelectedProject({
        value: data?.projects.currentProject,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        label: data?.projects?.find((project: any) => project.id === data?.currentProject)?.name,
      });
      setProjects(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data?.projects?.map((project: any) => {
          return {
            value: project.id,
            label: project.name,
          };
        })
      );
    },
    [data]
  );

  return (
    <div className="mt-2 text-sm">
      <div className="flex gap-3">
        <div className="items-center">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$ of your projects to
        cal.com
      </div>
    </div>
  );
};

export default EventTypeAppSettingsInterface;
