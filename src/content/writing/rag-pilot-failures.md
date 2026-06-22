---
title: "Why 70% of AI pilots never reach production — and the 3 RAG fixes that worked"
summary: "Three RAG failure modes I've seen across enterprise pilots, with the specific fix that addressed each. The pattern is universal: missing evaluation, missing retrieval diagnostics, missing per-query cost logging. None are model problems. Per Hyperion (March 2026), 70% of AI pilots never reach production — these three gaps are why."
publishedAt: 2026-06-17
displayDate: "2026-06-17"
ogImage: "/og-blog-rag-pilot-failures.png"
locale: "en"
translationKey: "rag-pilot-failures-2026-06-17"
routeSlug: "rag-pilot-failures"
draft: false
heroStat:
  value: "70%"
  label: "of AI pilots never reach production"
  attr: "Hyperion · AI Pilots in Production, March 2026"
---

<div class="blog-hero" role="figure" aria-labelledby="hero-label hero-attr">
  <span class="blog-hero__stat">70%</span>
  <span id="hero-label" class="blog-hero__label">of AI pilots never reach production</span>
  <span id="hero-attr" class="blog-hero__attr">Hyperion · AI Pilots in Production, March 2026</span>
</div>

I have watched at least four enterprise RAG pilots go from "we have a working demo" to "we cannot put this in front of users." The failure was not the model. The failure was not the embedding choice. The failure was a small number of operational gaps, repeated across pilots, that nobody caught until the system was already in front of users.

The pattern is not unique to RAG. Per Hyperion (March 2026), roughly 70% of AI pilots never reach production at all. The four pilots here are part of the 30% that did — by catching and fixing the three gaps below before launch.

## 1. No evaluation harness before the build

The pattern: a team builds a RAG system against a sample of 20-30 questions, picks a retrieval strategy that "looks right," iterates on the prompt until the sample outputs read well, and ships.

The fix: build the eval first. A 50-100 question set drawn from real user queries (not synthesized), graded on a 1-5 scale by the people who will actually use the system, and run after every change. The eval answers a specific question: "is the system better than the previous version of the system, on the questions the users will ask?"

Without the eval, "it looks better" is the only signal. With the eval, the team can say "the answer-quality score went from 3.1 to 3.7 across 80 questions" — and the change was either worth keeping or not.

I have seen two pilots where the eval was built late, after the system was already in front of 200+ users, and the eval surfaced a regression that nobody had noticed. Both teams then spent three weeks reverting prompt + chunking + retrieval changes that had been merged without measurement.

<figure>
  <svg class="blog-svg-frame" viewBox="0 0 880 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fig-eval-title fig-eval-desc">
    <title id="fig-eval-title">Eval-driven iteration loop</title>
    <desc id="fig-eval-desc">Five boxes in sequence: 50 to 100 questions, 1 to 5 grade, after change, score 3.1 to 3.7, keep? The third box (score) is highlighted in terracotta as the result of running the eval after each change.</desc>
    <defs>
      <marker id="arrow-blog-eval" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L6,4 L0,8 Z" class="blog-svg-arrow" />
      </marker>
    </defs>
    <rect x="30" y="20" width="130" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <rect x="195" y="20" width="130" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <rect x="360" y="20" width="130" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <rect x="525" y="20" width="130" height="80" fill="none" stroke="var(--accent)" stroke-width="2" rx="2" />
    <rect x="690" y="20" width="160" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <text class="blog-svg-text" x="95" y="49" text-anchor="middle" dominant-baseline="middle">50–100</text>
    <text class="blog-svg-text" x="95" y="73" text-anchor="middle" dominant-baseline="middle">questions</text>
    <text class="blog-svg-text" x="260" y="49" text-anchor="middle" dominant-baseline="middle">1–5</text>
    <text class="blog-svg-text" x="260" y="73" text-anchor="middle" dominant-baseline="middle">grade</text>
    <text class="blog-svg-text" x="425" y="49" text-anchor="middle" dominant-baseline="middle">after</text>
    <text class="blog-svg-text" x="425" y="73" text-anchor="middle" dominant-baseline="middle">change</text>
    <text class="blog-svg-text-accent" x="590" y="49" text-anchor="middle" dominant-baseline="middle">score</text>
    <text class="blog-svg-text-accent" x="590" y="73" text-anchor="middle" dominant-baseline="middle">3.1 → 3.7</text>
    <text class="blog-svg-text-faint" x="770" y="60" text-anchor="middle" dominant-baseline="middle">keep?</text>
    <line class="blog-svg-line" x1="160" y1="60" x2="190" y2="60" marker-end="url(#arrow-blog-eval)" />
    <line class="blog-svg-line" x1="325" y1="60" x2="355" y2="60" marker-end="url(#arrow-blog-eval)" />
    <line class="blog-svg-line" x1="490" y1="60" x2="520" y2="60" marker-end="url(#arrow-blog-eval)" />
    <line class="blog-svg-line" x1="655" y1="60" x2="685" y2="60" marker-end="url(#arrow-blog-eval)" />
    <text class="blog-svg-text-faint" x="0" y="130">→ on 80 questions, 1 chunking change, measurable diff</text>
    <line x1="0" y1="150" x2="880" y2="150" stroke="var(--rule)" stroke-width="0.5" stroke-dasharray="2 3" />
    <text class="blog-svg-text-faint" x="0" y="178">WITHOUT THE EVAL</text>
    <text class="blog-svg-text" x="200" y="178">"it looks better" is the only signal</text>
    <text class="blog-svg-text-faint" x="0" y="205">WITH THE EVAL</text>
    <text class="blog-svg-text" x="180" y="205">score 3.1 → 3.7, the change is either kept or reverted</text>
  </svg>
  <figcaption>The eval-driven loop answers a single question per iteration: did the last change make the system better on real user questions, yes or no?</figcaption>
