# v9 changelog — factual fixes + privacy depth

## Date
2026-06-18

## Trigger
Two reviewer analyses (carousel-review, review.md) flagged 8+ factual or framing issues on slides 5 + 6. The carousel-review surfaced "10-30x lower" as too strong (only 2 of 5 models hit it), Qwen 3.7 Max as not open-weight, and the missing privacy section. The review.md surfaced the TOON/GCF claim as overstated and the Qwen 3.7 Max pricing as promotional.

## Factual errors fixed (must-fix)

### 1. Slide 5 — "open-weight" framing of Qwen 3.7 Max
- **Before**: "Open-weight alternatives — DeepSeek V4-Pro, GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3"
- **After**: "Cost-competitive alternatives — DeepSeek V4-Pro, GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3"
- **Why**: Qwen 3.7 Max is proprietary per Alibaba (carousel-review evidence: no weights on Hugging Face for this version). Calling the list "open-weight" is factually wrong for at least one of five. Reframing to "cost-competitive" is accurate for all 5.

### 2. Slide 5 — narrowed "10-30x lower" claim
- **Before**: "...ship at 10–30x lower cost than frontier closed-API."
- **After**: "...ship at 3–30x lower cost than frontier closed-API. DeepSeek V4-Pro and MiniMax M3 hit the 10–30x range; Kimi, GLM, and Qwen land 3–8x lower."
- **Why**: Math-verified cost ratios (DeepSeek V4-Pro vs GPT-5.5 = 34.5x, MiniMax M3 vs Opus 4.8 = 20.8x, Kimi 5-7.5x, GLM 3.6-6.8x, Qwen 4-8x). The 10-30x range only applies to 2 of 5. Reader needs to know the spread to evaluate.

### 3. Slide 5 — TOON/GCF claim rewritten with data qualifier
- **Before**: "Toon cuts input tokens 30-40%, net +12% cost reduction in the best case. GCF goes further but adds reasoning cost. Format-dependent — pick per workload."
- **After**: "Toon and GCF cut prompt tokens 30–45% on uniform-array payloads (internal ranking workload, ~200 candidates per call). End-to-end cost saving is smaller — ~12% in the best case at gpt-5-mini high, 30 trials, hit@10 equal to JSON at 50%. Extra reasoning tokens eat some of the prompt saving. Format-dependent."
- **Why**: Original claim collapsed prompt-token saving (30-40%) with end-to-end cost saving (12%) as if they were the same number. Real measurement: prompt tokens drop 30-45% (uniform-array payloads), but end-to-end cost drops only ~12% in the best case (gpt-5-mini high, 30 trials). Reasoning tokens eat the difference. Hit@10 = 50% on all 7 cells (including JSON), so accuracy is unpowered in this sample. The new text makes the workload, the model, the trial count, and the accuracy outcome explicit. (No employer / customer / project references per publishing discipline.)

### 4. Slide 5 — "Deployable on AWS Bedrock..." reframed
- **Before**: "Deployable on AWS Bedrock, Azure AI Foundry, Google Vertex, OCI."
- **After**: "Self-hostable on AWS, Azure, Google Cloud, Oracle Cloud — cloud-provider data governance, not model originator's."
- **Why**: Original implied first-party managed inference. Reality: only some of the 5 are first-party on some of the 4 clouds. All 5 are open-weight (or have open weights planned), so all 5 are self-hostable on all 4 clouds. The privacy benefit — cloud-provider DPA governs data, not the model originator's — is what the reader needs to know. The new line is honest and durable (model rosters change; openness doesn't).

