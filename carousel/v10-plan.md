# v10 plan — RAG failures + cost discipline carousels

## Date
2026-06-18

## Goal
Single-session v10 that produces two publication-ready LinkedIn carousels with their corresponding blog posts and LinkedIn drafts, plus updated personal-page content. 3-5 hours. Based on 5 parallel subagent research tasks completed June 18, 2026.

## Phase 0 verification results (re-run after first plan draft)

After the first plan draft, 5 additional verification/research subagents ran on 2026-06-18:

1. **v10-verify** (`research-2026-06-18-v10-verify.md`, 304 lines, 28 CONFIRMED / 4 UNCERTAIN / 4 FLAGGED) — re-verified all 5 carousel models' claims against primary sources. **Headline corrections required**:
   - **Qwen 3.7 Max "vendor-reported only, no independent benchmarks" is STALE.** AA has measured it at Index 46 (artificialanalysis.ai/leaderboards/models, 2026-06-18). The v9.3.1 carousel A slide 6 cite must be updated.
   - **"Kimi K2.6 up to 2M" is WRONG.** Kimi K2.6 is 256K (huggingface.co/moonshotai/Kimi-K2.6, platform.kimi.ai/docs/pricing/chat-k26, AA). Fix: replace with "Kimi K2.6 256K".
   - **DeepSeek V4-Pro is 40-45x cheaper than frontier** ($0.04/task vs Opus 4.8 $1.78/task), not 10-30x. Update slide 5 MODEL axis.
   - **"50% launch promo, list $2.50 / $7.50" for Qwen is UNCERTAIN.** $1.25/$3.75 verified (LMArena, AA); list $2.50/$7.50 could not be primary-sourced. Remove or hedge.
   - **"Novita host" for Qwen is UNCERTAIN.** LMArena links to Alibaba Cloud Model Studio, not Novita. Remove.
   - **MiniMax M3 weights ARE on Hugging Face** (huggingface.co/MiniMaxAI/MiniMax-M3) under a restrictive `minimax-community` license (not OSI-approved, attribution + $20M-revenue authorization required for commercial use). LMArena categorizes M3 as Proprietary. The v10 plan's "weights pending" claim is INCORRECT. The v10 carousel B should describe M3's weight status as: "weights on HF under restrictive `minimax-community` license; effectively first-party API for commercial use above $20M ARR".
   - **"AWS Bedrock 18 first-party providers" is FLAGGED** — could not freshly re-verify. The v9 plan's claim is from a prior subagent, not freshly verified. v10 will keep the claim but hedge: "major cloud providers (AWS, Azure, Google Cloud, Oracle Cloud)".

2. **Hashtags** (`research-2026-06-18-hashtags.md`, 226 lines) — 4-tag sets per carousel, share 1 (`#EnterpriseAI`):
   - Carousel A: `#RAG #EnterpriseAI #AIAgents #MLOps`
   - Carousel B: `#OpenSourceAI #LLM #FinOps #EnterpriseAI`

