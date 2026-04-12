# Ikvion - Static Website Plan

## Company Overview

**Ikvion Group of Companies** — Orthopedic Soft Goods & Rehabilitation Aids exporter.
- **Tagline:** "Supporting Better Mobility"
- **Location:** Pune, Maharashtra
- **Website:** www.ikvion.com
- **Email:** info@ikvion.com
- **Phone:** 8097197772; 9225523334
- **Certifications:** ISO 9001:2008, MSME, WHO GMP Certified, CE

---

## Tech Stack

| Layer        | Choice                    | Rationale                                        |
| ------------ | ------------------------- | ------------------------------------------------ |
| Framework    | **Astro**                 | Zero JS by default, fast static builds, markdown-driven content |
| Styling      | **Tailwind CSS**          | Utility-first, rapid prototyping, small bundle    |
| Deployment   | **GitHub Pages**          | Free hosting, automatic deploys via GitHub Actions |
| Contact Form | **Formspree / Web3Forms** | No backend needed, free tier sufficient           |
| Images       | Optimized via Astro Image | Automatic WebP/AVIF conversion, lazy loading      |

---

## Color Palette (derived from brochure)

| Token       | Value       | Usage                         |
| ----------- | ----------- | ----------------------------- |
| Primary     | `#1B2A4A`   | Dark navy — headings, nav     |
| Secondary   | `#C9A08A`   | Muted rose/blush — accents, hero backgrounds |
| Accent      | `#4ABFBF`   | Teal — CTAs, links, highlights |
| Background  | `#F5F0EB`   | Warm off-white — page bg      |
| Text        | `#2D2D2D`   | Near-black — body text         |
| White       | `#FFFFFF`   | Cards, sections                |

---

## Site Structure & Pages

### 1. Home (`/`)
- **Hero section** — tagline "Supporting Better Mobility", CTA → Products / Contact
- **About snippet** — brief intro to Ikvion as an exporter of orthopedic devices
- **Product category grid** — visual cards linking to each category (11 categories)
- **Certifications bar** — ISO 9001:2008, MSME, WHO GMP, CE logos
- **CTA banner** — "Looking for a reliable export partner?" → Contact page

### 2. About (`/about`)
- Company story and mission
- Why choose Ikvion (quality, certifications, export experience)
- Certifications section with badge images
- Global reach / export map (optional)

### 3. Products (`/products`)
- Overview grid of all 11 product categories with thumbnail images
- Each category links to its own sub-page

### 4. Product Category Pages (`/products/[category]`)
One page per category, showing a grid of products with image, name, SKU, and sizes:

| # | Category                       | Route                          | Products |
|---|--------------------------------|--------------------------------|----------|
| 1 | Neck Aids                      | `/products/neck-aids`          | 4        |
| 2 | Shoulder Aids                  | `/products/shoulder-aids`      | 7        |
| 3 | Forearm & Wrist Aids           | `/products/forearm-wrist-aids` | 5        |
| 4 | Finger Aids                    | `/products/finger-aids`        | 5        |
| 5 | Chest, Rib & Back Aids         | `/products/chest-rib-back-aids`| 6        |
| 6 | Abdomen & Pelvic Aids          | `/products/abdomen-pelvic-aids`| 4        |
| 7 | Knee & Calf Aids               | `/products/knee-calf-aids`     | 9        |
| 8 | Ankle Aids                     | `/products/ankle-aids`         | 6        |
| 9 | Foot Aids                      | `/products/foot-aids`          | 4        |
|10 | Traction Kit & Comfort Aids    | `/products/traction-comfort`   | 6        |
|11 | Walking Aids                   | `/products/walking-aids`       | 4        |

### 5. Contact (`/contact`)
- Contact form (name, email, company, country, message)
- Company address, phone, email
- Embedded Google Map (Pune location)

---

## Full Product Catalogue

### Neck Aids (IK-NA)
| SKU      | Product                     | Sizes       |
|----------|-----------------------------|-------------|
| IK-NA-01 | Cervical Collar with Support | S, M, L, XL |
| IK-NA-02 | Philadelphia Collar          | S, M, L, XL |
| IK-NA-03 | Hard Cervical Collar         | S, M, L, XL |
| IK-NA-04 | Soft Cervical Collar         | S, M, L, XL |

