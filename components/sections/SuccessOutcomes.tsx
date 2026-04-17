import type { SiteJson } from "@/lib/schema";

type SuccessOutcomesProps = {
  content: NonNullable<SiteJson["content"]["successOutcomes"]>;
};

export function SuccessOutcomes({ content }: SuccessOutcomesProps) {
  return (
    <section aria-labelledby="success-heading" className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <h2 id="success-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">
        {content.headline}
      </h2>
      <ul className="space-y-4">
        {content.outcomes.map((outcome, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center mt-0.5" aria-hidden>
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <p className="text-lg text-neutral-700 leading-relaxed">{outcome}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
