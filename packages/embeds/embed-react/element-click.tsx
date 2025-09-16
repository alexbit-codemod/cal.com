/**
 * @fileoverview This file is an example file and tells how to use the element-click popup embed in a React application. This is also used by playwright e2e
 */
import { useEffect } from "react";
import * as React from "react";
import ReactDom from "react-dom";

import { getCalApi } from "./src/index";

const calNamespace = "element-click";
function App() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        embedJsUrl: "http://localhost:3000/embed/embed.js",
        namespace: calNamespace,
      });
      cal("ui", { styles: { branding: { brandColor: "#000000" } }, hideEventTypeDetails: false });
    })();
  }, []);
  return (
    // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
    $$$
  );
}

ReactDom.render(<App />, document.getElementById("root"));
