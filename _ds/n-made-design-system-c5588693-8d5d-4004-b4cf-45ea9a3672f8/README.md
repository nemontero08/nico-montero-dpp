# NÓMADE — Design System

> A distributed hospitality network that transforms extraordinary natural locations into memorable destinations.

NÓMADE connects landowners, accommodation manufacturers, and travelers to create a consistent, premium hospitality experience rooted in **nature, design, and operational excellence**. It is *not* a real-estate company, a construction company, or a booking platform — it is a hospitality-first ecosystem of unique, nature-based destinations.

The visual identity lives in the world of **Aman Resorts, Habitas, Airbnb Luxe, Landscape Hotels, and Patagonia** — quiet luxury, warm minimalism, editorial layouts, cinematic storytelling. Never SaaS, never corporate, never construction.

---

## Sources

This system began **from a written brand brief**, and has since been reconciled against **four pieces of real brand collateral** the client provided (`uploads/1–4.jpeg`): two marketing one-pagers, a mobile-app screen map (8 screens), and a desktop web-app/dashboard map. No codebase or Figma file was attached, so component code is still an interpretation — but the **realized brand direction now overrides the brief where they differ** (see Type below). If a codebase or Figma exists, re-attach it and reconcile.

**What the collateral revealed (and changed):**
- **The logotype is an all-sans, wide-tracked geometric wordmark** (not a serif) with a distinctive three-bar "E". Recreated here with **Jost** (`--wordmark`); flag for the original vector.
- **Headlines in the realized brand are all-sans and light** (Vercel/Linear cleanliness), *not* the Playfair serif the brief specified. The system now defaults to **sans-first display (Manrope light)**, with serif and hybrid as switchable directions — see the Tweaks panel on the website kit.
- **Steel Blue** appears as a functional accent in the app ("Quiero invertir" / data) — added to the palette.
- **Two product surfaces exist that are not yet built**: a mobile app and a desktop web app/dashboard (registration wizards, NÓMADE-score gauge, financial projections, booking dashboard, unit marketplace, investor panel). Only the marketing website kit is built so far.

---

## Brand personality

Premium but approachable · Contemporary and timeless · Nature-inspired · Sophisticated · Editorial · Aspirational · Minimalist · Design-driven · Hospitality-first · Calm and trustworthy.

**Visitors should feel:** *“This is a premium hospitality brand. This feels credible and aspirational. This is bigger than a tiny-house project. This feels like the future of nature-based hospitality.”*

---

## CONTENT FUNDAMENTALS

How NÓMADE writes.

- **Voice:** Calm, confident, editorial. The brand speaks like a well-travelled host, not a salesperson. Emotional storytelling comes *before* conversion — set a scene, then invite.
- **Person:** Speaks to **“you”** ("Wake to the sound of the forest"), and refers to itself as **“we” / “NÓMADE”** sparingly. Avoid corporate "our solutions / our platform" language.
- **Casing:** Sentence case for body and most headlines. **All-caps, wide-tracked eyebrows** ("THE NETWORK", "STAY WITH US") are a signature — used as small overlines above headlines and as nav/section labels. Never all-caps for long strings.
- **The brand name** is set **NÓMADE** (accent on the Ó). Preserve the accent everywhere.
- **Sentence rhythm:** Short, declarative, unhurried. Fragments are welcome for atmosphere ("Golden hour. A wood-fired bath. Nothing on the schedule."). One idea per line in hero copy.
- **CTAs:** Few and intentional. Quiet verbs: *Discover · Explore · Stay · Reserve your nights · Begin the journey · View the destination.* Avoid urgency/marketing pressure ("Buy now", "Limited time", "Sign up free").
- **Numbers & claims:** Restrained. Prefer evocative specificity ("12 destinations across 4 landscapes") over hype ("The #1 luxury escape!"). No exclamation marks in body copy.
- **Emoji:** **Never.** Not part of the brand.
- **Examples of on-brand copy:**
  - Eyebrow → Headline: `THE NETWORK` / *A new geography of stillness.*
  - Lead: *"Each NÓMADE destination is shaped by its landscape — designed to disappear into it, and to bring you closer to it."*
  - Tertiary CTA: `Explore the destinations →`

