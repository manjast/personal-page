---
title: "Why 70% of AI pilots never reach production — and the 3 RAG fixes that worked"
summary: "Three RAG failure modes I've seen across enterprise pilots, with the specific fix that addressed each. The pattern is universal: missing evaluation, missing retrieval diagnostics, missing per-query cost logging. None are model problems. Per Hyperion (March 2026), 70% of AI pilots never reach production — these three gaps are why."
publishedAt: 2026-06-17
displayDate: "2026-06-17"
ogImage: "/og-default.png"
locale: "en"
translationKey: "rag-pilot-failures-2026-06-17"
routeSlug: "rag-pilot-failures"
draft: false
---

I have watched at least four enterprise RAG pilots go from "we have a working demo" to "we cannot put this in front of users." The failure was not the model. The failure was not the embedding choice. The failure was a small number of operational gaps, repeated across pilots, that nobody caught until the system was already in front of users.

The pattern is not unique to RAG. Per Hyperion (March 2026), roughly 70% of AI pilots never reach production at all. The four pilots in this post are part of the 30% that did — the three gaps below are why.

Three of those gaps, with the specific fix that addressed each.

## 1. No evaluation harness before the build

The pattern: a team builds a RAG system against a sample of 20-30 questions, picks a retrieval strategy that "looks right," iterates on the prompt until the sample outputs read well, and ships.

The fix: build the eval first. A 50-100 question set drawn from real user queries (not synthesized), graded on a 1-5 scale by the people who will actually use the system, and run after every change. The eval answers a specific question: "is the system better than the previous version of the system, on the questions the users will ask?"

Without the eval, "it looks better" is the only signal. With the eval, the team can say "the answer-quality score went from 3.1 to 3.7 across 80 questions" — and the change was either worth keeping or not.

I have seen two pilots where the eval was built late, after the system was already in front of 200+ users, and the eval surfaced a regression that nobody had noticed. Both teams then spent three weeks reverting prompt + chunking + retrieval changes that had been merged without measurement.

## 2. No retrieval diagnostics on failed answers

The pattern: when the system gives a wrong answer, the team debugs the prompt. They rewrite the prompt. The system gives a different wrong answer. They rewrite the prompt again.

The fix: trace the retrieval step first. For every failed answer, log the top-k retrieved chunks, the chunk similarity scores, and the source documents. The question is not "why did the model say this" — it is "did the retrieval find the right source, and did the model read the right source?"

In one pilot, the retrieval was returning the right document but the chunker had split a critical table across two chunks. The model was reading half a table. The fix was a 10-line change to the chunker to keep tables atomic. No prompt change. No model change. No embedding change.

In another pilot, the retrieval was returning a document from 2022 when the user was asking about a 2024 change. The doc store had no freshness signal. The fix was a recency-weighted retriever — again, no prompt or model change.

Both were 2-3 day fixes once the diagnostic was in place. Before the diagnostic, both had been prompt-engineering rabbit holes lasting 2-3 weeks.

## 3. No cost visibility per query

The pattern: the team builds a RAG system, ships to a small group, then to a larger group, then is surprised when the monthly bill jumps 10x. The system is doing what it was told — every query is retrieving top-k=20 chunks at 1k tokens each, sending them to a frontier model (GPT-5.5 in the most recent case), returning a 500-token answer plus ~1.5k reasoning tokens — but the cost per query is around $0.17 and the team is running 50,000 queries a day.

The fix: log per-query cost from day one. Every retrieval has a cost. Every LLM call has a cost. Make it visible per query, per user, per team. The first question after the system goes live should be: "what is the cost per query, and who is the top-10% of users by cost?"

I have seen one team cut their per-query cost to roughly 0.55x with a single change: switching from top-k=20 to top-k=5 with a cross-encoder reranker. The model quality went up (reranker is more selective than dense retrieval) and the cost went down (fewer chunks to process, fewer tokens to the model). On the retrieved context alone, the cut was 4x; the total was 0.55x because the reasoning and output tokens stayed fixed. The team had been paying 4x more on retrieved context — for worse answers.

A caveat: the mean cost per query tells a comforting lie. The p99 cost — the worst 1% of queries — is often 10-50x the median, driven by long prompts, long outputs, or retry loops on bad retrieval. Logging the mean is necessary; logging the p99 is what catches a single user with a runaway query before it shows up on the monthly bill. I have seen one team where 1% of users were generating 30% of the bill, and the mean-mask hid the problem for two months.

This post is about operational cost visibility. The other half of cost discipline — which model, which format, which architecture — is covered separately: frontier vs open-weight models, prompt-format tradeoffs, and the 1M-context complement to RAG: [stefanmanja.com/writing/cost-discipline-2026/](https://stefanmanja.com/writing/cost-discipline-2026/).

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

If a RAG pilot has not measured any of these three, the pilot is not in production. It is in demo mode.

---

**Methodology note**: drawn from 4 enterprise RAG engagements I have worked on, 2024-2026, anonymized as "in past enterprise AI projects." The 3 fixes are not theoretical — they are the specific changes that took each system from demo mode to production. Names of companies, teams, and projects are not included. The 70% AI pilot stat is from Hyperion, "AI Pilots in Production" (March 2026). The 49-67% retrieval-failure reduction is from Anthropic, "Contextual Retrieval" (September 2024): hybrid 49%, +rerank 67%. The 5 named cost-competitive models referenced throughout are ranked by the Artificial Analysis Intelligence Index v4.1 — see [artificialanalysis.ai/methodology](https://artificialanalysis.ai/methodology).
