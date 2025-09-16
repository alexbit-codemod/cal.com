import type { TFunction } from "i18next";

import { WEBAPP_URL, COMPANY_NAME } from "@calcom/lib/constants";

import { V2BaseEmailHtml } from "../components";

interface DailyVideoDownloadTranscriptEmailProps {
  language: TFunction;
  transcriptDownloadLinks: Array<string>;
  title: string;
  date: string;
  name: string;
}

export const DailyVideoDownloadTranscriptEmail = (
  props: DailyVideoDownloadTranscriptEmailProps & Partial<React.ComponentProps<typeof V2BaseEmailHtml>>
) => {
  const image = `${WEBAPP_URL}/emails/logo.png`;
  return (
    <V2BaseEmailHtml
      subject={props.language("download_transcript_email_subject", {
        title: props.title,
        date: props.date,
      })}>
      <div style={{ width: "89px", marginBottom: "35px" }}>
        <a href={WEBAPP_URL} target="_blank" rel="noreferrer">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </a>
      </div>
      <p
        style={{
          fontSize: "32px",
          fontWeight: "600",
          lineHeight: "38.5px",
          marginBottom: "40px",
          color: "black",
        }}>
        <>{props.language("download_your_transcripts")}</>
      </p>
      <p style={{ fontWeight: 400, lineHeight: "24px" }}>
        <>{props.language("hi_user_name", { name: props.name })},</>
      </p>
      <p style={{ fontWeight: 400, lineHeight: "24px", marginBottom: "40px" }}>
        <>{props.language("you_can_download_transcript_from_attachments")}</>
      </p>

      {props.transcriptDownloadLinks.map((_, index) => {
        return (
          <div
            key={`transcript-${index}`}
            style={{
              backgroundColor: "#F3F4F6",
              padding: "32px",
              marginBottom: "40px",
            }}>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "20px",
                fontWeight: 600,
                marginBottom: "8px",
                color: "black",
              }}>
              <>{props.title}</>
            </p>
            // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
            $$$
          </div>
        );
      })}

      <p style={{ fontWeight: 400, lineHeight: "24px", marginTop: "32px", marginBottom: "8px" }}>
        <>{props.language("happy_scheduling")},</>
      </p>
      <p style={{ fontWeight: 400, lineHeight: "24px", marginTop: "0px" }}>
        <>{props.language("the_calcom_team", { companyName: COMPANY_NAME })}</>
      </p>
    </V2BaseEmailHtml>
  );
};
