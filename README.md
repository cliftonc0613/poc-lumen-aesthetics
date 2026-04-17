# agent-site-template

The Rebel Alliance's Next.js site template. Every prospect site is generated from this repo via `POST /repos/{template}/generate`.

> **⚠️ Do not develop on this repo directly.** It is a GitHub Template. Every commit here propagates to every future prospect's generated repo. Use a fork or branch for template development.

## Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS v4** (CSS-first theme via `@theme`)
- **shadcn/ui** (Radix-backed components)
- **Zod** (site.json schema validation)
- **next/font/google** (self-hosted fonts from a 10-font allowlist)

## How It Works

Every site is driven by a single `site.json` file at the repo root. The template reads it at build time, validates it through `lib/schema.ts` (Zod), and dispatches to one of 5 layout variants based on `site.json.layoutVariant`.

```
site.json → lib/content.ts (Zod parse) → app/layout.tsx (brand vars) → app/page.tsx (variant dispatch) → <Layout>
```

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

Edit `site.json` and hot-reload will re-parse it.

## Customizing a Site

Edit only `site.json`. Do not edit component files unless you are developing the template itself.

### Layout Variants

Set `site.json.layoutVariant` to one of:

- `classic` — centered hero, stacked services grid (law firms, accountants, clinics)
- `bold-split` — asymmetric hero with side image (restaurants, fitness studios)
- `editorial` — magazine feel, serif-forward (boutique, photographer, wedding)
- `service-first` — services grid IS the hero (med spa, salon, detailer)
- `storyteller` — full-bleed hero image, story-led about (nonprofit, therapist, artisan)

### Fonts

Set `site.json.brand.fonts.heading` and `body` to one of the 10 allowlisted names. See `lib/fonts.ts` for the full list.

### Colors

Set `brand.colors.primary`, `secondary`, `accent`, `onPrimary`, `onSecondary` as 6-digit hex codes.

## Deployment (Manual — Phase 0 Rehearsal)

1. Fork or generate a repo from this template (GitHub: "Use this template").
2. Clone the forked repo.
3. Overwrite `site.json` with your real content.
4. Go to [vercel.com/new](https://vercel.com/new), import the repo.
5. Add a custom domain `<slug>-<suffix>.your-outreach-domain.com`.
6. Deploy.

## CI

Every push runs `.github/workflows/a11y.yml` — an axe-core WCAG 2.1 AA check. Violations fail the build.

Run locally: `npm run a11y:build-and-check`.

## Important: Marking as GitHub Template

After pushing this repo to GitHub for the first time, go to:

**Settings → General → scroll to "Template repository" → check the box.**

Without `is_template=true`, Chewie's `POST /repos/{owner}/{repo}/generate` returns 422 for every deploy. Verify:

```bash
gh api /repos/{YOUR_USERNAME}/agent-site-template --jq '.is_template'
# Must print: true
```

## Schema (Frozen v1)

See `lib/schema.ts`. Breaking changes require a v2 bump and a migration plan for existing prospects. Additive optional fields are safe.

## License

Private. For Rebel Alliance internal use.
