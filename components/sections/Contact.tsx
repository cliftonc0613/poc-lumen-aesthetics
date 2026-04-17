import type { SiteJson } from "@/lib/schema";
import { LocalBusinessJsonLd } from "./LocalBusinessJsonLd";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export type ContactVariant = "stacked" | "columns";

type ContactProps = {
  variant?: ContactVariant;
  content: SiteJson["content"]["contact"];
  brandName: string;
};

export function Contact({ variant = "stacked", content, brandName }: ContactProps) {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <h2 id="contact-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">Get in Touch</h2>
      <div className={variant === "columns" ? "grid md:grid-cols-2 gap-8 items-start" : "max-w-xl mx-auto space-y-4"}>
        {content.phone && (
          <a href={`tel:${content.phone.replace(/[^\d+]/g, "")}`} className="flex items-start gap-3 p-4 rounded-md hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]">
            <Phone className="w-5 h-5 mt-0.5 text-[var(--color-brand-primary)]" aria-hidden />
            <div><p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Phone</p><p className="font-semibold">{content.phone}</p></div>
          </a>
        )}
        {content.email && (
          <a href={`mailto:${content.email}`} className="flex items-start gap-3 p-4 rounded-md hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]">
            <Mail className="w-5 h-5 mt-0.5 text-[var(--color-brand-primary)]" aria-hidden />
            <div><p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Email</p><p className="font-semibold">{content.email}</p></div>
          </a>
        )}
        {content.address && (
          <div className="flex items-start gap-3 p-4">
            <MapPin className="w-5 h-5 mt-0.5 text-[var(--color-brand-primary)]" aria-hidden />
            <div><p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Address</p><p className="font-semibold">{content.address}</p></div>
          </div>
        )}
        {content.hours && (
          <div className="flex items-start gap-3 p-4">
            <Clock className="w-5 h-5 mt-0.5 text-[var(--color-brand-primary)]" aria-hidden />
            <div><p className="text-xs uppercase tracking-wider text-neutral-500 mb-0.5">Hours</p><p className="font-semibold">{content.hours}</p></div>
          </div>
        )}
      </div>
      <LocalBusinessJsonLd brandName={brandName} contact={content} />
    </section>
  );
}
