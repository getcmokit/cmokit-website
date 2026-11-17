# CMOkit website

Landing page for [CMOkit](https://www.cmokit.com), built with [Astro](https://astro.build).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Before launch

Edit `src/data/site.ts`:

- `CONFIG.price` / `CONFIG.comparePrice`: pricing shown everywhere on the page
- `CONFIG.checkoutUrl`: your checkout link (Polar, Stripe, Lemon Squeezy…)
- `CONFIG.counts`: agent / skill / command totals

Also fill in the footer links (Terms, Privacy, Refunds, X, email) in `src/components/Footer.astro`.

## Structure

- `src/pages/index.astro`: page composition
- `src/components/`: one file per section
- `src/data/site.ts`: pricing, departments, FAQ, AI engines (all copy-driven content)
- `src/styles/global.css`: design tokens and styles
- `src/scripts/main.ts`: animations, tabs, scroll reveals

Deploys as a static site to Vercel, Netlify, Cloudflare Pages or GitHub Pages with no config.
