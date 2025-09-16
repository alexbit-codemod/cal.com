import Link from "next/link";

const LINKS = [
  {
    title: "Routing Funnel",
    href: "/settings/admin/playground/routing-funnel",
  },
  {
    title: "Bookings by Hour",
    href: "/settings/admin/playground/bookings-by-hour",
  },
];

export default function Page() {
  return (
    <div>
      // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
      $$$

      <ul className="mt-8">
        {LINKS.map((link) => (
          <li key={link.title}>
            <Link href={link.href} className="list-item list-disc font-medium underline">
              {link.title} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
