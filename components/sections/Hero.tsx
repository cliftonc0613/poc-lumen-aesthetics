import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { SiteJson } from "@/lib/schema";

export type HeroVariant = "centered" | "split-left" | "editorial" | "service-grid" | "full-bleed";

type HeroProps = {
  variant?: HeroVariant;
  content: SiteJson["content"]["hero"];
  brandName: string;
  services?: SiteJson["content"]["services"];
};

export function Hero({ variant = "centered", content, brandName, services }: HeroProps) {
  if (variant === "split-left") {
    return (
      <section className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh] px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="space-y-6">
          {content.problem && (
            <p className="text-sm md:text-base font-medium text-neutral-700 uppercase tracking-wide">
              {content.problem}
            </p>
          )}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
            {content.headline}
          </h1>
          <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">{content.sub}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link
              href={content.cta.href}
              className="inline-block bg-[var(--color-brand-primary)] text-[var(--color-brand-on-primary)] px-7 py-3.5 rounded-md font-semibold hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2"
            >
              {content.cta.label}
            </Link>
            {content.transitionCta && (
              <Link
                href={content.transitionCta.href}
                className="inline-block border border-current px-7 py-3.5 rounded-md font-semibold hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2"
              >
                {content.transitionCta.label}
              </Link>
            )}
          </div>
        </div>
        {content.image ? (
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image src={content.image.src} alt={content.image.alt} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        ) : (
          <div className="aspect-[4/5] rounded-lg" style={{ background: `linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))` }} aria-hidden />
        )}
      </section>
    );
  }

  if (variant === "editorial") {
    return (
      <section className="px-6 py-20 md:py-32 max-w-5xl mx-auto">
        <p className="uppercase tracking-widest text-xs mb-6 text-neutral-500">{brandName}</p>
        {content.problem && (
          <p className="text-sm md:text-base font-medium text-neutral-700 uppercase tracking-wide mb-4">
            {content.problem}
          </p>
        )}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8 max-w-4xl">
          {content.headline}
        </h1>
        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
          <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed font-heading">{content.sub}</p>
          <div className="flex flex-col gap-4">
            <Link href={content.cta.href} className="inline-block border-b-2 border-[var(--color-brand-primary)] pb-1 text-lg font-semibold hover:opacity-70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]">
              {content.cta.label} →
            </Link>
            {content.transitionCta && (
              <Link href={content.transitionCta.href} className="inline-block text-base text-neutral-600 hover:text-[var(--color-brand-primary)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)]">
                {content.transitionCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "service-grid") {
    const heroServices = (services ?? []).slice(0, 6);
    return (
      <section className="px-6 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          {content.problem && (
            <p className="text-sm md:text-base font-medium text-neutral-700 uppercase tracking-wide mb-3">
              {content.problem}
            </p>
          )}
          <h1 className="font-heading text-3xl md:text-5xl leading-tight tracking-tight mb-4">{content.headline}</h1>
          <p className="text-base md:text-lg text-neutral-700">{content.sub}</p>
        </div>
        <div className={cn("grid gap-4 md:gap-6", "md:grid-cols-3")}>
          {heroServices.map((svc, i) => (
            <div key={i} className="border border-neutral-200 rounded-lg p-6 hover:border-[var(--color-brand-primary)] transition">
              <h2 className="font-heading text-xl font-semibold mb-2">{svc.name}</h2>
              <p className="text-sm text-neutral-600">{svc.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3 items-center">
          <Link href={content.cta.href} className="inline-block bg-[var(--color-brand-primary)] text-[var(--color-brand-on-primary)] px-6 py-3 rounded-md font-semibold hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
            {content.cta.label}
          </Link>
          {content.transitionCta && (
            <Link href={content.transitionCta.href} className="inline-block border border-current px-6 py-3 rounded-md font-semibold hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
              {content.transitionCta.label}
            </Link>
          )}
        </div>
      </section>
    );
  }

  if (variant === "full-bleed") {
    // Intentionally skips `problem` — too much text on a photo.
    return (
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {content.image ? (
          <Image src={content.image.src} alt={content.image.alt} fill priority sizes="100vw" className="object-cover" />
        ) : (
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, var(--color-brand-primary) 0%, var(--color-brand-secondary) 100%)` }} aria-hidden />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden />
        <div className="relative z-10 px-6 md:px-12 pb-16 md:pb-24 max-w-5xl text-white">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">{content.headline}</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-white/90">{content.sub}</p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link href={content.cta.href} className="inline-block bg-white text-[var(--color-brand-primary)] px-7 py-3.5 rounded-md font-semibold hover:bg-neutral-100 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
              {content.cta.label}
            </Link>
            {content.transitionCta && (
              <Link href={content.transitionCta.href} className="inline-block border border-white/70 text-white px-7 py-3.5 rounded-md font-semibold hover:bg-white/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
                {content.transitionCta.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    );
  }

  // "centered" (default)
  return (
    <section className="px-6 py-20 md:py-28 max-w-4xl mx-auto text-center">
      {content.problem && (
        <p className="text-sm md:text-base font-medium text-neutral-700 uppercase tracking-wide mb-4">
          {content.problem}
        </p>
      )}
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">{content.headline}</h1>
      <p className="text-lg md:text-xl text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed">{content.sub}</p>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        <Link href={content.cta.href} className="inline-block bg-[var(--color-brand-primary)] text-[var(--color-brand-on-primary)] px-8 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
          {content.cta.label}
        </Link>
        {content.transitionCta && (
          <Link href={content.transitionCta.href} className="inline-block border border-current px-8 py-4 rounded-md font-semibold text-lg hover:bg-neutral-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-accent)] focus-visible:ring-offset-2">
            {content.transitionCta.label}
          </Link>
        )}
      </div>
    </section>
  );
}
