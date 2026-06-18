# Variant A — Operator's Notebook

**Reference mood**: A senior engineer's Moleskine. A research lab whiteboard. A vintage technical manual. The aesthetic is "deliberate, on-paper, hand-marked" — not designed, not polished, not on-screen.

**Palette**:
- Paper: `#F5F2EC` (warm cream, reads as paper, not screen)
- Ink: `#1A1A1A` (near-black, reads as pencil/pen, not pure screen black)
- Ink soft: `#4A4945` (for secondary text)
- Ink faint: `#8A8780` (for tertiary text, footnotes)
- Accent: `#B85C3D` (terracotta — the personal-page's existing accent color, used sparingly for section numbers, emphasis lines, key data)
- Rule: `#C8C2B0` (hairlines for the top/bottom rules and dividers)

**Typography**:
- Body: `IBM Plex Mono, ui-monospace, SF Mono, Cascadia Code, Courier New, monospace` — reads as engineer/operator
- Section labels (h1, emphasis): `IBM Plex Serif, Charter, Source Serif Pro, Georgia, serif` — reads as deliberate, slow, considered
- Numbers (data callouts): always monospace, right-aligned numerically
- NO sans-serif for the body

**Diagrams**: Hand-drawn-feel SVG. Lines that look sketched (slight imperfections via `stroke-linecap: round` + `stroke-dasharray` on faded lines + `transform: rotate(0.Xdeg)` for boxes). Boxes drawn freehand. Arrows that bend. Numbers in the diagrams that look handwritten (italic mono). The point: a hand-drawn diagram signals "I did the thinking, not the design."

**Layout**: Each slide is a 1080×1350 portrait page with 80px top/bottom + 88px left/right padding. Hairline rules at top + bottom of every slide. Folio (page label) in the top-left, slide number in the top-right. Bodyline in the bottom-left, page-indicator in the bottom-right.

**Mood**: Senior engineer, on a long task, taking notes. Not making a marketing asset.

**Voice match**: 9/10. Matches the personal-page voice exactly. The cream + brown + terracotta palette is the same family the personal-page already uses.

**Differentiation**: 9/10. Hand-drawn-feel + cream paper + monospace is rare in 2026 LinkedIn. Most carousels are clean Infographic style with gradients + sans-serif + illustrated icons. This stands out.

**Algorithm fit**: 8/10. Dwell time will be high (readers slow down to "decipher" the hand-drawn feel — paradoxically a feature). Save rate will be high (engineers save whiteboards for reference). Comment rate is moderate (the aesthetic is "operator, not influencer" — comments will come from senior engineers, not generic business audience).

**Practical fit**: 9/10. Hand-drawn-feel SVG is achievable in pure CSS + SVG (no exotic graphics libraries). System font fallbacks ensure the design works on any phone. The 6 slides are self-contained (no external dependencies).

**Risk**: Low. The cream + brown contrast is medium; on a phone in bright sunlight it might be slightly hard to read. The hand-drawn feel can be adjusted (more or less "drawn") based on user feedback. The monospace body text is comfortable for engineers but may feel academic to a general audience.

**Files**:
- HTML: `rag-pilot-failures-a.html` (24 KB)
- PNGs: `png/a-1.png` through `png/a-6.png` (~186 KB each, 2160×2700 at 2x DPR)
- Contact sheet: `png/contact-sheet-a.png` (474 KB, shows all 6 slides in a 3×2 grid)

**Source of truth**: `rag-pilot-failures-a.html` is the source of truth. PNGs are derived renders. The user can edit the HTML and re-render with `node render-carousel.cjs` to regenerate the PNGs.
