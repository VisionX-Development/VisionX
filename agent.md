# VisionX SvelteKit – Agent Guidelines

Dieses Projekt ist das SvelteKit-Grundgerüst für VisionX.

## Stack

- **Framework:** SvelteKit (Svelte 5)
- **Sprache:** TypeScript
- **Build:** Vite

## Konventionen

- **Routen:** Datei-basiert unter `src/routes/`. Seiten: `+page.svelte`, Layout: `+layout.svelte`, Server-Logik: `+page.server.ts` / `+server.ts`.
- **Shared Code:** `src/lib/` (Komponenten, Utils, Stores). Im Code mit `$lib/...` importieren.
- **Statische Assets:** `static/` (z. B. Bilder, Fonts). Pfade ohne `static/` (z. B. `/favicon.svg`).
- **Styling:** Global in `src/app.css`, komponentenbezogen in `<style>` in `.svelte`-Dateien (scoped).

## Wichtige Befehle

- `npm run dev` – Dev-Server
- `npm run build` – Production-Build
- `npm run preview` – Preview des Builds
- `npm run check` – Svelte/TS-Check

## MCP

Im Projekt ist das **Svelte MCP** (`@sveltejs/mcp`) unter `.cursor` konfiguriert. Nutze es für Svelte-/SvelteKit-Dokumentation und Best Practices.

## Auth & Datenbank

Aktuell **ohne Login und ohne Datenbank**. Auth und DB können später manuell ergänzt werden (z. B. better-auth, MongoDB); `src/lib/types.ts` enthält bereits einen `Session`-Typ für die spätere Erweiterung.
