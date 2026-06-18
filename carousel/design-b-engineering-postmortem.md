# Variant B — Engineering Postmortem

**Reference mood**: A Google SRE postmortem. A Stripe status report. A Cloudflare incident analysis. The aesthetic is "documented failure, analyzed, fix proposed" — more structured than A; less hand-drawn.

**Palette**:
- Paper: `#FFFFFF` (pure white, the screen is the canvas)
- Ink: `#0A0A0A` (near-black)
- Ink soft: `#3D3D3D` (secondary)
- Ink faint: `#6B6B6B` (tertiary)
- Rule: `#D0D0D0` (hairlines)
- Rule soft: `#E8E8E8` (lighter hairlines)
- Accent: `#D97706` (amber — a "warning" / "incident" color, used for the postmortem bar at the top of every slide, for section labels, and for emphasis on key data)

**Typography**:
- Body: `IBM Plex Sans, Inter, system-ui, -apple-system, sans-serif` — clean, technical, document-grade
- Section labels (h1, emphasis): `IBM Plex Mono, ui-monospace, Courier New, monospace` (uppercase, letter-spaced, e.g., "INCIDENT 01 — EVAL HARNESS")
- Numbers (data callouts): monospace

**Diagrams**: Clean technical drawings. Boxes with sharp corners. Arrows that go straight. Numbers labeled with units. The point: this is documentation, not a sketch. A postmortem reader expects to see a system diagram, not a whiteboard.

**Layout**: Each slide is 1080×1350 with a 8px amber postmortem bar at the top + a mono header band (PM-2026-001 | DOCUMENT ID) + a 1px rule under the header. Body content has section labels (PATTERN, FIX, THE DATA) in mono uppercase amber.

**Mood**: This is a postmortem document, not a sketch. Senior engineers will recognize the format immediately.

**Voice match**: 7/10. The postmortem framing signals "I am a serious engineer" but the "INCIDENT" framing is slightly dramatic for a generic RAG cost post. A senior engineer reads it as "this is what a good postmortem looks like." A non-engineer reads it as "this is too on-the-nose."

**Differentiation**: 6/10. White background + sans-serif + amber is a known aesthetic (every Stripe postmortem, every SRE doc). Risk of "looks like everyone else's." The 8px amber postmortem bar at the top is the differentiator.

**Algorithm fit**: 7/10. Dwell time moderate (clean design is fast to scan). Save rate moderate (engineers save postmortems). Comment rate moderate-high (the postmortem framing invites "have you considered X" replies).

**Practical fit**: 8/10. The design is the simplest to render (no hand-drawn feel, no ASCII art, no serif body). The amber postmortem bar is a strong visual hook.

**Risk**: Medium. The "POSTMORTEM" framing implies something went wrong at a specific company. Might be too on-the-nose for a generic RAG cost post. The aesthetic is common (Stripe-style postmortems are everywhere). The clean design might feel "marketing-y" rather than "operator."

**Files**:
- HTML: `rag-pilot-failures-b.html` (24 KB)
- PNGs: `png/b-1.png` through `png/b-6.png` (~163 KB each)
- Contact sheet: `png/contact-sheet-b.png` (382 KB)
