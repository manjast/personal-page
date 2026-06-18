# Variant D — Lab Notebook

**Reference mood**: An arXiv preprint. A Nature Methods figure. A scientific lab notebook. The aesthetic is "data, measured, plotted, not designed."

**Palette**:
- Paper: `#FAFAF8` (warm white, slightly more saturated than pure white — reads as "a printed page, not a screen")
- Ink: `#1A1A1A`
- Ink soft: `#4A4A4A`
- Ink faint: `#8A8A8A`
- Rule: `#D8D8D0`
- Accent teal: `#2A6F6B` (data line color, axis labels, primary accent)
- Accent orange: `#C76B3D` (highlight color, the key data points, the closing question mark)

**Typography**:
- Body: `Charter, Source Serif Pro, IBM Plex Serif, Georgia, serif` — academic-paper feel
- Section labels (h1, eyebrows): `IBM Plex Sans, Inter, sans-serif` (uppercase, letter-spaced)
- Numbers (data callouts): `IBM Plex Mono, ui-monospace, monospace` — measurement precision
- Axis labels (in SVG charts): `IBM Plex Mono, ui-monospace, monospace` — small, precise

**Diagrams**: Data plots, not hand-drawn.
- Slide 2 (Fix 1): line chart showing answer-quality score 3.1 → 3.7 across 80 questions
- Slide 3 (Fix 2): bar chart showing 2–3 weeks (before) → 2–3 days (after) time-to-fix
- Slide 4 (Fix 3): bar chart showing $0.15/query (before) → $0.037/query (after) with a 4x cost cut annotation
- All charts have explicit axes, labels in mono, data points in the teal accent color

**Layout**: Each slide is 1080×1350 with a 2px black top line + 1px black bottom line + a header band in the top-left ("RAG FIELD NOTES · N=4") + a footer in the bottom-right ("stefanmanja.com"). The body has section labels in teal uppercase + serif body text + data callouts in mono with the orange accent.

**Mood**: Scientific paper. Reads like a Nature Methods figure or an arXiv preprint.

**Voice match**: 6/10. The lab notebook framing signals "I measured this" — a credibility claim. But the academic aesthetic doesn't match Stefan's "operator" positioning. A senior engineer reads it as "this is what good research looks like." A non-engineer reads it as "this is an academic paper."

**Differentiation**: 7/10. Data plots are unusual on LinkedIn. The lab notebook aesthetic is the second-most-unusual of the 5 variants (after the typewriter spec).

**Algorithm fit**: 8/10. Dwell time high (data plots invite the reader to study the numbers). Save rate high (engineers save data visualizations for reference). Comment rate moderate-high (the data invites "what's the methodology?" replies).

**Practical fit**: 7/10. The serif body + sans section labels is the academic-paper convention. The data plots are the visual differentiator. But the serif body might feel academic on LinkedIn, where most carousels are sans-serif.

**Risk**: Medium. The serif body might feel academic. The data plots need real data (I have the verified numbers, but plotting them well at 1080×1350 is design work). The "lab notebook" framing might read as "academic paper" which is the wrong genre for a LinkedIn post.

**Files**:
- HTML: `rag-pilot-failures-d.html` (23 KB)
- PNGs: `png/d-1.png` through `png/d-6.png` (~155 KB each)
- Contact sheet: `png/contact-sheet-d.png` (343 KB)
