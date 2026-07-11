# WORKPRO'S — Marketing Website

Static marketing homepage for **WORKPRO'S**, a family-owned home-services company
(Handyman · Remodeling · Painting · Plumbing), implemented from the
[WORKPRO'S Design System](https://claude.ai/design/p/8c6b71c9-3e99-4392-ace1-18cc14e034a9)
(`ui_kits/website/index.html`).

## Structure

- `index.html` — the homepage: sticky header, dark hero with quote CTA, 6-tile
  services grid, "why us" section, interactive free-quote form, and footer.
- `css/tokens.css` — design tokens synced from the design system (colors,
  typography, spacing, radius, shadows).
- `css/site.css` — base styles, design-system components (buttons, badges,
  cards, form fields, alert), and page sections.
- `js/main.js` — Lucide icon rendering and the quote-form success state.
- `assets/` — brand logo PNGs extracted from the client logo.

## Running locally

It's a static site — open `index.html` directly, or serve the folder:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Notes

- **Fonts:** Archivo (display) and Source Sans 3 (body) from Google Fonts.
- **Icons:** [Lucide](https://lucide.dev) from CDN.
- **Quote form:** submits via [FormSubmit](https://formsubmit.co) to
  `gudiel@workspro.homes` (a Porkbun email forward). The first live
  submission triggers FormSubmit's one-time activation email; after
  confirming, requests arrive as table-formatted emails. A honeypot field
  filters basic spam bots.
- **Photography:** the hero shows a client-provided house photo
  (`assets/hero-house.webp`) inside the brand's bordered white frame.