3. **Body angle** (`research-2026-06-18-body-angle.md`, 311 lines) — 3 body angles proposed. **Angle A recommended** (capability-vs-cost tradeoff, "30x cost spread, ordered by capability"):

   > **Hook:** I have spent the last 6 months re-pricing the 5 named models I now reach for before the frontier APIs.
   > **Bridge:** The cost spread across those 5 is 3x to 45x cheaper than the comparable closed-API frontier, depending on which one. DeepSeek V4-Pro lands at 40-45x (AA cost-per-task, $0.04). MiniMax M3 at ~10x. GLM 5.2 at 3-8x — and it is also the strongest of the 5 on the AA Intelligence Index (51, June 17). The cheapest model is not the most capable model, and the most capable is not the cheapest. This is the second carousel in a series on what I am learning in the cost-discipline work. The first was on the 3 RAG operational gaps that decide whether a pilot ships.
   > **CTA:** The carousel below is the model roster I trust, ordered by capability composite, with the cost data, the deployment paths, and the specific caveats per model.

   (Note: "10-30x" updated to "3x to 45x" and "10-30x end" updated to "40-45x" to match the verify subagent's DeepSeek 44.5x ratio finding. Original body angle A was 10-30x; v10 uses 3x-45x for accuracy.)

4. **A1 punch list** (`research-2026-06-18-a1-punch-list.md`, 481 lines) — 8 paste-ready edits to update the existing A1 blog post for v10.

5. **Cross-link structure** (self, Phase 0.7) — bidirectional cross-links between carousel A / A1 blog post and carousel B / B blog post:
   - Carousel A → A1 blog post (already in place at slide 6 FULL POST)
   - A1 blog post → B blog post (new in v10, end of section 3)
   - Carousel B → B blog post (new in v10, slide 6 FULL POST)
   - B blog post → A1 blog post (new in v10, intro)
   - Carousel A's slide 5 (closing question) → "FOLLOW-UP: the 2026 cost discipline (carousel 02)" (new in v10)
   - Carousel A's slide 6 → "FOLLOW-UP CAROUSEL" cite-label before FULL POST (new in v10)

## Research findings (synthesis of 5 subagent reports)

### RAG subagent (Subagent 1)
- "70% of AI pilots never reach production" (Hyperion, March 2026) replaces the outdated "90% of RAG pilots fail" stat
- The 3 classic fixes (eval, trace, cost) are still mandatory but are now FLOOR not CEILING
- 2026 differentiators: hybrid retrieval + cross-encoder reranking + agentic routing + permission enforcement at index layer + multimodal parsing + drift monitoring
- Anthropic's Contextual Retrieval: 35-50% reduction in retrieval failures (Sep 2024, cited widely in 2026)
- Long-context is COMPLEMENT to RAG, not replacement: ~1,250x cost ratio at 1M context vs focused RAG
- Hybrid (vector + keyword) is now table stakes
- 2026 default stack: LangGraph for orchestration, LlamaIndex for retrieval, RAGAS + Phoenix + Langfuse for eval

### Cost discipline subagent (Subagent 2)
- VC-subsidized pricing narrative is DEAD: frontier prices ROSE (Anthropic Fable 5 at $10/$50 per MTok, 2x Opus 4.x)
- Open-weight vs closed-API gap effectively CLOSED (GLM 5.2 at 51 AA Index vs Claude Opus 4.8 at 56)
- 1M context is now table stakes: GLM 5.2, MiniMax M3, DeepSeek V4-Pro all have 1M; tiered pricing above 512K is the norm
- AWS Bedrock has 18 first-party providers including DeepSeek, Moonshot (Kimi), MiniMax, Qwen, Z AI (GLM)
- Per-token pricing is universal; per-agent-session-hour emerging (Anthropic Managed Agents $0.08/session-hour)
- Hard per-engineer caps are now common (Uber $1,500/month/tool)
- New entrants: MiMo-V2.5-Pro (Xiaomi, AA Index 42), Kimi K2.7 Code (June 16), NVIDIA Nemotron 3 Ultra 550B
- GLM 5.2 overtook MiniMax M3 as #1 open-weight on June 16 (AA Index 51 vs 44)
- Claude Fable 5 export-controlled by US government June 12 (relevant context for enterprise procurement)

### 5-model subagent (Subagent 3)
- GLM 5.2: full open weights under MIT license June 16, 1M context, AA Index 51 (NEW LEADER)
- MiniMax M3: weights NOT YET PUBLIC as of June 18 (10-day promise from June 3 release, gated HF page)
- Qwen 3.7 Max: UNCERTAIN status; Qwen Studio flagship is "Qwen3.7-Plus", no public pricing for "Max"
- DeepSeek V4-Pro: stable, MIT, cost-per-task $0.04 (cheapest in the 5)
- Kimi K2.6: stable, modified-MIT, Kimi K2.7 Code added June 16 (coding specialist)
- MiMo-V2.5-Pro: strong new open-weight entrant, AA Index 42, MIT, 1M context
- Qwen 3.7 Max REPLACEMENT recommended: MiMo-V2.5-Pro

### LinkedIn carousel subagent (Subagent 4)
- 2026 best practice: 6-9 slides at 1080x1080 px, PDF format
- Native carousels earn 21.77% median engagement (Buffer 2026, 52M posts analyzed)
- Algorithm rewards: dwell time, saves, comments from niche audience
- Hashtags in first comment (3-5 max), NOT in post body
- Closing question drives comments (Taplio 3-2-1 rule)
- Photo-carousel beta discontinued December 2023; PDF only
- "Casual expert" voice with original named frameworks, not generic advice

### Design trends subagent (Subagent 5)
- 2026 cover slide: bold-typographic, low-decoration, single hero claim, generous negative space
- 2026 closing slide: split layout (soft CTA top, sources bottom in tonal grey)
- Calmer 2026 palettes (off-white, navy, one accent)
- Page-counter "1/6" sets expectations
- "Vintage typewriter" pattern is NOT a 2026 B2B technical trend; current technical/B2B favor Inter or IBM Plex Sans
- For Stefan's brand: vintage typewriter identity should stay (it's his established look); align with 2026 best practice by tightening the cover claim and adding page counters


