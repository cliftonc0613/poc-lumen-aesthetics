import type { SiteJson } from "@/lib/schema";
import { Hero } from "@/components/sections/Hero";
import { Guide } from "@/components/sections/Guide";
import { Plan } from "@/components/sections/Plan";
import { Stakes } from "@/components/sections/Stakes";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

// LayoutServiceFirst — services grid IS the hero.
// Target prospects: med spas, salons, auto detailers, barbers, nail studios, dental practices.
// Tone: direct, choose-what-you-need, menu-like.
// Section order: Hero(service-grid) -> Testimonials -> Guide -> Plan -> Stakes -> Contact -> Footer
// NOTE: No standalone Services section — Hero's service-grid variant already renders services.
export function LayoutServiceFirst({ site }: { site: SiteJson }) {
  const { content, brand } = site;
  return (
    <main>
      <Hero
        variant="service-grid"
        content={content.hero}
        brandName={brand.name}
        services={content.services}
      />

      {/* Testimonials carousel on neutral-50 for subtle break */}
      <div className="bg-neutral-50">
        <Testimonials variant="carousel-css" content={content.testimonials} />
      </div>

      <Guide variant="compact" content={content.guide} />

      {content.plan && <Plan variant="horizontal" content={content.plan} />}

      {content.stakes && <Stakes content={content.stakes} />}

      <Contact variant="columns" content={content.contact} brandName={brand.name} />

      <Footer brandName={brand.name} contact={content.contact} />
    </main>
  );
}
