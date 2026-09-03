// @ts-check
import { defineConfig } from 'astro/config';

// Base-path pattern: staging (GitHub Pages) sets PAGES_BASE=/dienstag-cigar-lounge/,
// production (Cloudflare) leaves it empty so the site serves from root.
const base = process.env.PAGES_BASE || '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://dienstagcigar.com',
  base,
  trailingSlash: 'ignore',
});