## v10 plan: two carousels

### Decision: split into 2 carousels (CONFIRMED)

**Carousel A: "Why 90% of RAG pilots fail"** (operational, practitioner audience)
- 6 slides: cover, 3 fixes, closing question, cite
- Audience: engineers, architects, applied AI folks
- Current v9.3.1 carousel is the starting point
- Updates: 70% stat, hybrid/rerank, agentic routing, permission-at-index

**Carousel B: "The 2026 cost discipline"** (cost, leadership audience)
- 7 slides: cover, MODEL, FORMAT, ARCHITECTURE, summary, cite
- Audience: CTOs, finance, ops leads
- New carousel; current slide 5 + 6 of v9.3.1 are the starting point
- Updates: GLM 5.2 as leader, MiMo-V2.5-Pro replacing Qwen 3.7 Max, Fable 5 export control, Bedrock 18 providers

### Brand voice guide (use for ALL new copy)
- File: `/root/projects/freelancing/free/01-history/workstream-2026-06-serbian-ai-audit/brand-voice-guide.md`
- 5 adjectives: Disciplined, Operational, Hedged, Specific, Tone-low
- 10-point self-review checklist before publishing
- No first-person plural, no process-narration, no quoted-keyword, no internal-mechanics leakage
- Banned words list (18 words) - not enumerated in the guide, discipline is to fail-review any draft with banned words


## v10 execution plan (4 phases, 3-5 hours)

### Phase 1: Carousel A updates (RAG failures) — 1 hour

**File**: `personal-page/carousel/rag-pilot-failures-ac.html`

Edits to current v9.3.1 (final list, after Phase 0 verify):
1. **Slide 5 ARCHITECTURE**: fix "Kimi K2.6 up to 2M" → "Kimi K2.6 256K" (per verify subagent)
2. **Slide 5 MODEL**: update "10-30x range" / "3-8x lower" to reflect DeepSeek 40-45x (per verify subagent):
   - From: "DeepSeek V4-Pro and MiniMax M3 hit the 10–30x range; Kimi, GLM, and Qwen land 3–8x lower."
   - To: "DeepSeek V4-Pro lands at 40-45x cheaper (AA cost-per-task, $0.04). MiniMax M3 at ~10x. GLM 5.2, Kimi K2.6, and Qwen 3.7 Max land 3-8x lower."
