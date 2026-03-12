import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-soft": "rgb(var(--accent-soft) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        stone: "rgb(var(--stone) / <alpha-value>)",
      },
      boxShadow: {
        panel: "0 24px 60px rgba(27, 34, 29, 0.08)",
        float: "0 20px 50px rgba(32, 39, 35, 0.12)",
      },
      maxWidth: {
        "content-wide": "82rem",
      },
      fontFamily: {
        sans: ["Aptos", '"Segoe UI"', '"Helvetica Neue"', "sans-serif"],
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backgroundImage: {
        "grain-overlay": "radial-gradient(circle at top, rgba(47, 78, 61, 0.10), transparent 42%), linear-gradient(180deg, rgba(255,255,255,0.72), rgba(255,255,255,0.92))",
      },
    },
  },
  plugins: [],
};

export default config;

