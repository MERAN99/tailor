/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        /* ── Primary: Deep Indigo ── */
        "primary":                    "#4F46E5",
        "primary-dim":                "#3730A3",
        "primary-container":          "#E0E7FF",
        "on-primary":                 "#FFFFFF",
        "on-primary-container":       "#312E81",
        "primary-fixed":              "#C7D2FE",
        "primary-fixed-dim":          "#818CF8",
        "on-primary-fixed":           "#1E1B4B",
        "on-primary-fixed-variant":   "#3730A3",
        "inverse-primary":            "#A5B4FC",

        /* ── Secondary: Warm Amber ── */
        "secondary":                  "#B45309",
        "secondary-dim":              "#92400E",
        "secondary-container":        "#FEF3C7",
        "secondary-fixed":            "#FEF3C7",
        "secondary-fixed-dim":        "#FCD34D",
        "on-secondary":               "#FFFFFF",
        "on-secondary-container":     "#78350F",
        "on-secondary-fixed":         "#451A03",
        "on-secondary-fixed-variant": "#92400E",

        /* ── Tertiary: Emerald ── */
        "tertiary":                   "#059669",
        "tertiary-dim":               "#047857",
        "tertiary-container":         "#D1FAE5",
        "tertiary-fixed":             "#D1FAE5",
        "tertiary-fixed-dim":         "#6EE7B7",
        "on-tertiary":                "#FFFFFF",
        "on-tertiary-container":      "#064E3B",
        "on-tertiary-fixed":          "#064E3B",
        "on-tertiary-fixed-variant":  "#047857",

        /* ── Surface / Background ── */
        "background":                 "#F8F8FF",
        "surface":                    "#F8F8FF",
        "surface-bright":             "#FFFFFF",
        "surface-dim":                "#E2E2EF",
        "surface-variant":            "#E8E8F0",
        "surface-tint":               "#4F46E5",
        "surface-container-lowest":   "#FFFFFF",
        "surface-container-low":      "#F2F2FC",
        "surface-container":          "#EAEAF6",
        "surface-container-high":     "#DEDEED",
        "surface-container-highest":  "#D4D4E4",

        /* ── On Surface ── */
        "on-background":              "#1C1B2E",
        "on-surface":                 "#1C1B2E",
        "on-surface-variant":         "#5B5B72",
        "inverse-surface":            "#1C1B2E",
        "inverse-on-surface":         "#F2F2FC",

        /* ── Outline ── */
        "outline":                    "#8585A0",
        "outline-variant":            "#C8C8DC",

        /* ── Error ── */
        "error":                      "#DC2626",
        "error-dim":                  "#B91C1C",
        "error-container":            "#FEE2E2",
        "on-error":                   "#FFFFFF",
        "on-error-container":         "#7F1D1D",
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "sm":      "0.25rem",
        "md":      "0.5rem",
        "lg":      "0.75rem",
        "xl":      "1rem",
        "2xl":     "1.5rem",
        "full":    "9999px",
      },
      fontFamily: {
        "headline": ["Inter", "Noto Kufi Arabic", "sans-serif"],
        "body":     ["Inter", "Noto Kufi Arabic", "sans-serif"],
        "label":    ["Inter", "Noto Kufi Arabic", "sans-serif"],
      },
      boxShadow: {
        "card":   "0 2px 8px 0 rgba(79,70,229,0.08), 0 1px 3px 0 rgba(0,0,0,0.06)",
        "card-lg":"0 8px 32px 0 rgba(79,70,229,0.14), 0 2px 6px 0 rgba(0,0,0,0.06)",
        "glow":   "0 0 24px 4px rgba(79,70,229,0.18)",
      },
      animation: {
        "fade-in":    "fadeIn 0.3s ease-out",
        "slide-up":   "slideUp 0.35s cubic-bezier(0.16,1,0.3,1)",
        "pulse-soft": "pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
    },
  },
  plugins: [],
}
