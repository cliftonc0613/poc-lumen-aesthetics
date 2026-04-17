import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content";
import { FONT_REGISTRY, type FontKey } from "@/lib/fonts";

const headingFont = FONT_REGISTRY[site.brand.fonts.heading as FontKey] ?? FONT_REGISTRY["Inter"];
const bodyFont = FONT_REGISTRY[site.brand.fonts.body as FontKey] ?? FONT_REGISTRY["Inter"];

// Only preload the 2 fonts this site actually uses — loading all 10 adds ~360 KB of font data
const usedFontVariables = Array.from(new Set([headingFont, bodyFont].map(f => f.variable))).join(" ");

export const metadata: Metadata = {
  title: site.content.seo?.title ?? `${site.brand.name}${site.brand.tagline ? ` — ${site.brand.tagline}` : ""}`.slice(0, 60),
  description: site.content.seo?.description ?? site.content.hero.sub.slice(0, 155),
  openGraph: {
    title: site.content.seo?.title ?? site.brand.name,
    description: site.content.seo?.description ?? site.content.hero.sub,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={usedFontVariables}
      style={{
        ["--color-brand-primary" as string]: site.brand.colors.primary,
        ["--color-brand-secondary" as string]: site.brand.colors.secondary,
        ["--color-brand-accent" as string]: site.brand.colors.accent,
        ["--color-brand-on-primary" as string]: site.brand.colors.onPrimary,
        ["--color-brand-on-secondary" as string]: site.brand.colors.onSecondary,
        ["--font-heading" as string]: `var(${headingFont.variable})`,
        ["--font-body" as string]: `var(${bodyFont.variable})`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
