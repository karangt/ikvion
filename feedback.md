# Website Feedback

## 🔴 Pending (next session)

### Replacement product images (24 face SKUs)

User will provide new images — drop-in replacements, no code changes needed.
Place files in `public/images/products/<category-slug>/<SKU>.png` — they load automatically.

**SKUs awaiting new images:**
- `IK-NA-01`, `IK-NA-02`, `IK-NA-03`, `IK-NA-04` → `public/images/products/neck-aids/`
- `IK-SA-01`, `IK-SA-02`, `IK-SA-04`, `IK-SA-05`, `IK-SA-06`, `IK-SA-07` → `public/images/products/shoulder-aids/`
- `IK-AP-01`, `IK-AP-02`, `IK-AP-03`, `IK-AP-04` → `public/images/products/abdomen-pelvic-aids/`
- `IK-BA-02`, `IK-BA-03` → `public/images/products/chest-rib-back-aids/`
- `IK-CR-01`, `IK-CR-02`, `IK-CR-03` → `public/images/products/chest-rib-back-aids/`
- `IK-FW-02`, `IK-FW-03`, `IK-FW-04`, `IK-FW-05` → `public/images/products/forearm-wrist-aids/`
- `IK-CA-01` → `public/images/products/traction-comfort/`

**Note:** CSS face-hiding (gradient overlay + object-position) was tried and reverted. Images will be used as-is.

---

## Status

### ✅ Completed (this session)
- Nav order: Products now before About
- Search bar with live dropdown in header (desktop + mobile)
- Brochure download button on home page hero (place `public/brochure.pdf` to activate)
- "Enquire" label fixed on all category pages
- Chest, Rib & Back layout: 3 products per row (3+3)
- Features & benefits added to all 60 products — shown in click modal on category pages
- Image backgrounds: `mix-blend-mode: multiply` applied so grey PNGs blend with site background
- Image sizes standardised (h-56 container, h-64 in modal)
- Swapped images corrected: Maternity ↔ Hernia, Knee Immobilizer ↔ Varicose Stocking Above Knee, Walking Stick Four Leg ↔ Walker Folding
- WhatsApp floating button (bottom-right, +91-8097197772)
- Favicon replaced with teal globe SVG
- SEO content: all product descriptions and features/benefits are keyword-rich

### ⏳ Pending (needs your input)
- **Logo** — Provide actual logo file, drop in `public/`, share filename
- **Figma colours/fonts** — Open https://give-port-04623970.figma.site, share hex colours + font name(s)
- **Traction images** — Verify in browser: IK-TK-02 (Leg Traction Brace), IK-CA-01 (Cervical Pillow), IK-CA-02 (Coccyx Seat Cushion) — confirm which need swapping
- **ROM Knee Brace (IK-KC-06)** — If still appears small, the source PNG needs replacing
- **brochure.pdf** — Place file in `public/` for download button to work
- **Web3Forms key** — Replace `YOUR_ACCESS_KEY_HERE` in `src/pages/contact/index.astro`
- **Google Analytics** — Replace `G-XXXXXXXXXX` in `src/layouts/BaseLayout.astro`
- **Google Maps embed** — Contact page, pending
- **DNS** — Point ikvion.com → GitHub Pages; then remove `base: '/ikvion/'` from astro.config.mjs
- **OG image** — Create `public/og-image.png` (1200×630) and wire `og:image` in BaseLayout
- **Responsive audit** — Mobile/tablet/desktop layout review
- **Lighthouse audit** — Performance check
- **Sitemap** — Submit https://www.ikvion.com/sitemap-index.xml to Google Search Console after DNS

---

## Original Feedback

## Design & Branding

1. **Logo** — Update with the actual Ikvion logo.

2. **Nav order** — Swap the sequence: Products should come before About in the navigation.

3. **Colour scheme & fonts** — Pick the colour scheme and font from https://give-port-04623970.figma.site and apply site-wide.

6. **Favicon** — Use the globe from the Ikvion logo as the favicon, in teal colour.

## Home Page

3. **Brochure download** — Add a download button for `brochure.pdf` on the main (home) page.

4. **Search** — Add a search tab/bar that searches products and redirects to the matching product page.

18. **WhatsApp integration** — Add WhatsApp contact button / chat integration.

## Product Pages

7. **Product detail — Features & Benefits** — On clicking a product, the customer should see its features and benefits. Reference sites for inspiration (do not copy directly — content will be reviewed):
   - https://www.tynorstore.com
   - https://vissconext.com
   - https://www.sunorthotech.com
   - https://www.metroorthoticsindia.com

9. **CTA button label** — Change "Enquire about this category" to "Enquire" across all category pages.

10. **Chest, Rib & Back Aids layout** — Show 3 products in the first row and 3 in the second row (currently uneven).

14. **Image sizing** — Keep all product images the same size, and large enough to be clearly visible.

15. **Image backgrounds** — Product image backgrounds are grey. Change them to match the website background so they blend in seamlessly.

## Image Corrections

The following product images are incorrect or mismatched — please verify and fix:

11. **Abdomen & Pelvic Aids** — Maternity Belt and Hernia Belt photos are swapped. Also audit other products in this category for similar mismatches.

12. **Knee & Calf Aids** — ROM Knee Brace photo is too small; it should match the size of other product images.

13. **Knee & Calf Aids** — Knee Immobilizer and Varicose Stocking Above Knee photos are swapped. Audit remaining images in this category for other discrepancies.

16. **Traction Kit & Comfort Aids** — Leg Traction Brace, Cervical Pillow, and Coccyx Seat Cushion images do not match their descriptions. Replace with correct images.

17. **Walking Aids** — Walking Stick Four Leg and Walker Folding images are swapped. Correct them.

## SEO

8. **SEO-optimised content** — All pages (especially product pages with features & benefits) should be written and structured to rank on Google for relevant search terms (e.g. "orthopedic soft goods exporter India", product names + "manufacturer/exporter"). Use proper heading hierarchy, meta descriptions, and keyword-rich copy.
