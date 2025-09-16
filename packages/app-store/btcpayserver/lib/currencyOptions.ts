export const currencyOptions = [
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "BTC", unit: "SATS" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "USD", unit: "USD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "EUR", unit: "EUR" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "JPY", unit: "JPY" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CNY", unit: "CNY" }, 
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "GBP", unit: "GBP" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "AED", unit: "AED" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "ZAR", unit: "ZAR" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "HKD", unit: "HKD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "BRL", unit: "BRL" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "AUD", unit: "AUD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CAD", unit: "CAD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CZK", unit: "CZK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "DKK", unit: "DKK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "NZD", unit: "NZD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "MYR", unit: "MYR" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "PHP", unit: "PHP" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "CHF", unit: "CHF" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "NOK", unit: "NOK" }, 
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "THB", unit: "THB" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "SEK", unit: "SEK" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "SGD", unit: "SGD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "PLN", unit: "PLN" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "TWD", unit: "TWD" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "MXN", unit: "MXN" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "ILS", unit: "ILS" },
  { label: // To safely replace this hard-coded string with a translation key  talk to us to get access to our i18n pro codemods. https://cal.com/codemod
  $$$
  , value: "NGN", unit: "NGN" }
];


const zeroDecimalCurrencies = ["SATS", "BTC", "JPY"];

export const convertToSmallestCurrencyUnit = (amount: number, currency: string) => {
  if (zeroDecimalCurrencies.includes(currency.toUpperCase())) {
    return amount;
  }
  return Math.round(amount * 100);
};

export const convertFromSmallestToPresentableCurrencyUnit = (amount: number, currency: string) => {
  if (zeroDecimalCurrencies.includes(currency.toUpperCase())) {
    return amount;
  }
  return amount / 100;
};