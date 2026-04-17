import type { SiteJson } from "@/lib/schema";

export type PlanVariant = "numbered" | "cards" | "horizontal";

type PlanProps = {
  variant?: PlanVariant;
  content: NonNullable<SiteJson["content"]["plan"]>;
};

export function Plan({ variant = "numbered", content }: PlanProps) {
  const steps = content.steps;

  if (variant === "cards") {
    return (
      <section id="plan" aria-labelledby="plan-heading" className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 id="plan-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">
          {content.headline}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="rounded-lg border border-neutral-200 p-6 md:p-8 text-center">
              <div className="w-10 h-10 rounded-full bg-[var(--color-brand-primary)] text-[var(--color-brand-on-primary)] flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {i + 1}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "horizontal") {
    return (
      <section id="plan" aria-labelledby="plan-heading" className="px-6 py-16 md:py-20 max-w-5xl mx-auto">
        <h2 id="plan-heading" className="font-heading text-3xl md:text-4xl mb-10 text-center tracking-tight">
          {content.headline}
        </h2>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex md:flex-col items-start md:items-center flex-1 gap-4 md:gap-3 md:text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-4 left-1/2 w-full h-px bg-[var(--color-brand-accent)] z-0" aria-hidden />
              )}
              <div className="relative z-10 w-9 h-9 rounded-full bg-[var(--color-brand-accent)] flex items-center justify-center font-bold text-sm flex-shrink-0 text-white">
                {i + 1}
              </div>
              <div className="md:px-4">
                <h3 className="font-heading text-base font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // "numbered" (default)
  return (
    <section id="plan" aria-labelledby="plan-heading" className="px-6 py-16 md:py-24 max-w-4xl mx-auto">
      <h2 id="plan-heading" className="font-heading text-3xl md:text-4xl mb-10 tracking-tight">
        {content.headline}
      </h2>
      <div className="space-y-8">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-6 items-start">
            <span className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-[var(--color-brand-primary)] text-[var(--color-brand-primary)] flex items-center justify-center font-bold text-lg">
              {i + 1}
            </span>
            <div>
              <h3 className="font-heading text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-neutral-700 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