---

## VISUAL FOUNDATIONS

The low-level rules that make anything look like NÓMADE.

### Color
A warm, earthen, low-saturation palette. **Forest green** anchors the brand; **warm ivory** is the default canvas; **soft gold** is the only accent, used in small doses (overlines, hairline rules, focus, the dot in the monogram). Full tokens in `colors_and_type.css`.

| Token | Hex | Role |
|---|---|---|
| Forest Green | `#2F3E34` | Primary — dark sections, primary buttons, headlines on light |
| Deep Moss | `#55644F` | Secondary green, supporting surfaces |
| Warm Sand | `#D9D1C4` | Warm neutral blocks, image placeholders, dividers |
| Warm Ivory | `#F6F3EE` | **Default page background** |
| Stone | `#B5ADA1` | Muted neutral, borders, captions on sand |
| Charcoal | `#1D1D1B` | Primary text, near-black sections |
| Soft Gold | `#B69B72` | **Primary accent** — overlines, rules, focus, micro-detail |
| Steel Blue | `#50657A` | **Functional accent** — data, charts, the "invest" path (app). Never decorative |

Rule of thumb: **mostly ivory + forest, with sand for warmth and gold as a whisper.** Avoid pure white (`#fff`) and pure black — use ivory and charcoal.

### Type
- **Default = the realized brand: all-sans, light.** Headlines use **Manrope** (300) — clean, editorial, technically precise (the Vercel/Linear cleanliness the brief asked for). This is `--display-face` and is the default `data-type-mode="sans"`.
- **Switchable directions** (the brief's serif is preserved as an option, not the default):
  - `sans` — Manrope light (default, matches collateral).
  - `serif` — **Playfair Display** 500, editorial high-contrast serif (the original brief).
  - `hybrid` — sans everywhere except the big editorial moments (hero, vision, manifesto), which go serif.
  - Toggle live via the **Tweaks panel** on the website kit, or set `data-type-mode` on `<html>`.
- **Logotype:** geometric wide-tracked all-caps sans (recreated with **Jost**, `--wordmark`), letter-spacing ~`0.34em`.
- **Body / UI:** **Inter** (300–600). Light for leads; regular/medium for body and UI.
- **Eyebrows / labels:** uppercase, `0.18–0.20em` tracking, gold (or steel) and muted.
> ⚠️ **Font substitutions to confirm:** the wordmark (Jost) and headline face (Manrope) are close Google-Fonts matches to the collateral — share the original/licensed faces to lock these in.

### Spacing & layout
- **8pt base scale**, but applied generously — whitespace is a luxury signal. Section padding is large (`6rem`–`8rem` vertical on desktop).
- **Editorial, magazine-inspired grids:** asymmetric splits, full-bleed imagery, wide gutters (`clamp(1.5rem, 5vw, 6rem)`). Max content width `1280px`; text columns capped at ~68ch.
- Full-width / full-bleed sections alternate with contained editorial blocks for rhythm.

### Backgrounds
- **Large cinematic photography** is the dominant background motif — full-bleed landscapes, architecture-in-nature, golden hour. See Photography below.
- Solid **ivory** and solid **forest/charcoal** sections alternate; **sand** for warm interstitials.
- **No gradients as decoration.** The only gradients allowed are subtle **image-protection scrims** (transparent → charcoal at ~0–60% opacity) behind text over photos.
- No repeating patterns, no noise textures, no busy backgrounds.

### Photography (direction)
Golden-hour light; mountains, forests, lakes, remote landscapes; architecture integrated into nature; minimal-to-no human presence; atmospheric, cinematic, nature-first compositions. **Warm** color grade. **Avoid:** corporate/office imagery, business stock, startup aesthetics, construction visuals, heavy dashboards.
> ⚠️ All imagery in this system is **placeholder** (warm sand color-fields, and a few Unsplash CDN landscapes in the UI kit). Replace with licensed NÓMADE photography for production.

### Borders, radii & cards
- **Corner radius:** buttons & inputs `12px` (brand default), cards `18px`, feature panels `28px`, pills `999px`.
- **Cards:** ivory/near-white surface, hairline sand border (`#E6E0D6`), soft low shadow. On hover, shadow deepens and the card lifts `-2px`. Generous internal padding. Calm, never busy.
- **Borders:** mostly hairline (`1px`) in warm sand or stone. On dark surfaces, `rgba(ivory, 0.18)`.

### Shadows / elevation
Soft, warm, low-contrast (tinted with charcoal, never pure black). Five steps from `xs` (1px) to `xl` (32px blur). Elevation is subtle — luxury reads as *flat and calm*, lifted only slightly.

### Motion
- **Easing:** gentle settle — `cubic-bezier(0.22, 1, 0.36, 1)` for entrances; `cubic-bezier(0.4, 0, 0.2, 1)` for state changes.
- **Style:** slow, soft fades and short upward reveals (8–16px). Durations `180ms` (state) to `600ms` (entrance). **No bounces, no spring overshoot, no parallax gimmicks.** Imagery may use a very slow scale (Ken-Burns) on hero.
- Respect `prefers-reduced-motion`.

### Interaction states
- **Hover (primary btn):** darken forest. **Hover (secondary):** fill forest, invert text. **Hover (tertiary):** text → gold, arrow nudges right (gap grows).
- **Hover (card):** shadow deepens + `-2px` lift.
- **Hover (image):** very slow `scale(1.04)` inside a clipped frame.
- **Press:** subtle `translateY(1px)` — a gentle settle, not a shrink.
- **Focus:** `2px` gold ring with offset; never a default blue outline.

### Transparency & blur
Used sparingly. Glass nav over hero (`backdrop-filter: blur(8px)` with translucent forest/ivory). Ghost buttons on photos use translucent ivory + blur. Otherwise surfaces are opaque.

---

## ICONOGRAPHY

- **System:** **Lucide** outline icons — thin, rounded, consistent `1.5px` stroke. This matches the brand's "minimal, elegant, outline" direction. Loaded from CDN (`lucide@latest`) in the UI kit; documented per-component.
- **Usage:** sparse and functional — arrows (directional CTAs), map pin, mountain, compass/navigation, calendar, user, menu. Icons are **decorative-minimal**, never colorful, never filled. Default color inherits text (`currentColor`), typically forest or ivory.
- **Stroke weight:** keep Lucide at `stroke-width: 1.5` for a refined feel (default is 2).
- **No emoji. No multicolor icon sets. No filled/duotone icons.** A single gold dot (·) is used as a brand micro-mark (in the monogram and occasionally between meta items).
- If Lucide is unavailable offline, self-host the subset used; the closest substitutes are Feather (near-identical) or Phosphor (Thin/Light weight).

---

## INDEX — what's in this folder

| Path | What it is |
|---|---|
| `README.md` | This file — brand context, content & visual foundations, iconography, index |
| `SKILL.md` | Agent Skill manifest (for use in Claude Code) |
| `colors_and_type.css` | All design tokens: color, type, spacing, radii, shadow, motion + semantic utility classes |
| `assets/` | Logo wordmark (+ inverse), monogram (+ inverse) |
| `preview/` | Design-system specimen cards (rendered in the Design System tab) |
| `ui_kits/website/` | Marketing website UI kit — JSX components + interactive `index.html` |

### UI kits
- **`ui_kits/website/`** — the primary surface. The **public marketing website** that sells the vision and the opportunity (primarily to landowners). 11 editorial sections — hero, the new hospitality model, the ecosystem flow, the experience, for-landowners, for-manufacturers, future-network map, why-NÓMADE, vision, FAQ, final CTA. **No inventory, bookings, prices or reviews** — NÓMADE has no active accommodations yet. Spanish copy. See its own `README.md`.

---

*Built from the NÓMADE brand brief. Imagery and fonts noted as placeholders/CDN where applicable — see caveats above.*
