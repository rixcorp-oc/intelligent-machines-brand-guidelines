---
name: intelligent-machines
colors:
  background: "#0A0F1F"
  on-background: "#F0F4FF"
  surface: "#0B0D12"
  surface-dim: "#060810"
  surface-bright: "#1A2035"
  surface-container-lowest: "#060810"
  surface-container-low: "#0D1020"
  surface-container: "#111827"
  surface-container-high: "#161D2E"
  surface-container-highest: "#1A2035"
  surface-variant: "#1A2035"
  on-surface: "#F0F4FF"
  on-surface-variant: "#8B9CC8"
  inverse-surface: "#F0F4FF"
  inverse-on-surface: "#111827"
  outline: "#4B5580"
  outline-variant: "#2A3356"
  surface-tint: "#2563FF"
  primary: "#2563FF"
  on-primary: "#FFFFFF"
  primary-container: "#1A44CC"
  on-primary-container: "#BED0FF"
  inverse-primary: "#7BA5FF"
  primary-fixed: "#4D7FFF"
  primary-fixed-dim: "#2563FF"
  on-primary-fixed: "#000F3D"
  on-primary-fixed-variant: "#0A2899"
  secondary: "#00D4C4"
  on-secondary: "#003330"
  secondary-container: "#009E92"
  on-secondary-container: "#B3FFF9"
  secondary-fixed: "#33DDCF"
  secondary-fixed-dim: "#00D4C4"
  on-secondary-fixed: "#001F1C"
  on-secondary-fixed-variant: "#006B62"
  tertiary: "#7B3CFF"
  on-tertiary: "#FFFFFF"
  tertiary-container: "#5820D4"
  on-tertiary-container: "#DDD0FF"
  tertiary-fixed: "#9966FF"
  tertiary-fixed-dim: "#7B3CFF"
  on-tertiary-fixed: "#130040"
  on-tertiary-fixed-variant: "#3A0099"
  error: "#EF4444"
  on-error: "#FFFFFF"
  error-container: "#7F1D1D"
  on-error-container: "#FECACA"
  success: "#10B981"
  warning: "#F59E0B"
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 700
    lineHeight: 62px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 700
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 30px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 600
    lineHeight: 1.4
  label-md:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0.08em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: 4px
  DEFAULT: 8px
  md: 12px
  lg: 16px
  xl: 24px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 48px
  2xl: 64px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  card-padding: 24px
  node-gap: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
    height: 38px
    padding: 10px 18px
  button-primary-hover:
    backgroundColor: "{colors.primary-fixed}"
  button-secondary:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
    height: 38px
    padding: 10px 18px
  button-secondary-hover:
    backgroundColor: "{colors.surface-container-high}"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.DEFAULT}"
  button-ghost-hover:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
  card:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.card-padding}"
  card-hover:
    backgroundColor: "{colors.surface-container-high}"
  input-field:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.DEFAULT}"
    height: 38px
    padding: 10px 14px
  input-field-focus:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
  badge-active:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 3px 10px
  badge-running:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 3px 10px
  badge-completed:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.success}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 3px 10px
  badge-error:
    backgroundColor: "{colors.error-container}"
    textColor: "{colors.on-error-container}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: 3px 10px
  nav-item:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.DEFAULT}"
    padding: 6px 8px
  nav-item-active:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
  workflow-node:
    backgroundColor: "{colors.surface-container}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.md}"
    padding: 10px 12px
    width: 180px
  workflow-node-active:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.on-surface}"
  workflow-node-running:
    backgroundColor: "{colors.surface-container-high}"
    textColor: "{colors.primary}"
---

## Brand & Style

intelligent-machines is a practical, composable automation platform for small businesses. It is not a sci-fi AI product. The brand sits closer to Stripe, Linear, and Notion AI: calm, precise, technical without being cold. The target user is a business owner or operator who wants reliable automation they can understand and control — not magic they have to trust blindly.

The visual identity is built on a single core motif: **flowing lines connecting nodes**. This represents agents coordinating, data moving through decisions, and automation made visible. The motif appears in the logo mark, workflow builder canvas, agent diagrams, and as subtle decoration in marketing surfaces. It should always feel functional — like a system architecture diagram — never abstract or decorative.

The brand name is always rendered lowercase: `intelligent-machines`. The hyphen is intentional and must never be dropped.

## Colors

The palette is dark-mode first, optimised for data-dense product interfaces where readability and calm are the primary requirements.

The **surface stack** provides five depth levels without heavy shadows. Spatial hierarchy is achieved through tonal shifts from `surface-container-lowest` through `surface-container-highest`. No level should be used for interactive elements that belong to a higher or lower layer.

The **accent triad** defines three semantic colour roles:

- **Primary (Electric Blue `#2563FF`):** The main interaction colour — CTAs, focus rings, running-state indicators, active borders, and selected states.
- **Secondary (Teal `#00D4C4`):** Live and active states, flow animations in the workflow canvas, positive/success signals, and the left anchor of the brand gradient.
- **Tertiary (Violet `#7B3CFF`):** Research-category agents, secondary visual interest, and the right anchor of the brand gradient.

The brand gradient (teal → blue → violet) is used in prose and as a CSS gradient on the primary CTA button and decorative flow lines. In the token system, each gradient stop maps to its respective semantic colour token.

