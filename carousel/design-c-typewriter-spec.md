# Variant C — Typewriter Spec

**Reference mood**: An IBM System/360 manual. A Bell Labs technical memo. A 1970s computing textbook. The aesthetic is "documents from before the web" — vintage technical, all-mono, letter-spaced headers, ASCII-art diagrams.

**Palette**:
- Paper: `#F0EBD8` (aged paper, slightly more saturated than A's cream — reads as "this paper has been here a while")
- Ink: `#2B2A28` (dark brown-black, like printer's ink — not pure screen black)
- Ink soft: `#5C5A56`
- Ink faint: `#8A8884`
- Rule dark: `#807A6E` (the thicker double-rule borders)
- Accent: `#B83227` (red — used sparingly for the closing question mark and for emphasis on key data in the code blocks)

**Typography**: 100% monospace. `IBM Plex Mono, Courier New, monospace` for everything — body, headers, numbers, code. Letter-spacing for headers (e.g., "F I X · N O . 0 1"). Numbers in code blocks use leading-zero consistency ("0001", "0045", "0120" — looks like a spec doc page numbering).

**Diagrams**: ASCII-art-style diagrams inside `<pre>` blocks:
```
while answer.wrong:
    prompt = rewrite(prompt)
    answer = generate(prompt)
```
The point: the diagrams look like they were typed at a terminal, not designed in Figma. The 5%-opacity scanline overlay (repeating-linear-gradient) adds the "CRT screen" feel without obscuring the content.

**Layout**: Each slide is 1080×1350 with a 1px border + scanline overlay + a "stamp" header in the top-left ("RAG-2026-001") + a "page x / 6" stamp in the top-right (with a red border for the right stamp, to add visual interest). Footer in mono uppercase with the same stamp pattern.

**Mood**: Vintage technical manual. Reads like a 1970s IBM memo that somehow made it to LinkedIn.

**Voice match**: 8/10. All-mono + the 1970s aesthetic signals "I care about precision, not aesthetics" — the strongest voice match for Stefan's positioning. But the vintage feel might read as "trying too hard" if executed badly.

**Differentiation**: 10/10. No one is doing this on LinkedIn in 2026. The vintage technical-manual aesthetic is rare. High differentiation = high attention = high save rate.

**Algorithm fit**: 7/10. Dwell time will be high (the aesthetic is unusual, readers slow down to process it). Save rate will be very high (the vintage aesthetic is the kind of thing engineers save for reference). Comment rate moderate (the all-mono aesthetic doesn't invite casual comments).

**Practical fit**: 6/10. All-mono body text is harder to read for long stretches. The vintage aesthetic might read as "trying too hard." The aged paper background might feel low-contrast on a phone in bright sunlight.

**Risk**: High. The all-mono body text is uncomfortable for general audiences. The vintage aesthetic might feel pretentious. The aged paper background might feel low-contrast. The aesthetic is high-risk, high-reward: if it lands, the save rate is the highest of all 5 variants; if it doesn't, the post feels try-hard.

**Files**:
- HTML: `rag-pilot-failures-c.html` (22 KB)
- PNGs: `png/c-1.png` through `png/c-6.png` (~175 KB each)
- Contact sheet: `png/contact-sheet-c.png` (322 KB)
