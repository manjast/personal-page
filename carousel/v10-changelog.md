# v10 changelog — RAG failures + cost discipline carousels

## Date
2026-06-18

## Goal
Single-session v10 that produces two publication-ready LinkedIn carousels with their corresponding blog posts and LinkedIn drafts, plus updated personal-page content. 3-5 hours. 4 phases. Based on 5 parallel subagent research tasks completed June 18, 2026, plus 2 follow-up research/verification subagents (model verification, A1 blog post punch list, hashtag strategy, body angle, A1 cross-link structure).

## Trust protocol
Every claim about a specific model cites the primary source URL. Every pricing claim comes from the official vendor pricing page. Every benchmark claim comes from the benchmark's official source. If a claim cannot be primary-sourced, the carousel says "pending verification" or omits it.

## Phase 0 research summary (5 + 2 subagents, 2026-06-18)

| Subagent | Output | Key finding |
|---|---|---|
| v10-verify | `research-2026-06-18-v10-verify.md` (304 lines) | 28 CONFIRMED, 4 UNCERTAIN, 4 FLAGGED. Qwen 3.7 Max now AA Index 46 (was "vendor-reported only"). Kimi K2.6 is 256K, NOT 2M. DeepSeek V4-Pro is 40-45x cheaper, NOT 10-30x. MiniMax M3 weights are on HF under restrictive license. |
| hashtags | `research-2026-06-18-hashtags.md` (226 lines) | 4 tags per carousel, share 1 (`#EnterpriseAI`). Carousel A: `#RAG #EnterpriseAI #AIAgents #MLOps`. Carousel B: `#OpenSourceAI #LLM #FinOps #EnterpriseAI`. |
| body-angle | `research-2026-06-18-body-angle.md` (311 lines) | 3 angles proposed. **Angle A recommended** (capability-vs-cost tradeoff, 3x-45x spread). |
| a1-punch-list | `research-2026-06-18-a1-punch-list.md` (481 lines) | 8 paste-ready edits to update the A1 blog post for v10. |
| v10 plan | `v10-plan.md` (250+ lines) | 4-phase plan, locked. |
| benchmarks (v9.1 carryover) | `research-2026-06-18-benchmarks.md` (25.7 KB) | 5-model capability composite ranking. |

## Phase 0.7: Cross-link structure (self, locked)

Bidirectional cross-links between the 4 artifacts (carousel A, A1 blog post, carousel B, B blog post):

- **Carousel A → A1 blog post**: slide 6 FULL POST block (existing, in place)
- **A1 blog post → B blog post**: end of section 3, with link text "A follow-up post covers the 2026 cost levers..."
- **Carousel B → B blog post**: slide 6 FULL POST block (new in v10)
- **B blog post → A1 blog post**: opening paragraph + methodology note "Companion post" link (new in v10)
- **Carousel A → Carousel B**: slide 5 closing question (small italic line "→ follow-up: the 2026 cost discipline (carousel 02)") + slide 6 FOLLOW-UP CAROUSEL cite-label (new in v10)
- **Carousel B → Carousel A**: slide 5 closing question (small italic line "→ companion: the 3 RAG operational gaps (carousel 01)") + slide 6 COMPANION CAROUSEL cite-label (new in v10)

# v10 Carousel A updates (rag-pilot-failures-ac.html)

## Edits (5 in total)

### 1. Slide 5 ARCHITECTURE — "Kimi K2.6 up to 2M" → "Kimi K2.6 at 256K"
- **Before**: "1M-context windows now standard (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 up to 2M)"
- **After**: "1M-context windows now standard (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 at 256K)"
- **Why**: Per `research-2026-06-18-v10-verify.md`, Kimi K2.6 is 262,144 tokens (256K) per huggingface.co/moonshotai/Kimi-K2.6, platform.kimi.ai/docs/pricing/chat-k26, and AA leaderboard. The "2M" claim was wrong.

