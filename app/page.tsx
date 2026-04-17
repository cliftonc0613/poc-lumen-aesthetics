import type { ComponentType } from "react";
import { site } from "@/lib/content";
import type { SiteJson } from "@/lib/schema";
import { LayoutClassic } from "@/components/layouts/LayoutClassic";
import { LayoutBoldSplit } from "@/components/layouts/LayoutBoldSplit";
import { LayoutEditorial } from "@/components/layouts/LayoutEditorial";
import { LayoutServiceFirst } from "@/components/layouts/LayoutServiceFirst";
import { LayoutStoryteller } from "@/components/layouts/LayoutStoryteller";

type LayoutProps = { site: SiteJson };

// Typed dispatch table — TypeScript enforces that every LayoutVariant
// enum value has a corresponding layout component. Add a new variant
// to schema.ts and this record errors until the new layout is wired.
const VARIANTS: Record<SiteJson["layoutVariant"], ComponentType<LayoutProps>> = {
  classic: LayoutClassic,
  "bold-split": LayoutBoldSplit,
  editorial: LayoutEditorial,
  "service-first": LayoutServiceFirst,
  storyteller: LayoutStoryteller,
};

export default function Home() {
  const Layout = VARIANTS[site.layoutVariant] ?? LayoutClassic;
  return <Layout site={site} />;
}