</figure>

## 2. No retrieval diagnostics on failed answers

The pattern: when the system gives a wrong answer, the team debugs the prompt. They rewrite the prompt. The system gives a different wrong answer. They rewrite the prompt again.

The fix: trace the retrieval step first. For every failed answer, log the top-k retrieved chunks, the chunk similarity scores, and the source documents. The question is not "why did the model say this" — it is "did the retrieval find the right source, and did the model read the right source?"

In one pilot, the retrieval was returning the right document but the chunker had split a critical table across two chunks. The model was reading half a table. The fix was a 10-line change to the chunker to keep tables atomic. No prompt change. No model change. No embedding change.

In another pilot, the retrieval was returning a document from 2022 when the user was asking about a 2024 change. The doc store had no freshness signal. The fix was a recency-weighted retriever — again, no prompt or model change.

Both were 2-3 day fixes once the diagnostic was in place. Before the diagnostic, both had been prompt-engineering rabbit holes lasting 2-3 weeks.

<figure>
  <svg class="blog-svg-frame" viewBox="0 0 880 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fig-retrieval-title fig-retrieval-desc">
    <title id="fig-retrieval-title">Retrieval diagnostics: prompt rabbit hole vs 2 to 3 day fix</title>
    <desc id="fig-retrieval-desc">Two horizontal flows. Top, in faint dashed lines: wrong answer, rewrite prompt, different wrong answer, then a feedback loop back to the start, labelled repeat 2 to 3 weeks. Bottom, in solid lines: wrong answer, log top-k plus scores (highlighted), find retrieval bug, 2 to 3 day fix.</desc>
    <defs>
      <marker id="arrow-blog-ret" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L6,4 L0,8 Z" fill="var(--ink)" />
      </marker>
      <marker id="arrow-blog-ret-faint" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L6,4 L0,8 Z" fill="var(--ink-faint)" />
      </marker>
    </defs>
    <text class="blog-svg-text-faint" x="0" y="14">BEFORE — prompt-engineering rabbit hole</text>
    <line x1="0" y1="20" x2="220" y2="20" stroke="var(--ink-faint)" stroke-width="0.5" stroke-dasharray="2 2" />
    <rect x="30" y="32" width="120" height="80" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" rx="2" />
    <rect x="180" y="32" width="160" height="80" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" rx="2" />
    <rect x="370" y="32" width="160" height="80" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" rx="2" />
    <line x1="150" y1="72" x2="180" y2="72" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#arrow-blog-ret-faint)" />
    <line x1="340" y1="72" x2="370" y2="72" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#arrow-blog-ret-faint)" />
    <path d="M 530,112 Q 530,150 260,150 Q 90,150 90,112" fill="none" stroke="var(--ink-faint)" stroke-width="1" stroke-dasharray="3 2" marker-end="url(#arrow-blog-ret-faint)" />
    <text class="blog-svg-text-faint" x="310" y="170">repeat 2–3 weeks</text>
    <text class="blog-svg-text-faint" x="90" y="65" text-anchor="middle">wrong</text>
    <text class="blog-svg-text-faint" x="90" y="89" text-anchor="middle">answer</text>
    <text class="blog-svg-text-faint" x="260" y="65" text-anchor="middle">rewrite</text>
    <text class="blog-svg-text-faint" x="260" y="89" text-anchor="middle">prompt</text>
    <text class="blog-svg-text-faint" x="450" y="65" text-anchor="middle">different</text>
    <text class="blog-svg-text-faint" x="450" y="89" text-anchor="middle">wrong</text>
    <text class="blog-svg-text" x="0" y="200">AFTER — with retrieval diagnostics</text>
    <line x1="0" y1="206" x2="220" y2="206" stroke="var(--accent)" stroke-width="0.5" />
    <rect x="30" y="218" width="120" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <rect x="180" y="218" width="180" height="80" fill="none" stroke="var(--accent)" stroke-width="2" rx="2" />
    <rect x="390" y="218" width="180" height="80" fill="none" stroke="var(--accent)" stroke-width="2" rx="2" />
    <rect x="600" y="218" width="180" height="80" fill="none" stroke="var(--ink)" stroke-width="1.5" rx="2" />
    <line x1="150" y1="258" x2="180" y2="258" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrow-blog-ret)" />
    <line x1="360" y1="258" x2="390" y2="258" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrow-blog-ret)" />
    <line x1="570" y1="258" x2="600" y2="258" stroke="var(--ink)" stroke-width="1.5" marker-end="url(#arrow-blog-ret)" />
    <text class="blog-svg-text" x="90" y="251" text-anchor="middle">wrong</text>
    <text class="blog-svg-text" x="90" y="275" text-anchor="middle">answer</text>
    <text class="blog-svg-text-accent" x="270" y="251" text-anchor="middle">log top-k</text>
    <text class="blog-svg-text-accent" x="270" y="275" text-anchor="middle">+ scores</text>
    <text class="blog-svg-text-accent" x="480" y="251" text-anchor="middle">find retrieval</text>
    <text class="blog-svg-text-accent" x="480" y="275" text-anchor="middle">bug</text>
    <text class="blog-svg-text" x="690" y="258" text-anchor="middle">2–3 day fix</text>
  </svg>
  <figcaption>Retrieval diagnostics turn a 2 to 3 week prompt-rewriting loop into a 2 to 3 day targeted fix. The bottleneck was never the prompt.</figcaption>
