/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // These pull from CSS variables set by the theme system
        bg: "rgb(var(--bg) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        text: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(var(--accent), 0.35)",
      },
      backgroundImage: {
        'grid':
          "linear-gradient(to right, rgba(var(--muted),0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(var(--muted),0.12) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
}
