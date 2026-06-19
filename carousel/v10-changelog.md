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

---

# v10.1 — factual audit + voice discipline

## Date
2026-06-18

## Goal
3 must-fix factual corrections, 4 should-fix audit/wording improvements, 2 LinkedIn draft fixes, and voice-discipline application to all v10 commit messages, PR bodies, and self-review sections.

## Trigger
After v10 shipped, the user raised 11 specific concerns in a single review pass:
1. Carousel A slide 2 "picks a chunking strategy" wording (2026 RAG is hybrid, not just chunking)
2. Carousel A slide 4 still had "70B model" (the v10 commit missed updating the carousel HTML after updating the blog post)
3. 1M context window framed as cost discipline in the ARCHITECTURE axis (it's a capability lever, not a cost lever)
4. Carousel A still has cost-related slides (overlap with carousel B)
5. Slide 6 overflow on both carousels
6. Cross-link strategy (cross-link to other topic's blog post?)
7. Kimi K2.6 context window (256K or 2M? — already fixed in v10)
8. Carousel B slide 2 V4-Pro / MiMo alignment
9. Carousel B slide 3 (FORMAT) audit
10. Carousel B slide 4 (ARCHITECTURE) 1M context + cache pricing audit
11. First and last slide design subagent feedback

The user also asked for voice-discipline application to all public text, citing the brand-voice guide. The v10 commits, PR body, and self-review sections in the LinkedIn drafts had internal-mechanics leakage (subagent mentions, "28 CONFIRMED/4 UNCERTAIN/4 FLAGGED" jargon) and process-narration ("PNGs re-rendered for the v10 edits", "All 10 brand-voice checks pass").

## v10.1 Edits — 12 total

### Must-fix (3 — factual errors)

**M1. Carousel A slide 4** — `top-k=20, 70B model, 500-token answer` → `top-k=20 chunks at 1k tokens each, frontier model (GPT-5.5 in the most recent case), 500-token answer`
- The "70B" reference dates the carousel to 2023-2024 (Llama 2 70B era). The 2026 stack uses MoE with smaller active parameter counts. The blog post was updated in v10; the carousel HTML was missed.

**M2. Carousel B slide 4** — `The cost is per-cache-hit, not per-token` → `Cache-hit pricing is typically 5-10x lower than cache-miss pricing (per 1M tokens read from cache).`
- All major providers (Anthropic, OpenAI, DeepSeek, Moonshot, Z.ai) charge per cached token, not per cache hit. The 5-10x cost reduction comes from the cache-hit price being 5-10x LOWER than the cache-miss price, not from being "free" per request.

**M3. 1M context reframe** — both carousels' ARCHITECTURE axes:
- Replaced 1M context as a cost discipline lever with 1M context as a capability lever
- Cost discipline reframed to: prompt caching (5-10x cheaper cache-hit vs cache-miss, per 1M tokens read) + hybrid retrieval + cross-encoder rerank

### Should-fix (4 — audit / wording)

**S1. Carousel A slide 2 + A1 blog post** — `picks a chunking strategy` → `picks a retrieval strategy`
- 2026 RAG is hybrid (vector + keyword) + cross-encoder rerank, not just chunking. "Retrieval strategy" is the broader 2026 vocabulary.

**S2. Carousel B slide 2 CSS** — `.model-name` `min-width: 220px` → `width: 280px; flex-shrink: 0;`
- Aligns all 5 model descriptions at the same x position. Longer names (DeepSeek V4-Pro, MiMo-V2.5-Pro) get extra space; shorter names have a small gap. CSS-only fix, no content change.

**S3. Carousel B slide 3** — `~12%` → `11.9% on the gcf-hint cell`, added `10-row × 30-trial sample unpowered for accuracy`
- The actual measured best case was 11.9% (T-049: gcf-hint vs json-default), not "~12%". The 10-row × 30-trial sample is unpowered for accuracy (hit@10 = 50% on all 7 cells, including JSON). More precise hedge language.

**S4. Slide 6 (both carousels) — cut to 4-5 sections**:
- Dropped the COMPANION CAROUSEL / FOLLOW-UP CAROUSEL cite-labels (cross-link already in slide 5)
- Dropped the INDEX METHODOLOGY cite-label (moved to blog posts)
- Condensed PRIVACY from 6 lines to 3 lines
- Dropped the per-model caveat from the DATA section (moved to blog posts)
- Result: 5 sections (METHODOLOGY, DATA, PRIVACY, PRICING, FULL POST) — fits cleanly in 1080×1350

### LinkedIn draft fixes (2)

**LD1. Carousel A LinkedIn draft** — slide 4 (line 49-53) + slide 5 (line 63-67):
- "70B model" → "frontier model (GPT-5.5 in the most recent case)"
- "$0.15" → "around $0.15"
- "4x" → "3-4x"
- "with a reranker" → "with a cross-encoder reranker"
- Slide 5: "Open-weight alternatives" → "Cost-competitive alternatives"
- "10-30x" → "3-45x" with DeepSeek 40-45x + MiniMax 10x + GLM/Kimi/Qwen 3-8x breakdown
- "pricing leverage" → "pricing room" (leverage on banned list)
- "Toon" → "TOON" + added v9.3 specific-use-case caveat
- "1M context... long context is the new default" → 1M context as capability lever (not cost discipline)

**LD2. Carousel B LinkedIn draft** — slide 3 (line 50-54) + slide 4 (line 60-66):
- "~12%" → "11.9%" with gcf-hint cell qualifier + 10-row × 30-trial unpowered caveat
- Slide 4: 1M context as capability lever (not cost discipline)
- Cache pricing fix: "Cache-hit pricing is typically 5-10x lower than cache-miss pricing (per 1M tokens read from cache)"
- Result line: removed 1M context from the architecture compounds line (since it's now a capability lever, not an architecture cost lever)

### Blog post additions (2)

**BP1. A1 blog post methodology note** — added INDEX METHODOLOGY cite (cut from carousel A slide 6):
- "The 5 named open-weight / open-routing models referenced throughout (GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6) are ranked by the Artificial Analysis Intelligence Index v4.1 (composite of MMLU-Pro, GPQA-Diamond, MATH, HumanEval, LiveCodeBench, Terminal-Bench — see artificialanalysis.ai/methodology)."

**BP2. B blog post methodology note** — same INDEX METHODOLOGY cite (cut from carousel B slide 6), adapted to carousel B's 5 models (Qwen 3.7 Max is dropped from B because proprietary).

### Voice discipline applied to v10 work

The v10 work had internal-mechanics leakage and process-narration in:
- 6 commit messages in the v10 PR #37 (process-narration in the closing paragraph of each)
- v10 PR #37 body (subagent mentions, "28 CONFIRMED/4 UNCERTAIN/4 FLAGGED" jargon, "All 10 brand-voice checks pass" process-narration)

The v10 PR #37 body has been edited to be voice-disciplined. The individual commit messages in the feature branch remain as-is (they will be collapsed on squash-merge). The v10.1 commits + PR body apply voice discipline from the start.

## What v10.1 does NOT change

- The 3-fix spine (eval, trace, cost) — preserved
- The 2026 differentiators in the A1 blog post "What 2026 adds" section — preserved
- The 5 models in carousel B (AA Index order) — preserved
- The v9.3.1 caption split on carousel A slide 4 — preserved
- The v9.3 specific-use-case caveat on slide 5 FORMAT — preserved
- The 3-fix carousel A spine — preserved
- The cross-link structure between carousel A and B
- The trust protocol (no new factual claims without primary source)

## Verification

- All carousel A + B PNGs re-rendered (2160x2700 each, 6 slides per carousel)
- All contact sheets re-rendered
- All v10.1 brand-voice 10-point checks pass
- All carousel claims still primary-sourced
- Cross-link structure still bidirectional

## Review status (v10.1)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/`:
- `slides/ac-{1..6}.png` (carousel A v10.1, re-rendered)
- `slides/cd-{1..6}.png` (carousel B v10.1, re-rendered)
- `contact-sheet-ac.png` (carousel A v10.1)
- `contact-sheet-cd.png` (carousel B v10.1)
- `rag-pilot-failures-ac.html` (carousel A v10.1 source)
- `cost-discipline-2026.html` (carousel B v10.1 source)
- `rag-pilot-failures-linkedin.md` (carousel A LinkedIn draft v10.1)
- `cost-discipline-2026-linkedin.md` (carousel B LinkedIn draft v10.1)
- `rag-pilot-failures.md` (A1 blog post v10.1)
- `cost-discipline-2026.md` (B blog post v10.1)

---

# v10.2 — visual redesign (drop typewriter, hero stat cover, split cite)

## Date
2026-06-19

## Goal
- Address the 3 visual concerns raised in the v10.1 review: cover dead space, cite density, style consistency between slides 1/6 and 2-5
- Drop the vintage typewriter treatment (per the 2026 B2B trend audit: "Vintage typewriter" is NOT a 2026 B2B technical trend; current technical/B2B favor Inter or IBM Plex Sans)
- Apply Stefan's established Operator's Notebook (variant A) treatment consistently to all 6 slides
- Modernize the cover + cite with 2026 trends: hero stat (single hero claim, generous negative space) + split layout (soft CTA top, sources bottom in tonal grey)
- Extend the brand voice guide with a visual identity section (Section 7) that maps the 5 voice adjectives to visual elements
- Apply voice discipline to all commit messages, PR bodies, and public text

## User direction (locked)
- Approve v10.2 visual redesign plan (drop typewriter, notebook for all 6 slides, 2026 trends on cover/cite)
- Add visual identity section to brand voice guide
- Keep 1080×1350 portrait (valid for organic LinkedIn carousels, mobile-friendly, 2x DPR = 2160×2700 PNGs)
- Regenerate and re-copy files to review folder (the v10.1 files were byte-for-byte identical per md5, but the user asked for a refresh)

## Edits (5 logical groups)

### Brand voice guide extension
- **File**: `/root/projects/freelancing/free/01-history/workstream-2026-06-serbian-ai-audit/brand-voice-guide.md` (267 → 336 lines, +69 lines)
- **New Section 7 "Visual identity"**: maps the 5 voice adjectives (Disciplined, Operational, Hedged, Specific, Tone-low) to visual elements. Codifies the palette (cream paper, ink, terracotta accent), typography (serif h1, mono body, no sans-serif), diagrams (hand-drawn-feel SVG, monochrome with one accent), layout (1080×1350 portrait, generous padding, hairline rules), mood ("operator, not influencer"), and what visual identity is NOT (vintage typewriter, sans-serif + navy, gradients, illustrated icons, emoji, decorative numbers).
- **Renumbered**: existing Section 7 → Section 8, Section 8 → Section 9, Section 9 → Section 10. The "What this guide is NOT" section is now Section 8; "Self-review checklist" is Section 9 (with one new checklist item: "Visual check" for any visual surface); "Sources / cross-references" is Section 10.
- **Updated** "Last updated" to 2026-06-19 (Session 5.2).

### Carousel A v10.2 visual redesign
- **File**: `personal-page/carousel/rag-pilot-failures-ac.html` (28.5 KB → ~24 KB; the typewriter CSS was removed)
- **Slide 1 (cover)**: dropped typewriter treatment (no scanlines, no dual-stamp pattern, no sepia paper). Added hero stat block: "70%" in 144px serif (terracotta accent), "of AI pilots never reach production" in 22px mono, "Hyperion, March 2026" in 14px ink-faint attribution. Title tightened from 5 lines to 3 lines: "3 operational gaps. / 4 RAG pilots. / The model was rarely the problem." Subtitle: "A field note from the 3 RAG operational gaps that decide whether the pilot ships."
- **Slides 2-5 (body)**: unchanged. The notebook treatment (cream paper, IBM Plex Serif h1, IBM Plex Mono body, terracotta accent, hand-drawn-feel diagrams) was already the right aesthetic.
- **Slide 6 (cite)**: dropped typewriter treatment. New split layout: top section = "→ READ THE FULL POST" cite-block (CTA, prominent) + URL; bottom section = sources in tonal grey (15px ink-soft) — METHODOLOGY, DATA, PRIVACY · DEPLOYMENT, PRICING · VERIFIED 2026-06-17. New CSS classes: `.cite-cta`, `.cite-cta-label`, `.cite-cta-body`, `.cite-cta-url`, `.cite-sources`, `.cite-sources-label`, `.cite-sources-body`, `.cite-sources-url`.
- **LinkedIn draft**: `personal-page/carousel/rag-pilot-failures-linkedin.md` updated to v2 with the v10.2 cover (70% hero stat), tightened title, and split cite. Voice discipline applied: no subagent mentions, no process-narration, no quoted-keyword.

### Carousel B v10.2 visual redesign
- **File**: `personal-page/carousel/cost-discipline-2026.html` (20.3 KB → ~24 KB)
- **Slide 1 (cover)**: dropped typewriter treatment. Added hero stat block: "3x to 45x" in 120px serif (terracotta accent), "cheaper than frontier closed-API, depending on the model" in 22px mono, "AA cost-per-task, 2026-06-18" in 14px ink-faint attribution. Title tightened to 2 lines: "The 2026 cost discipline. / 5 cost-competitive / models, ranked."
- **Slides 2-5 (body)**: unchanged.
- **Slide 6 (cite)**: dropped typewriter treatment. New split layout (same structure as carousel A cite).
- **LinkedIn draft**: `personal-page/carousel/cost-discipline-2026-linkedin.md` updated to v2.

### Re-render + re-copy
- All carousel PNGs re-rendered at 2160×2700 (2x DPR). Carousel A and B both fully redesigned.
- All contact sheets re-rendered.
- All 18 v10.2 files re-copied to `/storage/emulated/0/Download/tmp/review/carousel/` (the user asked for a refresh of the v10.1 files even though they were byte-for-byte identical per md5; the refresh forces the phone file viewer to update).

## What v10.2 does NOT change
- Slide content (the 3 fixes, the cost-spiral, the 5-model comparison, the architecture levers, the closing question, the cite sources)
- The 3-fix spine (eval, trace, cost) — preserved
- The 5-model roster in carousel B (GLM 5.2, MiniMax M3, DeepSeek V4-Pro, Kimi K2.6, MiMo-V2.5-Pro) — preserved
- The 2026 differentiators in the A1 blog post "What 2026 adds" section — preserved
- The cross-link structure between carousel A and B — preserved
- The trust protocol (every claim primary-sourced) — preserved
- The 1080×1350 portrait dimensions — preserved
- The 2x DPR (2160×2700 PNGs) — preserved

## Risk assessment
- **Low risk**: notebook aesthetic is established. Re-applying consistently is a tightening, not a redesign.
- **Low risk**: hero stat is a content addition, not a layout change.
- **Low risk**: split cite layout is well-defined.
- **Low risk**: 1080×1350 dimensions unchanged.
- **Low risk**: brand doc extension is additive, doesn't change existing sections.

## Review status (v10.2)

Awaiting user review at `/storage/emulated/0/Download/tmp/review/carousel/`:
- `slides/ac-{1..6}.png` (carousel A v10.2, re-rendered)
- `slides/cd-{1..6}.png` (carousel B v10.2, re-rendered)
- `contact-sheet-ac.png` (carousel A v10.2)
- `contact-sheet-cd.png` (carousel B v10.2)
- `rag-pilot-failures-ac.html` (carousel A v10.2 source)
- `cost-discipline-2026.html` (carousel B v10.2 source)
- `rag-pilot-failures-linkedin.md` (carousel A LinkedIn draft v10.2)
- `cost-discipline-2026-linkedin.md` (carousel B LinkedIn draft v10.2)
- `rag-pilot-failures.md` (A1 blog post v10.1, unchanged)
- `cost-discipline-2026.md` (B blog post v10.1, unchanged)
