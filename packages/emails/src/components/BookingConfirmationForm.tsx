export const BookingConfirmationForm = (props: { action: string; children: React.ReactNode }) => {
  return (
    <form action={props.action} method="POST" target="_blank">
      {props.children}
      <p
        style={{
          display: "inline-block",
          background: "#FFFFFF",
          border: "",
          color: "#ffffff",
          fontFamily: "Roboto, Helvetica, sans-serif",
          fontSize: "0.875rem",
          fontWeight: 500,
          lineHeight: "1rem",
          margin: 0,
          textDecoration: "none",
          textTransform: "none",
          padding: "0.625rem 0",
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          msoPaddingAlt: "0px",
          borderRadius: "6px",
          boxSizing: "border-box",
          height: "2.25rem",
          width: "100%",
        }}>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </label>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </p>
    </form>
  );
};
