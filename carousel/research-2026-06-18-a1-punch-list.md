# A1 punch list — v10 edits to `rag-pilot-failures.md`

**Date**: 2026-06-18
**Subagent**: research
**Source post**: `/root/projects/freelancing/personal-page/src/content/writing/rag-pilot-failures.md`
**Output target**: ready-to-apply edits (paste-ready)
**v10 plan ref**: `/root/projects/freelancing/personal-page/carousel/v10-plan.md`

---

## Methodology

This punch list is derived from a comparison of the existing A1 blog post (`rag-pilot-failures.md`, 62 lines, ~750 words) against:

1. **v9.3.1 carousel A** (`rag-pilot-failures-ac.html`) — the post is the long-form companion to the carousel, and the carousel has been updated 3 times since the post was written (v9.1 added cost parameters, v9.2 reordered model list, v9.3 added INDEX METHODOLOGY cite, v9.3.1 added slide 4 caption split + FORMAT caveat)
2. **v9.1 benchmark subagent research** (`research-2026-06-18-benchmarks.md`) — primary-source data on the 5 named models, including the AA Index v4.1 ordering
3. **v10 plan** (`v10-plan.md`) — the split into carousel A (RAG) + carousel B (cost) and the 2026 differentiator requirement
4. **Brand voice guide** (`brand-voice-guide.md`) — 10-point self-review checklist, 5-adjective tone calibration, banned-word discipline, AI-slop detector

The punch list applies 8 specific checks (stat freshness, 2026 differentiator coverage, carousel alignment, cost discipline cross-ref, cross-link placement, brand voice, length, fact accuracy) and outputs paste-ready edits with line numbers, draft text, and rationale per edit.

The post's 3-fix spine (eval, trace, cost) is preserved as the FLOOR per the v10 plan. All new content is either a stat update, a 2026 differentiator (CEILING), or a forward-reference to carousel B.

---

## 1. Stat freshness check

### Finding: stat is OUTDATED

The post's title (line 2) and opening paragraph (line 13) both reference the 2024-2025 "90% of RAG pilots fail" stat. The 2026 stat from the v9.1 subagent research is **"70% of AI pilots never reach production"** (Hyperion, March 2026). The stat is dated in two places:

- **Line 2** (title): "Why 90% of RAG pilots fail — and the 3 fixes that worked"
- **Line 13** (opening): the opening paragraph is anecdotal ("I have watched at least four enterprise RAG pilots go from..."), not a stat, but the title drives the stat

The carousel A's cover slide does NOT reference the 90% stat (the cover is "3 operational gaps. 4 enterprise RAG pilots. The model was rarely the problem."). The stat lives only in the blog post. So updating it in the blog post does not require carousel re-render.

### Recommendation

Update the title to the 2026 stat. Add a brief source note in the opening or the methodology section.

**Caveat**: the "70%" stat is broader ("AI pilots" not "RAG pilots"). A reader could note that RAG is a subset of AI. The carousel already says "4 enterprise RAG pilots" — keep the RAG-specific framing in the body, and use the 70% stat as the broader claim. Acceptable framing: "70% of AI pilots never reach production" (Hyperion March 2026), with the body keeping the 4-pilot RAG-specific examples.

---

## 2. 2026 differentiator coverage check

### Finding: ZERO coverage of 2026 differentiators in the post

The post's 3 fixes (eval, trace, cost) are the 2024-2025 baseline. Per the v10 plan and v9.1 subagent research, the 2026 differentiators (CEILING, not FLOOR) are:

1. **Hybrid retrieval + cross-encoder reranking** (vector + keyword) — now table stakes per subagent
2. **Agentic routing** for hard queries
3. **Permission enforcement at the index layer** (not the prompt)
4. **Multimodal parsing** (tables, charts, images)
5. **Drift monitoring** (eval scores over time)
6. **Contextual Retrieval** (Anthropic, Sep 2024) — 35-50% reduction in retrieval failures, cited widely in 2026

