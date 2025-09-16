import DailyVideoApiAdapter from "@calcom/app-store/dailyvideo/lib/VideoApiAdapter";
import type { TrpcSessionUser } from "@calcom/trpc/server/types";

import { TRPCError } from "@trpc/server";

import type { TGetMeetingInformationInputSchema } from "./getMeetingInformation.schema";

type GetMeetingInformationOptions = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
  };
  input: TGetMeetingInformationInputSchema;
};

export const getMeetingInformationHandler = async ({ ctx: _ctx, input }: GetMeetingInformationOptions) => {
  const { roomName } = input;

  try {
    const videoApiAdapter = DailyVideoApiAdapter();
    if (!videoApiAdapter || !videoApiAdapter.getMeetingInformation) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
        ,
      });
    }
    const res = await videoApiAdapter.getMeetingInformation(roomName);
    return res;
  } catch (err) {
    throw new TRPCError({
      code: "BAD_REQUEST",
    });
  }
};
