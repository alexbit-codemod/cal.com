vi.mock("@calcom/lib/next-seo.config", () => ({
  default: {
    headSeo: {
      siteName: "Cal.com",
    },
    defaultNextSeo: {
      title: "Cal.com",
      description: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      ,
    },
  },
  seoConfig: {
    headSeo: {
      siteName: "Cal.com",
    },
  },
  buildSeoMeta: vi.fn().mockReturnValue({}),
}));
