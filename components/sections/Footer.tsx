import type { SiteJson } from "@/lib/schema";

type FooterProps = {
  brandName: string;
  contact: SiteJson["content"]["contact"];
};

export function Footer({ brandName, contact }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neutral-200 py-8 px-6 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-600">
        <p>© {year} {brandName}. All rights reserved.</p>
        {(contact.phone || contact.email) && (
          <p className="flex gap-4">
            {contact.phone && <span>{contact.phone}</span>}
            {contact.email && <a href={`mailto:${contact.email}`} className="hover:underline">{contact.email}</a>}
          </p>
        )}
      </div>
    </footer>
  );
}
