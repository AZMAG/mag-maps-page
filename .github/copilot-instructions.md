# map-projections — Copilot Cloud Agent Instructions

Trust these instructions first. Only search the codebase if information here is missing or
proves incorrect for the change you are making.

## Repository summary

MAG (Maricopa Association of Governments) Projections Map Viewer — a single-page React app that
displays socioeconomic long-range projections (population, jobs, etc.) for Maricopa and Pinal
counties, Arizona, using the ArcGIS JavaScript API (`@arcgis/core` v5). State is managed with
MobX (`mobx` / `mobx-react-lite`). It is a small (~100 source files), client-only web app; there
is no backend/server code in this repo.

- Language/runtime: JavaScript (JSX), no TypeScript compilation (only `@types/*` for editor
  intellisense).
- Build tool: Vite 8 (`vite.config.js`), plugins: `@vitejs/plugin-react`, `@tailwindcss/vite`.
- Styling: Tailwind CSS v4 (`main.css`, `postcss.config.js`).
- Charting: Chart.js via `react-chartjs-2`.
- Package manager: npm (there is a `package-lock.json`; always use `npm`, not yarn/pnpm).
- Node: verified working with Node v24.x / npm 11.x. No `.nvmrc` or `engines` field is present.

## Environment setup (required before build/dev/lint)

1. Always run `npm install` first if `node_modules` is not already present.
2. Environment variables are read via Vite (`import.meta.env`) from a `.env` file. A template
   exists at `.env.example`. For `npm run dev`/`npm run build` to behave correctly with routing
   base paths and Esri/Google Analytics keys, copy `.env.example` to `.env` and fill in real
   values if you need the app to actually run in a browser. This is **not** required for `vite
   build` or `eslint` to succeed — the build completes with placeholder/missing env vars, just
   with broken map/analytics functionality at runtime.

## Build and dev commands (validated)

- `npm run dev` — starts the Vite dev server on `http://localhost:3000` (opens browser
  automatically via `open: true` in `vite.config.js`; this will fail/hang in a headless cloud
  agent sandbox — do not rely on it there, prefer `vite build` to validate compilation instead).
- `npm run build` — runs `npm run replace && vite build --mode production && explorer dist`.
  **The trailing `explorer dist` step opens a Windows File Explorer window and only exists for
  local Windows use.** It is not cross-platform: on Linux/cloud-agent environments `explorer`
  does not exist and the command will fail even though the actual Vite build succeeded. When
  validating a build in this environment, run `npm run replace && npx vite build --mode
  production` directly instead of `npm run build`, or ignore a failure that occurs only on the
  `explorer dist` step after `✓ built in Xs` has already printed.
- `npm run build:test` — same as `build` but `--mode test`; has the same `explorer dist` caveat.
- `npm run replace` — runs `node replaceScripts.js`, a version/date/copyright string-substitution
  utility (uses `package.json` `version`/`date`/`copyright` fields) that rewrites `README.md`,
  `LICENSE`, `public/LICENSE`, `public/humans.txt`, `index.html`, and
  `src/config/docConfig.jsx`. It runs automatically as part of `build`/`build:test`; you normally
  do not need to run it standalone.
- There is **no test script and no test framework** configured in this repo (no `test` entry in
  `package.json`, no Jest/Vitest config). Do not try to invent or run tests; validate changes via `npm run build` and `vite build`.

## Project layout

- [index.html](index.html) — Vite entry HTML (contains version/date meta tags rewritten by
  `replaceScripts.js`).
- [src/main.jsx](src/main.jsx) — React root entry point, mounts `App` from
  [src/app.jsx](src/app.jsx).
- [src/app.jsx](src/app.jsx) — top-level app component/layout composition.
- [src/pages/MainPage.jsx](src/pages/MainPage.jsx) — main page assembling the map + side panel.
- [src/stores/](src/stores) — MobX store: `createDataStore.js` (central app/map state) and
  `DataContext.jsx` (React context provider for the store). Most cross-cutting state (selected
  area, selected data/year, layers) lives here.
- [src/components/Map/](src/components/Map) — `mainMap.jsx` and `map_xxx.jsx` set up the ArcGIS
  `MapView`.
- [src/components/MapLayers/](src/components/MapLayers) — one file per ArcGIS layer type
  (county, jurisdiction, heatmap, MAG region, MPA boundaries, RAZ, streets), plus
  `layersConfig.jsx`, `getRenderer.js`/`getHeatmapRenderer.js`, and
  `staticClassBreaks.js` (class-break definitions keyed by `raz`/`mpa`/`juris`). See
  `/memories/repo/map-layers.md`-style notes: heatmap layers must be swapped (new `FeatureLayer`
  created and replaced in the map), not mutated via `.url`, because mutating `.url` on an
  already-loaded `FeatureLayer` does not reload its data.
- [src/components/](src/components) also holds top-level UI: `AreaSelector.jsx`,
  `DataSelector.jsx`, `DataTable.jsx`, `LeftPanel.jsx`, `LegendPanel.jsx`, `LineChart.jsx`,
  `Popup.jsx`, `Switch.jsx`, `TransparencySlider.jsx`, `YearSelector.jsx`, plus subfolders for
  `ContactUs/` and `Modals/` (about/error/legal/notes/privacy/success/terms — each a
  Button/Modal/Text or Link/Modal/Text trio).
- [src/layout/](src/layout) — `Footer/`, `Header/`, `Navigation/` (desktop + mobile navbar),
  `Sidepanel/`.
- [src/config/docConfig.jsx](src/config/docConfig.jsx) — version/date/copyright metadata,
  auto-updated by `replaceScripts.js`; do not hand-edit the generated fields, edit
  `package.json`'s `version`/`date`/`copyright` instead if the release metadata truly needs to
  change.
- [src/services/contactUsEmail.jsx](src/services/contactUsEmail.jsx) — email-sending service
  used by the Contact Us form (uses `axios`).
- Config files: [vite.config.js](vite.config.js) (dev server on port 3000, base `./`),
  [eslint.config.js](eslint.config.js) (flat ESLint config — see lint caveat above),
  [postcss.config.js](postcss.config.js) (Tailwind v4), `.editorconfig`.
- [replaceScripts.js](replaceScripts.js) — see "build" notes above.
- `public/` — static assets served as-is (favicons, `manifest.json`, `robots.txt`,
  `humans.txt`, `LICENSE`).
- `dist/` — build output directory (git-ignored aside from being present locally); do not hand
  edit.

## Conventions and gotchas

- This is a `"type": "module"` package; use ESM `import`/`export` syntax everywhere in
  `.js`/`.jsx` files (no CommonJS `require`).
- Prettier is configured with `prettier-plugin-tailwindcss` (see `package.json` `"prettier"`
  field) — if formatting, keep Tailwind class ordering behavior in mind, though there is no
  separate `npm run format` script; Prettier is applied via editor/IDE integration only.
- No `.env` values should be hardcoded into source; always reference via `import.meta.env.VITE_*`.
- Keep FeatureLayer `outFields`/`popupTemplate.outFields` explicit for planning layers rather
  than using wildcard `"*"`, to avoid oversized payloads.
- When changing anything under `src/components/MapLayers/`, be aware `staticClassBreaks.js` is
  keyed by `raz`/`mpa`/`juris`, and the UI's `selectedArea` value `county` is treated as an alias
  of `raz` for class-break lookups.
