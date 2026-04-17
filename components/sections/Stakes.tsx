import type { SiteJson } from "@/lib/schema";

type StakesProps = {
  content: NonNullable<SiteJson["content"]["stakes"]>;
};

export function Stakes({ content }: StakesProps) {
  return (
    <section aria-labelledby={content.headline ? "stakes-heading" : undefined} className="px-6 py-12 md:py-16 bg-neutral-950 text-white">
      <div className="max-w-3xl mx-auto text-center">
        {content.headline && (
          <h2 id="stakes-heading" className="font-heading text-2xl md:text-3xl mb-4 tracking-tight">
            {content.headline}
          </h2>
        )}
        <p className="text-lg text-neutral-300 leading-relaxed">{content.body}</p>
      </div>
    </section>
  );
}
