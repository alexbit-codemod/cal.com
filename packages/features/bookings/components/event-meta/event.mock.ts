import type { BookerEvent } from "bookings/types";

export const mockEvent: BookerEvent = {
  id: 1,
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  slug: "quick-check-in",
  eventName: "Quick check-in",
  description:
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  users: [
    { name: "Pro example", username: "pro", weekStart: "Sunday", avatarUrl: "", profile: null },
    { name: "Team example", username: "team", weekStart: "Sunday", avatarUrl: "", profile: null },
  ],
  schedulingType: null,
  length: 30,
  locations: [{ type: "integrations:google:meet" }, { type: "integrations:zoom" }],
};
