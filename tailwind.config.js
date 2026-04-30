/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Backgrounds
        "background": "#0A0F1F",
        "on-background": "#F0F4FF",
        // Surfaces
        "surface": "#0B0D12",
        "surface-dim": "#060810",
        "surface-bright": "#1A2035",
        "surface-container-lowest": "#060810",
        "surface-container-low": "#0D1020",
        "surface-container": "#111827",
        "surface-container-high": "#161D2E",
        "surface-container-highest": "#1A2035",
        "surface-variant": "#1A2035",
        // Text
        "on-surface": "#F0F4FF",
        "on-surface-variant": "#8B9CC8",
        "inverse-surface": "#F0F4FF",
        "inverse-on-surface": "#111827",
        // Borders
        "outline": "#4B5580",
        "outline-variant": "#2A3356",
        "surface-tint": "#2563FF",
        // Primary (electric blue)
        "primary": "#2563FF",
        "on-primary": "#FFFFFF",
        "primary-container": "#1A44CC",
        "on-primary-container": "#BED0FF",
        "inverse-primary": "#7BA5FF",
        "primary-fixed": "#4D7FFF",
        "primary-fixed-dim": "#2563FF",
        "on-primary-fixed": "#000F3D",
        "on-primary-fixed-variant": "#0A2899",
        // Secondary (teal)
        "secondary": "#00D4C4",
        "on-secondary": "#003330",
        "secondary-container": "#009E92",
        "on-secondary-container": "#B3FFF9",
        "secondary-fixed": "#33DDCF",
        "secondary-fixed-dim": "#00D4C4",
        "on-secondary-fixed": "#001F1C",
        "on-secondary-fixed-variant": "#006B62",
        // Tertiary (violet)
        "tertiary": "#7B3CFF",
        "on-tertiary": "#FFFFFF",
        "tertiary-container": "#5820D4",
        "on-tertiary-container": "#DDD0FF",
        "tertiary-fixed": "#9966FF",
        "tertiary-fixed-dim": "#7B3CFF",
        "on-tertiary-fixed": "#130040",
        "on-tertiary-fixed-variant": "#3A0099",
        // Semantic
        "error": "#EF4444",
        "on-error": "#FFFFFF",
        "error-container": "#7F1D1D",
        "on-error-container": "#FECACA",
        "success": "#10B981",
        "warning": "#F59E0B",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "headline-lg": ["Inter", "sans-serif"],
        "headline-md": ["Inter", "sans-serif"],
        "headline-sm": ["Inter", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"],
        "label-lg": ["Inter", "sans-serif"],
        "label-md": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "Fira Code", "monospace"],
      },
      fontSize: {
        "display": [
          "56px",
          { lineHeight: "62px", letterSpacing: "-0.04em", fontWeight: "700" },
        ],
        "headline-lg": [
          "40px",
          { lineHeight: "44px", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "headline-md": [
          "32px",
          { lineHeight: "38px", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "headline-sm": [
          "24px",
          { lineHeight: "30px", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "body-lg": [
          "17px",
          { lineHeight: "1.65", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-md": [
          "15px",
          { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" },
        ],
        "body-sm": [
          "13px",
          { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "400" },
        ],
        "label-lg": [
          "13px",
          { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "600" },
        ],
        "label-md": [
          "11px",
          { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "600" },
        ],
        "mono": [
          "13px",
          { lineHeight: "1.6", letterSpacing: "0em", fontWeight: "400" },
        ],
      },
      borderRadius: {
        "sm": "4px",
        "DEFAULT": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "full": "9999px",
      },
      spacing: {
        "xs": "4px",
        "sm": "8px",
        "md": "16px",
        "lg": "24px",
        "xl": "48px",
        "2xl": "64px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "margin-desktop": "64px",
        "card-padding": "24px",
        "node-gap": "16px",
      },
    },
  },
};
