import type { SiteJson } from "@/lib/schema";

export type ServicesVariant = "grid-3" | "grid-2" | "list" | "hero-grid";

type ServicesProps = {
  variant?: ServicesVariant;
  content: SiteJson["content"]["services"];
  headline?: string;
};

export function Services({ variant = "grid-3", content, headline = "Services" }: ServicesProps) {
  if (variant === "hero-grid") return null;

  const gridCols = variant === "grid-3" ? "md:grid-cols-3" : variant === "grid-2" ? "md:grid-cols-2" : "";

  if (variant === "list") {
    return (
      <section id="services" aria-labelledby="services-heading" className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
        <h2 id="services-heading" className="font-heading text-3xl md:text-4xl mb-10 tracking-tight">{headline}</h2>
        <div className="space-y-8">
          {content.map((svc, i) => (
            <div key={i} className="border-t border-neutral-200 pt-8 grid md:grid-cols-[1fr_2fr] gap-4">
              <div>
                <h3 className="font-heading text-xl font-semibold">{svc.name}</h3>
                {svc.price && <p className="text-sm text-neutral-500 mt-1">{svc.price}</p>}
              </div>
              <p className="text-neutral-700 leading-relaxed">{svc.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="services" aria-labelledby="services-heading" className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 id="services-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">{headline}</h2>
      <div className={`grid ${gridCols} gap-6 md:gap-8`}>
        {content.map((svc, i) => (
          <div key={i} className="border border-neutral-200 rounded-lg p-6 md:p-8 hover:shadow-md transition">
            <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">{svc.name}</h3>
            <p className="text-neutral-700 leading-relaxed">{svc.description}</p>
            {svc.price && <p className="mt-4 text-sm font-semibold text-neutral-800">{svc.price}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
