# Surge Design System

Surge (surgeestimates.com) is an AI estimating tool for restoration/remediation companies (water, fire, mold, biohazard). Field techs capture a job with voice notes, photos, video, and 3D scans; Surge's AI asks follow-up questions, then generates an accurate, insurance-compliant, **Xactimate-ready estimate** in ~90 seconds. Value props: higher approval rates, higher payouts per claim, cycle time cut in half.

The brand and product are modeled on [rebuild.work](https://www.rebuild.work/) (per founder direction): same product shape (Projects → capture inputs → follow-up questions → Generate Estimate → Export PDF/Xactimate), same visual language (warm paper background, vertical grid hairlines, big grotesque headlines, blue pill actions, grainy yellow→orange gradients, phone mockups). Surge uses its own name, logo, and gradient identity.

Sources given: https://www.rebuild.work/ (fetched), 5 product screenshots + screen-capture MP4s in `uploads/`.

## CONTENT FUNDAMENTALS
- Voice: direct, outcome-first, sales-minded. Speaks to owners/estimators in dollars and time: "Restoration estimates in seconds", "Cut your cycle time in half and increase your revenue per job."
- Second person ("your team", "you can export"); company referred to by name, never "we" in features.
- Eyebrow labels: short ALL-CAPS category words — SCOPE, INPUTS, EXPORT, HOW IT WORKS, CUSTOMER STORIES, GET STARTED.
- Headlines: sentence case, plain-spoken, concrete ("Get Xactimate-ready estimates in seconds", "Add value to every type of job"). No jargon-free fluff; numbers are used ("12% revenue increase", "90 seconds to 2 minutes").
- Body copy: 1–2 sentences max per block. No emoji anywhere.
- Product UI copy: terse nouns and verbs — "Projects", "New", "Generate Estimate", "Voice Note", "3D Scan", "Documents", "Export", "Note submitted".
- CTAs: ALL-CAPS pill "BOOK A DEMO"; in-product buttons Title Case.

## VISUAL FOUNDATIONS
- **Ground**: warm off-white paper `--paper #F4F3EE`; sections separated by full-width hairlines; thin vertical grid lines (`.grid-lines`) run through hero/feature sections — a signature motif the founder wants kept.
- **Color**: near-black ink `#17181A`; action blue `#1F8FE5` (pill buttons, checkmark chips, progress bar); pale blue `#BFE2FA` for illustrative icon fills; success green `#5BC531` (confirm checks); grainy yellow→orange→ember gradient (`.surge-grad` + noise overlay) as brand energy behind/around phone mockups.
- **Type**: Hanken Grotesk (Google Fonts substitute — Rebuild uses a proprietary grotesque; see caveat). Display: 600 weight, tight tracking (−0.03em), tight leading. Body 400/16–19px, gray `--ink-2`. Eyebrows 12px/600/0.14em caps.
- **Buttons**: pill radius always. Primary = blue fill, white text; brand CTA = black fill; hover darkens + slight lift; press scales to .97.
- **Cards**: pure white on paper, radius 24px, very soft diffuse shadow; floating artifacts (PDF/Xactimate docs) get bigger float shadows and slight rotation.
- **Phone mockups**: near-black bezel, ~52px outer radius, off-white screen, huge soft drop shadow; screens use big left-aligned 34px titles.
- **Motion**: calm, premium. Fade-up reveals on scroll (24px, 900ms, `--ease-out`); success states pop with spring (`--ease-spring`); progress bars animate width; audio waveforms scaleY loop. Nothing bounces gratuitously; reduced-motion respected.
- **Hover**: darker fill or 60% opacity on text links; **press**: scale .97. Transparency/blur only for modal overlays (blurred screen behind "Note submitted" card).
- **Imagery**: real photography of job sites/techs, warm natural light (see `assets/image-prompts.html` for generation prompts). No illustration style beyond flat pale-blue UI glyphs.

## ICONOGRAPHY
- In-product illustrative glyphs: chunky rounded strokes filled/stroked in pale blue `--blue-100` on white tiles (waveform, globe/3D scan, documents) — recreated as inline SVG in `components/core/Icon.jsx` (source site ships these as raster; ours are hand-matched vectors, flagged as approximations).
- Functional icons: use [Lucide](https://lucide.dev) from CDN (rounded 2px stroke matches the brand); small UI marks (check, arrow-up, pause) drawn inline in components.
- No icon font, no emoji, no unicode-as-icon.
- Logo: official Surge wordmark in `assets/logo.svg` (ink) and `assets/logo-white.svg` (for dark/gradient grounds), from the founder-supplied vector. No standalone mark; use the wordmark.

## Index
- `styles.css` → imports `tokens/` (colors, typography, spacing, effects, motion)
- `assets/` — logo.svg, logo-mark.svg, image-prompts.html (ChatGPT prompts w/ copy buttons)
- `components/core/` — Button, Eyebrow, Card, Badge, Icon, PhoneFrame, VoiceBar, ProgressBar, ChecklistItem, MenuList, SuccessCheck, InputTile
- `ui_kits/website/` — marketing site recreation (index.html)
- `ui_kits/app/` — mobile product mockup (index.html)
- `guidelines/` — specimen cards for the Design System tab
- `SKILL.md` — agent skill entry point

## Intentional additions
- `Icon` wrapper (pale-blue illustrative glyph set) — source ships rasters; vectors needed for reuse.
- `PhoneFrame` — recurring mockup chrome extracted as a component.

## Caveats
- Fonts: Rebuild's exact typeface unknown/proprietary; **Hanken Grotesk** (Google Fonts, loaded via @import) substituted. Swap by editing `tokens/typography.css`.
- No standalone logo mark (only the wordmark was supplied); app icon contexts use the wordmark.
- Screenshots were the only product source (no codebase/Figma); product screens are faithful-to-screenshot recreations.
