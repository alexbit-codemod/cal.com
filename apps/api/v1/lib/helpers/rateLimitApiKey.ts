import type { NextMiddleware } from "next-api-middleware";

import { handleAutoLock } from "@calcom/lib/autoLock";
import { checkRateLimitAndThrowError } from "@calcom/lib/checkRateLimitAndThrowError";
import { HttpError } from "@calcom/lib/http-error";

export const rateLimitApiKey: NextMiddleware = async (req, res, next) => {
  if (!req.userId) return res.status(401).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });
  if (!req.query.apiKey) return res.status(401).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
   });

  // TODO: Add a way to add trusted api keys
  try {
    const identifier = req.userId.toString();
    await checkRateLimitAndThrowError({
      identifier,
      rateLimitingType: "api",
      onRateLimiterResponse: async (response) => {
        res.setHeader("X-RateLimit-Limit", response.limit);
        res.setHeader("X-RateLimit-Remaining", response.remaining);
        res.setHeader("X-RateLimit-Reset", response.reset);

        try {
          const didLock = await handleAutoLock({
            identifier,
            identifierType: "userId",
            rateLimitResponse: response,
          });

          if (didLock) {
            return res.status(429).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
             });
          }
        } catch (error) {
          if (error instanceof Error && error.message === "No user found for this API key.") {
            return res.status(401).json({ message: error.message });
          }
          throw error;
        }
      },
    });
  } catch (error) {
    if (error instanceof HttpError) {
      return res.status(error.statusCode).json({ message: error.message });
    }
    return res.status(429).json({ message: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
     });
  }

  await next();
};
