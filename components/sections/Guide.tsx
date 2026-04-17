import type { SiteJson } from "@/lib/schema";

export type GuideVariant = "split" | "centered" | "compact";

type GuideProps = {
  variant?: GuideVariant;
  content: SiteJson["content"]["guide"];
};

export function Guide({ variant = "split", content }: GuideProps) {
  if (variant === "centered") {
    return (
      <section id="about" aria-labelledby="guide-heading" className="px-6 py-16 md:py-24 max-w-3xl mx-auto text-center">
        <h2 id="guide-heading" className="font-heading text-3xl md:text-4xl mb-6 tracking-tight">
          {content.headline}
        </h2>
        <p className="text-lg leading-relaxed text-neutral-700 mb-4">{content.empathy}</p>
        <p className="text-base leading-relaxed text-neutral-700 font-medium">{content.authority}</p>
        {content.body && <p className="mt-4 text-base leading-relaxed text-neutral-600">{content.body}</p>}
      </section>
    );
  }

  if (variant === "compact") {
    return (
      <section id="about" aria-labelledby="guide-heading" className="px-6 py-12 md:py-16 max-w-4xl mx-auto">
        <h2 id="guide-heading" className="font-heading text-2xl md:text-3xl mb-4">{content.headline}</h2>
        <p className="text-neutral-700 leading-relaxed mb-2">{content.empathy}</p>
        <p className="text-sm font-medium text-neutral-700">{content.authority}</p>
      </section>
    );
  }

  // "split" (default) — empathy left, authority right
  return (
    <section id="about" aria-labelledby="guide-heading" className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 id="guide-heading" className="font-heading text-3xl md:text-4xl mb-6 tracking-tight">
            {content.headline}
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">{content.empathy}</p>
        </div>
        <div className="md:pt-2">
          <p className="text-base leading-relaxed text-neutral-700 border-l-4 border-[var(--color-brand-accent)] pl-5 italic">
            {content.authority}
          </p>
          {content.body && <p className="mt-6 text-base leading-relaxed text-neutral-600">{content.body}</p>}
        </div>
      </div>
    </section>
  );
}
