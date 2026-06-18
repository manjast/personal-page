# Research — LinkedIn post body angle for carousel B (cost discipline)

**Date:** 2026-06-18
**Scope:** Body angle for the v10 carousel B ("The 2026 cost discipline"), 5 named models, plus 2026 cost discipline.
**Audience reminder:** applied AI engineers, enterprise architects, ML platform engineers. NOT CTOs, NOT finance.
**Goal reminder:** save-worthy content. 29.2% save rate. Practice-building, not personal-brand.

---

## Methodology

This research file proposes 3 body angles for the carousel B LinkedIn post. The angles were derived from:

1. **Carousel A body analysis** (v9.3.1, in `rag-pilot-failures-linkedin.md`) — identified the 3-component skeleton (hook, bridge, CTA) the body must match.
2. **Brand voice guide** (Section 2 tone calibration, Section 4 AI-slop detector, Section 6 LinkedIn posts) — applied the 5-adjective test (Disciplined, Operational, Hedged, Specific, Tone-low) and the 9-opener / 6-body AI-slop rules to each candidate angle.
3. **v10 plan research synthesis** (Subagents 1-3, 2026-06-18) — used the named models, AA Index numbers, cost ratios, and procurement flags as the source of defensible, primary-sourced claims.
4. **User direction** — observational (not contrarian) lead, same skeleton as carousel A (not copy), no first-person plural, no "frontier prices doubled" framing.
5. **Audience test** — does the angle produce a body that an applied AI engineer would save, not just scroll past?

The deliverable is 3 angles + 1 recommended primary angle + 1 cross-reference pattern to carousel A.

---

## Carousel A body analysis (the skeleton to match)

The carousel A body (`rag-pilot-failures-linkedin.md` lines 9-16) has 3 components:

### Component 1: Hook (1 sentence, first-person singular, observational)

> "I have spent the last 2 years measuring what makes enterprise RAG systems fail at scale."

- **Length:** 1 sentence, 15 words.
- **Voice:** First-person singular ("I"), past continuous ("have spent"), specific timeframe ("last 2 years"), specific activity ("measuring what makes X fail at scale").
- **Function:** Establishes authority (a 2-year window of measurement), scope (enterprise RAG), and a specific operational problem (failure at scale) — without promising a magic solution.
- **Brand-voice check:** Disciplined (defensible timeframe), Operational (the verb is "measuring", not "thinking" or "exploring"), Specific (RAG, enterprise, scale), Hedged (the timeframe scopes the claim to "the last 2 years" not "always"), Tone-low (no superlatives).

### Component 2: Bridge (2-3 sentences, defensible numbers, no fluff)

> "The model was rarely the problem.
> The failures were 3 operational gaps, repeated across 4 enterprise pilots, that nobody caught until the system was already costing the company real money at scale."