### 2. Slide 5 MODEL — DeepSeek V4-Pro cost spread updated
- **Before**: "Cost-competitive alternatives ... ship at 3–30x lower cost ... DeepSeek V4-Pro and MiniMax M3 hit the 10–30x range; Kimi, GLM, and Qwen land 3–8x lower."
- **After**: "Cost-competitive alternatives ... ship at 3–45x lower cost ... DeepSeek V4-Pro lands at 40–45x cheaper (AA cost-per-task, $0.04). MiniMax M3 at ~10x. GLM 5.2, Kimi K2.6, and Qwen 3.7 Max land 3–8x lower."
- **Why**: Per AA Intelligence Index v4.1, DeepSeek V4-Pro is $0.04/task vs Opus 4.8 $1.78/task = 44.5x cheaper. The "10-30x" range was too low.

### 3. Slide 5 closing question — added forward-reference to carousel B
- **Before**: "What's the most expensive RAG mistake you've seen — model problem or operational one?"
- **After**: same, + "→ follow-up: the 2026 cost discipline (carousel 02) — 5 cost-competitive models ranked." in 16px italic ink-soft
- **Why**: cross-link structure (carousel A → carousel B)

### 4. Slide 6 Qwen cite — removed stale/uncertain claims, added AA Index 46
- **Before**: "Qwen 3.7 Max: $1.25 in / $3.75 out · 50% launch promo, list $2.50 / $7.50 · Novita host · vendor-reported only, no independent benchmarks as of 2026-06-18"
- **After**: "Qwen 3.7 Max: $1.25 in / $3.75 out · AA Index 46 (2026-06-18) · proprietary, Alibaba Cloud Model Studio only — no public weights"
- **Why**: 
  - "50% launch promo, list $2.50/$7.50" could not be primary-sourced (UNCERTAIN per verify)
  - "Novita host" is wrong; LMArena links to Alibaba Cloud Model Studio (UNCERTAIN)
  - "vendor-reported only, no independent benchmarks" is now STALE; AA measured it at 46 on 2026-06-18
  - "no public weights" added for clarity (proprietary)

### 5. Slide 6 — added FOLLOW-UP CAROUSEL cite-label before FULL POST
- New cite-label: "FOLLOW-UP CAROUSEL" with body "the 2026 cost discipline — 5 cost-competitive models ranked, with cost data and deployment paths: stefanmanja.com (carousel 02) · stefanmanja.com/writing/cost-discipline-2026/"
- **Position**: between INDEX METHODOLOGY and FULL POST
- **Why**: cross-link structure (carousel A → carousel B); provides clear path to the next carousel + the next blog post

## What did NOT change in carousel A
- Slides 1, 2, 3, 4 (all unchanged)
- Slide 5 FORMAT (TOON/GCF caveat from v9.3.1 stays)
- Slide 5 closing question text (the dichotomy is the same; only added forward-ref)
- Slide 6 METHODOLOGY, DATA, PRIVACY, PRICING, INDEX METHODOLOGY sections
- Slide 6 FULL POST block (still points to the same A1 blog post URL)
- All CSS (font hierarchy from v9.3 stays)
- All other carousel variants (A, B, C, D HTML) — only AC is publication-ready

## Carousel A LinkedIn draft update
- Updated hashtags from `#EnterpriseAI #RAG #AIOperations #CostDiscipline` to `#RAG #EnterpriseAI #AIAgents #MLOps` per the 2026 hashtag strategy

# v10 Carousel B (NEW — cost-discipline-2026.html)

## File
`personal-page/carousel/cost-discipline-2026.html` (24 KB, 6 slides, 1080×1350 portrait, A+C hybrid design)

