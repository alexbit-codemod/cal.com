export const currencyOptions = [
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "USD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "AUD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "BRL" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CAD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CNY" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CZK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "DKK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "EUR" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "HKD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "HUF" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "ILS" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "JPY" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "MYR" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "MXN" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "TWD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "NZD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "NOK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "PHP" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "PLN" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "GBP" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "RUB" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "SGD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "SEK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CHF" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "THB" },
] as const;

type CurrencyCode = (typeof currencyOptions)[number]["value"];

export const currencySymbols: Record<CurrencyCode, string> = {
  USD: "$",
  AUD: "$",
  BRL: "R$",
  CAD: "$",
  CNY: "¥",
  CZK: "Kč",
  DKK: "kr",
  EUR: "€",
  HKD: "$",
  HUF: "Ft",
  ILS: "₪",
  JPY: "¥",
  MYR: "RM",
  MXN: "$",
  TWD: "$",
  NZD: "$",
  NOK: "kr",
  PHP: "₱",
  PLN: "zł",
  GBP: "£",
  RUB: "₽",
  SGD: "$",
  SEK: "kr",
  CHF: "Fr",
  THB: "฿",
};

export function isAcceptedCurrencyCode(currencyCode: string): currencyCode is CurrencyCode {
  return Object.keys(currencySymbols).includes(currencyCode);
}
