# mag-maps-page

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmaps.azmag.gov%2F&label=website&style=flat-square)](https://maps.azmag.gov/)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/AZMAG/mag-maps-page?&logo=github&style=flat-square)](https://github.com/AZMAG/mag-maps-page/releases)
![GitHub Release Date](https://img.shields.io/github/release-date/AZMAG/mag-maps-page?&logo=github&style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/AZMAG/mag-maps-page?&logo=github&style=flat-square)
[![GitHub issues](https://img.shields.io/github/issues/AZMAG/mag-maps-page?&logo=github&style=flat-square)](https://github.com/AZMAG/mag-maps-page/issues)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/AZMAG/mag-maps-page?style=flat-square)
[![semver](https://img.shields.io/badge/semver-2.0.0-blue?style=flat-square)](https://semver.org/)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

The Maricopa Association of Governments (MAG) mapping home page is the portal to MAG's interactive mapping and analysis sites.

This JavaScript web-page was developed by MAG staff for MAG member agencies and the public.

## :key: Keywords

`planning` `regional` `Maricopa County` `Pinal County` `State` `Arizona` `MAG` `MPO` `COG` `maps` `GIS` `ESRI` `#MAGmaps`

## Version | 6.7.0

- **Updated** | 2026-09-02
- **Created** | 2014-10-21

Releases will be numbered with the following format: **`<major>.<minor>.<patch>`**

And constructed with the following guidelines:

1. **MAJOR** version when you make incompatible API changes **bumps the major** resets minor and patch
2. **MINOR** version when you add functionality in a backwards-compatible manner **bumps the minor** resets patch
3. **PATCH** version when you make backwards-compatible bug fixes and misc changes **bumps only the patch**

## :computer: Site URL

- [maps.azmag.gov](https://maps.azmag.gov/)

## Development Instructions

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** – v24.x or later
- **npm** – v11.x or later (comes with Node.js)
- **Git** – for cloning the repository
- **Code Editor** – VS Code (recommended) or your preferred editor

To verify your Node and npm versions:

```bash
node --version
npm --version
```

### :gear: Quickstart Instructions

1. [Clone this repo](https://github.com/AZMAG/mag-maps-page) - `https://github.com/AZMAG/mag-maps-page`
2. `cd` into the `mag-maps-page` folder.
3. Install the dependencies with `npm install`.
4. Copy `.env.example` to `.env` and fill in the values (see below).
5. Start the dev server with `npm run dev`.

### :lock: Environment Variables

Environment variables are read through Vite and must be prefixed with `VITE_`. Copy the
template and supply real values before running the app:

```bash
cp .env.example .env
```

| Variable | Description |
| --- | --- |
| `VITE_GA_MEASUREMENT_ID` | Google Analytics measurement ID (only initialized in production builds). |
| `VITE_APP_BASENAME_DEV` | Router basename used by `npm run dev`. |
| `VITE_APP_BASENAME_TEST` | Router basename used by `npm run build:test`. |
| `VITE_APP_BASENAME_PROD` | Router basename used by `npm run build`. |

> Never commit `.env` or hardcode these values in source.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

- Runs the app in development mode with hot module replacement.
- Open <http://localhost:3000> to view it in the browser (opens automatically).
- The page will reload if you make edits.

### `npm run build`

- Runs `npm run replace`, builds the app for production into the `dist` folder, then opens `dist`.
- It correctly bundles React in production mode and optimizes the build for the best performance.
- Your app is ready to be deployed!

> **Note:** the final `explorer dist` step is Windows-only. On macOS/Linux or in CI, run
> `npm run replace && npx vite build --mode production` instead.

### `npm run build:test`

- Same as `npm run build`, but uses `--mode test` so the test basename is applied.

### `npm run preview`

- Serves the built `dist` folder locally so you can verify a production build before deploying.

### `npm run lint`

- Runs ESLint across the project. Lint is **not** run automatically by the dev server.

### `npm run check-casing`

- Verifies file and folder naming conventions (PascalCase `.jsx`, camelCase `.js`, kebab-case folders).

### `npm run replace`

- Replaces the version number, copyright, and build date from `package.json` in the rest of the
  documents (`README.md`, `LICENSE`, `public/LICENSE`, `public/humans.txt`, `index.html`,
  `src/config/docConfig.js`).
- Runs automatically as part of `build` and `build:test`.

## Project Structure

```text
src/
├── app.jsx           # Root component: providers, router, analytics
├── main.jsx          # React entry point
├── assets/           # Images and logos
├── components/       # Buttons, contact-us, modals, scroll-to-top
├── config/           # docConfig, quotes, training dates
├── layout/           # Header, footer, heroes, cards, sections
├── pages/            # Home, Trainings
├── routes/           # Route definitions
├── services/         # API/email services
└── stores/           # MobX store and React context
```

## Deployment Instructions

### Production

- add files to the server here: `\\wwwroot\IMSSite\`
- [Published site](https://maps.azmag.gov/): `https://maps.azmag.gov/`

### Services

This project is a static front-end and does not consume any map or REST services directly.
Outbound requests are limited to Google Analytics and the Contact Us email service in
`src/services/contactUsEmail.js`.

## Technologies

A list of technologies used within the project:

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title="JavaScript"><img src="https://github.com/get-icon/geticon/raw/master/icons/javascript.svg" alt="JavaScript" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/html5/" title="HTML5"><img src="https://github.com/get-icon/geticon/raw/master/icons/html-5.svg" alt="HTML5" width="31px" height="31px"></a>
<a href="https://www.w3.org/TR/CSS/" title="CSS3"><img src="https://github.com/get-icon/geticon/raw/master/icons/css-3.svg" alt="CSS3" width="31px" height="31px"></a>
<a href="https://reactjs.org/" title="React"><img src="https://github.com/get-icon/geticon/raw/master/icons/react.svg" alt="React" width="31px" height="31px"></a>
<a href="https://mobx.js.org/README.html" title="MobX"><img src="https://github.com/get-icon/geticon/raw/master/icons/mobx.svg" alt="MobX" width="31px" height="31px"></a>
<a href="https://tailwindcss.com/" title="Tailwind CSS"><img src="https://github.com/get-icon/geticon/raw/master/icons/tailwindcss-icon.svg" alt="Tailwind CSS" width="31px" height="31px"></a>
<a href="https://fontawesome.com/" title="Font-Awesome"><img src="https://github.com/get-icon/geticon/raw/master/icons/font-awesome.svg" alt="Font-Awesome" width="31px" height="31px"></a>
<a href="https://eslint.org/" title="ESLint"><img src="https://github.com/get-icon/geticon/raw/master/icons/eslint.svg" alt="ESLint" width="31px" height="31px"></a>
<a href="https://prettier.io/" title="Prettier"><img src="https://github.com/get-icon/geticon/raw/master/icons/prettier.svg" alt="Prettier" width="31px" height="31px"></a>
<a href="https://www.npmjs.com/" title="npm"><img src="https://github.com/get-icon/geticon/raw/master/icons/npm.svg" alt="npm" width="31px" height="31px"></a>
<a href="https://vitejs.dev/" title="Vite"><img src="https://github.com/get-icon/geticon/raw/master/icons/vite.svg" alt="Vite" width="31px" height="31px"></a>
<a href="https://www.markdownguide.org/" title="markdown"><img src="https://github.com/get-icon/geticon/raw/master/icons/markdown.svg" alt="markdown" width="31px" height="31px"></a>
<a href="https://code.visualstudio.com/" title="vscode"><img src="https://github.com/get-icon/geticon/raw/master/icons/visual-studio-code.svg" alt="vscode" width="31px" height="31px"></a>

## Credits

`Maricopa Association of Governments (MAG) and the MAG member agencies`

## :warning: Licensing

Copyright 2026 Maricopa Association of Governments (MAG)

This project is licensed under the MIT license.

- [LICENSE](LICENSE)

[Back to top](#mag-maps-page)
