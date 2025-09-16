import tasker from "@calcom/features/tasker";

import type sendPayload from "./sendPayload";

type SchedulePayload = typeof sendPayload;

const schedulePayload: SchedulePayload = async (secretKey, triggerEvent, createdAt, webhook, data) => {
  await tasker.create("sendWebhook", JSON.stringify({ secretKey, triggerEvent, createdAt, webhook, data }));
  return {
    ok: true,
    status: 200,
    message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
    ,
  };
};

export default schedulePayload;
