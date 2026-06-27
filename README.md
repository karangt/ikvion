# Ikvion — Orthopedic Soft Goods & Rehabilitation Aids

Static marketing website for **Ikvion Group of Companies**, an exporter of orthopedic soft goods and rehabilitation aids based in Pune, Maharashtra, India.

**Live site:** [www.ikvion.com](https://www.ikvion.com)

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | [Astro](https://astro.build) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Hosting | GitHub Pages (via GitHub Actions) |
| Contact Form | [Web3Forms](https://web3forms.com) |

## Project Structure

```
ikvion/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # About
│   │   ├── contact/
│   │   │   └── index.astro       # Contact form (Web3Forms)
│   │   └── products/
│   │       ├── index.astro       # All categories overview
│   │       └── [category].astro  # Dynamic category pages
│   └── content/
│       └── products/             # JSON data — one file per category (11 total)
├── public/
│   ├── robots.txt
│   └── images/
│       └── products/             # 60 product images organized by category/SKU
├── astro.config.mjs
└── package.json
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, category grid, certifications, stats |
| `/about` | Company story, mission, certifications |
| `/products` | All 11 product categories |
| `/products/[category]` | Individual category pages with product cards |
| `/contact` | Contact form and company details |

### Product Categories

Neck Aids · Shoulder Aids · Forearm & Wrist Aids · Finger Aids · Chest, Rib & Back Aids · Abdomen & Pelvic Aids · Knee & Calf Aids · Ankle Aids · Foot Aids · Traction Kit & Comfort Aids · Walking Aids

60 products across 11 categories.

## Development

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build to ./dist/
npm run preview    # Preview production build locally
```

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions.
The custom domain is published through `public/CNAME`, and Astro builds routes from the domain root.

## Configuration

A few values need to be set before the site is fully operational:

- **Web3Forms access key** — Replace `YOUR_ACCESS_KEY_HERE` in `src/pages/contact/index.astro` with the key from [web3forms.com](https://web3forms.com) (use `info@ikvion.com`).
- **Google Analytics** — Replace `G-XXXXXXXXXX` in `src/layouts/BaseLayout.astro` with the real GA4 Measurement ID.
- **Google Maps** — Embed pending on the contact page.

## SEO

- Sitemap auto-generated at `/sitemap-index.xml` via `@astrojs/sitemap`
- `robots.txt` at `/robots.txt`
- Canonical URLs, Open Graph, Twitter Card, and JSON-LD structured data on all pages
- Organization, Product, ItemList, and LocalBusiness schemas

## License

All rights reserved. © Ikvion Group of Companies.