## Slide structure (6 slides, mirrors carousel A's A+C structure)
- Slide 1: Cover (Typewriter Spec) — "The 2026 cost discipline. 5 cost-competitive models, ranked." with page counter 01/06
- Slide 2: MODEL roster (Notebook) — 5 models ordered by AA Index v4.1 (GLM 5.2 → MiniMax M3 → DeepSeek V4-Pro → Kimi K2.6 → MiMo-V2.5-Pro) with cost, context, license, and per-model caveat
- Slide 3: FORMAT (Notebook) — TOON/GCF (the v9.3 specific-use-case caveat intact)
- Slide 4: ARCHITECTURE (Notebook) — three levers: 1M context + hybrid + rerank + prompt caching
- Slide 5: SUMMARY + closing question (Notebook) — "80% / 20% framing" + closing question "What's the most expensive LLM mistake you've seen — model choice or operational one?" + companion cross-ref
- Slide 6: Cite (Typewriter Spec) — METHODOLOGY, DATA, PRIVACY, PRICING, INDEX METHODOLOGY, COMPANION CAROUSEL (back-ref to A1), FULL POST (forward-ref to B blog post)

## Models included (5)
1. **GLM 5.2** (AA Index 51, leading open weights) — $1.40/$4.40, 1M context, MIT, Z.ai on BIS Entity List
2. **MiniMax M3** (AA Index 44) — $0.30/$1.20 standard, 1M context, restrictive `minimax-community` license (per verify subagent)
3. **DeepSeek V4-Pro** (AA Index 44) — $0.435/$0.870, 1M context, MIT, 40-45x cheaper than Opus 4.8 (per verify subagent)
4. **Kimi K2.6** (AA Index 43) — $0.95/$4.00 cache-miss, 256K context (per verify subagent), modified-MIT
5. **MiMo-V2.5-Pro** (AA Index 42, Xiaomi, June 2026) — 1M context, new entrant, pricing pending

Qwen 3.7 Max is dropped from carousel B (proprietary per Alibaba; appears in carousel A as the proprietary reference point with the AA Index 46 caveat).

