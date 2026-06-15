# TraceWeave Design System

A design system for **TraceWeave** — European infrastructure for textile regulatory
compliance under **ESPR** (Ecodesign for Sustainable Products Regulation). The first
product built on it is the **Digital Product Passport (DPP)**.

> This system is the visual + interaction foundation only. No product screens have
> been designed yet — the DPP is built *on top of* this system in a later phase.

---

## 1 · Product context

**Who it's for.** The primary user is a **Sustainability Manager**: non-technical,
time-poor, working daily with suppliers, certifications, audits and documentation.
They live in Excel, PDFs and certificates today. The software must feel calm and
trustworthy and **never intimidate**.

**What it does.** It turns a complex regulation into a clear working tool. The
regulation should feel like the *natural structure of the product*, not bureaucracy.

**Design philosophy.** Design for **clarity, not to impress.** Content is the
protagonist; the interface disappears. Every component reduces cognitive load. This
is a *work tool*, not a gallery of pretty cards.

**Personality.** Confidence · precision · transparency · calm · professionalism ·
robustness · European quality. Sober but never cold. Never bureaucratic, never
"old corporate", never futuristic, never marketing, never "AI startup".

**Sources.** This system was built from the written product brief only — no codebase,
Figma file, or existing brand assets were provided. All visual decisions (the petrol
brand colour, the IBM Plex pairing, the trust language) are original to this system.
If you have brand assets, fonts, or a product spec, share them so we can reconcile.

---

## 2 · Content fundamentals (voice & copy)

