import { OrganizerIntegrationLocation } from "@/ee/event-types/event-types_2024_06_14/transformers";

type BaseEventType = {
  length: number;
  slug: string;
  title: string;
};

type EventTypeWithLocation = BaseEventType & {
  locations: OrganizerIntegrationLocation[];
};

const thirtyMinutes: BaseEventType = {
  length: 30,
  slug: "thirty-minutes",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
};

const thirtyMinutesVideo: EventTypeWithLocation = {
  length: 30,
  slug: "thirty-minutes-video",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  locations: [{ type: "integrations:daily" }],
};

const sixtyMinutes: BaseEventType = {
  length: 60,
  slug: "sixty-minutes",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
};

const sixtyMinutesVideo: EventTypeWithLocation = {
  length: 60,
  slug: "sixty-minutes-video",
  title: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  ,
  locations: [{ type: "integrations:daily" }],
};

export const DEFAULT_EVENT_TYPES = {
  thirtyMinutes,
  thirtyMinutesVideo,
  sixtyMinutes,
  sixtyMinutesVideo,
};
