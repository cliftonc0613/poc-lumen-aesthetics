// FROZEN: site.json schema v1.
// Changes after Phase 0 require a v2 bump and migration plan for existing prospects.

import { z } from "zod";

export const HexColor = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/, "Must be 6-digit hex like #1A2B3C");

export const LayoutVariant = z.enum([
  "classic",
  "bold-split",
  "editorial",
  "service-first",
  "storyteller",
]);
export type LayoutVariant = z.infer<typeof LayoutVariant>;

// MUST match keys in lib/fonts.ts FONT_REGISTRY exactly.
export const FontName = z.enum([
  "Inter",
  "Playfair Display",
  "Fraunces",
  "Cormorant Garamond",
  "Montserrat",
  "DM Serif Display",
  "Source Sans 3",
  "Nunito",
  "DM Sans",
  "Lora",
]);
export type FontName = z.infer<typeof FontName>;

export const SiteJsonSchema = z.object({
  schemaVersion: z.literal(1),
  layoutVariant: LayoutVariant,

  brand: z.object({
    name: z.string().min(1).max(60),
    tagline: z.string().max(120).optional(),
    colors: z.object({
      primary: HexColor,
      secondary: HexColor,
      accent: HexColor,
      onPrimary: HexColor.default("#FFFFFF"),
      onSecondary: HexColor.default("#FFFFFF"),
    }),
    fonts: z.object({
      heading: FontName,
      body: FontName,
    }),
    logoUrl: z.string().url().optional(),
  }),

  content: z.object({
    hero: z.object({
      headline: z.string().min(1).max(80), // What the character wants
      problem: z.string().max(200).optional(), // External problem they face
      sub: z.string().max(180), // Empathy bridge / guide intro
      cta: z.object({
        label: z.string().min(1).max(30),
        href: z.string(),
      }),
      transitionCta: z
        .object({
          label: z.string().min(1).max(30),
          href: z.string(),
        })
        .optional(), // e.g. "See How It Works" -> #plan
      image: z
        .object({
          src: z.string().url(),
          alt: z.string().min(1).max(120),
        })
        .optional(),
    }),
    services: z
      .array(
        z.object({
          name: z.string().min(1).max(60),
          description: z.string().max(200),
          price: z.string().max(30).optional(),
          icon: z.string().optional(),
        })
      )
      .min(2)
      .max(8),
    guide: z.object({
      headline: z.string().max(80), // e.g. "We Know How Frustrating This Can Be"
      empathy: z.string().max(300), // "We understand what it's like when..."
      authority: z.string().max(300), // "That's why we've helped 200+ businesses..."
      body: z.string().min(50).max(600).optional(), // longer brand story (optional)
    }),
    plan: z
      .object({
        headline: z.string().max(80).default("Here's How It Works"),
        steps: z.tuple([
          z.object({
            title: z.string().min(1).max(60),
            description: z.string().max(200),
          }),
          z.object({
            title: z.string().min(1).max(60),
            description: z.string().max(200),
          }),
          z.object({
            title: z.string().min(1).max(60),
            description: z.string().max(200),
          }),
        ]),
      })
      .optional(),
    stakes: z
      .object({
        headline: z.string().max(80).optional(),
        body: z.string().min(20).max(300),
      })
      .optional(),
    successOutcomes: z
      .object({
        headline: z.string().max(80),
        outcomes: z.array(z.string().max(100)).min(2).max(6),
      })
      .optional(),
    testimonials: z
      .array(
        z.object({
          quote: z.string().min(10).max(280),
          author: z.string().min(1).max(60),
          role: z.string().max(60).optional(),
        })
      )
      .max(6)
      .default([]),
    contact: z.object({
      phone: z.string().optional(),
      email: z.string().email().optional(),
      address: z.string().max(200).optional(),
      hours: z.string().max(200).optional(),
      businessType: z.string().default("LocalBusiness"),
      latitude: z.number().optional(),
      longitude: z.number().optional(),
    }),
    seo: z
      .object({
        title: z.string().max(60),
        description: z.string().max(155),
      })
      .optional(),
  }),
});

export type SiteJson = z.infer<typeof SiteJsonSchema>;
