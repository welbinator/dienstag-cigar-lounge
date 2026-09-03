# Dienstag Cigar Lounge

Marketing site for **Dienstag Cigar Lounge** — 680 Mead Drive, Suite 5, North Liberty, Iowa.
A members' cigar lounge sharing space with WineStyles (full bar). Monthly membership with
personal cigar lockers.

## Stack
- **Astro** (static). Pages: Home, Selection, Membership, Contact.
- Design system derived from the Abetterlou reference (refero): espresso `#140b00` canvas,
  warm cream `#fff1e0` text, single antique-gold accent `#c8a35e`. Fonts: Cormorant Garamond
  (display) + Manrope (body).
- Custom imagery generated on-brand (hero, humidor, whiskey).

## Develop
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # -> dist/
npm run preview
```

## Deploy
- **Production:** Cloudflare Pages (serves from root; `PAGES_BASE` empty).
- **Staging:** GitHub Pages via `.github/workflows/deploy-staging.yml` on the `staging`
  branch — builds with `PAGES_BASE=/<repo>/`, injects `noindex` + blocking `robots.txt` at
  build time so staging never gets indexed.

Contact form backend (delivery + Turnstile) is wired at deploy time — not yet live.
No fabricated business details: hours, pricing, and phone are intentionally left to be
confirmed by the owner.