### Shoulder Aids (IK-SA)
| SKU      | Product                        | Sizes                    |
|----------|--------------------------------|--------------------------|
| IK-SA-01 | Arm Sling                      | S, M, L, XL, XXL, Child |
| IK-SA-02 | Arm Sling Tropical             | S, M, L, XL, XXL, Child |
| IK-SA-03 | Arm Sling Strap                | Universal                |
| IK-SA-04 | Shoulder Support               | Universal                |
| IK-SA-05 | Shoulder Immobilizer           | Universal, Spl., Child   |
| IK-SA-06 | Elastic Shoulder Immobilizer   | S, M, L, XL, XXL        |
| IK-SA-07 | Clavical Brace Stockinette     | S, M, L, XL, XXL        |

### Forearm & Wrist Aids (IK-FW)
| SKU      | Product                | Sizes     |
|----------|------------------------|-----------|
| IK-FW-01 | Elbow Support          | S, M, L   |
| IK-FW-02 | Tennis Elbow Support   | Universal |
| IK-FW-03 | Wrist Splint           | Universal |
| IK-FW-04 | Wrist Brace            | Universal |
| IK-FW-05 | Wrist Brace with Thumb | Universal |

### Finger Aids (IK-FA)
| SKU      | Product            | Sizes     |
|----------|--------------------|-----------|
| IK-FA-01 | Finger Cot         | S, M, L   |
| IK-FA-02 | Frog Splint        | S, M, L   |
| IK-FA-03 | Finger Mallet      | S, M, L   |
| IK-FA-04 | Splint Finger      | S, M, L   |
| IK-FA-05 | Thumb Spica Splint | Universal |

### Chest, Rib & Back Aids (IK-CR / IK-BA)
| SKU      | Product              | Sizes                         |
|----------|----------------------|-------------------------------|
| IK-CR-01 | Ash Brace            | Universal                     |
| IK-CR-02 | Rib Belt             | S, M, L, XL, XXL, Uni., Child |
| IK-CR-03 | Chest Binder         | S, M, L, XL, XXL              |
| IK-BA-01 | Contoured L S Belt   | S, M, L, XL, XXL, XXXL        |
| IK-BA-02 | Lumbar Sacral Belt   | S, M, L, XL, XXL, XXXL        |
| IK-BA-03 | Dorso Lumbar Brace   | Universal, Spl                 |

### Abdomen & Pelvic Aids (IK-AP)
| SKU      | Product         | Sizes              |
|----------|-----------------|---------------------|
| IK-AP-01 | Abdomen Belt    | S, M, L, XL, XXL   |
| IK-AP-02 | Maternity Belt  | Universal           |
| IK-AP-03 | Pelvic Belt     | S, M, L, XL, XXL   |
| IK-AP-04 | Hernia Belt     | S, M, L, XL        |

### Knee & Calf Aids (IK-KC)
| SKU      | Product                        | Sizes                          |
|----------|--------------------------------|--------------------------------|
| IK-KC-01 | Knee Cap                       | S, M, L, XL, XXL              |
| IK-KC-02 | Hinge Knee Cap                 | S, M, L, XL, XXL              |
| IK-KC-03 | Polycentric Hinge Knee Cap     | S, M, L, XL, XXL              |
| IK-KC-04 | Elastic Knee Support           | S, M, L, XL, XXL              |
| IK-KC-05 | Knee Cap with Open Patella     | S, M, L, XL, XXL              |
| IK-KC-06 | ROM Knee Brace                 | Universal                      |
| IK-KC-07 | Knee Immobilizer               | S, M, L, XL, XXL, XXXL (14/19/22 inch) |
| IK-KC-08 | Varicose Stocking Below Knee   | S, M, L, XL                   |
| IK-KC-09 | Varicose Stocking Above Knee   | S, M, L, XL                   |

### Ankle Aids (IK-AA)
| SKU      | Product             | Sizes        |
|----------|---------------------|--------------|
| IK-AA-01 | Ankle Support       | S, M, L, XL  |
| IK-AA-02 | Anklet With Binder  | S, M, L, XL  |
| IK-AA-03 | Ankle Brace         | Universal     |
| IK-AA-04 | Foot Drop Splint    | S, M, L       |
| IK-AA-05 | Cast Shoes          | S, M, L, XL  |
| IK-AA-06 | DRB                 | Universal     |

### Foot Aids (IK-FT)
| SKU      | Product                 | Sizes     |
|----------|-------------------------|-----------|
| IK-FT-01 | Silicon Gel Insole      | S, M, L   |
| IK-FT-02 | Silicon Gel Heel Cushion | Universal |
| IK-FT-03 | Arch Support            | S, M, L   |
| IK-FT-04 | Toe Separator           | Universal |

