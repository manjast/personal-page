# Carousel design comparison — 5 variants

5 design variants for the LinkedIn carousel ("Why 90% of RAG pilots fail"). All 5 use the same content; the visual treatment is the only difference.

## Scoring matrix

| Axis | A | B | C | D | A+C |
|---|---|---|---|---|---|
| **Voice match** (Stefan's "operator, not influencer" brand) | 9/10 | 7/10 | 8/10 | 6/10 | **9/10** |
| **Differentiation** (vs. typical LinkedIn AI carousel) | 9/10 | 6/10 | 10/10 | 7/10 | **9/10** |
| **Dwell time** (algorithm reward: longer reads) | 8/10 | 7/10 | 7/10 | 8/10 | **8/10** |
| **Save rate** (algorithm reward: 29.2% for carousels) | 8/10 | 7/10 | 9/10 | 8/10 | **8/10** |
| **Comment rate** (algorithm reward: 15x like weight) | 7/10 | 8/10 | 7/10 | 8/10 | **7/10** |
| **Practical fit** (render + upload + mobile readability) | 9/10 | 8/10 | 6/10 | 7/10 | **8/10** |
| **Risk** (low = better) | Low | Medium | High | Medium | **Medium** |
| **TOTAL** | 58/70 | 50/70 | 55/70 | 49/70 | **57/70** |

## Ranking

1. **A — Operator's Notebook** (58/70). Best voice match + best practical fit. The aesthetic is "what a senior engineer's notebook looks like" — close to Stefan's personal-page voice. Low risk.
2. **A+C — Hybrid** (57/70). Best differentiation for a frame: cover + cite in vintage typewriter spec, body in operator's notebook. Two style-switches (cover→body, body→cite) feel like a frame. Medium risk (the style-switch must be invisible).
3. **C — Typewriter Spec** (55/10). Best differentiation (10/10). All-mono + vintage IBM manual = rare. High risk (all-mono is uncomfortable for long stretches, vintage aesthetic might read as try-hard).
4. **B — Engineering Postmortem** (50/70). Strong recognition for SRE / platform audience. The "POSTMORTEM" framing is on-the-nose for a generic RAG cost post. Medium risk.
5. **D — Lab Notebook** (49/70). Strongest credibility claim ("I measured this"). The serif body + data plots are unusual. But the academic aesthetic doesn't match Stefan's operator positioning.

## My recommendation: A or A+C

**Pure A (Operator's Notebook)** if you want the safest, most voice-aligned option. The aesthetic is the same family the personal-page already uses. The risk is low. The differentiation is high.

**A+C (Hybrid)** if you want the most distinctive option. The cover + cite in vintage typewriter spec is the most memorable aesthetic of the 5. The body in operator's notebook is the readable substance. The hybrid is rarer than any pure variant. The risk is medium (the style-switch must be invisible).

**My personal pick: A+C** — but A is the safe fallback. The hybrid is a small style-switch risk for a big aesthetic gain. If the hybrid doesn't land, A is right there.

## How to review

1. Open `png/contact-sheet-a.png` (or -b, -c, -d, -ac) to see all 6 slides of one variant in a 3×2 grid
2. Compare the 5 contact sheets side by side
3. Open the individual slide PNGs (`png/a-1.png` through `png/a-6.png`) to inspect at full 2160×2700 resolution
4. Open the source HTML (`rag-pilot-failures-a.html` etc.) in a browser to see the live rendering with web fonts

## Files

- 5 design summary docs: `design-a-operator-notebook.md`, `design-b-engineering-postmortem.md`, `design-c-typewriter-spec.md`, `design-d-lab-notebook.md`, `design-ac-hybrid.md`
- 5 source HTML files: `rag-pilot-failures-{a,b,c,d,ac}.html`
- 30 slide PNGs: `png/{a,b,c,d,ac}-{1..6}.png` (2160×2700 each)
- 5 contact sheets: `png/contact-sheet-{a,b,c,d,ac}.png` (3×2 grid per variant)
- 2 render scripts: `render-carousel.cjs` (slide-by-slide), `render-contact-sheets.cjs` (3×2 grid)

To re-render after editing the HTML: `cd /root/projects/freelancing/personal-page/carousel && PATH=/opt/node24/bin:$PATH /opt/node24/bin/node render-carousel.cjs && PATH=/opt/node24/bin:$PATH /opt/node24/bin/node render-contact-sheets.cjs`
