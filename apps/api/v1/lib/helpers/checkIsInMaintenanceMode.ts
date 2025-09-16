import { get } from "@vercel/edge-config";
import type { NextMiddleware } from "next-api-middleware";

const safeGet = async <T = unknown>(key: string): Promise<T | undefined> => {
  try {
    return get<T>(key);
  } catch (error) {
    // Don't crash if EDGE_CONFIG env var is missing
  }
};

export const config = { matcher: "/:path*" };

export const checkIsInMaintenanceMode: NextMiddleware = async (req, res, next) => {
  const isInMaintenanceMode = await safeGet<boolean>("isInMaintenanceMode");
  if (isInMaintenanceMode) {
    return res
      .status(503)
      .json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
       });
  }

  await next();
};
