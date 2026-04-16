# CLAUDE.md — She Shapes Tech Website

## Projektübersicht
Statische Website für das Studierendennetzwerk "She Shapes Tech" (Frauen in der Technik @ ZHAW School of Engineering).

## Tech Stack
- **Framework:** Astro (Static Site Generator)
- **Hosting:** GitHub Pages via GitHub Actions
- **Sprachen:** DE/EN (i18n via Astro routing)
- **Schrift:** Nunito (Google Fonts)
- **Keine** Datenbank, kein Backend, kein CMS

## Projektstruktur
SheshapesTech.github.io/
├── .github/workflows/deploy.yml   # GitHub Actions Deployment
├── public/                        # Statische Assets (Logo, Bilder)
├── src/
│   ├── i18n/
│   │   ├── de.json            # Deutsche Übersetzungen
│   │   ├── en.json            # Englische Übersetzungen
│   │   └── utils.ts           # i18n Hilfsfunktionen
│   ├── layouts/
│   │   └── BaseLayout.astro   # Haupt-Layout (Header, Footer)
│   └── pages/
│       ├── index.astro        # Home (DE)
│       ├── events.astro       # Events (DE)
│       ├── about.astro        # Über uns (DE)
│       ├── sponsors.astro     # Partner (DE)
│       ├── contact.astro      # Kontakt (DE)
│       ├── impressum.astro    # Impressum (DE)
│       ├── datenschutz.astro  # Datenschutzerklärung (DE)
│       └── en/                # Englische Versionen (gleiche Struktur)
├── astro.config.mjs
└── package.json

## Brand & Design
- **Primärfarbe:** `#6c86cc` (Blau/Indigo aus dem Logo)
- **Textfarbe:** `#28292a` (fast Schwarz)
- **Hintergrund:** `#ffffff`
- **Schrift:** Nunito (400, 500, 600, 700, 800)
- **Alle CSS-Variablen** leben in `BaseLayout.astro` unter `:root`
- Designänderungen immer über CSS-Variablen, nie hardcoded

## i18n Regeln
- Alle Texte leben ausschliesslich in `src/i18n/de.json` und `src/i18n/en.json`
- **Nie** Text direkt in `.astro` Dateien hardcoden
- Sprache wird aus der URL gelesen via `getLangFromUrl(Astro.url)`
- DE: `/` `/events` `/about` `/sponsors` `/contact` `/impressum` `/datenschutz`
- EN: `/en` `/en/events` `/en/about` `/en/sponsors` `/en/contact` `/en/impressum` `/en/datenschutz`
- Import-Pfade überall (DE und EN): `@/i18n/utils` (Alias für `src/`)

## Code-Konventionen
- Sprache: Code-Kommentare auf Englisch, Erklärungen an das Team auf Deutsch
- Styling: Scoped `<style>` direkt in der `.astro` Datei, kein globales CSS ausser in `BaseLayout.astro`
- Keine externen CSS-Frameworks (kein Tailwind, kein Bootstrap)
- Komponenten in `src/components/` wenn etwas auf mehr als einer Seite verwendet wird
- Bilder und Assets immer in `public/`

## Deployment
- Branch `main` → automatisches Deployment via GitHub Actions
- Lokal testen: `cd myproject && npm run dev`
- Build testen: `cd myproject && npm run build`
- Node.js Version: 22

## Rechtliches
- She Shapes Tech ist ein **eigenständiger Verein** — handelt nicht im Namen der ZHAW (Rechtsdienst-Auflage)
- Vereinsadresse (öffentlich): c/o ZHAW School of Engineering, Technikumstrasse 9, 8400 Winterthur
- Kontakt: sheshapestech.engineering@zhaw.ch (ZHAW-Postfach, verwaltet durch Diversity Beauftragte SoE)
- Impressum: `/impressum` — bei Adressänderung in `de.json` + `en.json` anpassen
- Datenschutz: `/datenschutz` — bei Änderungen am Tech-Stack (z.B. Analytics, neue externe Dienste) aktualisieren
- Google Fonts werden aktuell von Google-Servern geladen (IP-Übermittlung, dokumentiert in Datenschutz) — geplantes Self-Hosting: Issue #18

## Wichtige Entscheidungen (Kontext)
- Kein CMS für den Start — Inhalte direkt in JSON-Dateien
- Meet & Eat wurde bewusst weggelassen (zu temporär für eigene Seite)
- Team-Seite existiert noch nicht — keine persönlichen Daten online vor Absprache
- Zweisprachigkeit ist Pflicht, nicht optional
- Hosting soll später auf ZHAW migriert werden können (Alternativen: Cloudflare Pages)