</figure>

## 3. No cost visibility per query

The pattern: the team builds a RAG system, ships to a small group, then to a larger group, then is surprised when the monthly bill jumps 10x. The system is doing what it was told — every query is retrieving top-k=20 chunks at 1k tokens each, sending them to a frontier model (GPT-5.5 in the most recent case), returning a 500-token answer plus ~1.5k reasoning tokens — but the cost per query is around $0.17 and the team is running 50,000 queries a day.

The fix: log per-query cost from day one. Every retrieval has a cost. Every LLM call has a cost. Make it visible per query, per user, per team. The first question after the system goes live should be: "what is the cost per query, and who is the top-10% of users by cost?"

I have seen one team cut their per-query cost to roughly 0.55x with a single change: switching from top-k=20 to top-k=5 with a cross-encoder reranker. The model quality went up (reranker is more selective than dense retrieval) and the cost went down (fewer chunks to process, fewer tokens to the model). On the retrieved context alone, the cut was 4x; the total was 0.55x because the reasoning and output tokens stayed fixed. The team had been paying 4x more on retrieved context — for worse answers.

<figure>
  <svg class="blog-svg-frame" viewBox="-15 0 895 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fig-cost-title fig-cost-desc">
    <title id="fig-cost-title">Cost per query before and after</title>
    <desc id="fig-cost-desc">Bar chart on a dollars-per-query axis. Left bar in muted ink shows 0.17 dollars for top-k equals 20 with 1k chunks. Right bar in terracotta shows 0.09 dollars for top-k equals 5 with reranker, also 1k chunks. A curved arrow from the first bar to the second is labelled 0.55x on total. Subtitle: reasoning tokens vary 1.5k to 3k; total 0.55x, retrieved context alone 4x.</desc>
    <defs>
      <marker id="arrow-blog-cost" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L6,4 L0,8 Z" fill="var(--accent)" />
      </marker>
    </defs>
    <text class="blog-svg-text-faint" x="0" y="14">COST / QUERY · BEFORE → AFTER</text>
    <line x1="0" y1="20" x2="220" y2="20" stroke="var(--ink-faint)" stroke-width="0.5" />
    <text class="blog-svg-text" x="-5" y="125" transform="rotate(-90 -5 125)" text-anchor="middle">$ / query</text>
    <line x1="60" y1="200" x2="800" y2="200" stroke="var(--ink)" stroke-width="1.5" />
    <line x1="60" y1="50" x2="60" y2="200" stroke="var(--ink)" stroke-width="1.5" />
    <rect x="120" y="50" width="180" height="150" fill="var(--ink-faint)" opacity="0.7" />
    <text class="blog-svg-text-accent" x="210" y="40" text-anchor="middle">$0.17</text>
    <text class="blog-svg-text" x="210" y="222" text-anchor="middle">top-k=20 · 1k chunks</text>
    <rect x="500" y="120" width="180" height="80" fill="var(--accent)" />
    <text class="blog-svg-text-accent" x="590" y="110" text-anchor="middle">$0.09</text>
    <text class="blog-svg-text" x="590" y="222" text-anchor="middle">top-k=5 + rerank · 1k chunks</text>
    <text class="blog-svg-text-accent" x="720" y="155">quality ↑</text>
    <text class="blog-svg-text-faint" x="430" y="246" text-anchor="middle">Both at GPT-5.5 · 1k chunks · 500 tok out · ~1.5k reasoning · 50K queries/day</text>
    <text class="blog-svg-text-faint" x="430" y="268" text-anchor="middle" style="font-style: italic;">Reasoning tokens: 1.5k assumed; varies 1.5k–3k with task. Total = 0.55x; retrieved context alone = 4x.</text>
    <path d="M 300,80 C 400,80 400,118 500,118" fill="none" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrow-blog-cost)" />
    <text class="blog-svg-text-accent" x="400" y="70" text-anchor="middle">0.55x on total</text>
  </svg>
  <figcaption>Top-k reduction with a cross-encoder reranker: fewer chunks to the model, more relevant chunks, lower cost, higher quality. The headline is 0.55x on total; the retrieved-context cost alone falls by 4x.</figcaption>