### Traction Kit & Comfort Aids (IK-TK / IK-CA)
| SKU      | Product              | Sizes        |
|----------|----------------------|--------------|
| IK-TK-01 | Skin Traction Kit   | Universal     |
| IK-TK-02 | Leg Traction Brace  | S, M, L, XL  |
| IK-TK-03 | Ankle Traction      | Universal     |
| IK-CA-01 | Cervical Pillow     | Universal     |
| IK-CA-02 | Coccyx Seat Cushion | Universal     |
| IK-CA-03 | Back Rest Cushion   | Universal     |

### Walking Aids (IK-WA)
| SKU      | Product                  | Sizes      |
|----------|--------------------------|------------|
| IK-WA-01 | Walking Stick Single Leg | Adjustable |
| IK-WA-02 | Walking Stick Four Leg   | Adjustable |
| IK-WA-03 | Walker                   | Universal  |
| IK-WA-04 | Walker Folding           | Universal  |

---

## Project Structure

```
ikvion/
├── src/
│   ├── components/
│   │   ├── Header.astro          # Nav with logo, links
│   │   ├── Footer.astro          # Contact info, certifications, copyright
│   │   ├── Hero.astro            # Reusable hero banner
│   │   ├── ProductCard.astro     # Single product card (image, name, SKU, sizes)
│   │   ├── CategoryCard.astro    # Category thumbnail card for overview pages
│   │   ├── CertificationBar.astro
│   │   ├── ContactForm.astro
│   │   └── MobileNav.astro       # Hamburger menu for mobile
│   ├── layouts/
│   │   └── BaseLayout.astro      # HTML shell, meta tags, header/footer
│   ├── pages/
│   │   ├── index.astro           # Home
│   │   ├── about.astro           # About
│   │   ├── contact.astro         # Contact
│   │   └── products/
│   │       ├── index.astro       # All categories overview
│   │       └── [category].astro  # Dynamic category pages
│   ├── content/
│   │   └── products/             # Product data as JSON/YAML per category
│   │       ├── neck-aids.json
│   │       ├── shoulder-aids.json
│   │       └── ...
│   └── styles/
│       └── global.css            # Tailwind base + custom styles
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── certifications/       # ISO, MSME, WHO GMP, CE badges
│   │   └── products/             # Product photos organized by category
│   │       ├── neck-aids/
│   │       ├── shoulder-aids/
│   │       └── ...
│   └── favicon.ico
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── PLAN.md
```

---

## Implementation Phases

### Phase 1 — Scaffold & Layout ✅
- [x] Initialize Astro project with Tailwind CSS
- [x] Set up BaseLayout with meta tags, favicon, fonts
- [x] Build Header component (logo, nav links, mobile hamburger)
- [x] Build Footer component (contact info, certification badges, copyright)

### Phase 2 — Home Page ✅
- [x] Hero section with tagline and CTA buttons
- [x] Product categories grid (11 category cards)
- [x] Certifications bar
- [x] Stats section (60+ products, 11 categories, 20+ countries, 4 certs)
- [x] Why Choose Ikvion section
- [x] Export CTA banner

### Phase 3 — Product Pages ✅
- [x] Create product data files (JSON) for all 11 categories (60 products total)
- [x] Build Products overview page (`/products`) with category cards
- [x] Build dynamic category page (`/products/[category]`) with product grid
- [x] Product cards — name, SKU, available sizes (image placeholders ready)

### Phase 4 — About & Contact ✅
- [x] About page with company info, mission, certifications, values
- [x] Contact page with form (Formspree integration)
- [ ] Google Maps embed (pending)

### Phase 5 — Polish & Deploy
- [ ] Responsive design audit (mobile, tablet, desktop)
- [ ] Product images (once provided)
- [ ] SEO meta tags, Open Graph, structured data
- [ ] Performance audit (Lighthouse)
- [x] Set up GitHub Actions workflow for GitHub Pages deployment
- [ ] Enable GitHub Pages in repo settings (Pages → Source: GitHub Actions)

---

## Open Questions

1. **Product images** — Are high-res individual product photos available, or should we extract/crop from the brochure PDF?
2. **About page content** — Is there additional company story/history text beyond what's in the brochure?
3. **Domain** — Is `ikvion.com` already owned and ready to point to the deployment?
4. **Analytics** — Should Google Analytics or similar be set up?
5. **Languages** — English only, or multilingual support needed?
6. **WhatsApp integration** — Should there be a floating WhatsApp button for inquiries (common for Indian exporters)?
