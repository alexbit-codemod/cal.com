import { defaultResponderForAppDir } from "app/api/defaultResponderForAppDir";
import { createHmac } from "crypto";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { z } from "zod";

import dayjs from "@calcom/dayjs";
import { timeZoneSchema } from "@calcom/lib/dayjs/timeZone.schema";
import { UserRepository } from "@calcom/lib/server/repository/user";
import prisma from "@calcom/prisma";
import { userMetadata } from "@calcom/prisma/zod-utils";

import { CardComponent } from "@lib/plain/card-components";

const customerCardDisplay = (
  name: string,
  email: string,
  id: string,
  username: string,
  timeZone: string,
  emailVerified: Date | null,
  twoFactorEnabled: boolean | null,
  identityProvider: string | null,
  lastActiveAt: Date | null,
  teamName: string | null,
  teamSlug: string | null,
  isOrganization: boolean | null,
  stripeCustomerId: string | null
): Card => {
  return {
    key: "customer-card",
    timeToLiveSeconds: null,
    components: [
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentText: {
          text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textSize: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: "M",
        },
      },
      // Account Settings Section Title
      {
        componentText: {
          text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textSize: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: "M",
        },
      },
      // Team Information Section Title
      {
        componentText: {
          text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textSize: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                badgeColor: isOrganization ? "GREEN" : "RED",
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentDivider: {
          dividerSpacingSize: "M",
        },
      },
      {
        componentText: {
          text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
          textSize: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          ,
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                badgeColor: emailVerified === null ? "RED" : emailVerified ? "GREEN" : "RED",
              },
            },
          ],
        },
      },
      {
        componentSpacer: {
          spacerSize: "M",
        },
      },
      {
        componentRow: {
          rowMainContent: [
            {
              componentText: {
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
          rowAsideContent: [
            {
              componentBadge: {
                badgeLabel: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                badgeColor: twoFactorEnabled === null ? "RED" : twoFactorEnabled ? "GREEN" : "RED",
              },
            },
          ],
        },
      },
    ],
  };
};

const Card = z.object({
  key: z.string(),
  timeToLiveSeconds: z.number().int().min(0).nullish().default(null),
  components: z.array(CardComponent).nullable(),
});

type Card = z.infer<typeof Card>;

const cardExamples: ((
  name: string,
  email: string,
  id: string,
  username: string,
  timeZone: string,
  emailVerified: Date | null,
  twoFactorEnabled: boolean | null,
  identityProvider: string | null,
  lastActiveAt: Date | null,
  teamName: string | null,
  teamSlug: string | null,
  isOrganization: boolean | null,
  stripeCustomerId: string | null
) => Card)[] = [customerCardDisplay];

const inputSchema = z.object({
  customer: z.object({
    name: z.string().optional(),
    email: z.string().email(),
    username: z.string().optional(),
    timeZone: timeZoneSchema.optional(),
    emailVerified: z.boolean().optional(),
    identityProvider: z.string().optional(),
    twoFactorEnabled: z.boolean().optional(),
    lastActiveAt: z.string().optional(),
    teamName: z.string().optional(),
    teamSlug: z.string().optional(),
    isOrganization: z.boolean().optional(),
    stripeCustomerId: z.string().optional(),
  }),
  cardKeys: z.array(z.string()),
});

async function handler(request: NextRequest) {
  const headersList = await headers();
  const requestBody = await request.json();

  // HMAC verification
  const incomingSignature = headersList.get("plain-request-signature");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const expectedSignature = createHmac("sha-256", process.env.PLAIN_HMAC_SECRET_KEY!)
    .update(JSON.stringify(requestBody))
    .digest("hex");
  if (incomingSignature !== expectedSignature) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  // Validate request body
  const { cardKeys, customer } = inputSchema.parse(requestBody);

  const userRepo = new UserRepository(prisma);
  const user = await userRepo.findByEmail({ email: customer.email });

  if (!user) {
    return NextResponse.json({
      cards: [
        {
          key: "customer-card",
          timeToLiveSeconds: null,
          components: [
            {
              componentSpacer: {
                spacerSize: "M",
              },
            },
            {
              componentText: {
                textSize: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                textColor: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
                text: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
                $$$
                ,
              },
            },
          ],
        },
      ],
    });
  }

  // Fetch team details including userId and team name
  const teamMemberships = await userRepo.findTeamsByUserId({ userId: user.id });
  const firstTeam = teamMemberships.teams[0] ?? null;

  // Parse user metadata
  const parsedMetadata = userMetadata.parse(user.metadata);

  const cards = await Promise.all(
    cardExamples.map(async (cardFn) => {
      return cardFn(
        user.name || "Unknown",
        user.email,
        user.id.toString(),
        user.username || "Unknown",
        user.timeZone,
        user.emailVerified,
        user.twoFactorEnabled,
        user.identityProvider,
        user.lastActiveAt,
        firstTeam?.name || "Unknown",
        firstTeam?.slug || "Unknown",
        firstTeam?.isOrganization || false,
        (user.metadata as { stripeCustomerId?: string })?.stripeCustomerId || "Unknown"
      );
    })
  );

  const filteredCards = cards.filter((card) => {
    return cardKeys.length === 0 || cardKeys.includes(card.key);
  });

  return NextResponse.json({
    cards: filteredCards,
    user: {
      ...user,
      metadata: parsedMetadata,
    },
  });
}

export const POST = defaultResponderForAppDir(handler);