</figure>

A caveat: the mean cost per query tells a comforting lie. The p99 cost — the worst 1% of queries — is often 10-50x the median, driven by long prompts, long outputs, or retry loops on bad retrieval. Logging the mean is necessary; logging the p99 is what catches a single user with a runaway query before it shows up on the monthly bill. I have seen one team where 1% of users were generating 30% of the bill, and the mean — the average — masked the problem for two months.

<figure>
  <svg class="blog-svg-frame" viewBox="-15 0 895 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="fig-p99-title fig-p99-desc">
    <title id="fig-p99-title">p99 cost distribution across 1k queries</title>
    <desc id="fig-p99-desc">A horizontal bar with 99 small query bars at the median cost, followed by one tall terracotta bar at the far right labelled p99, 10 to 50x the median. The annotation points out that the mean of all 1k queries looks like the median, masking the p99 cost driver.</desc>
    <text class="blog-svg-text-faint" x="0" y="14">p99 / MEDIAN · 10–50x RATIO</text>
    <line x1="0" y1="20" x2="220" y2="20" stroke="var(--ink-faint)" stroke-width="0.5" />
    <line x1="0" y1="240" x2="800" y2="240" stroke="var(--ink)" stroke-width="1.5" />
    <line x1="0" y1="60" x2="0" y2="240" stroke="var(--ink)" stroke-width="1.5" />
    <text class="blog-svg-text" x="-5" y="150" transform="rotate(-90 -5 150)" text-anchor="middle">$ / query</text>
    <text class="blog-svg-text-faint" x="0" y="60">p99</text>
    <text class="blog-svg-text-faint" x="0" y="200">median</text>
    <rect x="20" y="180" width="700" height="60" fill="var(--ink-faint)" opacity="0.5" />
    <text class="blog-svg-text" x="370" y="216" text-anchor="middle">990 queries · median cost</text>
    <rect x="730" y="60" width="40" height="180" fill="var(--accent)" />
    <text class="blog-svg-text-accent" x="778" y="50" text-anchor="middle">10–50x</text>
    <text class="blog-svg-text" x="750" y="260" text-anchor="middle">10 queries</text>
    <text class="blog-svg-text" x="380" y="265" text-anchor="middle">— across 1k queries, the mean looks like the median, the bill doesn't —</text>
  </svg>
  <figcaption>The p99 cost is often 10–50x the median, driven by long prompts, long outputs, or retry loops on bad retrieval. Mean masks the problem; p99 catches a single user with a runaway query before the monthly bill.</figcaption>
</figure>

