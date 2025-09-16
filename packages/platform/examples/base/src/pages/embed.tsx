import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Embed(props: { calUsername: string; calEmail: string }) {
  return (
    <main className={`flex ${inter.className} text-default flex flex-col`}>
      <Navbar username={props.calUsername} />
      <div>
        // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
        $$$
      </div>
    </main>
  );
}
