import { Navbar } from "@/components/Navbar";
import { Inter, Poppins } from "next/font/google";

import { Connect, StripeConnect } from "@calcom/atoms";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export default function Home(props: { calUsername: string; calEmail: string }) {
  return (
    <main className={`flex min-h-screen flex-col ${inter.className} items-center justify-center`}>
      <Navbar username={props.calUsername} />
      <div
        className={` h-[100vh] w-full items-center justify-center gap-y-3  font-mono lg:flex ${inter.className} gap-16 `}>
        <div className="ml-32">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
          <div className="flex flex-row gap-4">
            <Connect.GoogleCalendar
              redir="http://localhost:4321/calendars"
              className="h-[40px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-center text-base font-semibold text-transparent text-white hover:bg-orange-700"
            />
            <Connect.OutlookCalendar
              isMultiCalendar={true}
              redir="http://localhost:4321/calendars"
              className="h-[40px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-center text-base font-semibold text-transparent text-white hover:bg-orange-700"
            />
            <Connect.AppleCalendar
              isMultiCalendar={true}
              className="h-[40px] bg-gradient-to-r from-[#8A2387] via-[#E94057] to-[#F27121] text-center text-base font-semibold text-transparent text-white hover:bg-orange-700"
            />
            <StripeConnect
              className="h-[40px] bg-gradient-to-r from-[#E94057] via-[#E94057] to-[#E94057] text-center text-base font-semibold text-transparent text-white hover:bg-orange-700"
              errorRedir="http://localhost:4321/availability"
              onCheckSuccess={() => {
                console.log("stripe account connected successfully".toLocaleUpperCase());
              }}
            />
          </div>
        </div>
        <div className="hidden lg:block">
          // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
          $$$
        </div>
      </div>
    </main>
  );
}
