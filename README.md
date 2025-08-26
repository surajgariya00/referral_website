# SSG – Futuristic Website (Vite + React + Tailwind)

**What you get**

- Multi-page site (Dashboard, About, Team, Contact, Referral, Connect, Apply Jobs, Earn Commission, Privacy, Terms)
- Hero-level animations (Framer Motion), theme switcher (light/dark/neon/forest/pastel), and a long, scroll-heavy dashboard.
- Clean Tailwind design with CSS variable themes. Icons via lucide-react.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

> This is placeholder content and dummy data. Replace copy/images with your own. No backend is included.

## Structure

```
src/
  components/ (Navbar, Footer, ThemeToggle, ScrollToTop)
  pages/       (Dashboard + other pages listed in routes)
  styles/      (global.css + theme tokens)
```

## Theming

- Click the **Theme** button in the navbar to switch between Light, Dark, Neon, Forest, and Pastel.
- We use CSS variables to feed Tailwind colors for consistent theming.

## Notes

- This site showcases what your **app** enables (referral, connect, apply, earn) without showing the app UI itself.
- The Dashboard is intentionally long with many sections and interactions to feel substantial and “wow” on first load.
