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
  components/         Header, Hero, Video, FeatureRow, InviteForm, Footer
  config.js           Formspree endpoint
  styles/
    tokens.css        design-system source of truth -- kept verbatim, don't edit
    global.css        dark remap of those tokens + all component styles
public/               copied to dist/ as-is
  CNAME               omnica.ai -- deleting this unpoints the custom domain
  chimera-mobile/     standalone privacy policy for the Chimera Mobile app
  brand/  shots/  video/
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
- **The hero video is self-hosted**, not a YouTube/Vimeo embed — no third-party
  chrome, cookies, or consent banner on a page whose only job is the invite
  form. `public/video/omnica-overview.mp4` is 6.7 MB (H.264 High@L4.2, 1080p60,
  CRF 23, `+faststart`), re-encoded from a 36 MB master; screen content
  compresses hard. Nothing but `poster.webp` loads until the user clicks — the
  `<video>` element isn't mounted before then. Re-encode with:

  ```
  ffmpeg -i master.mov -c:v libx264 -profile:v high -level:v 4.2 -crf 23 \
    -preset slow -pix_fmt yuv420p -g 120 -c:a aac -b:a 128k \
    -movflags +faststart out.mp4
  ```

  Both flags matter. Without `+faststart` the whole file must download before
  playback starts. Without `-level:v 4.2` x264 picks Level 5.0 here, which some
  older mobile hardware decoders won't touch; 1080p60 fits in 4.2 and the
  constraint costs 0.09% size. Commit only the final encode — it's permanent.
  GitHub Pages' 100 GB/month soft bandwidth limit is ~15,000 full plays here; if
  that ever binds, move the file to Cloudflare R2/Stream and change the paths at
  the top of `Video.jsx`.
- **Captions** live in `omnica-overview.en.vtt`, transcribed from the narration
  with ElevenLabs Scribe and cued to its word timings. The track has no
  `default` — captions render bottom-centre, over the app UI in the zoomed
  shots, so the native CC button opts in rather than out. Re-cutting the video
  invalidates them; regenerate rather than hand-patching the offsets.
- **Screenshots are WebP**, downscaled from the design export (1.3 MB → 119 kB).
  `shots/orchestrate.webp` keeps its native width because the layout scales it
  to 186%.
- **Logo and mark are SVG**, generated from `Omnica_Logo-01.svg` in the brand
  folder by cropping the viewBox to the artwork's true bounds and dropping the
  opaque black backing rect the Illustrator export includes. `brand/og.png` and
  the favicons are rasterised from those SVGs.
- **`width: auto` on the logo images is load-bearing.** Their intrinsic
  `width`/`height` attributes are presentational hints that CSS `height` alone
  doesn't override, so omitting it renders the mark stretched flat.
