import type { NextApiRequest, NextApiResponse } from "next";

import { WEBAPP_URL } from "@calcom/lib/constants";

import type { NewCanvas } from "../lib";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { card_creation_options } = req.body;

  if (!card_creation_options) return res.status(400).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  const URL = `${WEBAPP_URL}/api/integrations/intercom/get?url=${card_creation_options.submit_booking_url}`;

  const canvasData: NewCanvas = {
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            ,
            align: "left",
            style: "header",
          },
          {
            type: "button",
            id: "submit-issue-form",
            label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
            ,
            style: "primary",
            action: {
              type: "sheet",
              url: URL,
            },
          },
        ],
      },
    },
  };

  return res.status(200).json(canvasData);
}
