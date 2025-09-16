import { Dialog } from "@calcom/features/components/controlled-dialog";
import { CreateANewTeamForm } from "@calcom/features/ee/teams/components";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { DialogContent } from "@calcom/ui/components/dialog";
import { revalidateTeamsList } from "@calcom/web/app/(use-page-wrapper)/(main-nav)/teams/actions";

interface CreateTeamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateTeamDialog = (props: CreateTeamDialogProps) => {
  const { open, onOpenChange } = props;
  const { t } = useLocale();

  const utils = trpc.useUtils();
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent type="creation" title={t("create_new_team")} description={t("team_will_be_under_org")}>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </DialogContent>
    </Dialog>
  );
};

export default CreateTeamDialog;