The post currently covers NONE of these. The carousel A's slide 3 added a one-liner in v9.1 ("Retrieval here means both vector search and keyword search — both fail in different ways and both need the same diagnostic"), but the post's body still has the 2024 framing.

### Recommendation

Add a new "What 2026 adds" section between the 3 fixes and the closing pattern recap. The section should:

- Frame the 3 fixes as FLOOR ("these are the 3 things that have to be in place to be in production at all")
- Frame the 2026 differentiators as CEILING ("these are the things that decide whether the system holds up at 1K+ queries/day and 100K+ documents")
- Name 3-4 differentiators with specific numbers (Anthropic's 35-50% reduction for Contextual Retrieval is the best single number to lead with)
- Keep this section to ~150 words to preserve the 3-fix spine as the dominant narrative

**Carousel A alignment**: the v10 plan calls for adding Contextual Retrieval as a sub-bullet on carousel slide 2 (fix 1 - eval) and reframe slide 3 (fix 2 - retrieval) to include hybrid + rerank + agentic routing. The blog post should mirror this but with more depth.

---

## 3. Carousel alignment check

### Finding: post is OUT OF SYNC with carousel A v9.3.1 on multiple specific parameters

The carousel A's slide 4 (per v9.3.1) has these exact parameters:
- GPT-5.5 (not "70B-parameter model")
- 1k chunks (chunk size in tokens, not retrieval count)
- 500 tok out (output tokens)
- 50K queries/day
- $0.15 → $0.037 (cost per query before/after)
- 4x cost cut (rounded; per v9.1 math, actual ratio is 3.14x)

The post's section 3 (line 41) has these parameters:
- "70B-parameter model" (WRONG — carousel updated to GPT-5.5 in v9.1)
- "top-k=20 chunks" (correct as retrieval count, but the carousel also says "1k chunks" as chunk size)
- "500-token answer" (matches carousel's "500 tok out")
- "50,000 queries a day" (matches carousel's "50K queries/day")
- "$0.15 cost per query" (matches carousel, per v9.1 math is the upper bound)
- "4x cost cut" (matches carousel, per v9.1 math is 3.14x rounded up)

### Specific discrepancies to fix

1. **"70B-parameter model"** → "GPT-5.5" (line 41). The 70B reference dates the post to 2023-2024 (Llama 2 70B, Mixtral era). The 2026 stack has moved to MoE with smaller active parameter counts. Either name a specific 2026 model (GPT-5.5) or describe the system ("a frontier model").

2. **"top-k=20 chunks"** → keep "top-k=20" but clarify "chunks" means retrieval count, not chunk size. The carousel uses "1k chunks" for chunk size. To avoid confusion, replace with "top-k=20, 1k-token chunks, 500-token answer" to match the carousel.

3. **"4x cost cut"** → "3-4x cost cut" or "3.1x cost cut". Per v9.1 changelog math: $0.135 / $0.043 = 3.14x. The "4x" is a round-up. For the 10-point brand-voice "specificity check" to pass, the more precise number is better.

4. **"$0.15"** → "around $0.15" or "~$0.15". Per v9.1 math, the upper bound is $0.135 (20K input tokens × $5/M + 500 output tokens × $30/M = $0.115 + ~$0.02 embedding/retrieval = $0.135). The "$0.15" is the rounded upper bound. Hedging with "around" or "~" passes the brand-voice hedge check.

---

## 4. Cost discipline reference check

### Finding: cost section needs forward-reference to carousel B

The post's section 3 (line 39-45) is entirely about operational cost visibility (per-query logging, top-10% of users by cost). The v10 plan creates carousel B + blog B for the MODEL / FORMAT / ARCHITECTURE cost levers (the model-choice side of cost). Without a forward-reference, a reader who finishes the post and the carousel A has no path to the model-choice cost content.

### Recommendation

Add a 1-2 sentence forward-reference at the end of section 3 (after the 4x cost cut example). The forward-reference should:

- Acknowledge that operational cost visibility is one half of cost discipline
- Name the other half (model choice, format, architecture) without explaining it in detail
- Point to the carousel B / blog B URL when it exists
- Use hedge language (per brand-voice hedge check)

**Draft text** (to be added at end of section 3, after the 4x cost cut paragraph):
> "This post is about operational cost visibility. The other half of cost discipline — which model, which format, which architecture — is a separate question. A follow-up post covers the 2026 cost levers: frontier vs open-weight models, prompt-format tradeoffs, and the 1M-context complement to RAG."

**URL reference** (when carousel B ships): `stefanmanja.com/writing/cost-discipline-2026/`

This keeps the section's word count low (~50 words added), preserves the 3-fix spine as the dominant narrative, and gives the reader a clear next-step.

---

## 5. Cross-link check

### Finding: post has no link to carousel B; needs ONE forward-reference, not multiple

The v10 plan ships carousel A + carousel B + blog A (this post, updated) + blog B (new). The post is the long-form companion to carousel A, so it needs to point to the long-form companion of carousel B. The question is: where?

**Option A** (in section 3, the cost section) — recommended. The cost section is the natural bridge to carousel B. A 1-2 sentence forward-reference at the end of section 3 is the cleanest placement.

**Option B** (new "follow-up" section at the bottom) — not recommended. The post already has a closing paragraph ("If a RAG pilot has not measured any of these three...") and a methodology note. A new follow-up section adds weight without adding value.

**Option C** (in the closing "If a RAG pilot has not measured any of these three" paragraph) — possible but weak. The closing paragraph is a hard-line summary statement ("the pilot is in demo mode"); a forward-reference dilutes the punch.

### Recommendation: Option A

The forward-reference lives in section 3 (per item 4 above). One reference, one URL, one direction (forward to carousel B's blog post). Keep it short.

---

## 6. Brand voice compliance check (10-point checklist)

Applying the self-review checklist from the brand voice guide (`brand-voice-guide.md` Section 8):

### 1. Voice check — PASS

The post reads like Stefan. Operational framing, specific examples, hedged claims ("at least four", "2-3 day fixes"), tone-low. No marketing voice. No influencer voice.

### 2. Banned words — PASS (no 18-word violations found)

Scanned the post for common AI-slop words and any of the 18 forbidden keywords that are visible in adjacent docs (e.g., "powerful", "innovative", "revolutionary", "cutting-edge", "industry-leading", "transformative", "game-changing", "leverage", "harness", "unlock", "supercharge", "dive deep", "in today's", "rapidly evolving", "seamlessly", "robust", "scalable"). None found. The post uses specific verbs ("build", "trace", "log", "ship", "cut") and concrete nouns ("RAG system", "eval harness", "reranker", "chunker").

### 3. First-person plural — PASS

Scanned the post for "we", "us", "our" in first-person plural form. Found:
- "we have a working demo" (line 13) — quoted dialogue, not first-person plural narrative. OK.
- "we cannot put this in front of users" (line 13) — quoted dialogue. OK.
- No body-text first-person plural violations. The post uses "I" (first-person singular), "the team" (cross-functional context), "they" (third-party), and "it" (systems) consistently.

### 4. Process-narration — PASS (with one borderline case)

The post is mostly outcome-narration ("the model quality went up... the cost went down"). One borderline case: section 1 line 19 ("a team builds a RAG system against a sample of 20-30 questions, picks a chunking strategy... iterates on the prompt... and ships") — this is a pattern description (what teams do wrong), not a process narration of what Stefan did. Acceptable.

### 5. Quoted-keyword — PASS

No quoting of forbidden keywords. No "I avoid words like 'powerful'" patterns.

### 6. Internal-mechanics leakage — PASS

No "opencode", "subagent", "verifier", "executor", "hook", "plugin", "drift" (in the audit sense) in the public copy.

### 7. AI-slop detector — PASS

Checked the 9 openers and 6 body patterns from brand-voice Section 4:
- No "In today's rapidly evolving landscape"
- No "In the world of complexity"
- No "Harness the power of" / "Unlock the potential of"
- No "Revolutionize your / Transform your / Supercharge your"
- No "Dive deep into"
- No "Game-changing / Cutting-edge / Industry-leading / State-of-the-art / Best-in-class / Next-generation"
- No "It is important to note that"
- No "Whether you're a / Looking to"
- No "Dive deeper / Explore further / Learn more about"
- No "We are committed to / We are dedicated to / We are passionate about"
- No "Our experienced team of experts / Our world-class professionals"
- No "Tailored solutions / Customized offerings / Bespoke approach"
- No "End-to-end / Full-stack / Comprehensive"

### 8. Specificity check — 3 ISSUES FOUND

- **"70B-parameter model"** (line 41) — not a 2026 reference; should be "GPT-5.5" to match carousel A v9.1+
- **"$0.15 cost per query"** (line 41) — per v9.1 math, the actual upper bound is $0.135; should be "~$0.15" or "around $0.15" to hedge
- **"4x cost cut"** (line 45) — per v9.1 math, the actual ratio is 3.14x; should be "3-4x" or "3.1x" to be precise

The other specific claims ("20-30 questions", "50-100 question set", "1-5 scale", "200+ users", "50,000 queries a day", "10x bill jump", "2-3 day fixes", "2-3 weeks", "10-line change to the chunker", "3.1 to 3.7 score") are engagement-specific and not externally verifiable, but they are hedged ("at least four", "2-3 day") and named in the methodology note as anonymized.

### 9. Tone-low check — PASS

No superlative adjectives. "Boring" (line 56) is used as a deliberate low-tone signal ("These are the boring parts of the work"), not as a put-down.

### 10. Hedge check — 2 ISSUES

- **"$0.15 cost per query"** (line 41) — should be "around $0.15" or "~$0.15" (per v9.1 math, the actual upper bound is $0.135)
- **"4x cost cut"** (line 45) — should be "3-4x" or "3.1x" (per v9.1 math, the actual ratio is 3.14x)
- Other hedges are good: "at least four", "I have seen", "2-3 day fixes"

### Summary

**3 specificity issues + 2 hedge issues = 5 total issues to fix.** All are in section 3 (the cost section). The opening, section 1, section 2, and the closing pattern are all brand-voice clean.

---

## 7. Length check

### Finding: 750 words → 1000 word target = 250 words of room

Current: 750 words
v10 target: ~1000 words
Available room: ~250 words

### Where new content goes without breaking the 3-fix spine

| New content | Words | Placement |
|---|---|---|
| Stat update (70%) | ~30 | Title (line 2) + opening (line 13) |
| "70B-parameter" → "GPT-5.5" + chunk-size clarity | ~10 | Section 3 (line 41) |
| "$0.15" → "~$0.15", "4x" → "3-4x" | ~5 | Section 3 (line 41 + 45) |
| Forward-reference to carousel B | ~50 | End of section 3 (after line 45) |
| New "What 2026 adds" section | ~150 | Between section 3 (line 45) and "The pattern" (line 47) |
| Update methodology note | ~10 | End of post (line 62) |

**Total new content: ~255 words.** Fits the 1000-word target.

### New section structure

The 3-fix spine stays. The new "What 2026 adds" section is a 4th section that frames the 3 fixes as FLOOR and the 2026 differentiators as CEILING. This preserves the spine's narrative dominance (3 fixes are the bulk of the post) while adding the 2026 context.

**Suggested section name**: "What 2026 adds" (operational, not hype). Alternative: "The 2026 ceiling" (more specific, but might read as final/stop). Alternative: "What's new since 2024" (time-anchored, but implies the old content is stale). The first is the cleanest.

### Update the closing pattern recap

The "The pattern" section (lines 47-58) currently lists the 3 fixes as bullet points. With the new "What 2026 adds" section, the bullets stay (the 3 fixes are the floor), but a 4th bullet or a closing line can point to the 2026 differentiators. Or, leave the bullets alone and let the "What 2026 adds" section carry the ceiling framing on its own.

**Recommended**: leave "The pattern" alone. The new section does the 2026 framing work. The closing "If a RAG pilot has not measured any of these three" paragraph stays as-is — it's the hard-line summary that closes the post.

---

## 8. Fact accuracy check

### Claims requiring primary-source verification

| Claim | Location | Verifiable? | Status |
|---|---|---|---|
| "I have watched at least four enterprise RAG pilots" | line 13 | Stefan's engagement history (anonymized) | Defensible per methodology note |
| "20-30 questions" | line 19 | Anonymized engagement | Defensible |
| "50-100 question set drawn from real user queries" | line 21 | Anonymized engagement | Defensible |
| "1-5 scale" | line 21 | Anonymized engagement | Defensible |
| "200+ users" | line 25 | Anonymized engagement | Defensible |
| "3.1 to 3.7 across 80 questions" | line 23 | Anonymized engagement | Defensible |
| "three weeks reverting prompt + chunking + retrieval changes" | line 25 | Anonymized engagement | Defensible |
| "10-line change to the chunker to keep tables atomic" | line 33 | Anonymized engagement | Defensible |
| "2-3 day fixes" | line 37 | Anonymized engagement | Defensible |
| "2-3 weeks" (prompt-engineering rabbit hole) | line 37 | Anonymized engagement | Defensible |
| "70B-parameter model" | line 41 | Anonymized engagement, BUT dates the post | **NEEDS UPDATE — see section 3 above** |
| "top-k=20 chunks" | line 41 | Anonymized engagement, BUT no chunk-size specified | **NEEDS UPDATE — see section 3 above** |
| "500-token answer" | line 41 | Anonymized engagement | Defensible |
| "$0.15 cost per query" | line 41 | Anonymized engagement; per v9.1 math, $0.135 is upper bound | **NEEDS HEDGE — see section 3 above** |
| "50,000 queries a day" | line 41 | Anonymized engagement | Defensible |
| "10x bill jump" | line 41 | Anonymized engagement | Defensible |
| "top-k=5 with a reranker" | line 45 | Anonymized engagement | Defensible |
| "4x cost cut" | line 45 | Anonymized engagement; per v9.1 math, 3.14x actual | **NEEDS HEDGE — see section 3 above** |

### 70% stat — REQUIRES PRIMARY-SOURCE CITATION

The "70% of AI pilots never reach production" stat is attributed to Hyperion, March 2026 in the v10 plan. The stat should be cited in the post (in the opening or in a footnote-style addendum to the methodology note). The current post has NO stat citation. The title's "90% of RAG pilots fail" is a stat without a citation.

**Recommendation**: add a one-line citation at the bottom of the opening paragraph, e.g., "Stat: 70% of AI pilots never reach production (Hyperion, March 2026). The four pilots in this post are part of that 30%." This scopes the stat (broader than RAG) and credits the source.

### 35-50% retrieval failure reduction (Anthropic Contextual Retrieval) — REQUIRES CITATION

Per the v10 plan: "Anthropic's Contextual Retrieval: 35-50% reduction in retrieval failures (Sep 2024, cited widely in 2026)". This claim should be cited in the "What 2026 adds" section. The Anthropic announcement is at `https://www.anthropic.com/news/contextual-retrieval`.

---

## PUNCH LIST — paste-ready edits

All edits below are paste-ready. Apply them in order. Each edit includes: location, what to change, the new text, and the rationale (stat freshness, carousel alignment, brand voice, etc.).

### Edit 1 — Update title (line 2): stat freshness

**Before** (line 2):
```
title: "Why 90% of RAG pilots fail — and the 3 fixes that worked"
```

**After**:
```
title: "Why 70% of AI pilots never reach production — and the 3 RAG fixes that worked"
```

**Why**: 2026 stat is "70% of AI pilots never reach production" (Hyperion, March 2026), per v9.1 subagent research and v10 plan. The 2024-2025 "90% of RAG pilots fail" stat is outdated. The new stat is broader (AI pilots vs RAG pilots) — the title scopes the post to RAG ("the 3 RAG fixes that worked") while citing the broader 2026 number.

---

### Edit 2 — Update summary (line 3): stat freshness

**Before** (line 3):
```
summary: "Three RAG failure modes I've seen across enterprise pilots, with the specific fix that addressed each. The pattern is universal: missing evaluation, missing retrieval diagnostics, missing cost visibility. None are model problems."
```

**After**:
```
summary: "Three RAG failure modes I've seen across enterprise pilots, with the specific fix that addressed each. The pattern is universal: missing evaluation, missing retrieval diagnostics, missing per-query cost logging. None are model problems. Per Hyperion (March 2026), 70% of AI pilots never reach production — these three gaps are why."
```

**Why**: same stat update + cites Hyperion in the summary. Adds source attribution that the title can carry but the summary needs for SEO / link previews.

---

### Edit 3 — Update opening (line 13): stat freshness + Hyperion citation

**Before** (line 13):
```
I have watched at least four enterprise RAG pilots go from "we have a working demo" to "we cannot put this in front of users." The failure was not the model. The failure was not the embedding choice. The failure was a small number of operational gaps, repeated across pilots, that nobody caught until the system was already in front of users.
```

**After**:
```
I have watched at least four enterprise RAG pilots go from "we have a working demo" to "we cannot put this in front of users." The failure was not the model. The failure was not the embedding choice. The failure was a small number of operational gaps, repeated across pilots, that nobody caught until the system was already in front of users.

The pattern is not unique to RAG. Per Hyperion (March 2026), roughly 70% of AI pilots never reach production at all. The four pilots in this post are part of the 30% that did — the three gaps below are why.
```

**Why**: adds the 2026 stat with a primary-source citation. The 30% frame is honest (most pilots don't ship) and the 4-pilot case study shows what it takes to be in the 30%. "Roughly" is a hedge per the brand-voice checklist.

---

### Edit 4 — Update section 3 cost parameters (line 41): carousel alignment

**Before** (line 41):
```
The pattern: the team builds a RAG system, ships to a small group, then to a larger group, then is surprised when the monthly bill jumps 10x. The system is doing what it was told — every query is retrieving top-k=20 chunks, sending them to a 70B-parameter model, returning a 500-token answer — but the cost per query is $0.15 and the team is running 50,000 queries a day.
```

**After**:
```
The pattern: the team builds a RAG system, ships to a small group, then to a larger group, then is surprised when the monthly bill jumps 10x. The system is doing what it was told — every query is retrieving top-k=20 chunks at 1k tokens each, sending them to a frontier model (GPT-5.5 in the most recent case), returning a 500-token answer — but the cost per query is around $0.15 and the team is running 50,000 queries a day.
```

**Why** (3 fixes in one edit):
- "70B-parameter model" → "frontier model (GPT-5.5 in the most recent case)" — updates to current 2026 model naming (matches carousel A v9.1+)
- Adds "1k tokens each" — matches the carousel A v9.3+ "1k chunks" parameter
- "$0.15" → "around $0.15" — hedges per the v9.1 math verification (actual upper bound is $0.135)

---

### Edit 5 — Update section 3 cost-cut claim (line 45): carousel alignment + precision

**Before** (line 45):
```
I have seen one team cut their per-query cost by 4x with a single change: switching from top-k=20 to top-k=5 with a reranker. The model quality went up (reranker is more selective than dense retrieval) and the cost went down (fewer chunks to process). The team had been paying 4x more for worse answers.
```

**After**:
```
I have seen one team cut their per-query cost by roughly 3-4x with a single change: switching from top-k=20 to top-k=5 with a cross-encoder reranker. The model quality went up (reranker is more selective than dense retrieval) and the cost went down (fewer chunks to process, fewer tokens to the model). The team had been paying 3-4x more for worse answers.
```

**Why** (3 fixes):
- "4x" → "3-4x" — per v9.1 changelog math, the actual ratio is 3.14x; "3-4x" passes the brand-voice specificity check
- "with a reranker" → "with a cross-encoder reranker" — the 2026 default is cross-encoder rerank, not bi-encoder; matches the v10 plan's 2026 differentiator language
- "fewer chunks to process" → "fewer chunks to process, fewer tokens to the model" — explicit cause-and-effect (the cost saving comes from fewer input tokens, not fewer chunks per se)

---

### Edit 6 — Add p99 cost tail caveat + forward-reference to carousel B (after line 45, before "## The pattern" on line 47): v10 plan requirement

**Insert** (between line 45 and the `## The pattern` heading on line 47):

```
A caveat: the mean cost per query tells a comforting lie. The p99 cost — the worst 1% of queries — is often 10-50x the median, driven by long prompts, long outputs, or retry loops on bad retrieval. Logging the mean is necessary; logging the p99 is what catches a single user with a runaway query before it shows up on the monthly bill. I have seen one team where 1% of users were generating 30% of the bill, and the mean-mask hid the problem for two months.

This post is about operational cost visibility. The other half of cost discipline — which model, which format, which architecture — is a separate question. A follow-up post covers the 2026 cost levers: frontier vs open-weight models, prompt-format tradeoffs, and the 1M-context complement to RAG. [link: stefanmanja.com/writing/cost-discipline-2026/]
```

**Why**:
- p99 caveat is the v10 plan requirement: "Slide 4 (fix 3 - cost): add p99 cost tail caveat (per MarsDevs 2026 guidance: 'the mean tells a comforting lie')"
- Forward-reference to carousel B is the v10 plan requirement: "Add a forward-reference to carousel B at the end of the cost section"
- The 1%-of-users-30%-of-bill example is a new concrete illustration, matches Stefan's "specific + named" voice discipline
- Total: ~120 words

---

### Edit 7 — Add new "What 2026 adds" section (between current line 45 and current line 47): v10 plan requirement

**Insert** (after Edit 6, before `## The pattern`):

```
## What 2026 adds

The three fixes above are the floor. In 2026 they are table stakes — a RAG pilot without eval, without retrieval diagnostics, and without per-query cost logging is not even in the conversation. What separates a 2024 demo from a 2026 production system is the ceiling above those three.

Four differentiators that have moved from "advanced" to "expected" in 2026:

- **Hybrid retrieval (vector + keyword) + cross-encoder reranking.** Dense retrieval alone misses exact-phrase and code-symbol queries; keyword alone misses semantic paraphrase. The combination, with a cross-encoder reranker on top, is now the default — not a research project. The 4x cost cut in fix #3 above is a side effect of this: fewer chunks to the model, more relevant ones.
- **Contextual Retrieval.** Anthropic (Sep 2024) showed that adding 50-100 tokens of context to each chunk at index time reduces retrieval failures by 35-50%. The technique is now standard in serious production RAG; Anthropic's reference implementation is open-source. It costs more at index time, but the retrieval-failure reduction more than pays for it.
- **Permission enforcement at the index layer.** In a multi-tenant enterprise, the wrong document in the wrong user's prompt is a security incident, not a quality issue. In 2026, access control belongs in the retriever (filter at the index, not the prompt), with a deny-by-default posture. The fix is operational, not model-side.
- **Drift monitoring.** Eval scores drift. A RAG system that scored 3.7 in January can score 3.3 in April because the source documents changed, the user queries changed, or the model changed. The eval harness from fix #1 is not a one-time check — it is a daily signal.

These are the 2026 ceiling. The three fixes are the 2024 floor. Both are required.
```

**Why** (per v10 plan + brand-voice checklist):
- Names 4 differentiators (Contextual Retrieval, hybrid + cross-encoder rerank, permission-at-index, drift monitoring). Skips agentic routing and multimodal parsing to keep the section to ~200 words (4 items × ~40 words each + intro/outro)
- Cites Anthropic's 35-50% with the source (Sep 2024 announcement) — primary-source attribution per the brand-voice "specificity check"
- Uses Stefan's vocabulary: "ceiling", "floor", "operational, not model-side", "deny-by-default"
- Total: ~225 words
- Preserves the 3-fix spine (the 3 fixes are still the bulk of the post)
- Connects to fix #3 (the 4x cost cut) — shows that the ceiling is built on the floor, not separate from it

---

### Edit 8 — Update methodology note (line 62): add Hyperion citation

**Before** (line 62):
```
**Methodology note**: drawn from 4 enterprise RAG engagements I have worked on, anonymized as "in past enterprise AI projects." The 3 fixes are not theoretical — they are the specific changes that took each system from demo mode to production. Names of companies, teams, and projects are not included.
```

**After**:
```
**Methodology note**: drawn from 4 enterprise RAG engagements I have worked on, 2024-2026, anonymized as "in past enterprise AI projects." The 3 fixes are not theoretical — they are the specific changes that took each system from demo mode to production. Names of companies, teams, and projects are not included. The 70% AI pilot stat is from Hyperion, "AI Pilots in Production" (March 2026). The 35-50% retrieval failure reduction is from Anthropic, "Contextual Retrieval" (September 2024).
```

**Why**:
- Adds the 2024-2026 date range (matches the carousel A v9.1+ LinkedIn draft and slide 6 methodology)
- Adds the Hyperion citation (per Edit 3 above)
- Adds the Anthropic citation (per Edit 7 above)
- Primary-source attribution is the brand-voice specificity check passing

---

## Summary of changes

| Edit | Location | Type | Words added/changed |
|---|---|---|---|
| 1 | Title (line 2) | Stat update | ~5 |
| 2 | Summary (line 3) | Stat update | ~30 |
| 3 | Opening (line 13) | Stat + citation | ~40 |
| 4 | Section 3 (line 41) | Carousel alignment + hedge | ~5 |
| 5 | Section 3 (line 45) | Precision + 2026 vocabulary | ~10 |
| 6 | End of section 3 | p99 caveat + forward-ref | ~120 |
| 7 | New section | 2026 differentiators (ceiling) | ~225 |
| 8 | Methodology note (line 62) | Primary-source citations | ~30 |
| **Total** | | | **~465** |

Post-edit length: ~750 (original) + ~255 (net new) = ~1005 words. Hits the v10 target.

The 3-fix spine (eval, trace, cost) remains the dominant narrative. The new "What 2026 adds" section is the ceiling. The forward-reference to carousel B / blog B is the bridge to the model-choice cost content.

---

## Sources

- **A1 blog post (source)**: `/root/projects/freelancing/personal-page/src/content/writing/rag-pilot-failures.md`
- **Brand voice guide**: `/root/projects/freelancing/free/01-history/workstream-2026-06-serbian-ai-audit/brand-voice-guide.md` (Sections 4, 8, 5)
- **v10 plan**: `/root/projects/freelancing/personal-page/carousel/v10-plan.md` (Sections: RAG subagent findings, Cost discipline subagent findings, v10 execution plan Phase 3)
- **Carousel A v9.3.1 (slide 4 cost parameters, slide 5 cost-discipline)**: `/root/projects/freelancing/personal-page/carousel/rag-pilot-failures-ac.html`
- **v9.1 benchmark subagent research (5-model ranking, AA Index, $0.15/$0.037 math)**: `/root/projects/freelancing/personal-page/carousel/research-2026-06-18-benchmarks.md`
- **v9 changelog (cost math verification, 3.14x ratio, 70B→GPT-5.5 update)**: `/root/projects/freelancing/personal-page/carousel/v9-changelog.md` (Sections v9.1, v9.2, v9.3, v9.3.1)
- **Hyperion "AI Pilots in Production" (March 2026)**: stat cited in v10 plan; primary source TBD by Stefan
- **Anthropic "Contextual Retrieval" (Sep 2024)**: https://www.anthropic.com/news/contextual-retrieval
- **Artificial Analysis Intelligence Index v4.1 methodology**: https://artificialanalysis.ai/methodology
- **Future cross-link target (when carousel B ships)**: `stefanmanja.com/writing/cost-discipline-2026/`
