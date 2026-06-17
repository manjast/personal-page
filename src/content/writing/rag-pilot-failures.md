---
title: "Why 90% of RAG pilots fail — and the 3 fixes that worked"
summary: "Three RAG failure modes I've seen across enterprise pilots, with the specific fix that addressed each. The pattern is universal: missing evaluation, missing retrieval diagnostics, missing cost visibility. None are model problems."
publishedAt: 2026-06-17
displayDate: "2026-06-17"
ogImage: "/og-default.png"
locale: "en"
translationKey: "rag-pilot-failures-2026-06-17"
routeSlug: "rag-pilot-failures"
draft: false
---

I have watched at least four enterprise RAG pilots go from "we have a working demo" to "we cannot put this in front of users." The failure was not the model. The failure was not the embedding choice. The failure was a small number of operational gaps, repeated across pilots, that nobody caught until the system was already in front of users.

Three of those gaps, with the specific fix that addressed each.

## 1. No evaluation harness before the build

The pattern: a team builds a RAG system against a sample of 20-30 questions, picks a chunking strategy that "looks right," iterates on the prompt until the sample outputs read well, and ships.

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

The pattern: the team builds a RAG system, ships to a small group, then to a larger group, then is surprised when the monthly bill jumps 10x. The system is doing what it was told — every query is retrieving top-k=20 chunks, sending them to a 70B-parameter model, returning a 500-token answer — but the cost per query is $0.15 and the team is running 50,000 queries a day.

The fix: log per-query cost from day one. Every retrieval has a cost. Every LLM call has a cost. Make it visible per query, per user, per team. The first question after the system goes live should be: "what is the cost per query, and who is the top-10% of users by cost?"

I have seen one team cut their per-query cost by 4x with a single change: switching from top-k=20 to top-k=5 with a reranker. The model quality went up (reranker is more selective than dense retrieval) and the cost went down (fewer chunks to process). The team had been paying 4x more for worse answers.

## The pattern

Three failures. Three fixes. None of them are model problems. None of them are embedding problems. None of them are solved by a better framework or a newer model.

The failures are operational:
- Build the eval before the build
- Trace the retrieval on every failed answer
- Log the cost per query from day one

These are the boring parts of the work. The boring parts are the parts that decide whether the system holds up in production.

If a RAG pilot has not measured any of these three, the pilot is not in production. It is in demo mode.

---

**Methodology note**: drawn from 4 enterprise RAG engagements I have worked on, anonymized as "in past enterprise AI projects." The 3 fixes are not theoretical — they are the specific changes that took each system from demo mode to production. Names of companies, teams, and projects are not included.
