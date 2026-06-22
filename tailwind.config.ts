import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0A",
          pure: "#000000",
        },
        bone: {
          DEFAULT: "#FFFFFF",
          muted: "#C5C5C5",
        },
        accent: "#B91C4A",
        // Couleurs sémantiques pilotées par variables CSS (thème sombre/clair)
        surface: "rgb(var(--surface-rgb) / <alpha-value>)",
        content: "rgb(var(--content-rgb) / <alpha-value>)",
        muted: "var(--muted)",
        line: "var(--line)",
        card: "var(--card)",
        // Fond clair éditorial (cf. §4.2)
        paper: {
          DEFAULT: "#F5F4F1",
          pure: "#FFFFFF",
        },
        // Couleurs de fumée par slide (cf. §6.5 du cahier des charges)
        smoke: {
          violet: "#7A3CFF",
          rose: "#FF3C6E",
          turquoise: "#1AD1C4",
          orange: "#FFB13C",
          blue: "#3C8CFF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Impact", "sans-serif"],
        sans: ["var(--font-body)", "Helvetica Neue", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      spacing: {
        // Échelle d'espacement cohérente (4 / 8 / 16 / 24 / 40 / 64)
        gutter: "clamp(1.25rem, 5vw, 4rem)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
