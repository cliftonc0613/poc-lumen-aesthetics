import type { SiteJson } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Guide } from "@/components/sections/Guide";
import { Plan } from "@/components/sections/Plan";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// LayoutClassic — centered professional.
// Target prospects: law firms, clinics, accountants, financial advisors, consultants.
// Tone: trustworthy, symmetrical, conservative.
// Section order: Hero -> Guide -> Plan -> Services -> Testimonials -> Contact -> Footer
export function LayoutClassic({ site }: { site: SiteJson }) {
  const { content, brand } = site;
  return (
    <main>
      <Hero
        variant="centered"
        content={content.hero}
        brandName={brand.name}
        services={content.services}
      />

      {/* Guide on light-bg wrapper for subtle vertical rhythm break */}
      <div className="bg-neutral-50">
        <Guide variant="centered" content={content.guide} />
      </div>

      {content.plan && <Plan variant="numbered" content={content.plan} />}

      <Services variant="grid-3" content={content.services} />

      <Testimonials variant="grid" content={content.testimonials} />

      <Contact variant="stacked" content={content.contact} brandName={brand.name} />

      <Footer brandName={brand.name} contact={content.contact} />
    </main>
  );
}
