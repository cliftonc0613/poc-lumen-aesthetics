import type { SiteJson } from "@/lib/schema";

type Props = {
  brandName: string;
  contact: SiteJson["content"]["contact"];
};

// Renders inline JSON-LD in the App Router. Avoids next/script since
// `beforeInteractive` is ignored outside pages/_document.js, and JSON-LD
// is a data block (not executable code) that search engines read statically.
export function LocalBusinessJsonLd({ brandName, contact }: Props) {
  const jsonLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": contact.businessType || "LocalBusiness",
    name: brandName,
  };
  if (contact.phone) jsonLd.telephone = contact.phone;
  if (contact.email) jsonLd.email = contact.email;
  if (contact.address) jsonLd.address = contact.address;
  if (contact.hours) jsonLd.openingHours = contact.hours;
  if (contact.latitude !== undefined && contact.longitude !== undefined) {
    jsonLd.geo = { "@type": "GeoCoordinates", latitude: contact.latitude, longitude: contact.longitude };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
