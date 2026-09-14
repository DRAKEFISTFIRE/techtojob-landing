import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        "panel-3": "var(--panel-3)",
        ink: "var(--text)",
        "ink-soft": "var(--text-soft)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-light": "var(--accent-light)",
        "accent-dark": "var(--accent-dark)",
        "accent-text": "var(--accent-text)",
        "accent-soft": "var(--accent-soft)",
        "accent-ink": "var(--accent-ink)",
        gold: "var(--gold)",
        "gold-text": "var(--gold-text)",
        "gold-soft": "var(--gold-soft)",
        "dark-bg": "var(--dark-bg)",
        "dark-panel": "var(--dark-panel)",
        "dark-panel-2": "var(--dark-panel-2)",
        "dark-panel-3": "var(--dark-panel-3)",
        "dark-text": "var(--dark-text)",
        "dark-muted": "var(--dark-muted)",
        "dark-line": "var(--dark-line)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        shimmer: "shimmer 4s linear infinite",
        floatSlow: "floatSlow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;