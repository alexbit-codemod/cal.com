import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Index() {
  const [data, setData] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const appSlug = searchParams?.get("appSlug");
  const userId = searchParams?.get("userId");

  useEffect(() => {
    let isRedirectNeeded = false;
    const newSearchParams = new URLSearchParams(new URL(document.URL).searchParams);
    if (!userId) {
      newSearchParams.set("userId", "1");
      isRedirectNeeded = true;
    }

    if (!appSlug) {
      newSearchParams.set("appSlug", "google-calendar");
      isRedirectNeeded = true;
    }

    if (isRedirectNeeded) {
      router.push(`${pathname}?${newSearchParams.toString()}`);
    }
  }, [router, pathname, userId, appSlug]);

  async function updateToken({ invalid } = { invalid: false }) {
    const res = await fetch(
      `/api/setTokenInCalCom?invalid=${invalid ? 1 : 0}&userId=${userId}&appSlug=${appSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    setData(JSON.stringify(data));
  }

  return (
    <div>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$// To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$ for{" "}
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$. Update query params to manage a different user or app{" "}
      </p>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$
      <div>{data}</div>
    </div>
  );
}
