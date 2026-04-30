# intelligent-machines — Brand Guidelines

Brand guidelines, design system, and design tokens for **intelligent-machines** — a composable AI workflow platform for small businesses.

---

## Repository structure

```
intelligent-machines-brand-guidelines/
├── DESIGN.md                        # Primary design system specification
├── design_tokens.json               # DTCG-format token export
├── tailwind.config.js               # Tailwind CSS v3 theme config
├── assets/
│   └── images/
│       ├── Intelligent-Machines-brand.png   # Brand reference sheet
│       └── IM-Brand-System.png              # Full design system overview
└── design-system/
    ├── tokens.css                   # CSS custom properties (all screens import this)
    ├── index.html                   # Interactive component library
    └── screens/
        ├── dashboard.html           # App dashboard
        ├── workflow-builder.html    # Visual workflow canvas
        ├── agent-detail.html        # Agent detail & trace view
        ├── activity.html            # Activity log & approval queue
        └── landing.html             # Marketing landing page
```

---

## DESIGN.md

`DESIGN.md` is the canonical source of truth for the design system. It follows the [google-labs-code/design.md](https://github.com/google-labs-code/design.md) specification — a format designed to communicate visual identity to both humans and AI coding agents.

The file has two layers:

**1. YAML front matter — machine-readable design tokens**

```yaml
---
name: intelligent-machines
colors:
  background: "#0A0F1F"
  primary: "#2563FF"
  secondary: "#00D4C4"
  ...
typography:
  display:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 700
    ...
rounded:
  DEFAULT: 8px
  md: 12px
  ...
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.DEFAULT}"
    ...
---
```

**2. Markdown body — human-readable rationale**

Sections follow the spec order:

1. **Brand & Style** — personality, tone, core visual motif
2. **Colors** — palette roles, usage rules, contrast guidance
3. **Typography** — type scale, font usage, brand name treatment
4. **Layout & Spacing** — grid system, spacing scale, container rules
5. **Elevation & Depth** — surface layering, border strategy
6. **Shapes** — radius scale and where each level applies
7. **Components** — buttons, cards, inputs, badges, navigation, workflow nodes
8. **Do's and Don'ts** — guardrails for consistent implementation

### Using DESIGN.md with an AI coding agent

Paste the contents of `DESIGN.md` into your agent's context (system prompt or first user message) before asking it to build UI. The agent will use the token values and prose guidance to produce on-brand output without needing to see screenshots or describe colours manually.

Example prompt:

```
<design-system>
[paste full contents of DESIGN.md here]
</design-system>

Build a React component for a workflow status card. It should show the workflow name, current status badge, last run time, and a "View" button.
```

Token references in the YAML (`{colors.primary}`, `{rounded.md}`) tell the agent exactly which values to use. The markdown prose explains the reasoning so the agent can make correct judgement calls for edge cases not explicitly covered.

---

## design_tokens.json

`design_tokens.json` exports all tokens in [Design Token Community Group (DTCG)](https://www.designtokens.org/) format. Each token uses `$type` and `$value` following the W3C spec:

```json
{
  "colors": {
    "primary": {
      "$type": "color",
      "$value": { "colorSpace": "srgb", "components": [0.145, 0.388, 1.0], "hex": "#2563FF" }
    }
  },
  "rounded": {
    "md": {
      "$type": "dimension",
      "$value": { "value": 12, "unit": "px" }
    }
  }
}
```

**Compatible with:**
- [Figma Variables](https://help.figma.com/hc/en-us/articles/15339657135383) — import via a tokens plugin such as [Tokens Studio](https://tokens.studio/)
- [Style Dictionary](https://amzn.github.io/style-dictionary/) — transform to any platform output (iOS, Android, CSS, etc.)
- Any tool that supports the W3C DTCG format

---

## tailwind.config.js

Drop-in Tailwind CSS v3 theme extension. All color, typography, radius, and spacing tokens are wired to the same values as `DESIGN.md` and `design_tokens.json`.

**Usage:**

Copy `tailwind.config.js` into your project root, or merge the `theme.extend` block into your existing config:

```js
// tailwind.config.js already in this repo — copy to your project
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#0A0F1F",
        "primary": "#2563FF",
        "secondary": "#00D4C4",
        // ... all tokens
      },
      fontSize: {
        "display": ["56px", { lineHeight: "62px", letterSpacing: "-0.04em", fontWeight: "700" }],
        // ...
      },
      borderRadius: {
        "DEFAULT": "8px",
        "md": "12px",
        // ...
      }
    }
  }
}
```

Then use tokens directly as Tailwind classes:

```html
<div class="bg-surface-container border border-outline-variant rounded-md p-card-padding">
  <h2 class="text-headline-sm text-on-surface">Email Engagement Agent</h2>
  <p class="text-body-sm text-on-surface-variant">Last run 2 minutes ago</p>
</div>
```

---

## design-system/tokens.css

CSS custom properties for use in plain HTML/CSS projects. All six HTML prototype files import this file. Variable names match the DESIGN.md token names exactly:

```css
/* Usage */
.card {
  background: var(--surface-container);
  border: 1px solid var(--outline-variant);
  border-radius: var(--rounded-md);
  padding: var(--spacing-card-padding);
}

.btn-primary {
  background: var(--gradient-primary);
  color: var(--on-primary);
  border-radius: var(--rounded);
}
```

**Key variable groups:**

| Group | Variables |
|---|---|
| Backgrounds | `--background`, `--surface`, `--surface-container`, `--surface-container-high`, `--surface-container-highest` |
| Text | `--on-surface`, `--on-surface-variant`, `--outline` |
| Accent | `--primary`, `--secondary`, `--tertiary` |
| Semantic | `--error`, `--success`, `--warning` |
| Gradients | `--gradient-primary`, `--gradient-flow` |
| Radius | `--rounded-sm` (4px), `--rounded` (8px), `--rounded-md` (12px), `--rounded-lg` (16px), `--rounded-xl` (24px), `--rounded-full` |
| Spacing | `--spacing-xs` through `--spacing-2xl`, `--spacing-card-padding`, `--spacing-gutter` |

---

## Interactive prototype screens

Open any HTML file directly in a browser — no build step required. All screens link to each other via the sidebar navigation.

| File | Description |
|---|---|
| `design-system/index.html` | Component library — colors, type scale, spacing, icons, buttons, cards, forms, badges |
| `design-system/screens/dashboard.html` | App dashboard with metrics, workflow table, and activity feed |
| `design-system/screens/workflow-builder.html` | Visual canvas with animated SVG connectors between agent nodes |
| `design-system/screens/agent-detail.html` | Agent view with IO schema, run trace, and performance stats |
| `design-system/screens/activity.html` | Timestamped event log with inline approval actions |
| `design-system/screens/landing.html` | Marketing landing page with hero, features, and product preview |

---

## Token consistency

All four token artifacts are kept in sync — the same values appear in every file:

```
DESIGN.md  ──────────────────────────────────────────────────────────────
  colors.primary: "#2563FF"
  rounded.md: 12px

design_tokens.json ───────────────────────────────────────────────────────
  colors.primary.$value.hex: "#2563FF"
  rounded.md.$value: { value: 12, unit: "px" }

tailwind.config.js ───────────────────────────────────────────────────────
  colors.primary: "#2563FF"
  borderRadius.md: "12px"

tokens.css ───────────────────────────────────────────────────────────────
  --primary: #2563FF
  --rounded-md: 12px
```

If you update a token value, update it in all four files.