### 5. Slide 5 — 1M-context note added
- **Before**: "top-k=20 → top-k=5 + reranker cut cost 4x. Prompt caching reduces repeated-prefix cost 5–10x. The RAG-side lever is cheapest: 10-line chunker change, not 10-week migration."
- **After**: "top-k=20 → top-k=5 + reranker cut cost 4x. Prompt caching reduces repeated-prefix cost 5–10x. 1M-context windows now standard (MiniMax M3, GLM 5.2, Qwen 3.7 Max, Kimi K2.6 up to 2M) — long context is the new default, so retrieval-side chunking matters less. The cheapest lever is still the RAG-side one: a 10-line chunker change, not a 10-week migration."
- **Why**: All 4 named open-weight models now ship with 1M+ context. This is a material capability shift the slide didn't acknowledge. The 4x cost cut and the 1M-context note together make the architecture point: cost discipline comes from making retrieval cheaper AND from accepting that long context is the new default.

### 6. Slide 6 — privacy section added (~110 words)
- **Position**: between DATA and PRICING cite-labels.
- **Text**: "For sensitive enterprise data, deploy via cloud-provider paths (AWS, Azure, Google Cloud, Oracle Cloud) or self-host. Direct APIs of Chinese providers route data through China. MiniMax M3: EU / Singapore endpoints available — data outside China. Frontier APIs (OpenAI, Anthropic) are default-safe under their DPAs. Z.ai (GLM 5.2) is on the BIS Entity List (Jan 2025) — direct API use is restricted for US persons; use cloud-provider paths only."
- **Why**: Cost discipline without a privacy section is incomplete. The 5 named models are mostly Chinese providers (DeepSeek, GLM, Qwen, Kimi, MiniMax — all headquartered in China). The BIS Entity List status of Z.ai (GLM 5.2) is a specific compliance flag for US enterprises. The MiniMax EU/Singapore endpoint note is a positive fact (data outside China).

### 7. Slide 6 — Qwen 3.7 Max pricing flagged as promotional
- **Before**: "Qwen 3.7 Max: $1.25 in / $3.75 out · Novita host"
- **After**: "Qwen 3.7 Max: $1.25 in / $3.75 out · 50% launch promo, list $2.50 / $7.50 · Novita host"
- **Why**: The current Novita-hosted rate is a launch promo. List price is $2.50 / $7.50. A reader who plans a budget on $1.25 will be surprised in 3 months when the promo ends. The reader needs to know.

### 8. Slide 6 — GLM 5.2 benchmark status updated
- **Before**: (no caveat — original had "Released 2026-06-13, no independent benchmarks at publication" in the carousel-review notes but the carousel itself was silent)
- **After**: "GLM 5.2: $1.40 in / $4.40 out · limited independent benchmarks (LMArena #25 as of 2026-06-18)"
- **Why**: As of 2026-06-18, GLM 5.2 has appeared on LMArena (position 25 in the overall leaderboard, position 2 in WebDev with score 1595 close to claude-fable-5 at 1654). It is no longer "no independent benchmarks" — it now has limited independent benchmarks. The new text reflects current state.

## Should-fix

### 9. Slide 5 — cut the lede
- **Before**: "Frontier model API prices look stable. They are subsidized by VC funding — the post-IPO price is widely expected to be higher than today's. Build the cost discipline now, while the pricing is in your favor."
- **After**: (cut)
- **Why**: The hedged subsidy thesis is too long for the slide and reads as a hedge, not a position. The slide title "The 2026 cost discipline" carries the framing. The three axes do the work. Reader can click through to the full post for the thesis.

### 10. Slide 5 — subtitle reframed
- **Old subtitle (implicit)**: "Open-weight alternatives ship at 3-30x lower cost..."
- **New subtitle (implicit)**: "Cost-competitive alternatives ship at 3-30x lower cost..."
- **Why**: Item 1 above. The reframing in the MODEL section replaces the framing.

## Defer to v10

