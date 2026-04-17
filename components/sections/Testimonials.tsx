import type { SiteJson } from "@/lib/schema";

export type TestimonialsVariant = "grid" | "carousel-css" | "single-pull";

type TestimonialsProps = {
  variant?: TestimonialsVariant;
  content: SiteJson["content"]["testimonials"];
};

export function Testimonials({ variant = "grid", content }: TestimonialsProps) {
  if (content.length === 0) return null;

  if (variant === "single-pull") {
    const t = content[0];
    return (
      <section aria-labelledby="testimonial-heading" className="px-6 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 id="testimonial-heading" className="sr-only">What our clients say</h2>
        <blockquote className="font-heading text-2xl md:text-4xl leading-snug tracking-tight">&ldquo;{t.quote}&rdquo;</blockquote>
        <cite className="block mt-8 text-sm not-italic text-neutral-600">
          — {t.author}{t.role && <span className="text-neutral-400">, {t.role}</span>}
        </cite>
      </section>
    );
  }

  if (variant === "carousel-css") {
    return (
      <section aria-labelledby="testimonials-heading" className="py-16 md:py-24 max-w-7xl mx-auto">
        <h2 id="testimonials-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center px-6">What Our Clients Say</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 pb-4">
          {content.map((t, i) => (
            <blockquote key={i} className="snap-center flex-shrink-0 w-[85%] md:w-[45%] lg:w-[30%] border border-neutral-200 rounded-lg p-6 bg-white">
              <p className="text-lg leading-relaxed text-neutral-700 mb-4">&ldquo;{t.quote}&rdquo;</p>
              <cite className="text-sm not-italic text-neutral-600">
                — {t.author}{t.role && <span className="text-neutral-400">, {t.role}</span>}
              </cite>
            </blockquote>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="testimonials-heading" className="px-6 py-16 md:py-24 max-w-7xl mx-auto">
      <h2 id="testimonials-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {content.map((t, i) => (
          <blockquote key={i} className="border border-neutral-200 rounded-lg p-6 bg-white">
            <p className="text-neutral-700 leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
            <cite className="text-sm not-italic text-neutral-600">
              — {t.author}{t.role && <span className="text-neutral-400">, {t.role}</span>}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
