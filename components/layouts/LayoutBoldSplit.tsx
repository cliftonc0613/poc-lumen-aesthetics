import type { SiteJson } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Guide } from "@/components/sections/Guide";
import { Plan } from "@/components/sections/Plan";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// LayoutBoldSplit — asymmetric energy.
// Target prospects: restaurants, fitness studios, creative agencies, bars, auto shops.
// Tone: energetic, confident, modern.
// Section order: Hero -> Services -> Testimonials band -> Guide -> Plan -> Contact -> Footer
export function LayoutBoldSplit({ site }: { site: SiteJson }) {
  const { content, brand } = site;
  return (
    <main>
      <Hero
        variant="split-left"
        content={content.hero}
        brandName={brand.name}
        services={content.services}
      />

      <Services variant="grid-2" content={content.services} />

      {/* Colored band: testimonials on brand-primary for high-contrast break */}
      <div
        className="bg-[var(--color-brand-primary)] text-[var(--color-brand-on-primary)]"
        style={{ color: "var(--color-brand-on-primary)" }}
      >
        <Testimonials variant="carousel-css" content={content.testimonials} />
      </div>

      <Guide variant="split" content={content.guide} />

      {content.plan && <Plan variant="cards" content={content.plan} />}

      <Contact variant="columns" content={content.contact} brandName={brand.name} />

      <Footer brandName={brand.name} contact={content.contact} />
    </main>
  );
}
