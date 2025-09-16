import { z } from "zod";

export const ZNoShowInputSchema = z
  .object({
    bookingUid: z.string(),
    attendees: z
      .array(
        z.object({
          email: z.string(),
          noShow: z.boolean(),
        })
      )
      .optional(),
    noShowHost: z.boolean().optional(),
  })
  .refine(
    (data) => {
      return (data.attendees && data.attendees.length > 0) || data.noShowHost !== undefined;
    },
    {
      message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
      path: ["attendees", "noShowHost"],
    }
  );

export type TNoShowInputSchema = z.infer<typeof ZNoShowInputSchema>;