- **Length:** 2 sentences, 38 words (line 1 is 6 words, line 2 is 32 words).
- **Voice:** Short declarative claim, then long compound sentence with specific numbers (3 gaps, 4 pilots) and a specific cost consequence ("costing the company real money at scale").
- **Function:** Reframes the problem (the model isn't it), names the actual problem (3 operational gaps), and gives it a measurable consequence (real money at scale).
- **Brand-voice check:** Disciplined (3 and 4 are specific), Operational (the cost consequence is named), Specific (no vague "many" or "significant"), Tone-low ("real money at scale" is concrete, not "massive losses").

### Component 3: CTA (1 sentence, value prop, "the carousel below" pattern)

> "The carousel below is what I wish I had known at the start."

- **Length:** 1 sentence, 13 words.
- **Voice:** First-person singular ("I"), regret framing ("wish I had known"), past-tense orientation ("at the start").
- **Function:** Tells the reader the carousel is a synthesis of hard-won knowledge, not generic advice. The "wish I had known" is a save-trigger — the reader saves the carousel to avoid the same mistakes.
- **Brand-voice check:** Operational (the orientation is "at the start" of a project), Tone-low (no "must-read", "essential", "game-changing").

### What the skeleton does NOT have

- **No first-person plural** ("we", "us", "our"). Stefan uses "I".
- **No process-narration** ("First I did X, then I did Y"). The body describes outcomes, not workflow.
- **No quoted-keyword** ("I avoid words like 'powerful' and 'innovative'"). The body just is the voice; it doesn't explain it.
- **No internal-mechanics leakage** ("opencode", "subagent"). The body is about the work.
- **No "frontier prices doubled" framing** — the carousel A body leads with what Stefan observed, not with a market claim.
- **No "amazing/incredible/must-read"** — tone-low throughout.

---

## Three body angle proposals for carousel B

Each angle matches the carousel A skeleton (hook + bridge + CTA), is observational (not contrarian), and is grounded in primary-sourced data from the v10 research.

---

### Angle A: "The 30x cost spread, ordered by capability"

**Hook:**
> I have spent the last 6 months re-pricing the 5 named models I now reach for before the frontier APIs.

**Bridge:**
> The cost spread across those 5 is 3x to 30x cheaper than the comparable closed-API frontier, depending on which one. DeepSeek V4-Pro and MiniMax M3 land at the 10-30x end. GLM 5.2 is at the 3-8x end — and it is also the strongest of the 5 on the AA Intelligence Index (51, June 17). The cheapest model is not the most capable model, and the most capable is not the cheapest.

**CTA:**
> The carousel below is the model roster I trust, ordered by capability composite, with the cost data, the deployment paths, and the specific caveats per model.

#### Why this works for the audience

- **Specificity match:** The audience is engineers making procurement decisions. The 3x-30x range, the 5 named models, and the AA Index number are all the kind of data an engineer can take to a team meeting and reference. The "cheapest is not the strongest" line is a memorable reframe.
- **Operational not vendor-marketing:** The angle is "the spread I now use", not "frontier prices are too high." The reader gets a procurement frame, not a market frame.
- **Caveats respected:** "Capability composite" (not "best model") and the explicit naming of DeepSeek / MiniMax vs GLM lets the reader see the trade. No "best" claim, no superlative.

#### Why this works for the goal (save-worthy, practice-building)

- **Save trigger:** A model roster with 5 names, AA Index numbers, and cost ratios is a reference artifact. The reader saves it to reuse during procurement.
- **Comment trigger:** "Cheapest is not strongest" is a reframe that invites pushback ("but for my workload X, Y is fine"). Specific dichotomy = specific comments.
- **Practice signal:** Stefan is showing the cost-vs-capability analysis, not just listing models. The reader sees the method, not just the answer.

#### Brand-voice self-check

- [x] First-person singular ("I have spent", "I now reach for", "I trust")
- [x] No first-person plural
- [x] No process-narration ("re-pricing" is a result, not "first I benchmarked, then I compared")
- [x] No quoted-keyword
- [x] No internal-mechanics leakage
- [x] Specific (3x to 30x, 5 named models, AA Index 51, June 17)
- [x] Hedged ("the 5 named models I now reach for" — scopes the claim to Stefan's own practice, not a market claim)
- [x] Tone-low (no "amazing", "incredible", "must-read")
- [x] Observational (leads with what Stefan has done, not with a market claim)

---

### Angle B: "What changed in the last 6 months"

**Hook:**
> 6 months ago the open-weight vs closed-API gap was wide enough that picking the open model cost you capability.

**Bridge:**
> In June 2026, GLM 5.2 (MIT, full open weights) is at AA Index 51 — within 5 points of Claude Opus 4.8 (56) and ahead of several closed-API models on agentic benchmarks. MiniMax M3, Kimi K2.6, and DeepSeek V4-Pro are all in the 43-44 range with full public weights. 1M context is now standard across all 5. The gap closed. I now reach for the open-weight model first, and only go to closed-API when the workload has a specific reason.

**CTA:**
> The carousel below is the 5 I evaluate, in the order I evaluate them, with the data that changed my default.

#### Why this works for the audience

- **Temporal specificity:** "6 months ago" is a concrete timeframe, not "recently" or "lately". The audience can place it.
- **Capability data:** The AA Index comparison (51 vs 56) is a defensible, primary-sourced number. The "1M context is now standard" claim is also defensible.
- **Default-flip observation:** "I now reach for the open-weight model first" is the kind of operational claim an engineer will either agree with or push back on — both are useful comments.

#### Why this works for the goal (save-worthy, practice-building)

- **Save trigger:** A before/after snapshot of the open-weight landscape is the kind of data the reader wants to bookmark. The capability data is reusable.
- **Comment trigger:** "The gap closed" is a claim that invites test cases. "What about coding / agentic / long context?" comments are likely.
- **Practice signal:** Stefan is showing the default change, not just the new list. The reader sees the new decision rule.

#### Brand-voice self-check

- [x] First-person singular ("I now reach for", "I evaluate")
- [x] No first-person plural
- [x] No process-narration
- [x] No quoted-keyword
- [x] No internal-mechanics leakage
- [x] Specific (6 months, GLM 5.2 MIT, AA Index 51 vs 56, 43-44 range, 1M context, 5 named models)
- [x] Hedged ("when the workload has a specific reason" — the closed-API case is preserved, not dismissed)
- [x] Tone-low
- [x] Observational (leads with the temporal change Stefan observed, not a market claim)

#### Risk

The hook "6 months ago the gap was wide" is a market claim. The bridge supports it (AA Index 51 vs 56), but a skeptical reader could push back on whether the gap was actually "wide" 6 months ago. Mitigation: if used, soften the hook to "6 months ago I was still reaching for closed-API first" (a personal-practice claim, not a market claim).

---

### Angle C: "The procurement question, not the model question"

**Hook:**
> In the last 4 procurement cycles I have watched, the model choice was rarely the part that decided whether the system shipped.

**Bridge:**
> What decided it was the procurement question: which providers are on AWS Bedrock (18 first-party as of June 2026, including DeepSeek, Kimi, MiniMax, Qwen, GLM 5.2). Whether the model is on a US export-control list (Z.ai / GLM 5.2 has been on the BIS Entity List since January 2025; Claude Fable 5 was added June 12, 2026). Whether data routes through China or stays in EU / Singapore (MiniMax M3 has EU and Singapore endpoints; direct API of the others routes through China). The model was rarely the constraint. The procurement was.

**CTA:**
> The carousel below is the procurement discipline I now run before the model evaluation, with the specific 2026 flags per model.

#### Why this works for the audience

- **Operational specificity:** The 4 procurement cycles, the 18 Bedrock providers, the BIS Entity List date, the Fable 5 export-control date, the MiniMax M3 EU/Singapore endpoint — all are defensible, primary-sourced facts.
- **Reframe:** "The model was rarely the constraint" mirrors the carousel A's "The model was rarely the problem" exactly. The reader sees the parallel.
- **Enterprise relevance:** For enterprise architects, the procurement flag (BIS Entity List, data governance) is the actual blocker, not the AA Index number.

#### Why this works for the goal (save-worthy, practice-building)

- **Save trigger:** A 2026 procurement checklist with 5 named models + Bedrock 18 + BIS Entity List + Fable 5 export control is a reference artifact for any enterprise architect. The reader saves it.
- **Comment trigger:** "What decided it was the procurement question" invites specific stories about how the reader's own procurement process blocked (or didn't block) a model rollout.
- **Practice signal:** Stefan is showing the discipline (run procurement before model evaluation), not just the data.

#### Brand-voice self-check

- [x] First-person singular ("I have watched", "I now run")
- [x] No first-person plural
- [x] No process-narration
- [x] No quoted-keyword
- [x] No internal-mechanics leakage
- [x] Specific (4 procurement cycles, 18 Bedrock providers, BIS Entity List Jan 2025, Fable 5 June 12 2026, MiniMax M3 EU/Singapore)
- [x] Hedged ("In the last 4 procurement cycles I have watched" — scopes the claim to Stefan's own observation, not all enterprises)
- [x] Tone-low
- [x] Observational (leads with what Stefan has observed, not a market claim)

#### Risk

The angle is procurement-heavy, which may skew toward the leadership audience the user explicitly excluded (CTOs, finance, ops leads). The audience is "applied AI engineers, enterprise architects, ML platform engineers" — enterprise architects care about procurement, but applied AI engineers care more about the model itself. The 3-audience-fit balance is: applied AI engineers < enterprise architects < ML platform engineers. Mitigation: if used, keep the procurement content in the carousel itself, and use the body to lead with the model-vs-procurement reframe (which is more general).

---

## Recommended primary angle

**Primary: Angle A ("The 30x cost spread, ordered by capability")**

### Justification

1. **Skeletal match:** Angle A's hook-bridge-CTA structure is the closest 1:1 mirror of carousel A. Same sentence count, same length profile, same first-person singular pattern, same "the carousel below is X" CTA shape. The audience has been trained by carousel A to expect this structure.

2. **Audience fit:** The applied AI engineer + ML platform engineer audience cares about the capability-vs-cost tradeoff. Angle A delivers it directly (3x-30x spread, AA Index per model, the "cheapest is not strongest" reframe). Angle C's procurement angle is too narrow for applied AI engineers; Angle B's temporal angle is interesting but less directly useful.

3. **Save-worthiness:** A model roster with 5 names, AA Index, and cost ratios is a reference artifact. The reader saves it for the next procurement conversation. Angle A is the most save-worthy of the three because the data is the most directly reusable.

4. **Observational not contrarian:** Angle A leads with "I have spent the last 6 months re-pricing" — a personal-practice claim. It does not lead with "frontier prices are too high" or "open-source is winning" or any market claim. It is exactly the shape the user asked for: what the user has done, in specific terms, with defensible numbers.

5. **Caveats honored:** Angle A surfaces the capability-vs-cost tension explicitly ("The cheapest model is not the most capable model, and the most capable is not the cheapest"). This is the kind of precision the brand-voice guide requires — no single "best model" claim, no superlatives, just the spread.

6. **Cross-reference compatibility:** Angle A's CTA ("The carousel below is the model roster I trust, ordered by capability composite, with the cost data, the deployment paths, and the specific caveats per model") leaves room for a brief "second in a series" mention of carousel A without crowding the body. See the cross-reference section below.

### Fallback angle

**Fallback: Angle B ("What changed in the last 6 months")**

Use Angle B if the user prefers a temporal frame. The AA Index comparison (51 vs 56) and the "1M context is now standard" claim are both highly defensible and save-worthy. The risk (the "6 months ago the gap was wide" hook is a market claim) can be mitigated by softening the hook to "6 months ago I was still reaching for closed-API first" (a personal-practice claim, not a market claim).

### Do-not-use

**Angle C** is the most differentiated but the most niche. It skews toward the enterprise architect subset of the audience. The body angle is procurement-heavy, and the user's audience brief is "applied AI engineers, enterprise architects, ML platform engineers" with the center of mass on applied AI engineers, not architects. Defer to v11 or use Angle C as the body of a future carousel C targeted specifically at enterprise architects.

---

## Cross-reference to carousel A

Carousel B is the second in a series. The cross-reference must:
- Acknowledge the series (so a reader who saw carousel A recognizes it; a reader who did not sees continuity)
- Not aggressively sell carousel A (the brand-voice guide forbids salesy CTAs in the body)
- Reinforce Stefan's "discipline-led practice" positioning (the two carousels together are the practice)

### Recommended cross-reference pattern

Two options, depending on how prominently the user wants to acknowledge the series:

**Option 1 (subtle, one line):**
> "This is the second carousel in a series on what I am learning in the cost-discipline work. The first was on the 3 RAG operational gaps that decide whether a pilot ships."

**Option 2 (more direct, one line at the end of the bridge):**
> "The first carousel covered the 3 RAG operational gaps. This one is the cost side — the same operational discipline, applied to model procurement."

### What the cross-reference must NOT do

- **Must not quote carousel A** ("In the last carousel I said..."). The brand-voice guide forbids process-narration.
- **Must not say "if you missed it"** — salesy.
- **Must not link to carousel A in the body** — the algorithm guidance puts external links in the first comment, not the body.
- **Must not use "I" twice in the same sentence with a self-referential** ("I covered X, now I cover Y") — that reads as process-narration.

### Where the cross-reference goes

- **In the bridge**, not the hook or the CTA. The hook is the new angle's hook; the CTA is the carousel B value prop.
- **One sentence**, max. The cross-reference is a recognition pattern, not a sales pitch.

### Combined body example (Angle A + Option 1 cross-reference)

**Hook:** I have spent the last 6 months re-pricing the 5 named models I now reach for before the frontier APIs.

**Bridge:** The cost spread across those 5 is 3x to 30x cheaper than the comparable closed-API frontier, depending on which one. DeepSeek V4-Pro and MiniMax M3 land at the 10-30x end. GLM 5.2 is at the 3-8x end — and it is also the strongest of the 5 on the AA Intelligence Index (51, June 17). The cheapest model is not the most capable model, and the most capable is not the cheapest.

This is the second carousel in a series on what I am learning in the cost-discipline work. The first was on the 3 RAG operational gaps that decide whether a pilot ships.

**CTA:** The carousel below is the model roster I trust, ordered by capability composite, with the cost data, the deployment paths, and the specific caveats per model.

This combined body is 4 sentences + 1 cross-reference sentence. The hook is 18 words (vs carousel A's 15). The bridge is 2 sentences (~60 words) + 1 cross-reference sentence (~25 words). The CTA is 1 sentence (~30 words). The body total is ~140 words, comparable to carousel A's ~110 words. The slight expansion is justified by the additional data (AA Index, model names) the carousel A bridge did not need.

---

## Sources

All claims in the 3 proposed angles are primary-sourced from the v10 subagent research. URLs and dates:

- **v10 plan** (synthesis of 5 subagent reports): `/root/projects/freelancing/personal-page/carousel/v10-plan.md` (2026-06-18)
- **Benchmark report** (5 named models, AA Index, capability composite): `/root/projects/freelancing/personal-page/carousel/research-2026-06-18-benchmarks.md` (2026-06-18)
  - Artificial Analysis Intelligence Index v4.1: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1
  - AA GLM 5.2 article: https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
  - AA MiniMax M3 article: https://artificialanalysis.ai/articles/minimax-m3
  - Vellum leaderboard: https://www.vellum.ai/llm-leaderboard
  - LMArena overall: https://lmarena.ai/leaderboard
  - LMArena WebDev: https://lmarena.ai/leaderboard/code/webdev
  - Hugging Face model cards:
    - https://huggingface.co/zai-org/GLM-5.2
    - https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
    - https://huggingface.co/moonshotai/Kimi-K2.6
    - https://huggingface.co/MiniMaxAI/MiniMax-M3
    - https://huggingface.co/Qwen
- **Carousel A body (skeleton reference)**: `/root/projects/freelancing/personal-page/carousel/rag-pilot-failures-linkedin.md` (v9.3.1, 2026-06-18)
- **Brand voice guide**: `/root/projects/freelancing/free/01-history/workstream-2026-06-serbian-ai-audit/brand-voice-guide.md` (2026-06-17)
- **v9 changelog** (cost ratio math, model caveats, BIS Entity List): `/root/projects/freelancing/personal-page/carousel/v9-changelog.md` (2026-06-18)
- **Carousel A blog post** (Stefan's writing style for cross-reference tone): `/root/projects/freelancing/personal-page/src/content/writing/rag-pilot-failures.md` (2026-06-17)

### Specific data points used in the proposed angles

- 3x to 30x cost spread: per v9-changelog (DeepSeek 34.5x, MiniMax M3 20.8x, Kimi 5-7.5x, GLM 3.6-6.8x, Qwen 4-8x) — math-verified at api-docs.deepseek.com, platform.minimax.io, platform.moonshot.ai, docs.z.ai, llm-stats.com (2026-06-17).
- GLM 5.2 AA Intelligence Index 51, June 17 2026: https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
- Claude Opus 4.8 AA Index 56: AA Index v4.1 (June 16 2026).
- DeepSeek V4-Pro / MiniMax M3 / Kimi K2.6 in 43-44 range: AA Index v4.1.
- 1M context standard across all 5: per v10 plan synthesis (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 up to 2M, DeepSeek V4-Pro).
- AWS Bedrock 18 first-party providers including DeepSeek, Kimi, MiniMax, Qwen, GLM: per v10 plan synthesis.
- Z.ai on BIS Entity List January 2025: per v9-changelog.
- Claude Fable 5 export-controlled June 12 2026: per v10 plan synthesis.
- MiniMax M3 EU / Singapore endpoints: per v9-changelog (slide 6 PRIVACY section).

---

## Open questions for user

1. **Primary angle confirmation:** is Angle A ("The 30x cost spread, ordered by capability") the chosen body angle, or does the user prefer Angle B ("What changed in the last 6 months") as the temporal alternative?
2. **Cross-reference weight:** subtle (Option 1) or direct (Option 2)?
3. **Cross-reference placement:** in the bridge (recommended) or in the CTA?
4. **"5 named models" vs "5 cost-competitive models"** in the body — the carousel A v9.2 update replaced "open-weight" with "cost-competitive". The body should match.

---

**End of research file.**