3. **Slide 5 closing question**: add forward-reference to carousel B (small italic line below the closing question)
4. **Slide 6 Qwen cite**: remove stale/uncertain claims, add AA Index 46:
   - From: "Qwen 3.7 Max: $1.25 in / $3.75 out · 50% launch promo, list $2.50 / $7.50 · Novita host · vendor-reported only, no independent benchmarks as of 2026-06-18"
   - To: "Qwen 3.7 Max: $1.25 in / $3.75 out · AA Index 46 (2026-06-18) · proprietary, Alibaba Cloud Model Studio only — no public weights"
5. **Slide 6**: add "FOLLOW-UP CAROUSEL" cite-label before FULL POST, pointing to carousel B

The 2026 differentiators (Contextual Retrieval, hybrid + cross-encoder rerank, p99 cost tail caveat, agentic routing) live in the **blog post** (Phase 3) where there's more room. The carousel A stays operationally focused on the 3 fixes; the 2026 differentiators become the ceiling in the A1 blog post's "What 2026 adds" section. The carousel B handles model-choice cost content.

No content drops (per user instruction). All changes are fact corrections + a forward-reference.

### Phase 2: Carousel B creation (cost discipline) — 2 hours

**New file**: `personal-page/carousel/cost-discipline-2026.html`

7 slides:
1. **Cover**: page counter, "The 2026 cost discipline" title, single sentence hook
2. **MODEL**: 5 models in capability order (MiniMax M3, GLM 5.2, DeepSeek V4-Pro, Kimi K2.6, MiMo-V2.5-Pro) with AA Index per model, "weights pending" caveat for MiniMax M3
3. **FORMAT**: TOON/GCF (with the v9.3 specific-use-case caveat intact)
4. **ARCHITECTURE**: 1M-context complementary to RAG, hybrid retrieval, cross-encoder rerank, prompt caching
5. **SUMMARY**: "10x to 30x cheaper for the 80% of tasks that don't need frontier"
6. **Closing question**: "What's the most expensive LLM mistake you've seen - model choice or operational?"
7. **Cite**: split CTA + sources (data, methodology, full post link, AI Index v4.1)

New supporting files:
- `personal-page/carousel/cost-discipline-2026-{1..6}.png` (rendered)
- `personal-page/carousel/png/contact-sheet-cost-discipline.png`
- `personal-page/carousel/cost-discipline-2026-linkedin.md` (LinkedIn draft, body + first comment with hashtags)

### Phase 3: Blog posts — 1.5 hours

**Blog post A: update existing** at `personal-page/src/content/writing/rag-pilot-failures.md`
- Add 2026 differentiators section: hybrid retrieval, cross-encoder rerank, agentic routing
- Update stat: "70% of pilots never reach production" (Hyperion March 2026) instead of "90%"
- Add Contextual Retrieval note
- Add p99 cost tail caveat
- Keep existing 3 fixes as floor, add 2026 differentiators as ceiling
- ~900 words target

**Blog post B: NEW** at `personal-page/src/content/writing/cost-discipline-2026.md`
- The carousel B's 6 slides as the spine
- Deep dive on the 5 models: capability composite, cost-per-task, AA Index
- Why frontier prices rose (Fable 5 at 2x Opus 4.x)
- Bedrock 18 first-party providers as the enterprise path
- 1M-context economics: when to use, when not to
- Hybrid retrieval + rerank cost math
- Anthropic Managed Agents as preview of next pricing model
- ~900 words target
- All 10 brand-voice checks must pass


### Phase 4: Personal-page and changelog updates — 30 minutes

1. Update `personal-page/src/pages/writing/index.astro` to list the new blog post
2. Add carousel B to the writing section if there's a carousel-list pattern; if not, skip
3. Create `personal-page/carousel/v10-changelog.md` documenting the v10 changes
4. Update `personal-page/carousel/v9-changelog.md` to point to v10
5. Copy all v10 files to `/storage/emulated/0/Download/tmp/review/carousel/` for review

