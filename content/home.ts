export type CredibilityPartner = {
  name: string;
  abbr: string;
};

export const credibilityPartners: readonly CredibilityPartner[] = [
  { name: "Northwind Labs", abbr: "NW" },
  { name: "Velvet Commerce", abbr: "VC" },
  { name: "Arcadia Fund", abbr: "AF" },
  { name: "Studio Meridian", abbr: "SM" },
  { name: "Pulse Health", abbr: "PH" },
  { name: "Cinder Block", abbr: "CB" },
] as const;

/** First four capability `id`s from services — used on home snapshot */
export const homeCapabilityIds = [
  "strategy",
  "design",
  "engineering",
  "motion",
] as const;

export const principleQuote = {
  body:
    "Elegance is not decoration — it is the absence of noise between the user and the outcome.",
  attribution: "KAN Agency",
} as const;