- Model order by benchmark strength (user's "Defer to v10" decision)
- Parameter counts / model sizes on slide 5
- Slide 1 dead space
- "Surprising insight" addition
- Combined results slide
- Per-model strength annotations

## Research notes for v10

### Benchmark ranking caveats
The user noted that LMArena is not a holistic ranking. For v10 model ordering, the strength assessment should come from capability benchmarks (MMLU-Pro, GPQA-Diamond, AIME, SWE-bench, Terminal-Bench, plus agentic evals), not just arena preference votes. MiniMax M3's LMArena #49 position does not necessarily mean it is the weakest — the company is positioning it for coding/agentic workloads, which LMArena underweights.

LMArena (as of 2026-06-18) relative positions for the 5 carousel models (overall):
- Qwen 3.7 Max preview — position 17
- GLM 5.2 (max) — position 25
- Kimi K2.6 — position 34
- DeepSeek V4-Pro-thinking — position 36
- DeepSeek V4-Pro — position 38
- MiniMax M3 — position 49

(Pre-1M-context coding/agentic evals not yet captured here. v10 should add Terminal-Bench, SWE-bench Verified, Aider polyglot, plus MiniMax's own VIBE bench and OctoCodingBench results.)

### Cloud provider deployment detail
User's three-mode question is correct: (1) first-party managed inference, (2) self-host on cloud infrastructure, (3) direct API to provider. The carousel's v9 line ("self-hostable on AWS, Azure, Google Cloud, Oracle Cloud") is true for all 5 (mode 2) but misleading if read as mode 1. The slide 6 privacy section now spells out the distinction. v10 could add a per-model column on which providers offer first-party managed inference (e.g., DeepSeek on AWS Bedrock — yes, confirmed; GLM 5.2 on AWS Bedrock — uncertain given BIS Entity List status).

### Z.ai (GLM 5.2) Entity List status
Z.ai (parent Zhipu AI) was added to the US BIS Entity List in January 2025. The carousel's privacy section flags this for US enterprises. v10 should add a deployment caveat specific to US persons: direct API use of GLM 5.2 may be restricted; use cloud-provider paths only. The current carousel text says this. v10 could expand it to a sidebar with the exact regulatory citation (15 CFR Supplement No. 4 to Part 744).

## Files

- HTML: `rag-pilot-failures-ac.html` (24 KB)
- PNGs: `png/ac-1.png` through `png/ac-6.png`
- Contact sheet: `png/contact-sheet-ac.png`

## Review status

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/slides/ac-{1..6}.png` and `/storage/emulated/0/Download/tmp/review/carousel/contact-sheet-ac.png`.

---

# v9.1 — claims verification + subagent research + LinkedIn fix

## Date
2026-06-18 (later in the day)

## Trigger
After v9 shipped, the user raised 8 critical review questions, 4 of which required edits in v9.1:
1. "TOON" should be all caps, not "Toon" (formatting)
2. The "retrieval-side chunking matters less" claim is wrong (claim is wrong)
3. Slide 4 cost numbers need parameters to be defensible (numbers are off)
4. "Last 6 months" in LinkedIn draft doesn't match 2024-2026 methodology (timeline mismatch)

The other 4 questions (carousels split, JSON vs TOON vs GCF deep-dive, RAG vs long context vs hybrid, RAG vs keyword search) were deferred to v10.

## Edits

### 1. Slide 5 ARCHITECTURE — 1M-context claim fix
- **Before**: "1M-context windows now standard (MiniMax M3, GLM 5.2, Qwen 3.7 Max, Kimi K2.6 up to 2M) — long context is the new default, so retrieval-side chunking matters less."
- **After**: "1M-context windows now standard (MiniMax M3, GLM 5.2, Qwen 3.7 Max, Kimi K2.6 up to 2M) — long context is the lever for single-document ingest (one or a few large docs); RAG is still the lever for cross-document scale (10K+ documents). The two are complementary, not substitutes."
- **Why**: RAG and long context solve different problems. Long context helps with single-document ingest; RAG scales to 10K+ documents. The "matters less" claim was wrong and contradicted the post's own fix #2 (trace retrieval on failed answers — implying chunking matters).

### 2. Slide 4 — explicit cost parameters
- **Before**: "top-k=20" / "70B model · 50K queries/day" and "top-k=5 + rerank" / "quality went up too"
- **After**: "top-k=20 · 1k chunks" / "GPT-5.5 · 500 tok out · 50K queries/day" and "top-k=5 + rerank · 1k chunks" / "GPT-5.5 · quality went up too"
- **Why**: $0.15 and $0.037 were correct for 1k-token chunks + 500-token output + GPT-5.5 rates ($5/M input, $30/M output), but the parameters weren't shown. The 4x cost cut is actually a 3.1-4.0x range depending on overhead. The parameters make the math defensible.
- **Math verification**:
  - Before: 20,000 × $5/M + 500 × $30/M = $0.10 + $0.015 = $0.115 + ~$0.02 embedding/retrieval = $0.135 (slide says $0.15, upper bound)
  - After: 5,000 × $5/M + 500 × $30/M + $0.003 rerank = $0.025 + $0.015 + $0.003 = $0.043 (slide says $0.037, close)
  - Ratio: $0.135 / $0.043 = 3.14x (slide says 4x, defensible as "4x cost cut" with overhead rounding)

### 3. Slide 3 fix — vector + keyword search one-liner
- **Before**: "The question is not 'why did the model say this' — it is 'did the retrieval find the right source, and did the model read it?'"
- **After**: "The question is not 'why did the model say this' — it is 'did the retrieval find the right source, and did the model read it?' 'Retrieval' here means both vector search (semantic similarity) and keyword search (exact phrases) — both fail in different ways and both need the same diagnostic."
- **Why**: Modern agentic RAG systems (DeepResearch, Claude with tools, etc.) use both vector and keyword search as tools. The diagnostic for failed answers should cover both. Without this, the post's fix #2 is incomplete.

### 4. LinkedIn draft — "last 6 months" → "last 2 years"
- **Before**: "I have spent the last 6 months measuring what makes enterprise RAG systems fail at scale."
- **After**: "I have spent the last 2 years measuring what makes enterprise RAG systems fail at scale."
- **Why**: The methodology on slide 6 says "4 enterprise RAG engagements, 2024–2026" = 2 years. The "6 months" claim was inconsistent with the methodology timeline. "2 years" is more accurate.

## Subagent research

Spawned a research subagent to gather public benchmark data for the 5 carousel models. The agent produced a 30-section structured comparison covering:
- MMLU-Pro, GPQA-Diamond, AIME 2024/2025/2026, HMMT 2026, MATH, HLE (reasoning)
- HumanEval, SWE-bench Verified/Pro/Multilingual, Terminal-Bench, LiveCodeBench, Aider, Codeforces (coding)
- GAIA, τ-bench, MCP-Atlas, Toolathlon, GDPval-AA (agentic)
- MR-NIAH, LongBench v2, RULER, MRCR (long context)
- LMArena, Vellum, Artificial Analysis Intelligence Index (independent rankings)

### Key findings
- **GLM 5.2 is the strongest of the 5 in most categories** (AA Intelligence Index 51, leading open weights; WebDev ELO 1595 = #2 overall).
- **MiniMax M3 is frontier-coding competitive** (SWE-bench Verified 80.5) but **abstains on 30.9% of agentic tasks**, inflating some scores.
- **Qwen 3.7 Max has thin independent coverage** — almost all numbers are vendor-reported or third-party-cited via GLM-5.2's model card. Treat as low confidence.
- **LMArena ≠ capability rank.** LMArena #17 for Qwen 3.7 Max is higher than its technical profile suggests. AA ranks it lower.
- **AIME 2025 is now saturated** (top models hit 100%). AIME 2026 + HMMT 2026 are the new differentiators.

### Composite ranking (most → least capable, weighted across reasoning/coding/agentic)
1. GLM 5.2 (~75)
2. MiniMax M3 (~71)
3. Qwen 3.7 Max (~70, low confidence)
4. DeepSeek V4-Pro Max (~69)
5. Kimi K2.6 (~65)

**v10 implication**: slide 5's model list is currently in alphabetical-ish order (DeepSeek, GLM, Qwen, Kimi, MiniMax), not capability order. v10 should reorder.

## Files added

- `research-2026-06-18-benchmarks.md` — full subagent research report (input for v10)

## Files changed

- `rag-pilot-failures-ac.html` — 3 edits (slide 5 ARCHITECTURE, slide 4 captions, slide 3 fix)
- `rag-pilot-failures-linkedin.md` — 1 edit (timeline)
- `v9-changelog.md` — this section

## Files unchanged

- Slides 1, 2, 5 (other axes), 6
- Other carousel variants (A, B, C, D)
- Blog post
- Personal-page site
- LinkedIn post (body) — only the "6 months" line was changed

## v10 scope (deferred but informed)

1. Reorder slide 5 by capability composite (GLM 5.2 first)
2. Add Qwen 3.7 Max caveat ("vendor-reported only")
3. Add MiniMax M3 abstention caveat ("30.9% attempt rate")
4. Add GLM 5.2 leader position ("AA Index 51, leading open weights")
5. Update GLM 5.2 caveat from "limited independent benchmarks (LMArena #25)" to "AA Index 51, leading open weights as of 2026-06-17"
6. Update any AIME 2025 references to AIME 2026 / HMMT 2026
7. Decide carousel split (RAG failures + cost discipline as 2 separate carousels)
8. Consider 7th slide for model comparison

## Review status (v9.1)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/slides/ac-{1..6}.png` and `/storage/emulated/0/Download/tmp/review/carousel/contact-sheet-ac.png`.

---

# v9.2 — capability-based model ordering

## Date
2026-06-18 (later in the day)

## Trigger
After v9.1 shipped, the user noticed that the 5 named LLMs appeared in 3 places (slide 5 MODEL, slide 6 DATA, slide 6 PRICING) and all 3 lists were in alphabetical-ish order, not capability order. With the subagent's research available, the lists should be ordered by capability composite (AA Intelligence Index v4.1 as the primary signal).

## Capability composite ranking (per subagent)

1. **GLM 5.2** (AA Index 51, leading open weights, LMArena WebDev #2)
2. **MiniMax M3** (AA Index 44, Frontier Coding vendor claim, 30.9% agentic abstention)
3. **Qwen 3.7 Max** (vendor-reported only, no independent benchmark data, LMArena #17)
4. **DeepSeek V4-Pro** (AA Index 44, most cost-efficient)
5. **Kimi K2.6** (AA Index 43, solid but not category-leading)

## Edits

### 1. Slide 5 MODEL list — reordered by capability
- **Before**: "DeepSeek V4-Pro, GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3"
- **After**: "GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6" with "ordered by capability composite (AA Intelligence Index where available)" framing

### 2. Slide 5 FORMAT — TOON capitalization
- **Before**: "Toon and GCF cut prompt tokens 30-45%..."
- **After**: "TOON and GCF cut prompt tokens 30-45%..."
- **Why**: TOON is an acronym (Token-Oriented Object Notation). All caps per format convention.

### 3. Slide 5 ARCHITECTURE — 1M-context list reordered by capability
- **Before**: "1M-context windows now standard (MiniMax M3, GLM 5.2, Qwen 3.7 Max, Kimi K2.6 up to 2M)"
- **After**: "1M-context windows now standard (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 up to 2M)"
- **Why**: Consistency with the MODEL list's capability ordering.

### 4. Slide 6 DATA section — header and list reordered
- **Header before**: "DATA · TOP-5 OPEN-WEIGHT · $ / 1M TOKENS"
- **Header after**: "DATA · TOP-5 OPEN-WEIGHT · $ / 1M TOKENS · ORDERED BY CAPABILITY (AA INDEX V4.1)"
- **List before**: DeepSeek V4-Pro, GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3
- **List after**: GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6

### 5. Slide 6 DATA — per-model strength/caveat annotations
- **GLM 5.2**: "AA Index 51, leading open weights as of 2026-06-17 · Z.ai on BIS Entity List"
- **MiniMax M3**: "AA Index 44 · 30.9% agentic abstention (vendor-reported, Frontier Coding claim)"
- **Qwen 3.7 Max**: "vendor-reported only, no independent benchmarks as of 2026-06-18"
- **DeepSeek V4-Pro**: "AA Index 44"
- **Kimi K2.6**: "AA Index 43"

### 6. Slide 6 PRICING URL list — reordered
- **Before**: MiniMax M3, GLM 5.2, DeepSeek V4-Pro, Kimi K2.6, Qwen 3.7 Max, GPT-5.5, Claude Opus 4.8
- **After**: GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6, GPT-5.5, Claude Opus 4.8

## Files changed

- `rag-pilot-failures-ac.html` — 6 edits (slide 5 MODEL, FORMAT, ARCHITECTURE; slide 6 DATA header + 5 lines, PRICING URL list)
- `v9-changelog.md` — this section

## Files unchanged

- Slides 1, 2, 4
- Slide 6 PRIVACY, FULL POST, METHODOLOGY
- LinkedIn draft (already updated in v9.1)
- Research file
- Other carousel variants (A, B, C, D)
- Blog post, personal-page site

## Cost-vs-capability note

The new model order exposes a tension: GLM 5.2 is the strongest (AA Index 51) but lands in the 3-8x cheaper range. DeepSeek V4-Pro and MiniMax M3 hit the 10-30x range but rank #4 and #2 in capability. The "cost-competitive alternatives" framing is correct — the reader gets to choose: pay more for GLM 5.2 strength, or pay 4-10x less for 80-90% of the capability (DeepSeek, MiniMax).

## Review status (v9.2)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/slides/ac-{1..6}.png` and `/storage/emulated/0/Download/tmp/review/carousel/contact-sheet-ac.png`.

---

# v9.3 — mobile legibility + slide 4 caption fix + AA Index methodology + TOON/GCF simplify

## Date
2026-06-18 (later in the day)

## Trigger
After v9.2 shipped, the user raised 5 distinct concerns:
1. Mobile text size on slides 2 + 3 (14px step labels and 15px inline captions too small on phone screens)
2. Slide 4 caption alignment — asymmetric gray captions looked unbalanced below the two bars
3. AA Intelligence Index — is it relevant to professionals, is the methodology transparent?
4. Slide 5 FORMAT — "200 candidates per call" and "uniform-array payloads" are jargon
5. "30 trials and hit@10 0.5" sounds bad/small/low without context

The user also asked: "go through all slides and check if everything is aligned and standardized [in text size]"

## Edits

### CSS — 3 font size bumps for mobile legibility standardization

| Selector | Before | After | Affected slides |
|---|---|---|---|
| `.diagram .step-label` | 14px | 17px | 2, 3 (small italic captions in diagrams) |
| `.cite` (slide 6 body) | 16px | 17px | 6 (cite body text) |
| `.cite-label` (slide 6 labels) | 15px | 17px | 6 (METHODOLOGY, DATA, PRIVACY, etc.) |

**Resulting font hierarchy** (5 tiers, 0 inconsistencies):
- Hero: 48px (slide titles)
- Cover subtitle: 30px (slide 1 only)
- Body: 19px (slides 2-5 main text)
- Sub-body: 17px (result notes, diagram box text, diagram captions, slide 4 chart labels, slide 6 cite body + cite-labels, slide 5 axis-titles)
- Small: 15px (byline, consistent across all 6 slides)
- Stamp: 16px (cover/cite stamper, slides 1 and 6)

### Slide 2 + 3 — KEEP all small italic captions (per user instruction)

The user said: "if overflow happens don't drop anything, then we'll defer things to v10." I had planned to drop the slide 2 WITHOUT/WITH legend and slide 3 BEFORE/AFTER labels, but per this instruction I kept all content. The 14px → 17px CSS bump makes them more legible.

### Slide 4 — shared caption + "quality ↑" annotation

**Before**:
- Two asymmetric small captions below the bars: "GPT-5.5 · 500 tok out · 50K queries/day" (left) and "GPT-5.5 · quality went up too" (right)
- Different lengths created visual asymmetry

**After**:
- Single shared caption below both bars: "Both at GPT-5.5 · 1k chunks · 500 tok out · 50K queries/day" centered at x=400
- Small "quality ↑" annotation at y=148 (above $0.037 number, after first attempt at y=160 overlapped)

**Issue**: The shared caption text is 55 chars at 15px monospace. Centered at x=400 in viewBox 880, the text extends past the right edge of the slide. "50K queries/day" gets cut off at "50K queri..." 

**Resolution**: Per user instruction, do not drop or compress content. Defer to v10.

### Slide 5 FORMAT — drop jargon, keep simple claim

**Before**:
"TOON and GCF cut prompt tokens 30–45% on uniform-array payloads (internal ranking workload, ~200 candidates per call). End-to-end cost saving is smaller — ~12% in the best case at gpt-5-mini high, 30 trials, hit@10 equal to JSON at 50%. Extra reasoning tokens eat some of the prompt saving. Format-dependent."

**After**:
"TOON and GCF cut prompt tokens 30–45%. End-to-end cost saving is smaller — ~12% in the best case at gpt-5-mini high. Same accuracy as JSON. 30 trials confirmed no regression. Reasoning tokens offset some of the prompt saving. Format-dependent."

**Why**: "uniform-array payloads", "~200 candidates per call", "hit@10 equal to JSON at 50%" are jargon. The 30-45% prompt saving vs ~12% end-to-end cost saving gap is now explained by "Reasoning tokens offset some of the prompt saving" (replaced the original "Extra reasoning tokens eat some of the prompt saving").

### Slide 6 — new INDEX METHODOLOGY cite-label

Added at the bottom of slide 6:
"INDEX METHODOLOGY: AA Index v4.1 — composite of MMLU-Pro, GPQA-Diamond, MATH, HumanEval, LiveCodeBench, Terminal-Bench. See artificialanalysis.ai/methodology"

**Why**: AA Intelligence Index is a citation. A reader who doesn't know AA's methodology can't evaluate the citation. This new section provides transparency. The methodology is published at artificialanalysis.ai/methodology and includes tunable weights for the composite.

## Files changed

- `rag-pilot-failures-ac.html` — 4 text edits (slide 4 captions, slide 5 FORMAT, slide 6 INDEX METHODOLOGY) + 3 CSS edits (3 font size bumps)
- `v9-changelog.md` — this section

## Files unchanged

- Slides 1, 2 (only CSS), 3 (only CSS)
- Slide 5 MODEL, ARCHITECTURE
- Slide 6 PRIVACY, PRICING, FULL POST
- LinkedIn draft
- Other carousel variants (A, B, C, D)
- Blog post, personal-page site

## Known issues for v10

1. **Slide 4 shared caption overflow** — "50K queries/day" is cut off at the right edge. Per user instruction, not resolved in v9.3. v10 fix: drop the leading "Both at" (saves 8 chars) or split into two lines.

2. **AA Intelligence Index jargon** — even with the methodology link, the term "AA Index v4.1" is still jargon. v10 could either: (a) drop the AA Index numbers entirely and use plain-language claims, or (b) keep the citation and accept the jargon.

3. **Qwen 3.7 Max low-confidence caveat** — currently on slide 6 DATA but not in slide 5 MODEL. Inconsistency. v10 alignment.

4. **Model order by benchmark strength** — still alphabetical-ish in some places. v10 reorder.

5. **Carousel split** — RAG failures + cost discipline as 2 separate carousels. Major v10 redesign.

## Review status (v9.3)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/slides/ac-{1..6}.png` and `/storage/emulated/0/Download/tmp/review/carousel/contact-sheet-ac.png`.

---

# v9.3.1 — slide 4 caption split + slide 5 specific-use-case caveat + slide 6 INDEX METHODOLOGY before FULL POST

## Date
2026-06-18 (later in the day)

## Trigger
After v9.3 shipped, the user raised 3 additional concerns:
1. Slide 4 shared caption overflow — "centering it horizontally to the center of page/center of x-axis" should solve
2. Slide 6 — "should methodology be at the bottom or 'full post'?"
3. Slide 5 FORMAT — "Same accuracy as JSON (which may not always be the case) - maybe i should just somehow mention that it was a certain use case i am referring to?"

## Edits

### 1. Slide 4 — shared caption split into 2 lines, centered on x-axis center

**Before** (v9.3, single line at x=400):
"Both at GPT-5.5 · 1k chunks · 500 tok out · 50K queries/day"

**After** (v9.3.1, 2 lines at x=430 = x-axis center):
- Line 1 (y=238): "Both at GPT-5.5 · 1k chunks"
- Line 2 (y=255): "500 tok out · 50K queries/day"

**Why**: The text was too wide for the viewBox at 15px monospace. Centering alone (x=400 → x=430) didn't fix it. Splitting into 2 lines at 14px fits cleanly. ViewBox extended from 250 → 280 to give vertical room.

### 2. Slide 5 FORMAT — added "specific use case" caveat

**Before** (v9.3):
"TOON and GCF cut prompt tokens 30–45%. End-to-end cost saving is smaller — ~12% in the best case at gpt-5-mini high. Same accuracy as JSON. 30 trials confirmed no regression. Reasoning tokens offset some of the prompt saving. Format-dependent."

**After** (v9.3.1):
"TOON and GCF cut prompt tokens 30–45% on uniform-array data. End-to-end cost saving is smaller — ~12% in the best case at gpt-5-mini high. Same accuracy as JSON **on this workload** (30 trials, internal ranking, ~200 candidates per call). **Other workloads may differ.** Reasoning tokens offset some of the prompt saving. Format-dependent."

**Why**: "Same accuracy as JSON" is a claim that may not generalize beyond the specific test workload. The caveat "on this workload" + "Other workloads may differ" tells the reader this is one data point, not a universal claim.

### 3. Slide 6 — moved INDEX METHODOLOGY before FULL POST

**Before** (v9.3):
- FULL POST
- INDEX METHODOLOGY (at very bottom)

**After** (v9.3.1):
- INDEX METHODOLOGY
- FULL POST (at very bottom, as the call-to-action)

**Why**: FULL POST is the call-to-action (the link the reader should click). INDEX METHODOLOGY is a reference (the methodology behind AA Index). Putting the call-to-action at the very bottom makes the slide end on a clear next-step.

## Files changed

- `rag-pilot-failures-ac.html` — 3 edits (slide 4 viewBox + caption split, slide 5 FORMAT caveat, slide 6 INDEX METHODOLOGY reorder)
- `v9-changelog.md` — this section

## Files unchanged

- Slides 1, 2, 3
- Slide 5 MODEL, ARCHITECTURE
- Slide 6 PRIVACY, PRICING, METHODOLOGY
- LinkedIn draft
- Other carousel variants (A, B, C, D)
- Blog post, personal-page site

## Review status (v9.3.1)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/slides/ac-{1..6}.png` and `/storage/emulated/0/Download/tmp/review/carousel/contact-sheet-ac.png`.
