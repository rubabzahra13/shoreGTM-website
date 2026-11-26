# Shore GTM — Premium Theme Design Brief

## Client goal
Deliver a **new, modern, premium** visual identity and homepage experience for [shoregtm.com](https://shoregtm.com/) while preserving messaging, IA, and conversion paths (assessment + discovery call).

## Current state (audit)
| Area | Observation |
|------|-------------|
| Platform | Framer |
| Palette | Teal panels, coral CTAs, navy footer — competent but reads “template SaaS” |
| Typography | Single sans stack; long headlines compete with body copy |
| Layout | Long scroll, similar section rhythm; limited visual hierarchy between primary vs support content |
| Brand | Strong operator/consulting copy; logo mark (wave/diamond) is distinctive |

## Creative direction: **“Precision at scale”**
Premium B2B advisory positioning: **calm authority**, not hype. Think editorial finance meets systems thinking — the site should feel like senior partners, not an AI startup.

### Design principles
1. **Constraint-first narrative** — lead with clarity; one idea per viewport where possible.
2. **Editorial hierarchy** — serif display + geometric sans body; generous whitespace.
3. **Restrained color** — dark ink canvas, warm metallics for accent, coral reserved for primary conversion only.
4. **Evidence over decoration** — subtle grid/line motifs (GTM “system”), no stock hero clutter.
5. **Motion with purpose** — staggered reveals, soft parallax on hero grid only.

## Color system

| Token | Hex | Usage |
|-------|-----|--------|
| `--ink` | `#080C12` | Page background |
| `--surface` | `#0F141C` | Cards, nav |
| `--surface-elevated` | `#161D28` | Hover states |
| `--border` | `rgba(255,255,255,0.08)` | Dividers |
| `--text-primary` | `#F4F1EB` | Headlines |
| `--text-secondary` | `rgba(244,241,235,0.72)` | Body |
| `--text-muted` | `rgba(244,241,235,0.48)` | Labels |
| `--gold` | `#C9A962` | Accent lines, secondary CTA borders |
| `--teal` | `#3E6F6A` | Brand nod, section washes |
| `--coral` | `#D87D62` | **Primary CTA only** (assessment, book call) |

### Light mode (optional inner pages)
Use `--paper` `#FAF8F5` + `--ink-soft` `#1A2332` for long-form Insights/About.

## Typography

| Role | Font | Notes |
|------|------|-------|
| Display | **Fraunces** (soft serif) | H1–H2, pull quotes |
| UI / body | **DM Sans** | 16–18px body, 12px tracked labels |
| Mono (optional) | **IBM Plex Mono** | Stats, pillar scores |

**Scale:** H1  clamp(2.5rem, 5vw, 4rem) · H2 clamp(1.75rem, 3vw, 2.5rem) · Body 1.125rem · Label 0.6875rem uppercase tracking 0.12em

## Components (library)
- **Glass nav** — sticky, blurred surface, gold hairline bottom on scroll
- **Eyebrow** — mono/label above section titles
- **Pillar cards** — 4-col grid, icon + title, 1px border, subtle lift on hover
- **Service tiles** — 5 offerings as alternating quote + description
- **Case study panels** — split layout: metric ribbon + long-form story
- **Assessment band** — full-width teal wash with framed scorecard visual
- **Footer** — 4-column, minimal legal row

## Page map (homepage)
Matches live site structure; reorder visually for story arc:

1. Hero → Assessment strip  
2. The problem (3 insight cards + closing thesis)  
3. Approach (4 pillars)  
4. GTM Operating System (8 pillars teaser + methodology link)  
5. Five ways to start (services)  
6. Case studies (2)  
7. AI & leadership (split statement)  
8. Why Shore GTM (3 proof points)  
9. Maturity assessment CTA  
10. Closing discovery CTA + footer  

## Framer implementation notes
- Replace flat teal blocks with **gradient meshes** (`radial` teal at 15% opacity on `--ink`)
- Swap coral button default for **coral fill + white text**; secondary = ghost gold border
- Import Fraunces + DM Sans in site fonts
- Use **sticky section nav** or progress dots for 10+ section scroll (optional)
- Hero: reduce H1 word count on screen; subcopy max-width 42ch

## Deliverables in this repo
| File | Purpose |
|------|---------|
| `index.html` | Interactive premium homepage prototype |
| `styles.css` | Tokens + components |
| `DESIGN-BRIEF.md` | This document |

## Next steps (recommended)
1. Client sign-off on direction (dark premium vs light editorial variant)
2. Apply tokens in Framer: colors, type, button styles
3. Rebuild section-by-section; keep URLs and form/embed hooks
4. Add favicon + OG image with new palette
5. Light QA on mobile: sticky nav, CTA tap targets ≥ 44px

---
*Prepared for Shore GTM client redesign — prototype for review, not production deploy.*