import slugify from "@calcom/lib/slugify";

import { ProfileRepository } from "./repository/profile";
import { isUsernameReservedDueToMigration } from "./username";

export async function checkRegularUsername(_username: string, currentOrgDomain?: string | null) {
  const isCheckingUsernameInGlobalNamespace = !currentOrgDomain;
  const username = slugify(_username);

  const premium = !!process.env.NEXT_PUBLIC_IS_E2E && username.length < 5;

  const profiles = currentOrgDomain
    ? await ProfileRepository.findManyByOrgSlugOrRequestedSlug({
        orgSlug: currentOrgDomain,
        usernames: [username],
      })
    : null;

  const user = profiles?.length ? profiles[0].user : null;

  if (user) {
    return {
      available: false as const,
      premium,
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    };
  }

  const isUsernameAvailable = isCheckingUsernameInGlobalNamespace
    ? !(await isUsernameReservedDueToMigration(username))
    : true;

  return {
    available: isUsernameAvailable,
    premium,
  };
}