- **Tone:** plain, precise, reassuring. Short declarative sentences. Explain, never scold.
- **Person:** address the user as **you**; the product is neutral ("This makes the DPP
  publicly resolvable"), not a chummy "we". Avoid first-person product voice.
- **Casing:** **Sentence case everywhere** — buttons, headers, labels, menus
  ("Publish passport", not "Publish Passport"). The only UPPERCASE is the mono
  eyebrow/label style, used sparingly and always letter-spaced.
- **Status language is informative, never punitive.** "Pending validation", not
  "Missing". A failed audit reads "Action required", not "Failed". An absent document
  is "No evidence" (a calm gap), not an error.
- **Numbers & codes** are mono and exact (`TW-PP-2025-0481`, `68.0 %`, `12.4 kg CO₂e`).
  Prefer real precision over rounded marketing figures.
- **No emoji. No exclamation marks. No hype words** ("revolutionary", "seamless",
  "powerful"). If a sentence could appear in a brochure, rewrite it.
- **Microcopy examples:**
  - Empty: "No passports yet — Create your first Digital Product Passport to start tracing materials."
  - Error: "Couldn't load suppliers — The connection timed out. Your data is safe."
  - Trust: "Verified by Bureau Veritas · Mar 2025"

---

## 3 · Visual foundations

**The idea.** An *editorial, functional* language — closer to technical documentation,
an industrial spec sheet, or modern laboratory software than to a consumer dashboard.
Whitespace, rhythm and hierarchy do the work; almost nothing is ornamental.

**Colour.** One brand colour — a **deep petrol** (`--brand-600 #1F5957`): precise,
trustworthy, associated with traceability without the leaf-green eco cliché. Everything
else sits on a **warm-tinted neutral slate** so the product reads sober but never cold.
Page background is a warm near-white paper (`--surface-page #FAFAF8`). Colour carries
**meaning, never decoration** — state colours are deliberately low-saturation
(petrol-green for verified, slate for declared, ochre for pending, muted clay for
critical). No saturated greens/reds, no gradients used decoratively.

**Type.** **IBM Plex Sans** for everything readable; **IBM Plex Mono** for codes, IDs,
values, table numbers and the uppercase eyebrow/label style. Plex is engineered,
neutral and highly legible — chosen deliberately over the overused Inter/Roboto. The
scale is restrained (Display 36 / H1 28 / H2 22 / Body 16); reading is prioritised over
spectacle, sizes are never exaggerated. Hierarchy comes from **size + weight**, not colour.

**Spacing & grid.** 4px base unit. Generous whitespace and a consistent vertical rhythm
are first-class. Desktop-first, 12-column, 1280px max content width, ~720px reading
measure. Alignments are exact.

**Borders, radii, elevation.** Separation comes from **borders first, shadow second** —
hairline borders (`--neutral-200`) define most surfaces. Corners are discreet and
technical (3–10px; full-round only for status dots and avatars). Shadows are minimal and
cool-neutral, used only where something genuinely floats (menus, modals, drawers, sticky
chrome). Cards = white surface + 1px hairline + a barely-there resting shadow.

**Imagery.** The system ships no decorative imagery, illustration or photography by
default — the content is the subject. Where product/document thumbnails appear they sit
behind a hairline on a warm-neutral well. No full-bleed hero images, no patterns, no
textures, no gradients-as-decoration.

**Motion.** Fast, calm, functional (80–280ms; standard ease `cubic-bezier(0.2,0,0.1,1)`).
Motion confirms an action or reveals structure — **no bounce, no overshoot, no decorative
loops.** Hover = subtle background/border shift; focus = 2px petrol ring + soft halo;
press = a slightly darker fill (never a shrink/scale). Everything honours
`prefers-reduced-motion`.

**Transparency & blur.** Used sparingly — only the modal/drawer scrim
(`rgba(20,24,24,.32)`). No frosted-glass surfaces.

---

## 4 · The Trust System (the most important part)

Every datum in the product can declare **how well it is backed**. This is reusable in
tables, cards, timelines and documents, and is the spine of the whole product.

| Concept | Component | What it answers |
|---|---|---|
| **Trust level** | `TrustIndicator` | *Who backs this?* verified (3rd-party) · declared (brand) · pending |
| **Information state** | `StatusBadge` | *What is this record's state?* verified · declared · pending · unavailable · archived · expired · draft |
| **Evidence** | `EvidenceBadge` / `EvidenceCard` | *What artefact backs it?* document, test, certificate, audit… |
| **Certification** | `CertificationBadge` / `CertificateCard` | *Which standard, and is it valid?* GOTS, OEKO-TEX, GRS… |

Rules: never use alarm-red or aggressive alerts; never imply blame; always make the
*gap* legible without punishing it. The goal is to **build trust**, not assign fault.
`TrustIndicator` is the atom — it composes into MetricCard, Table cells, Timeline nodes
and EvidenceCard.

---

## 5 · Iconography

- **One source:** the `Icon` component (`components/foundation/Icon.jsx`). A curated,
  technical, **stroked** set on a 24px grid at a refined 1.75 stroke — never illustrative.
- **Substitution flagged:** no brand icon set was provided, so glyph geometry is drawn
  from **Lucide** (MIT). It is inlined in `Icon.jsx` — the system ships no icon-font or
  CDN dependency. If TraceWeave has its own icon library, swap the `PATHS` map.
- **No emoji, ever.** No Unicode pictographs as icons. Certifier "logos" are rendered as
  a mono **monogram** (e.g. `GOTS`) rather than shipping third-party marks.
- Size icons to their text: 16px in dense UI/buttons, 18px default, 20–24px standalone.
  Decorative icons are `aria-hidden`; standalone icons take a `label`.

---

## 6 · Accessibility

- Text/!colour hierarchy meets contrast on the warm paper background; `--text-strong`
  through `--text-subtle` are tuned for legibility.
- **Never rely on colour alone** — every trust level and status pairs colour with an
  **icon + label**. State badges keep their meaning in greyscale.
- Visible focus on every interactive element (2px petrol ring, 2px offset).
- Native `<select>` and real `<button>`/`<a>` semantics; tooltips open on focus as well
  as hover.

---

## 7 · Index / manifest

**Root**
- `styles.css` — the single entry point (import this). Imports-only manifest.
- `readme.md` — this file.
- `SKILL.md` — portable skill front-matter for Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`,
`radii.css`, `elevation.css`, `motion.css`, `base.css`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing groups) shown in
the Design System tab.

**`components/`** (namespace `window.TraceWeaveDesignSystem_c485d4`)
- `foundation/` — **Icon**
- `trust/` — **TrustIndicator, StatusBadge, EvidenceBadge, CertificationBadge**
- `forms/` — **Button, IconButton, Field, Input, Select, SearchField**
- `navigation/` — **Tabs, Breadcrumb, FilterChips, Pagination, StickyNav**
- `data/` — **Card, MetricCard, SectionHeader, Table, Timeline, Accordion**
- `records/` — **EvidenceCard, CertificateCard, AuditCard, DocumentPreviewCard, QRComponent**
- `feedback/` — **Tooltip, Modal, Drawer, EmptyState, LoadingState** (+ `Skeleton`, `Spinner`), **ErrorState**

Each component directory carries a `<Name>.d.ts` (props), a `<Name>.prompt.md` (usage)
and a `*.card.html` (live specimen for the Design System tab).

**Not yet built (next phase):** the DPP product screens and a full UI kit. This turn is
the system only, per the brief.
