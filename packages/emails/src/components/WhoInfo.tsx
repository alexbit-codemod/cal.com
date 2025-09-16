import type { TFunction } from "i18next";

import isSmsCalEmail from "@calcom/lib/isSmsCalEmail";
import type { CalendarEvent } from "@calcom/types/Calendar";

import { Info } from "./Info";

export const PersonInfo = ({ name = "", email = "", role = "", phoneNumber = "" }) => {
  const displayEmail = !isSmsCalEmail(email);
  const formattedPhoneNumber = !!phoneNumber ? `${phoneNumber} ` : "";

  return (
    <div style={{ color: "#101010", fontWeight: 400, lineHeight: "24px" }}>
      {name} - {role} {formattedPhoneNumber}
      {displayEmail && (
        <span style={{ color: "#4B5563" }}>
          <a href={`mailto:${email}`} style={{ color: "#4B5563" }}>
            {email}
          </a>
        </span>
      )}
    </div>
  );
};

export function WhoInfo(props: { calEvent: CalendarEvent; t: TFunction }) {
  const { t } = props;
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}