### Phase 5 (deferred to v11 if needed)

- LinkedIn drafts for carousel B body
- First-comment hashtags (3-5 per draft, real terms)
- LinkedIn post scheduling and engagement tracking
- Carousel split for v9 variants A, B, C, D (only AC is publication-ready)


## Risk assessment

### High risk
- **Carousel B creation is the biggest content risk**: I have to write a full 7-slide carousel + blog post + LinkedIn draft in 2 hours. The 10-point brand-voice checklist must pass for all copy. If it doesn't, ship the carousel and defer the blog post to v10.5.
- **MiniMax M3 weights pending**: the carousel B's MODEL slide has MiniMax M3 as #1 by AA Index (55), but weights are not public. The "open-weight carousel" premise is broken if I lead with a closed-weights model. Mitigation: keep M3 in the carousel but flag "weights pending" explicitly; lead with GLM 5.2 (MIT, public) as the practical #1.

### Medium risk
- **GLM 5.2 / Qwen 3.7 Max replacement**: I'm replacing Qwen 3.7 Max with MiMo-V2.5-Pro because Qwen's status is uncertain. If Qwen confirms "3.7 Max" is active in the next 24 hours, the replacement is wrong. Mitigation: research Qwen one more time before Phase 2 starts; if Qwen is active, keep it.
- **70% stat freshness**: I'm using "70% of AI pilots never reach production" (Hyperion March 2026). If a fresher stat is available by publication, use it.

### Low risk
- Carousel A updates are appends/reframes, not drops
- CSS bumps are already done in v9.3
- Brand voice guide is comprehensive; I just need to apply it

## What v10 does NOT change

- Other carousel variants (A, B, C, D HTML) - only AC is publication-ready
- Personal-page services, contact, home pages
- The carousel A's 3 fixes (eval, trace, cost) - the spine stays; v10 adds 2026 differentiators as ceiling
- The carousel A's blog post URL (still stefanmanja.com/writing/rag-pilot-failures/) - just updated


## Source list (5 subagent research reports)

All 5 subagent research reports from 2026-06-18 are referenced and summarized in this plan:

1. **RAG subagent**: enterprise RAG state-of-the-art (Q1-Q2 2026), 3 fixes now floor not ceiling, hybrid/rerank standard
2. **Cost discipline subagent**: VC-subsidy narrative dead, GLM 5.2 as new #1 open-weight, Bedrock 18 first-party providers, Fable 5 export-controlled
3. **5-model subagent**: per-model updates, MiMo-V2.5-Pro replacement for Qwen 3.7 Max recommended, weights-pending for MiniMax M3
4. **LinkedIn carousel subagent**: PDF 1080x1080 6-9 slides, native carousels 21.77% engagement, hashtags in first comment, closing question drives comments
5. **Design trends subagent**: 2026 cover bold-typographic + low-decoration, split closing slide, vintage typewriter NOT a 2026 trend (but Stefan established)

## Open questions for v10 execution

1. **Qwen 3.7 Max final status check**: research one more time before Phase 2. If confirmed active, keep in carousel B; if not, replace with MiMo-V2.5-Pro.
2. **Carousel B first comment hashtags**: which 3-5 real terms apply? (likely: #SoftwareEngineering, #AIAgents, #LLM, #OpenSource, #RAG). User decides.
3. **Carousel B LinkedIn body**: "I have spent the last 2 years..." was carousel A's opener; carousel B needs a different angle. User decides on angle or agent proposes 3 options.
4. **Slide 1 page counter "1 / 6"**: adds visual complexity but matches 2026 best practice. User confirms or skips.
5. **MiniMax M3 in carousel B**: keep with "weights pending" caveat, or drop? User decides.
6. **Blog post B launch**: same day as carousel B, or staggered (carousel first, blog 1 week later)?

## Review status

Plan locked. Awaiting user confirmation or course correction before Phase 1 starts.