Operational cost visibility is one half of cost discipline. The other half — which model, which format, which architecture — is the subject of the [cost-discipline-2026 post](https://stefanmanja.com/writing/cost-discipline-2026/).

<aside class="blog-pullquote" role="note">
  <p>Three failures. Three fixes. None are model problems.</p>
</aside>

## What 2026 adds

The three fixes above are the floor. In 2026 they are table stakes — a RAG pilot without eval, without retrieval diagnostics, and without per-query cost logging is not even in the conversation. What separates a 2024 demo from a 2026 production system is the ceiling above those three.

Four differentiators that have moved from "advanced" to "expected" in 2026:

- **Hybrid retrieval (vector + keyword) + cross-encoder reranking.** Dense retrieval alone misses exact-phrase and code-symbol queries; keyword alone misses semantic paraphrase. The combination, with a cross-encoder reranker on top, is now the default — not a research project. The cost reduction in fix #3 above is a side effect of this: fewer chunks to the model, more relevant ones. The headline number on the retrieved context is 4x; the total cost falls to 0.55x because reasoning and output tokens stay fixed.
- **Contextual Retrieval.** Anthropic (Sep 2024) showed that adding 50-100 tokens of context to each chunk at index time reduces retrieval failures by 49-67% (hybrid 49%, +rerank 67%). The technique is now standard in serious production RAG; Anthropic's reference implementation is open-source. It costs more at index time, but the retrieval-failure reduction more than pays for it.
- **Permission enforcement at the index layer.** In a multi-tenant enterprise, the wrong document in the wrong user's prompt is a security incident, not a quality issue. In 2026, access control belongs in the retriever (filter at the index, not the prompt), with a deny-by-default posture. The fix is operational, not model-side.
- **Drift monitoring.** Eval scores drift. A RAG system that scored 3.7 in January can score 3.3 in April because the source documents changed, the user queries changed, or the model changed. The eval harness from fix #1 is not a one-time check — it is a daily signal.

These are the 2026 ceiling. The three fixes are the 2024 floor. Both are required.

## The pattern

Three failures. Three fixes. None of them are model problems. None of them are embedding problems. None of them are solved by a better framework or a newer model.

The failures are operational:
- Build the eval before the build
- Trace the retrieval on every failed answer
- Log the cost per query from day one

These are the boring parts of the work. The boring parts are the parts that decide whether the system holds up in production.

If a RAG pilot has not measured any of these three, the pilot is not in production. **It is in demo mode.**

<div class="blog-section-marker">T H E  ·  3  ·  F I X E S</div>

<div class="blog-step">
  <span class="blog-step__marker">01</span>
  <div class="blog-step__body">
    <p class="blog-step__title">Build the eval before the build.</p>
    <p class="blog-step__copy">A 50–100 question set, drawn from real user queries, graded 1–5 by the people who will use the system, run after every change. Without the eval, "it looks better" is the only signal.</p>
  </div>
</div>

<div class="blog-step">
  <span class="blog-step__marker">02</span>
  <div class="blog-step__body">
    <p class="blog-step__title">Trace retrieval on every failed answer.</p>
    <p class="blog-step__copy">Log top-k chunks, similarity scores, source documents. The question is not "why did the model say this" — it is "did the retrieval find the right source, and did the model read it?"</p>
  </div>
</div>

<div class="blog-step">
  <span class="blog-step__marker">03</span>
  <div class="blog-step__body">
    <p class="blog-step__title">Log cost per query from day one.</p>
    <p class="blog-step__copy">Per-query, per-user, per-team. The first question after go-live: what is the cost per query, and who is the top-10% of users by cost? Mean is necessary; p99 is what catches a runaway before the monthly bill.</p>
  </div>
</div>

---

**Methodology note**

- Drawn from 4 enterprise RAG engagements I have worked on (2024-2026, anonymized as "in past enterprise AI projects"). The 3 fixes are not theoretical — they are the specific changes that took each system from demo mode to production. Names of companies, teams, and projects are not included.
- **70% AI pilot stat**: Hyperion, "AI Pilots in Production" (March 2026).
- **49-67% retrieval-failure reduction**: Anthropic, "Contextual Retrieval" (September 2024) — hybrid 49%, +rerank 67%.
- **5 named cost-competitive models ranked by**: Artificial Analysis Intelligence Index v4.1 — see [artificialanalysis.ai/methodology](https://artificialanalysis.ai/methodology).
- **10–50x p99/median cost ratio**: operational observation across the 4 RAG engagements cited above. A p99 query typically has 1.5–3x the prompt length, 2–3x the output length, or 3–5x the retry count versus the median; the 10–50x range reflects the combined worst case.
