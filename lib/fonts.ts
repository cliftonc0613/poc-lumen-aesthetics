// FROZEN allowlist. Must match FontName enum in lib/schema.ts exactly.
import {
  Inter,
  Playfair_Display,
  Fraunces,
  Cormorant_Garamond,
  Montserrat,
  DM_Serif_Display,
  Source_Sans_3,
  Nunito,
  DM_Sans,
  Lora,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-fraunces" });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], display: "swap", weight: ["400", "600", "700"], variable: "--font-cormorant" });
const montserrat = Montserrat({ subsets: ["latin"], display: "swap", variable: "--font-montserrat" });
const dmSerifDisplay = DM_Serif_Display({ subsets: ["latin"], display: "swap", weight: "400", variable: "--font-dm-serif-display" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap", variable: "--font-source-sans" });
const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap", variable: "--font-dm-sans" });
const lora = Lora({ subsets: ["latin"], display: "swap", variable: "--font-lora" });

export const FONT_REGISTRY = {
  "Inter": inter,
  "Playfair Display": playfair,
  "Fraunces": fraunces,
  "Cormorant Garamond": cormorant,
  "Montserrat": montserrat,
  "DM Serif Display": dmSerifDisplay,
  "Source Sans 3": sourceSans,
  "Nunito": nunito,
  "DM Sans": dmSans,
  "Lora": lora,
} as const;

export type FontKey = keyof typeof FONT_REGISTRY;
export const FONT_ALLOWLIST: FontKey[] = Object.keys(FONT_REGISTRY) as FontKey[];
