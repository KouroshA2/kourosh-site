# kourosh-site

Static portfolio (HTML/CSS/JS, no build step), bilingual FA/EN.

## Deploy (GitHub Pages)
1. Name the repo `kourosha2.github.io`.
2. Settings → Pages → Deploy from a branch → `main` / `(root)`.
3. Live at https://kourosha2.github.io/ — `/about` and `/projects` work without `.html`.

## Local preview
Use a static server (not file://), e.g. `npx serve .` (serve handles clean URLs).

## Structure
- `index.html`, `about.html`, `projects.html`, `404.html`
- `css/` base (box-model theme), polish (reveal + mobile nav), modal, pages/about, pages/404
- `js/main.js` language switch, nav · `js/modals.js` project dialogs · `js/i18n/*` English strings
- `robots.txt`, `sitemap.xml`, `favicon.svg`, `.nojekyll`
