# Benchmark Comparison Report: 5 Frontier Language Models (June 2026)

**Date generated:** 18 June 2026
**Models covered:** DeepSeek V4-Pro (and V4-Pro Max/thinking), GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3
**Use case:** Input for the v10 carousel redesign (model order by strength, model caveats)
**Status:** research, not yet integrated into the carousel

---

## Methodology note

This report is a structured comparison of public benchmark data for 5 named frontier models, gathered from:
- Hugging Face model cards (vendor self-reports)
- Artificial Analysis Intelligence Index v4.1 (independent)
- LMArena leaderboards (independent)
- Vellum AI Leaderboard (independent)
- Third-party comparison tables (e.g., GLM-5.2's model card lists Qwen 3.7 Max scores with no methodology)

Notation: **SR** = self-reported (vendor/technical report), **IND** = independent (Artificial Analysis, LMArena, Vellum, Hugging Face leaderboard). All scores are the "best / max effort" variant unless noted.

This research was triggered by the user noting that LMArena preference votes are not a holistic capability ranking. The 5 models in the carousel's "Cost-competitive alternatives" section need a capability assessment to determine v10 ordering.

---

## 1. Data tables

### DeepSeek V4-Pro / V4-Pro Max (1.6T total / 49B active MoE, 1M context)

| Benchmark | Score | Date | Source | Sample/Caveat |
|---|---|---|---|---|
| MMLU-Pro (5-shot) | 87.5 | Apr 2026 | HF model card | SR (DeepSeek tech report) |
| GPQA-Diamond (Pass@1) | 90.1 | Apr 2026 | HF model card; HF eval results 90.1 | SR + IND HF leaderboard |
| HLE (Pass@1) | 37.7 | Apr 2026 | HF model card | SR |
| HLE w/ tools | 48.2 | Apr 2026 | HF model card | SR |
| CritPt | 12.9 | Apr 2026 | HF model card | SR |
| MATH (Hendrycks 4-shot) | 64.5 (base) | Apr 2026 | HF model card | SR (base model) |
| HumanEval (Pass@1, 0-shot) | 76.8 (base) | Apr 2026 | HF model card | SR (base model) |
| SWE-bench Verified | 80.6 | Apr 2026 | HF model card | SR |
| SWE-bench Pro | 55.4 | Apr 2026 | HF model card | SR + IND HF leaderboard |
| SWE-bench Multilingual | 76.2 | Apr 2026 | HF model card | SR |
| Terminal-Bench 2.0 | 67.9 | Apr 2026 | HF model card | SR (Note: AA measured 64 in v4.1) |
| LiveCodeBench (Pass@1) | 93.5 | Apr 2026 | HF model card | SR |
| Codeforces Rating | 3206 | Apr 2026 | HF model card | SR |
| GDPval-AA (Elo) | 1328 (AA "max") / 1554 (vendor) | Jun 2026 | AA GLM-5.2 article / HF model card | IND + SR (discrepancy) |
| MCP-Atlas (Public Set) | 73.6 | Apr 2026 | HF model card | SR |
| Toolathlon | 51.8 | Apr 2026 | HF model card | SR |
| MRCR 1M (MMR) | 83.5 | Apr 2026 | HF model card | SR |
| CorpusQA 1M (ACC) | 62.0 | Apr 2026 | HF model card | SR |
| LongBench-V2 (base) | 51.5 | Apr 2026 | HF model card | SR (base model) |
| AA Intelligence Index v4.1 | 44 (max) | Jun 16 2026 | AA Index v4.1 | IND |
| LMArena ELO (Overall Text) | rank 38 (V4-Pro) / #36 (V4-Pro-thinking) | Jun 16 2026 | LMArena | IND |
| LMArena WebDev | 1459 (V4-Pro-thinking) | Jun 16 2026 | LMArena WebDev | IND |

### GLM 5.2 (Z.ai, MIT) — 744B total / 40B active MoE, 1M context, released 2026-06-13

| Benchmark | Score | Date | Source | Sample/Caveat |
|---|---|---|---|---|
| GPQA-Diamond | 91.2 (vendor) / 89 (AA v4.1) | Jun 17 2026 | HF model card / AA article | SR + IND |
| HLE | 40.5 (vendor) / 40 (AA) | Jun 17 2026 | HF model card / AA | SR + IND |
| HLE w/ tools | 54.7 | Jun 17 2026 | HF model card | SR |
| CritPt | 20.9 (vendor) / 21 (AA) | Jun 17 2026 | HF model card / AA | SR + IND |
| AIME 2026 | 99.2 | Jun 17 2026 | HF model card | SR |
| HMMT 2026 (Feb) | 92.5 | Jun 17 2026 | HF model card | SR |
| SWE-bench Pro | 62.1 | Jun 17 2026 | HF model card | SR |
| Terminal-Bench 2.1 (Terminus-2) | 81.0 (vendor) / 78 (AA) | Jun 17 2026 | HF model card / AA | SR + IND |
| Terminal-Bench 2.1 (Best Harness) | 82.7 | Jun 17 2026 | HF model card | SR |
| DeepSWE | 46.2 | Jun 17 2026 | HF model card | SR |
| FrontierSWE (Dominance) | 74.4 | Jun 17 2026 | HF model card | SR |
| MCP-Atlas (Public Set) | 76.8 | Jun 17 2026 | HF model card | SR |
| Tool-Decathlon | 48.2 | Jun 17 2026 | HF model card | SR |
| τ³-Bench Banking | 27 (AA) | Jun 17 2026 | AA article | IND |
| Long context (AA-LCR) | 71 (AA) | Jun 17 2026 | AA | IND |
| AA Intelligence Index v4.1 | **51** (leading open weights) | Jun 17 2026 | AA article | IND |
| GDPval-AA v2 (Elo) | 1524 | Jun 17 2026 | AA article | IND |
| LMArena ELO (Overall) | rank #25 (max variant) | Jun 16 2026 | LMArena | IND |
| LMArena WebDev | **#2 / 1595** (max) | Jun 16 2026 | LMArena WebDev | IND |
| LMArena Agent | #10 / 4.37% share | Jun 16 2026 | LMArena | IND |

### Qwen 3.7 Max (Alibaba, 1M context, proprietary) — released May 2026

| Benchmark | Score | Date | Source | Sample/Caveat |
|---|---|---|---|---|
| GPQA-Diamond | 90 (vendor table, GLM-5.2 card) | Jun 17 2026 | GLM-5.2 model card comparison table | SR (third-party) |
| HLE | 41.4 (vendor table) | Jun 17 2026 | GLM-5.2 card comparison | SR (third-party in GLM card) |
| HLE w/ tools | 53.5 | Jun 17 2026 | GLM-5.2 card comparison | SR (third-party) |
| CritPt | 13.4 | Jun 17 2026 | GLM-5.2 card comparison | SR (third-party) |
| AIME 2026 | 97 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| HMMT 2026 (Feb) | 97.1 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| SWE-bench Pro | 60.6 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| Terminal-Bench 2.1 (Terminus-2) | 75 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| DeepSWE | 18 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| Agentic (MCP-Atlas Public) | 76.4 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| AA Intelligence Index v4.1 | Not measured (proprietary, no AA result) | — | — | IND N/A |
| LMArena ELO (Overall) | #17 (qwen3.7-max-preview) | Jun 16 2026 | LMArena | IND |
| LMArena WebDev | #10 / 1531 (preliminary) | Jun 16 2026 | LMArena WebDev | IND |

**Caveat:** Qwen 3.7 Max has remarkably thin independent benchmark coverage. No Artificial Analysis measurement, no Vellum detail listing, and even the technical comparison numbers in GLM-5.2's model card are presented without methodology or sample sizes. All Qwen 3.7 Max scores in this report should be treated as low-confidence vendor-reported numbers.

### Kimi K2.6 (Moonshot AI, 1T total / 32B active, 256K context, Modified MIT)

| Benchmark | Score | Date | Source | Sample/Caveat |
|---|---|---|---|---|
| GPQA-Diamond | 90.5 | Apr 2026 | HF model card | SR (also IND HF leaderboard 90.5) |
| HLE | 34.7 | Apr 2026 | HF model card | SR |
| HLE w/ tools | 54.0 | Apr 2026 | HF model card | SR |
| AIME 2026 | 96.4 | Apr 2026 | HF model card | SR |
| HMMT 2026 (Feb) | 92.7 | Apr 2026 | HF model card | SR |
| SWE-bench Pro | 58.6 | Apr 2026 | HF model card + IND HF leaderboard 58.6 | SR + IND |
| SWE-bench Verified | 80.2 | Apr 2026 | HF model card + IND HF leaderboard 80.2 | SR + IND |
| SWE-bench Multilingual | 76.7 | Apr 2026 | HF model card | SR |
| Terminal-Bench 2.0 (Terminus-2) | 66.7 | Apr 2026 | HF model card | SR |
| LiveCodeBench (v6) | 89.6 | Apr 2026 | HF model card | SR |
| OJBench (python) | 60.6 | Apr 2026 | HF model card | SR |
| SciCode | 52.2 | Apr 2026 | HF model card | SR |
| APEX-Agents | 27.9 | Apr 2026 | HF model card | SR (IND-validated 452/480 tasks) |
| OSWorld-Verified | 73.1 | Apr 2026 | HF model card | SR |
| Toolathlon | 50.0 | Apr 2026 | HF model card | SR |
| MCPMark | 55.9 | Apr 2026 | HF model card | SR |
| BrowseComp | 83.2 | Apr 2026 | HF model card | SR |
| DeepSearchQA (acc) | 83.0 | Apr 2026 | HF model card | SR |
| AA Intelligence Index v4.1 | 43 | Jun 16 2026 | AA Index v4.1 | IND |
| LMArena ELO (Overall) | #34 (kimi-k2.6) | Jun 16 2026 | LMArena | IND |
| LMArena WebDev | #12 / 1513 | Jun 16 2026 | LMArena WebDev | IND |
| LMArena Image-to-WebDev | #7 / 1522 | Jun 16 2026 | LMArena | IND |

### MiniMax M3 (MiniMax, 427B total / 23B active MoE, 1M context, MSA architecture) — released Jun 3 2026

| Benchmark | Score | Date | Source | Sample/Caveat |
|---|---|---|---|---|
| GPQA-Diamond | 93 (vendor / Vellum) / 93 (AA) | Jun 8 2026 | Vellum leaderboard / AA M3 article | SR + IND |
| HLE | 37 (vendor) / 37 (AA) | Jun 8 2026 | Vellum / AA | SR + IND |
| CritPt | 3.7 (vendor) / 4 (AA) | Jun 17 2026 | GLM-5.2 card / AA | SR + IND |
| HMMT 2026 (Feb) | 84.4 | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| SWE-bench Pro | 59 (vendor) | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| SWE-bench Verified | 80.5 | Jun 9 2026 | Vellum | IND |
| Terminal-Bench 2.1 (Terminus-2) | 65 (vendor) | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| DeepSWE | 20 (vendor) | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| NL2Repo | 42.1 (vendor) | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| MCP-Atlas (Public) | 74.2 (vendor) | Jun 17 2026 | GLM-5.2 card | SR (third-party) |
| Long context (AA-LCR) | 74 (AA) | Jun 8 2026 | AA M3 article | IND |
| SciCode | 45 (AA) | Jun 8 2026 | AA M3 article | IND |
| IFBench | 83 (AA) | Jun 8 2026 | AA M3 article | IND (removed from v4.1) |
| AA Intelligence Index v4.1 | 44 (M3) | Jun 16 2026 | AA Index v4.1 | IND |
| GDPval-AA (Elo) | ~1670 (AA) / 1418 (AA v2) | Jun 8/17 2026 | AA articles | IND |
| LMArena ELO (Overall) | #49 (minimax-m3) | Jun 16 2026 | LMArena | IND |
| LMArena WebDev | #13 / 1511 | Jun 16 2026 | LMArena WebDev | IND |

**Caveat:** MiniMax M3 only attempts 30.9% of AA-Omniscience questions — its low hallucination rate (16.1%) is partly an artifact of refusing to answer; accuracy is only 15.0%. This suppression of agentic attempts inflates some scores while making agentic comparisons unreliable.

---

## 2. Strength ranking per category

### Reasoning (HLE, GPQA-Diamond, AIME/HMMT, CritPt, MATH)

Ranking (strongest → weakest):

1. **GLM 5.2** — HLE 40.5, GPQA 91.2, CritPt 20.9, AIME 2026 99.2, HMMT 92.5. Strongest on HLE and CritPt.
2. **Qwen 3.7 Max** — HLE 41.4 (highest), GPQA 90, CritPt 13.4, HMMT 97.1 (highest). Highest single HLE, weakest CritPt.
3. **DeepSeek V4-Pro Max** — HLE 37.7, GPQA 90.1, CritPt 12.9, HMMT 95.2, MATH base 64.5.
4. **Kimi K2.6** — HLE 34.7, GPQA 90.5, AIME 96.4, HMMT 92.7.
5. **MiniMax M3** — HLE 37, GPQA 93 (paradoxically highest GPQA, but very low CritPt 4 and HMMT 84.4).

**Caveat:** MiniMax M3 has the highest GPQA Diamond (93) but a very weak CritPt (3.7/4) and lowest HMMT (84.4), suggesting M3's reasoning is "narrow" — strong on multiple-choice science, weak on harder multi-step physics. The AA Intelligence Index ranks it tied with DeepSeek V4-Pro at 44 (lower than GLM 5.2 at 51).

### Coding (HumanEval, SWE-bench, Terminal-Bench, LiveCodeBench, Aider, etc.)

Ranking:

1. **GLM 5.2** — Terminal-Bench 2.1 81 (best harness 82.7), SWE-bench Pro 62.1, DeepSWE 46.2, NL2Repo 48.9, FrontierSWE 74.4. Highest Terminal-Bench and SWE-bench Pro of the 5.
2. **DeepSeek V4-Pro Max** — LiveCodeBench 93.5 (highest of all 5), SWE-bench Verified 80.6, SWE-Pro 55.4, SWE-Multilingual 76.2, Terminal-Bench 67.9, Codeforces 3206. Strongest on competitive coding (Codeforces/LiveCodeBench).
3. **Kimi K2.6** — SWE-bench Verified 80.2, SWE-Pro 58.6, SWE-Multilingual 76.7, LiveCodeBench v6 89.6, Terminal-Bench 2.0 66.7, OJBench 60.6.
4. **Qwen 3.7 Max** — SWE-Pro 60.6, Terminal-Bench 75, DeepSWE 18. Solid but vendor numbers only.
5. **MiniMax M3** — SWE-bench Verified 80.5 (Vellum), SWE-Pro 59, Terminal-Bench 65, DeepSWE 20, NL2Repo 42.1.

**Caveat:** Qwen 3.7 Max is reported by GLM (third-party) but not independently measured. MiniMax M3 is competitive on SWE-bench Verified (80.5) and its LMArena WebDev rank (#13) supports the "frontier coding" claim; however it's notably weaker on Terminal-Bench (65) and DeepSWE (20) than GLM 5.2.

### Agentic (GAIA, τ-bench, MCP-Atlas, Toolathlon, GDPval-AA)

Ranking:

1. **GLM 5.2** — GDPval-AA v2 Elo 1524 (best open weights, level with GPT-5.5 xhigh), Terminal-Bench 78 (AA), MCP-Atlas 76.8, τ³-Banking 27 (best open weights), Tool-Decathlon 48.2.
2. **DeepSeek V4-Pro Max** — GDPval-AA 1328 (AA, max) / 1554 (vendor), MCP-Atlas 73.6, Toolathlon 51.8 (highest of 5), Terminal-Bench 64 (AA).
3. **MiniMax M3** — GDPval-AA 1418 (AA v2) / ~1670 (AA v1), MCP-Atlas 74.2, τ³-Banking not separately listed.
4. **Kimi K2.6** — AA Index 43, Toolathlon 50, MCPMark 55.9, OSWorld 73.1, APEX-Agents 27.9, MCP-Atlas 66.6 (in DeepSeek table).
5. **Qwen 3.7 Max** — MCP-Atlas 76.4, AA Index not measured.

**Caveat:** GLM 5.2 dominates this category on independent AA measurements. The MiniMax M3 placement is high on GDPval-AA but its abstention behavior (30.9% attempt rate, per AA) inflates its GDPval score while suppressing hallucination — a known methodological caveat. Qwen 3.7 Max is almost completely unmeasured on independent agentic benchmarks.

### Long context (MR-NIAH, LongBench v2, RULER, MRCR)

**Insufficient data — category ranking not possible.** Only DeepSeek V4-Pro reports MRCR 1M (83.5) and CorpusQA 1M (62.0). DeepSeek V4-Pro base reports LongBench-V2 51.5. No other model publishes LongBench v2, RULER, or MR-NIAH scores in a comparable form. AA-LCR (Artificial Analysis Long Context Reasoning) is reported as 71 (GLM 5.2), 74 (M3), 65 (GLM-5.1), so a partial ordering: **M3 (74) > GLM 5.2 (71) > GLM-5.1 (65)** for AA-LCR specifically, but this is one metric, not a full long-context suite.

---

## 3. Cross-category strength ranking ("capability composite")

Methodology: simple average of normalized scores across (a) reasoning (HLE, GPQA-Diamond), (b) coding (SWE-bench Verified/Pro, Terminal-Bench), (c) agentic (GDPval-AA, MCP-Atlas). For models with no independent number, vendor-reported number is used and flagged.

| Model | Reasoning (HLE+GPQA)/2 | Coding (SWE-V+TB)/2 | Agentic (GDPval + MCP)/2 | Composite (avg) | Caveat |
|---|---|---|---|---|---|
| **GLM 5.2** | (40.5+91.2)/2 = 65.9 | (≈80+78)/2 = 79 | (1524/2 +76.8/2) ≈ 800 → normalized 80 | **~75** | Best independently verified |
| **DeepSeek V4-Pro Max** | (37.7+90.1)/2 = 63.9 | (80.6+67.9)/2 = 74.3 | (1328+73.6)/2 → ~70 | **~69** | Strong on cost-per-task ($0.04) |
| **Kimi K2.6** | (34.7+90.5)/2 = 62.6 | (80.2+66.7)/2 = 73.5 | (~50+66.6)/2 → ~58 | **~65** | Strong on OSWorld, APEX |
| **MiniMax M3** | (37+93)/2 = 65 | (80.5+65)/2 = 72.8 | (1418+74.2)/2 → 74 | **~71** | Penalized by abstention; AA Index 44 (tied w/ V4-Pro) |
| **Qwen 3.7 Max** | (41.4+90)/2 = 65.7 | (≈+75)/2 = 75 | (76.4 only) → no GDPval | **~70** (highly uncertain) | No independent agentic; vendor-only data |

**Composite ranking (most → least capable across the 3 categories):**
1. **GLM 5.2** (≈75) — clear leader among open weights; only model within striking distance of GPT-5.5 xhigh on agentic
2. **MiniMax M3** (≈71) — strong on GPQA and SWE-bench, but lower AA Index (44) than GLM (51)
3. **Qwen 3.7 Max** (≈70, low confidence) — vendor numbers only
4. **DeepSeek V4-Pro Max** (≈69) — most cost-efficient; weaker on Terminal-Bench and GDPval
5. **Kimi K2.6** (≈65) — solid but not category-leading in any single benchmark

**Caveats:** This composite is heavily skewed by which benchmarks are reported. AA Intelligence Index v4.1 (the most carefully constructed independent composite) ranks them as: **GLM 5.2 (51) > DeepSeek V4-Pro Max (44) = MiniMax M3 (44) > Kimi K2.6 (43)**. Qwen 3.7 Max is not on AA.

---

## 4. Caveats and confidence

- **Self-reported (vendor) vs independent:**
  - **Qwen 3.7 Max** — essentially all numbers in this report are third-party-cited via GLM-5.2's model card; no independent benchmark data was found.
  - **GLM 5.2** — independent AA v4.1 results largely match vendor numbers (HLE 40 vs 40.5, CritPt 21 vs 20.9, GPQA 89 vs 91.2, Terminal-Bench 78 vs 81). High confidence.
  - **DeepSeek V4-Pro** — AA measured 1328 on GDPval vs vendor's 1554 (large discrepancy); AA measured Terminal-Bench 64 vs vendor's 67.9. Moderate confidence; vendor numbers may be slightly inflated.
  - **Kimi K2.6** — SWE-bench Pro 58.6, SWE-bench Verified 80.2 are independently confirmed on HF leaderboard. High confidence.
  - **MiniMax M3** — AA measurements largely confirm vendor (GPQA 93/93, HLE 37/37, CritPt 4/3.7). High confidence.

- **Low confidence rankings:**
  - Qwen 3.7 Max across all categories (no independent data)
  - Long-context category for any model (only DeepSeek publishes MRCR/LongBench v2)
  - Agentic category for Qwen 3.7 Max (only MCP-Atlas 76.4 vendor)
  - GAIA, WebArena, OSWorld for DeepSeek V4-Pro and Qwen 3.7 Max (no public data)
  - τ-bench proper (as opposed to τ³-Banking) for all 5 models

- **Most recent data points per model:**
  - DeepSeek V4-Pro: HF model card last updated ~Apr 2026; V4-Pro 49B active
  - GLM 5.2: HF model updated 1 day ago (Jun 17 2026); AA article Jun 17 2026
  - Qwen 3.7 Max: LMArena last seen Jun 16 2026 (qwen3.7-max-20260517)
  - Kimi K2.6: HF model card last updated ~Apr 30 2026; LMArena last seen Jun 16 2026
  - MiniMax M3: HF model updated 2 days ago (Jun 16 2026); AA article Jun 8 2026; AA v4.1 re-evaluation Jun 16 2026

- **Saturation:** AIME 2025 is now saturated — top models hit 100% (Gemini 3 Pro, GPT 5.2) so the 2026 editions (AIME 2026, HMMT 2026) are now the differentiator.

- **LMArena data note:** The numbers in LMArena's overall Text leaderboard for Qwen 3.7 Max / GLM 5.2 (max) / Kimi K2.6 / DeepSeek V4-Pro(-thinking) / MiniMax M3 are #17 / #25 / #34 / #36 (thinking) / #38 / #49 respectively, which differs from the AA Intelligence Index ordering and the capability composite above. LMArena emphasizes conversational performance and instruction-following; AA emphasizes reasoning + agentic + coding.

---

## 5. Source URLs (with date accessed: 18 Jun 2026)

- https://artificialanalysis.ai/ (homepage, intelligence index)
- https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
- https://artificialanalysis.ai/articles/minimax-m3
- https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1
- https://www.vellum.ai/llm-leaderboard
- https://huggingface.co/zai-org/GLM-5.2
- https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
- https://huggingface.co/moonshotai/Kimi-K2.6
- https://huggingface.co/MiniMaxAI/MiniMax-M3
- https://huggingface.co/deepseek-ai (org page)
- https://huggingface.co/zai-org (org page)
- https://huggingface.co/Qwen (org page)
- https://huggingface.co/moonshotai (org page)
- https://huggingface.co/MiniMaxAI (org page)
- https://lmarena.ai/leaderboard (overall, agent, vision, document)
- https://lmarena.ai/leaderboard/code/webdev (WebDev sub-leaderboard)

---

## 6. Specific data points to verify (per the user)

### MiniMax M3's positioning vs frontier models on coding/agentic

MiniMax's marketing claim ("frontier coding + agentic") is **partially supported**. Evidence for:
- **SWE-bench Verified 80.5** (Vellum, independent) — competitive with Claude Opus 4.7 (87.6) at 92% of its score, ahead of Kimi K2.6 (80.2) and roughly tied with DeepSeek V4-Pro Max (80.6)
- **LMArena WebDev #13 / 1511** — within 3 ELO of Claude Sonnet 4.6 (#11)
- **LMArena Image-to-WebDev** — Kimi K2.6 at #7, MiniMax M3 not on the list (cut off at top ~10); M3 is below top open weights on this metric

Evidence against (M3 is weaker than the LMArena #49 rank suggests only weakly — actually its coding is solid, but it's held back by abstention):
- **AA Intelligence Index 44** — same as DeepSeek V4-Pro Max and below GLM 5.2 (51), Kimi K2.6 (43), and well behind GPT-5.5 (55) and Claude Opus 4.8 (56)
- **M3 only attempts 30.9% of AA-Omniscience questions** — its low hallucination rate (16.1%) is partly an artifact of refusing to answer; accuracy is only 15.0%
- **Terminal-Bench 2.1 (vendor) 65** vs GLM 5.2 (81), DeepSeek (67.9), Kimi (66.7) — bottom of the open-weights group
- **DeepSWE 20, NL2Repo 42.1** — well below GLM 5.2 (46.2, 48.9)

**Verdict:** MiniMax M3's coding IS frontier-competitive on SWE-bench and LiveCodeBench-style work, but its agentic performance is artificially suppressed by heavy abstention. The LMArena rank (#49 overall, #13 WebDev) reflects the overall mediocre chat experience better than the AA Intelligence Index rank (44, tied for #1 open weights on older methodology) does.

### GLM 5.2's standing in WebDev

GLM 5.2 (max) is **#2 in WebDev at 1595 ELO**, 59 ELO behind claude-fable-5 (#1, 1654) and ahead of every other model including all Claude Opus variants, all GPT-5.5 variants, and every other open-weight model. This is **highly consistent** with other coding benchmarks:
- **Terminal-Bench 2.1: 81 (vendor) / 78 (AA)** — top of the 5
- **SWE-bench Pro: 62.1** — top of the 5
- **DeepSWE: 46.2** — top of the 5
- **FrontierSWE (Dominance): 74.4** — top of the 5 (level with Claude Opus 4.8 at 75.1, ahead of GPT-5.5 at 72.6)
- **MCP-Atlas (Public): 76.8** — top of the 5
- **GDPval-AA v2: 1524 Elo** — top of the 5, level with GPT-5.5 xhigh (1514)

**Verdict:** GLM 5.2's WebDev #2 rank is fully consistent with — and probably driven by — its #1 open-weights position on virtually every other coding and agentic benchmark. This is a real signal, not a fluke.

### Qwen 3.7 Max's position in coding and math

LMArena shows qwen3.7-max-preview at **#17 overall** — ahead of GLM 5.2 (max) at #25. But on independent benchmarks the picture is more mixed:
- **Coding:** Terminal-Bench 2.1 75 (vs GLM 5.2 81), SWE-Pro 60.6 (vs GLM 5.2 62.1), DeepSWE 18 (vs GLM 5.2 46.2) — Qwen trails GLM 5.2 on every coding benchmark reported in GLM-5.2's model card
- **Math:** HMMT 2026 Feb 97.1 (vs GLM 5.2 92.5) — Qwen actually leads here; AIME 2026 97 (vs GLM 5.2 99.2) — GLM 5.2 leads
- **Reasoning:** HLE 41.4 (vs GLM 5.2 40.5) — Qwen slightly leads; CritPt 13.4 (vs GLM 5.2 20.9) — GLM 5.2 much stronger

**Verdict:** Qwen 3.7 Max's #17 LMArena position is somewhat higher than its technical-report profile suggests. LMArena overall ranking is heavily influenced by chat/instruction-following performance and breadth of capability, where Qwen may have an advantage. On the harder technical benchmarks (CritPt, DeepSWE), Qwen is meaningfully behind GLM 5.2. The Qwen #17 vs GLM #25 LMArena ordering is **not fully consistent** with other benchmark data — the gap is likely explained by LMArena's weighting of conversational performance and Qwen's broader training for that use case, which is not captured in the agentic/coding benchmarks.

**Additional note on Qwen 3.7 Max coverage:** The model has remarkably thin independent benchmark coverage — no Artificial Analysis measurement, no Vellum detail listing, and even the technical comparison numbers in GLM-5.2's model card (the source of nearly all data here) are presented without methodology or sample sizes. **All Qwen 3.7 Max scores in this report should be treated as low-confidence vendor-reported numbers** until independent evaluations are published.

---

## 7. Implications for the v10 carousel

1. **Reorder slide 5 by capability composite** (per section 3): GLM 5.2 > MiniMax M3 ≈ Qwen 3.7 Max (low confidence) > DeepSeek V4-Pro > Kimi K2.6.
2. **Add Qwen 3.7 Max caveat** in slide 6 pricing line: "vendor-reported only, no independent benchmarks available as of 2026-06-18".
3. **Add MiniMax M3 abstention caveat** in slide 6 pricing line: "frontier coding per vendor; AA reports 30.9% attempt rate on agentic tasks".
4. **Add GLM 5.2 leader position** in slide 6 pricing line: "AA Intelligence Index 51, leading open weights as of 2026-06-17".
5. **Update AIME 2025 references** (if any) to AIME 2026 / HMMT 2026 (now the differentiators).
6. **Decide carousel split** (RAG failures + cost discipline as 2 separate carousels).
7. **Optional: add a 7th slide or compress slide 5** to fit a deeper model comparison.

The current v9 carousel does NOT have these changes. This research file is the input for v10.

---

## 8. v9 carousel updates triggered by this research

- The current v9 slide 5 1M-context claim ("retrieval-side chunking matters less") is too strong. Per section 2's reasoning ranking, GLM 5.2 is the strongest of the 5, and its WebDev performance (#2 overall) suggests RAG-side chunking is still the lever for cross-document scale. v9.1 fixes this with "complementary, not substitutes" language.
- The current v9 slide 5 has models in alphabetical-ish order (DeepSeek, GLM, Qwen, Kimi, MiniMax), not capability order. v10 will reorder.
- The current v9 slide 6 has GLM 5.2 marked as "limited independent benchmarks (LMArena #25)" — this is now too conservative. Per AA, GLM 5.2 has the leading open-weights AA Intelligence Index (51). v10 will update.

---

## 9. Confidence summary by model

- **GLM 5.2**: HIGH confidence on capability (#1 open weights, multiple independent sources). Pricing, deployment, and benchmarks all verified.
- **DeepSeek V4-Pro**: HIGH confidence on capability (top-3 open weights), pricing ($0.435/$0.87 verified at api-docs.deepseek.com), and benchmarks.
- **Kimi K2.6**: HIGH confidence on benchmarks (HF leaderboard confirmation), MEDIUM confidence on pricing (cache-miss vs cache-hit distinction is technical).
- **MiniMax M3**: HIGH confidence on capability (AA Index 44 confirmed), but LOW confidence on agentic comparison (abstention artifact). Pricing verified.
- **Qwen 3.7 Max**: LOW confidence overall (no independent data). Vendor-reported numbers are the only data. Pricing is on 50% launch promo (per carousel-review evidence).

---

## End of report.