Text hierarchy runs from `on-surface` (#F0F4FF) for primary content, through `on-surface-variant` (#8B9CC8) for secondary, to `outline` (#4B5580) for muted labels. All pairings pass WCAG AA contrast (4.5:1) against the dark surface backgrounds.

## Typography

Inter is used throughout. Its neutral geometry reads well at small sizes in dense data contexts and scales confidently to large display sizes on marketing surfaces.

The type scale prioritises functional density:

- **Display / Headline:** Tight tracking (−0.04em to −0.01em) and high weight create a structured, deliberate feel. Used only for hero headings and large metric values.
- **Body:** 15–17px with generous line height (1.6–1.65). The workhorse level for dashboard content, descriptions, and prose.
- **Labels:** `label-md` (11px, 600 weight, 0.08em letter-spacing) is used exclusively for status badges, section labels in sidebars, and table column headers. Never in paragraph contexts.
- **Mono:** JetBrains Mono is reserved for agent logs and trace output, code/config values in the workflow inspector, and machine-generated data. It signals "system output" to the user.

The brand name always appears in lowercase Inter: `intelligent-machines`.

## Layout & Spacing

An 8px grid governs all spatial decisions. All padding, margin, and gap values are multiples of 4px.

The application shell uses a **fixed sidebar (220px) + main content** layout. The sidebar uses `surface` as its background; the content area uses `background`. Cards and panels sit on `surface-container`, creating one level of elevation above the page background.

Vertical rhythm within pages: logical groups are separated using `xl` (48px). Within cards, `card-padding` (24px) provides consistent internal breathing room. Node gaps in the workflow canvas use `node-gap` (16px).

The container maximum of 1200px prevents content from stretching too wide on large displays. Marketing pages use `margin-desktop` (64px) outer margins. Mobile uses `margin-mobile` (16px).

## Elevation & Depth

Elevation is communicated through border contrast and tonal surface shifts, not drop shadows. This keeps the interface structured and legible rather than layered and heavy.

**Surface layers (lowest to highest):**

1. `background` (#0A0F1F) — page canvas; never used for interactive elements
2. `surface` (#0B0D12) — sidebar and navigation panels
3. `surface-container` (#111827) — cards, tables, list areas
4. `surface-container-high` (#161D2E) — hover states, active nav items
5. `surface-container-highest` (#1A2035) — dropdowns, popovers, tooltips

All surfaces use a 1px solid `outline-variant` border to define their edges. Raised elements use `outline` for their border on hover. The `surface-tint` (primary blue) is used sparingly as a top accent border on featured or active cards.

Glow effects (`box-shadow` with tinted alpha) are used only on the primary CTA on the landing page and on actively running workflow nodes. They signal live activity, not decoration.

## Shapes

Low radius throughout — this is a system product. Corners are rounded enough to feel modern but not so rounded that the interface loses its diagrammatic, structured character.

- `DEFAULT` (8px): Buttons, inputs, tags — the everyday interactive element.
- `md` (12px): Cards, panels, workflow nodes — the primary container unit.
- `lg` (16px): Modal dialogs, drawer panels.
- `xl` (24px): Landing page hero cards and large marketing containers.
- `full` (9999px): Badges, status pills, toggle switches — always pill-shaped.

Do not mix radius levels within a single component. Workflow nodes always use `md`. Buttons always use `DEFAULT`.

## Components

### Buttons

The **primary button** uses the primary blue as its background colour — with a teal → blue → violet gradient applied in CSS. It is reserved for the single highest-priority action per screen ("New workflow", "Start building", "Deploy agent"). Using it for secondary actions dilutes its signal.

The **secondary button** uses `surface-container` background with an `outline-variant` border. It handles supporting actions alongside a primary.

The **ghost button** is used for tertiary and destructive actions ("Cancel", "Delete", "View logs"). No visible border; `on-surface-variant` text; hover fills with `surface-container-high`.

All button hover and active transitions take 200ms using ease-out timing. Active state applies a subtle scale-down (0.98) for tactile feedback.

### Cards

Cards use `surface-container` background with a single `outline-variant` border and `md` (12px) radius. Default state has no shadow — border contrast is sufficient. Featured or actively running workflow cards receive a 2px gradient top border (teal → blue → violet) to draw the eye.

### Inputs & Forms

Inputs use `surface-container` background with `outline-variant` border. Focus state uses a blue inner glow. Error state uses the `error` border colour with a red glow ring. Labels always sit outside the field — never as placeholder-only labels.

Toggles are pill-shaped (`full` radius). Off: `surface-container-high`. On: `primary` background, thumb translates right.

### Workflow Nodes

Nodes are 180px wide with `md` radius. Running nodes use `workflow-node-running` variant. Completed nodes display teal output port dots. Animated connector paths use `stroke-dashoffset` animation to convey live data flow.

### Badges

Five states: Active (teal), Running (blue — animated dot), Completed (green), Paused (amber), Error (red). All use `label-md` typography and `full` radius.

### Navigation

Sidebar section labels use `label-md` in `outline` colour. Nav items use `body-sm` + 600 weight at rest (`on-surface-variant`), switching to `on-surface` with `surface-container-high` background when active.

## Do's and Don'ts

- Do use the primary gradient button for the single most important action per screen only
- Do render the brand name as `intelligent-machines` — always lowercase, always hyphenated
- Do use `label-md` (uppercase, tracked) for status badges and section labels only — never in body copy
- Do keep the workflow canvas readable: never place more than 8 nodes in a single horizontal chain without introducing a branch or group
- Do use `mono` (JetBrains Mono) for all agent log output, trace data, and config values
- Don't use the teal → blue → violet gradient on surfaces or backgrounds — gradient is reserved for CTAs, flow lines, and logo mark
- Don't add drop shadows to cards or nav items — tonal surfaces and outline-variant borders provide sufficient elevation signal
- Don't mix `md` and `DEFAULT` radius in the same component
- Don't use more than two font weights on a single screen
- Don't use colour alone to communicate state — always pair colour with a label, icon, or pattern
- Don't exceed 3 levels of surface depth within a single view
