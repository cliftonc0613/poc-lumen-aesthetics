import type { SiteJson } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Guide } from "@/components/sections/Guide";
import { Services } from "@/components/sections/Services";
import { SuccessOutcomes } from "@/components/sections/SuccessOutcomes";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// LayoutStoryteller — long-form, image-led.
// Target prospects: nonprofits, therapists, artisans, yoga studios, community programs.
// Tone: emotional, narrative, mission-driven.
// Section order: Hero(full-bleed) -> Guide(split, story-first) -> Testimonials -> Services -> SuccessOutcomes -> Contact -> Footer
// NOTE: Guide comes BEFORE Services — story establishes who-we-are before what-we-do.
export function LayoutStoryteller({ site }: { site: SiteJson }) {
  const { content, brand } = site;
  return (
    <main>
      <Hero
        variant="full-bleed"
        content={content.hero}
        brandName={brand.name}
        services={content.services}
      />

      {/* Story-first: guide comes before services */}
      <Guide variant="split" content={content.guide} />

      {/* Single pull-quote on neutral-50 for emotional beat */}
      <div className="bg-neutral-50">
        <Testimonials variant="single-pull" content={content.testimonials} />
      </div>

      <Services variant="list" content={content.services} />

      {content.successOutcomes && <SuccessOutcomes content={content.successOutcomes} />}

      <Contact variant="stacked" content={content.contact} brandName={brand.name} />

      <Footer brandName={brand.name} contact={content.contact} />
    </main>
  );
}
