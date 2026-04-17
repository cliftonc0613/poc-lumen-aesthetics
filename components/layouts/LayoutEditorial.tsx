import type { SiteJson } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Guide } from "@/components/sections/Guide";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// LayoutEditorial — magazine feel.
// Target prospects: boutique shops, photographers, wedding planners, interior designers, artisans.
// Tone: quiet, refined, story-forward.
// Section order: Hero -> Guide -> Services -> Testimonials -> Contact -> Footer
// Deliberately NO Plan section — preserves editorial minimalism.
export function LayoutEditorial({ site }: { site: SiteJson }) {
  const { content, brand } = site;
  return (
    <main>
      {/* Hero on neutral-50 to warm the page entry */}
      <div className="bg-neutral-50">
        <Hero
          variant="editorial"
          content={content.hero}
          brandName={brand.name}
          services={content.services}
        />
      </div>

      {/* Story first, on crisp white */}
      <div className="bg-white">
        <Guide variant="split" content={content.guide} />
      </div>

      <Services variant="list" content={content.services} />

      {/* Testimonial pull-quote on white for editorial restraint */}
      <div className="bg-white">
        <Testimonials variant="single-pull" content={content.testimonials} />
      </div>

      <Contact variant="stacked" content={content.contact} brandName={brand.name} />

      <Footer brandName={brand.name} contact={content.contact} />
    </main>
  );
}
