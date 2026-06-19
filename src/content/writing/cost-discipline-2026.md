---
title: "The 2026 cost discipline — 5 cost-competitive models, ranked"
summary: "Five open-weight / open-routing models, ordered by capability composite (AA Index v4.1), covering 3x to 45x cost spread against frontier proprietary. Companion to the 3 RAG operational gaps post."
publishedAt: 2026-06-25
displayDate: "2026-06-25"
ogImage: "/og-default.png"
locale: "en"
translationKey: "cost-discipline-2026-06-25"
routeSlug: "cost-discipline-2026"
draft: false
---

This is the companion to [the 3 RAG operational gaps post](https://stefanmanja.com/writing/rag-pilot-failures/). The first post covered operational cost visibility — log per-query cost, catch the p99 tail, build the eval. This one covers the other half of cost discipline: which model, which format, which architecture.

The thesis: for the 80% of tasks that don't need frontier reasoning, five open-weight / open-routing models deliver at 3x to 45x lower cost than GPT-5.5 or Claude Opus 4.8. The remaining 20% — long-horizon agentic, frontier reasoning, multimodal — still goes to the leading proprietary models. The mistake I have watched most often is the converse: spending frontier-proprietary money on the 80%, then being unable to afford the frontier-proprietary spend that the 20% actually requires.

## 1. The model roster — capability composite, not single-number ranking

I have spent the last 6 months re-pricing the five models I now reach for before the frontier APIs. AA Intelligence Index v4.1 (2026-06-18) gives the capability composite; the cost column is per-vendor verified 2026-06-17, with the exception of MiMo-V2.5-Pro where AA blended pricing is the only public source. Order is by AA Index; the two at 44 are listed by recency + agentic-strength (MiniMax M3 first as the 2026 forward-looking model, then DeepSeek V4-Pro as the cost leader named separately in the result note).

- **GLM 5.2** (AA Index 51, leading open weights). $1.40 in / $4.40 out per 1M tokens. 1M context. MIT license. Z.ai is on the US BIS Entity List (Jan 2025) — direct API use is restricted for US persons; use cloud-provider paths only. The strongest of the five, but only 3-8x cheaper than frontier, not 40x.
- **MiniMax M3** (AA Index 44). $0.30 in / $1.20 out (standard tier, ≤512k, "permanent 50% off"). 1M context. Weights are on Hugging Face under a restrictive `minimax-community` license — not OSI-approved, requires "Built with MiniMax M3" attribution for commercial use and prior written authorization for products with >$20M yearly revenue. LMArena categorizes M3 as Proprietary. For most commercial use above $20M ARR, this is effectively a first-party API, not an open-weight model.
- **DeepSeek V4-Pro** (AA Index 44). $0.435 in / $0.870 out per 1M tokens. 1M context. MIT license. AA measured DeepSeek at $0.04 per task (Intelligence Index 44) — 40-45x cheaper than Claude Opus 4.8 ($1.78/task, Index 56) and 20-25x cheaper than GPT-5.5 (xhigh, $0.99/task, Index 50). The cheapest of the five by a wide margin.
- **Kimi K2.6** (AA Index 43). $0.95 in / $4.00 out (cache-miss rate; $0.16 with cache hit). 256K context — note this is 256K, not 1M. Modified-MIT license with a usage threshold (>100M MAU or $20M monthly revenue requires separate authorization).
- **MiMo-V2.5-Pro** (AA Index 42, Xiaomi, June 2026). 1M context. New open-weight entrant. $0.18/M tokens blended per AA Intelligence Index v4.1 (2026-06-18) — the only public pricing source for this model as of post date.

The cheapest model is not the most capable model, and the most capable is not the cheapest. The decision rule is: pick by workload, not by index number.

## 2. Format — the smallest lever

Prompt format gets discussed more than it delivers. TOON (Token-Oriented Object Notation) and GCF (Graph Compact Format) cut prompt tokens 45-48% on uniform-array payloads, in a 30-trial test on gpt-5-mini high. End-to-end cost saving is smaller — 11.9% in the best case (matrix best cell). Other workloads may differ.

The gap between prompt-token saving and end-to-end saving is reasoning tokens. The 45-48% prompt saving assumes the model still produces the same number of output tokens, including any chain-of-thought. On reasoning-heavy workloads, the prompt saving is partially offset by the reasoning cost. Reasoning tokens are priced as output (8x the input rate for gpt-5-mini), and the model spent extra reasoning parsing the unfamiliar TOON/GCF section header and delimiter. The 10-row × 30-trial × 7-cell sample is too small to power an accuracy claim either way (hit@10 = 50% on every cell, including JSON).

Format saves tokens, not dollars. The 11.9% is a snapshot for gpt-5-mini high; future models with more pretraining exposure to TOON/GCF will likely save more. The bigger savings are model + architecture.

## 3. Architecture — four levers that compound

Four architecture levers, applied together, decide whether the system holds up at 1K+ queries/day.

**1M context.** Standard for 4 of 5 (GLM 5.2, MiniMax M3, DeepSeek V4-Pro, MiMo-V2.5-Pro); Kimi K2.6 at 256K. Long context is the lever for single-document ingest (one or a few large docs); RAG is still the lever for cross-document scale (10K+ documents). The two are complementary, not substitutes. Anthropic's Contextual Retrieval (Sep 2024) — adding 50-100 tokens of context to each chunk at index time — reduces retrieval failures by 49-67% (hybrid 49%, +rerank 67%) on top of the long-context window.

**Hybrid retrieval + cross-encoder reranking.** Dense retrieval alone misses exact-phrase and code-symbol queries; keyword alone misses semantic paraphrase. The combination, with a cross-encoder reranker on top, is now the default — not a research project. Per the same Anthropic reference work, hybrid + rerank closes most of the remaining 49-67% retrieval-failure gap.

**Prompt caching.** 0.1x the cache-miss input price on cache hits. Anthropic, OpenAI, DeepSeek, Moonshot, and Z.ai all offer prompt caching. The cost is per-cache-hit, not per-token. For RAG systems with stable system prompts + long context windows, the savings are material. Self-host: vLLM APC (v0.4.0+), SGLang RadixAttention.

**Route by query difficulty.** 2-10x blend-cost reduction by routing queries to the cheapest model that meets the bar. The 5 models span $0.04-$0.46 per task (11.5x spread, AA Intelligence Index v4.1, June 2026). vLLM Semantic Router v0.3.0, OpenRouter, LiteLLM. Per FrugalGPT (Chen et al., 2023) and RouteLLM (2024) on real workloads.

The four levers compound. 1M context lets you fit more; hybrid + rerank makes what you fit more relevant; prompt caching makes the repeated parts cheaper; routing matches the right model to the right task. The cheapest lever is still the RAG-side one — a 10-line chunker change, not a 10-week migration.

## The pattern

Three categories of cost discipline. The first is operational: log per-query cost, catch the p99 tail, build the eval. The second is model: pick the cheapest model that meets the capability bar, ordered by AA Index, deployed on cloud-provider paths for data governance. The third is architecture: 1M context + hybrid + rerank + prompt caching + routing by query difficulty, in that order.

The era of "as much AI as you can" is over. The era of "as much AI as cost-justified" is here. The model is rarely the part that decides whether the system ships. The procurement, the architecture, and the operational discipline are.

Pick the model that fits the task, not the model with the highest marketing budget.

---

**Methodology note**: 5 open-weight / open-routing models evaluated against frontier proprietary. AA Intelligence Index v4.1 (artificialanalysis.ai, 2026-06-18) used for capability ranking. Cost data verified 2026-06-17 from each vendor's official pricing page, with the exception of MiMo-V2.5-Pro where AA blended pricing ($0.18/M tokens) is the only public source. The "open-weight" framing applies to 4 of 5 (GLM 5.2, DeepSeek V4-Pro, Kimi K2.6, MiMo-V2.5-Pro); MiniMax M3 uses a restrictive `minimax-community` license, not an OSI-approved open-source license. The 49-67% retrieval-failure reduction stat is from Anthropic's "Contextual Retrieval" announcement (Sep 2024): hybrid 49%, +rerank 67%. The 0.1x cache-hit pricing is the standard Anthropic prompt-caching tier (8x the cache-miss input rate). The 40-45x DeepSeek cost ratio is from Artificial Analysis's Intelligence Index v4.1 cost-per-task measurements. The 11.9% end-to-end format saving is from a 30-trial × 7-cell × 10-row canary on gpt-5-mini with reasoning effort high; the matrix best cell, hit@10 = 50% on every cell (including JSON), so the sample is too small to power an accuracy claim. The 5 named open-weight / open-routing models referenced throughout (GLM 5.2, MiniMax M3, DeepSeek V4-Pro, Kimi K2.6, MiMo-V2.5-Pro) are ranked by the Artificial Analysis Intelligence Index v4.1 — see [artificialanalysis.ai/methodology](https://artificialanalysis.ai/methodology).

**Companion post**: [Why 70% of AI pilots never reach production — and the 3 RAG fixes that worked](https://stefanmanja.com/writing/rag-pilot-failures/) — same operational discipline, applied to retrieval.
