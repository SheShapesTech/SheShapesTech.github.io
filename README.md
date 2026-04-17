# She Shapes Tech — Website

Offizielle Website des Vereins **She Shapes Tech**, Studierendennetzwerk für Frauen in der Technik an der ZHAW School of Engineering.

Website: [sheshapestech.ch](https://sheshapestech.ch)

## Technologie

- [Astro](https://astro.build) — Static Site Generator
- Zweisprachig: Deutsch (`/`) und Englisch (`/en`)
- Hosting: Cloudflare Pages

## Lokales Setup

```bash
# Node.js >= 22 vorausgesetzt
npm install
npm run dev     # http://localhost:4321
```

## Inhalte bearbeiten

Alle Texte sind in `src/i18n/de.json` (Deutsch) und `src/i18n/en.json` (Englisch) abgelegt. Texte nie direkt in `.astro`-Dateien schreiben.

## Deployment

Push auf `main` → automatisches Deployment via Cloudflare Pages.

## Kontakt

sheshapestech.engineering@zhaw.ch
