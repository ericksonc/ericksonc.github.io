# omnica.ai

Source **and** deploy repo for the Omnica closed-beta landing page.
Vite + React, published to GitHub Pages at <https://omnica.ai>.

## Deploying

Push to `master`. That's it.

`.github/workflows/deploy.yml` builds the site and publishes it to Pages, so
`dist/` is **not** committed. This replaced the old arrangement where the built
Nuxt output *was* the repo contents and was copied in by hand from a separate
`omnica-website` source repo.

> GitHub Pages must be set to **Source: GitHub Actions**
> (Settings → Pages), not "Deploy from a branch".

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve dist/ exactly as Pages will
```

## The invite form

The closed-beta form POSTs to [Formspree](https://formspree.io). The endpoint ID
lives in `src/config.js` and is public by design.

`npm run check:form` fails while that ID is still `REPLACE_ME`, and CI runs it
before every build — so the site cannot deploy with a form that shows visitors a
success message while discarding their email.

## Layout

```
index.html            Vite entry; all <head> meta lives here
src/
  App.jsx             page composition + the feature-row content
  components/         Header, Hero, VideoPlaceholder, FeatureRow, InviteForm, Footer
  config.js           Formspree endpoint
  styles/
    tokens.css        design-system source of truth -- kept verbatim, don't edit
    global.css        dark remap of those tokens + all component styles
public/               copied to dist/ as-is
  CNAME               omnica.ai -- deleting this unpoints the custom domain
  chimera-mobile/     standalone privacy policy for the Chimera Mobile app
  brand/  shots/
scripts/
  check-form-config.mjs
```

### Things worth knowing

- **Dark only.** `tokens.css` ships a light ramp on `:root` plus a parallel
  `--d-*` dark ramp; `global.css` remaps the semantic names onto the dark one.
  To add light mode, move that `:root` block into a `prefers-color-scheme` query.
- **`public/chimera-mobile/privacy/`** is unrelated to this site — it backs an
  App Store listing and previously survived only because the old deploy script
  never deleted anything. It's a tracked build input now. Don't remove it.
- **The hero video is a placeholder.** No clip exists yet; the frame renders as
  an inert still rather than a play button that does nothing.
- **Screenshots are WebP**, downscaled from the design export (1.3 MB → 119 kB).
  `shots/orchestrate.webp` keeps its native width because the layout scales it
  to 186%.
