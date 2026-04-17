import rawSite from "@/site.json";
import { SiteJsonSchema, type SiteJson } from "./schema";

export const site: SiteJson = SiteJsonSchema.parse(rawSite);