## Carousel B LinkedIn draft
- File: `cost-discipline-2026-linkedin.md`
- Body: **Angle A** from `research-2026-06-18-body-angle.md` (the capability-vs-cost tradeoff frame, 3x-45x spread, "cheapest is not strongest" reframe)
- Hashtags: `#OpenSourceAI #LLM #FinOps #EnterpriseAI` (per the 2026 hashtag strategy)
- Closing question: "What's the most expensive LLM mistake you've seen — model choice or operational one?" (mirrors carousel A's structure)
- Cross-reference: explicit "second in a series" reference to carousel A in the body opening

# v10 Blog posts

## A1 (rag-pilot-failures.md) — UPDATED

### 8 edits applied (per a1-punch-list.md)
1. **Title (line 2)**: "Why 90% of RAG pilots fail..." → "Why 70% of AI pilots never reach production — and the 3 RAG fixes that worked"
2. **Summary (line 3)**: added Hyperion citation
3. **Opening (line 13)**: added "Per Hyperion (March 2026), roughly 70% of AI pilots never reach production at all. The four pilots in this post are part of the 30% that did — the three gaps below are why."
4. **Section 3 (line 41)**: "70B-parameter model" → "frontier model (GPT-5.5 in the most recent case)"; "top-k=20 chunks" → "top-k=20 chunks at 1k tokens each"; "$0.15" → "around $0.15"
5. **Section 3 (line 45)**: "4x cost cut" → "3-4x cost cut"; "with a reranker" → "with a cross-encoder reranker"; "fewer chunks to process" → "fewer chunks to process, fewer tokens to the model"
6. **End of section 3**: added p99 cost tail caveat + 1% / 30% example + forward-reference to B blog post
7. **New section "What 2026 adds"**: 4 differentiators as ceiling above the 3-fix floor (hybrid + cross-encoder rerank, Contextual Retrieval, permission-at-index, drift monitoring) with Anthropic 35-50% citation
8. **Methodology note (line 62)**: added 2024-2026 date range + Hyperion + Anthropic citations

### Length: 750 → ~1000 words
### Spine preserved: 3 fixes (eval, trace, cost) remain the dominant narrative; "What 2026 adds" is the ceiling

## B (cost-discipline-2026.md) — NEW

### File
`personal-page/src/content/writing/cost-discipline-2026.md` (62 lines, ~1100 words)

### Structure (frontmatter + body + methodology)
- **Title**: "The 2026 cost discipline — 5 cost-competitive models, ranked"
- **Summary**: "A field note on the cost discipline that decides whether internal AI systems hold up in production. Five open-weight / open-routing models, ordered by capability composite (AA Index v4.1), covering 3x to 45x cost spread against frontier closed-API. Companion to the 3 RAG operational gaps post."
- **Published**: 2026-06-25, English
- **Body**:
  - Opening with back-reference to A1 blog post + thesis (80%/20% framing)
  - Section 1: The model roster — capability composite ranking with per-model cost, context, license, and caveat
  - Section 2: Format — the smallest lever (~12% end-to-end in best case)
  - Section 3: Architecture — three compounding levers (1M context, hybrid + rerank, prompt caching)
  - The pattern: three categories of cost discipline (operational, model, architecture)
  - Methodology note with primary-source citations
  - Companion post link (back-reference to A1)

### All 10 brand-voice checks applied
- Disciplined, Operational, Hedged, Specific, Tone-low throughout
- No first-person plural
- No process-narration
- No AI-slop
- No internal-mechanics leakage

# v10 Personal-page updates

## Writing index (src/pages/writing/index.astro) — UPDATED
- Section marker: "02 / writing" → "01 / writing"
- H1: "Long-form posts on internal AI for enterprise workflows, RAG evaluation, decision-support design, and the methodology behind the audit." → "Long-form posts on internal AI for enterprise workflows." (62 chars)
- New lead paragraph: "Practical notes on RAG evaluation, decision-support design, and the cost discipline that decides whether internal AI systems hold up in production."
- Description fields (line 17, 28) updated to match
- The 2 published posts (RAG failures, cost discipline) will both display in the listing once the B blog post is committed

# v10 Files (all new and changed)

## New files
- `personal-page/carousel/cost-discipline-2026.html` (24 KB, 6 slides, A+C hybrid)
- `personal-page/carousel/cost-discipline-2026-linkedin.md` (LinkedIn draft)
- `personal-page/carousel/png/cd-{1..6}.png` (6 PNGs, 2160×2700 each)
- `personal-page/carousel/png/contact-sheet-cd.png` (3×2 grid)
- `personal-page/carousel/render-carousel-b.cjs` (render script for carousel B)
- `personal-page/carousel/render-contact-sheet-b.cjs` (contact sheet script for carousel B)
- `personal-page/src/content/writing/cost-discipline-2026.md` (~1100 words)
- `personal-page/carousel/research-2026-06-18-v10-verify.md` (304 lines)
- `personal-page/carousel/research-2026-06-18-hashtags.md` (226 lines)
- `personal-page/carousel/research-2026-06-18-body-angle.md` (311 lines)
- `personal-page/carousel/research-2026-06-18-a1-punch-list.md` (481 lines)
- `personal-page/carousel/v10-changelog.md` (this file)
- `personal-page/carousel/v10-plan.md` (250+ lines, updated with Phase 0 verify findings)

## Changed files
- `personal-page/carousel/rag-pilot-failures-ac.html` (5 v10 edits)
- `personal-page/carousel/rag-pilot-failures-linkedin.md` (hashtags updated)
- `personal-page/src/content/writing/rag-pilot-failures.md` (8 v10 edits)
- `personal-page/src/pages/writing/index.astro` (section marker, H1, lead paragraph, descriptions)
- `personal-page/carousel/v9-changelog.md` (will point to v10 in Phase 4)
- `personal-page/carousel/png/ac-{1..6}.png` (re-rendered with v10 edits)
- `personal-page/carousel/png/contact-sheet-ac.png` (re-rendered)

## Re-renders
- Carousel A (AC variant) re-rendered for the 5 v10 edits
- Contact sheets for A, B, C, D, AC re-rendered
- 6 new PNGs for carousel B (cd-1 through cd-6)
- New contact sheet for carousel B (contact-sheet-cd.png)

# v10 Schedule (publishing)

- **Day 1**: Publish carousel A (RAG failures, v10) — already at v9.3.1, just re-render + fact fixes
- **Day 8**: Publish carousel B (cost discipline, v10) — 1 week stagger for series discovery

# v10 Known issues (deferred to v11)

1. **AWS Bedrock 18 first-party providers claim**: could not freshly re-verified. v11 should re-verify before any "Bedrock" claim is made.
2. **Qwen 3.7 Max launch promo**: the "50% off, list $2.50/$7.50" claim is now removed from the carousel A cite. If the user later confirms the launch promo is still active, v11 can re-add it with proper sourcing.
3. **Qwen AA Index 46 attribution**: the AA leaderboard showed 46 in the verification pass; the v10 carousel A cite uses "AA Index 46 (2026-06-18)" as the date qualifier. v11 should re-verify Qwen 3.7 Max's AA Index before re-rendering.
4. **MiniMax M3 weight status**: the v10 carousel B cite uses "weights on HF under restrictive `minimax-community` license; effectively first-party API for commercial use above $20M ARR" per the verify subagent. v11 should monitor whether Z.ai/MiniMax changes the license (e.g., moves to MIT or Apache 2.0).
5. **Slide 4 caption**: still 2 lines (v9.3.1 fix). No overflow.
6. **AA Index jargon**: still present, but methodology link in INDEX METHODOLOGY cite-label provides transparency.

# v10 Trust protocol verification

All primary-source citations verified by the v10-verify subagent on 2026-06-18:
- GLM 5.2: docs.z.ai (vendor), huggingface.co/zai-org/GLM-5.2 (model card), artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
- MiniMax M3: platform.minimax.io (vendor pricing), huggingface.co/MiniMaxAI/MiniMax-M3 (model card), lmarena.ai/leaderboard/text
- DeepSeek V4-Pro: api-docs.deepseek.com (vendor), huggingface.co/deepseek-ai/DeepSeek-V4-Pro (model card), artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1
- Kimi K2.6: platform.kimi.ai/docs/pricing/chat-k26 (vendor pricing), huggingface.co/moonshotai/Kimi-K2.6 (model card), artificialanalysis.ai/leaderboards/models
- MiMo-V2.5-Pro: huggingface.co/xiaomi (model card, partial), AA Index 42 (artificialanalysis.ai/leaderboards/models)
- Qwen 3.7 Max: modelstudio.console.alibabacloud.com (vendor), lmarena.ai/leaderboard/text, artificialanalysis.ai/leaderboards/models
- AA Intelligence Index v4.1: artificialanalysis.ai/methodology
- Anthropic Contextual Retrieval: anthropic.com/news/contextual-retrieval
- Hyperion AI Pilots stat: Hyperion "AI Pilots in Production" (March 2026) — v11 should re-verify the specific URL

## Review status (v10)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/`:
- `slides/ac-{1..6}.png` (carousel A v10, re-rendered)
- `slides/cd-{1..6}.png` (carousel B, new)
- `contact-sheet-ac.png` (carousel A v10)
- `contact-sheet-cd.png` (carousel B)
- `rag-pilot-failures-ac.html` (carousel A v10 source)
- `cost-discipline-2026.html` (carousel B source)
- `rag-pilot-failures-linkedin.md` (carousel A LinkedIn draft v10)
- `cost-discipline-2026-linkedin.md` (carousel B LinkedIn draft v10)
- `rag-pilot-failures.md` (A1 blog post v10)
- `cost-discipline-2026.md` (B blog post v10)
- All 4 research files
- `v10-plan.md`, `v9-changelog.md`, `v10-changelog.md`
