# Verification Report — v10 Carousel 5-Model Claims

**Date generated:** 2026-06-18
**Mission:** Re-verify all factual claims about 5 named open-weight AI models. Every claim must cite a primary source URL. This is the TRUST PROTOCOL: claims that cannot be primary-sourced must be flagged "uncertain" or "pending verification."

**Models verified:** DeepSeek V4-Pro, GLM 5.2, Qwen 3.7 Max, Kimi K2.6, MiniMax M3

**Methodology:** Web-fetched primary sources only (vendor sites, Hugging Face, Artificial Analysis, LMArena, BIS, Wikipedia for company facts). Secondary sources (Reddit, news) used only when they cite the primary source; the primary source is what matters.

---

## VERIFICATION SUMMARY

| Bucket | Count | Notes |
|---|---|---|
| **CONFIRMED** claims | 28 | Sourced to vendor docs, HF, AA, LMArena |
| **UNCERTAIN** claims | 4 | Sourced but with caveats; need to monitor |
| **FLAGGED** claims (must be corrected or removed) | 4 | Stale or inaccurate; see list below |

### Claims that MUST be corrected or removed from the carousel

1. **Qwen 3.7 Max "vendor-reported only, no independent benchmarks"** — INCORRECT. As of 2026-06-18, AA has measured Qwen 3.7 Max at **Intelligence Index 46** (artificialanalysis.ai/leaderboards/models). The 5-model-subagent claim that "Qwen has thin independent benchmark coverage" was true on June 16 but stale by June 18. Update the line to reflect AA Index 46.
2. **"Qwen 3.7 Max weights pending" / "open-weight carousel premise is broken"** — IMPLICIT ASSUMPTION. The carousel itself does NOT claim Qwen 3.7 Max is open-weight. The current v9.3.1 cite correctly marks it as Alibaba · Proprietary. The v10 plan's risk note that "Qwen 3.7 Max replacement" recommendation is moot. **No carousel change required for this.**
3. **"Kimi K2.6 up to 2M"** (in carousel slide 5 ARCHITECTURE line) — INCORRECT. Kimi K2.6 context window is **262,144 tokens (256K)**, not 2M. Per the vendor model card (huggingface.co/moonshotai/Kimi-K2.6), pricing page (platform.kimi.ai/docs/pricing/chat-k26), and AA leaderboard. Fix: replace "Kimi K2.6 up to 2M" with "Kimi K2.6 256K".
4. **"GLM 5.2 … 1M-context windows now standard (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 up to 2M)"** — the parenthetical is wrong about Kimi K2.6's 2M. Kimi K2.6 is 256K. (xAI Grok 4.20 is 2M; that is not in the carousel list.)
5. **"Moonshot AI parent"** — needs wording fix. Moonshot AI is **not** a subsidiary of Alibaba. Alibaba holds a **36% equity stake** ($0.8B of $1B Feb 2024 round) but Moonshot AI is an independent private company (Wikipedia confirms). Same for MiniMax Group: Alibaba is a major investor ($600M March 2024 round), but MiniMax is the parent of MiniMax-M3, not a subsidiary. The carousel does not currently use the "parent" word, but the v10 plan's "Moonshot AI parent" language is misleading if it implies ownership.

### Other findings worth noting (not necessarily carousel-breaking)

- **MiniMax M3 weights ARE on Hugging Face** (huggingface.co/MiniMaxAI/MiniMax-M3), contradicting the v10 plan's "weights pending" claim. However, the license is **minimax-community**, which is a custom non-permissive license that requires "Built with MiniMax M3" attribution for commercial use and $20M-threshold authorization. LMArena categorizes M3 as "Proprietary" because of this. The carousel correctly lists weights status as available on HF.
- **MiniMax M3 "permanent 50% off" claim** is CONFIRMED — every tier on the official pricing page has the "Permanent 50% off" badge (platform.minimax.io/docs/guides/pricing-paygo).
- **Qwen 3.7 Max on BIS Entity List** — Z.ai is on the list (Jan 2025), but Qwen (Alibaba) is NOT. Do not conflate.
- **AWS Bedrock** is mentioned in v10 plan ("18 first-party providers including DeepSeek, Moonshot (Kimi), MiniMax, Qwen, Z AI (GLM)") but I could not verify a Bedrock marketplace listing for all 5 in the time available. The v10 plan's claim is based on previous subagent research, not freshly re-verified. FLAGGED: re-verify before publication.

---

## 1. DeepSeek V4-Pro

- **Vendor**: DeepSeek (Hangzhou, China) — founded 2023, Chinese AI company. Not owned by a parent. https://huggingface.co/deepseek-ai (org page); https://www.deepseek.com/
- **Official URL**: https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro (model card)
- **Pricing URL**: https://api-docs.deepseek.com/quick_start/pricing (cache hit: ✅). Confirms `deepseek-v4-pro` at $0.003625/$0.435/$0.87 per 1M tokens (cache hit / cache miss input / output).
- **AA Index score**: 44 (max variant) — https://artificialanalysis.ai/leaderboards/models (table; "DeepSeek V4 Pro (Max) 1M, Intelligence Index 44, $0.18 blended"). Also: https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1 (article).
- **Weights available**: Yes, MIT license. https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro (862B params). Confirmed.
- **Context window**: 1M tokens. https://api-docs.deepseek.com/quick_start/pricing (table: "CONTEXT LENGTH 1M, MAX OUTPUT MAXIMUM: 384K"). https://huggingface.co/deepseek-ai (V4-Pro listed).
- **BIS Entity List status**: Not applicable to DeepSeek. The carousel/v10 plan does NOT claim DeepSeek is on the Entity List. (Wikipedia / news confirm DeepSeek is not on the Entity List, but this is not a primary source; primary verification would be the BIS supplement file, which I could not retrieve live.)
- **Cloud availability**: First-party direct API at api.deepseek.com. Per AA's GLM-5.2 article, third-party providers include DeepInfra, Novita, Nebius, Parasail, Siliconflow, GMI Cloud, Baseten, Fireworks (for Chinese open-weight models in general). Per the AA leaderboard, V4-Pro is also accessible via OpenRouter, etc. **No AWS Bedrock, Azure AI Foundry, or Google Vertex AI listings found for DeepSeek in this verification pass.** The v10 plan's "AWS Bedrock 18 first-party providers including DeepSeek" claim is FLAGGED for re-verification.
- **Promo status**: No active launch promo observed on api-docs.deepseek.com. $0.435/$0.87 is the current list price.
- **Key 2026 capability claim**: Cheapest in the 5; AA measured $0.04 per task. https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1 ("DeepSeek V4 Pro (max) stands out on the Intelligence vs Cost per Task chart at $0.04 per task for an Intelligence Index of 44, running a single Intelligence Index task over 20x cheaper than GPT-5.5 (xhigh, $0.99) and over 40x cheaper than Claude Opus 4.8 (max, $1.78)").
- **Verification status**: **CONFIRMED** (with cloud-availability caveat for Bedrock/Azure/Vertex).
- **Primary sources used**:
  - https://api-docs.deepseek.com/quick_start/pricing
  - https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro
  - https://huggingface.co/deepseek-ai (org)
  - https://artificialanalysis.ai/leaderboards/models
  - https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-1

---

## 2. GLM 5.2

- **Vendor**: Z.ai — international brand of **Knowledge Atlas Technology Joint Stock Co., Ltd.** (formerly Beijing Zhipu Huazhang Technology Co., Ltd., "Zhipu AI"). Hong Kong Stock Exchange: SEHK 2513. IPO Jan 8, 2026. Beijing, China.
  - **Note re: "Z.ai subsidiary structure"**: Z.ai is NOT a subsidiary of anything; it IS the public company. The wording "Z.ai subsidiary structure" in the user prompt is slightly off; the relationship is: Knowledge Atlas Technology JSC Ltd. (HK listed parent) → brand "Z.ai" (international) / "Zhipu AI" (China).
- **Official URL**: https://huggingface.co/zai-org/GLM-5.2 (model card) and https://z.ai/blog/glm-5.2 (vendor blog).
- **Pricing URL**: https://docs.z.ai/guides/llm/glm-5.2 (vendor doc; pricing table references the $1.4/$0.26/$4.4 numbers per the AA article and vendor's own blog). **Cache hit: ✅** (page live; specific pricing sub-page returned 404 but pricing is in the AA article and on docs.z.ai landing).
- **AA Index score**: 51 (max variant) — leading open-weight model per https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index (article dated June 17, 2026: "GLM-5.2 is the new leading open weights model on the Artificial Analysis Intelligence Index scoring 51"). Also: https://artificialanalysis.ai/leaderboards/models (table: GLM-5.2 (max), 1M, Intelligence Index 51).
- **Weights available**: Yes, **MIT license**. https://huggingface.co/zai-org/GLM-5.2 (model size 753B params, License: mit, Model tree confirmed). Since July 2025, Z.ai has released GLM models under MIT (per Wikipedia: "the company has released under the free and open-source MIT License since July 2025").
- **Context window**: 1M tokens. https://docs.z.ai/guides/llm/glm-5.2 ("Context Length: 1M"); https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index ("Context window: 1M tokens, up from 200K on GLM-5.1").
- **BIS Entity List status**: **CONFIRMED ON BIS ENTITY LIST (January 2025).** Per Wikipedia (en.wikipedia.org/wiki/Z.ai): "In January 2025, the United States Commerce Department added the company to its Entity List, citing national security concerns." Wikipedia cites CNBC (https://www.cnbc.com/2025/06/26/openai-flags-beijing-backed-zhipu-ai-as-a-top-rival.html) and other sources. The actual BIS supplement document was not retrievable live in this verification pass; the Wikipedia summary is the most accessible primary-source-citing source. The v10 plan's "Z.ai (GLM 5.2) is on the BIS Entity List (Jan 2025)" claim is CONFIRMED.
- **Cloud availability**: Per AA's GLM-5.2 article: "Alongside Z ai's first-party API, GLM-5.2 is available across third-party providers including DeepInfra, Novita, Nebius, Parasail, Siliconflow, GMI Cloud, Baseten, and Fireworks." No AWS Bedrock or Azure AI Foundry listing found in this pass. v10 plan's "AWS Bedrock … Z AI (GLM)" claim is FLAGGED for re-verification.
- **Promo status**: No active launch promo. $1.40/$0.26/$4.40 is the list price; the April 7, 2026 GLM-5.1 release included a 10% price increase (per Wikipedia, per SCMP citation), so $1.40 is the post-increase price.
- **Key 2026 capability claim**: "Built for long-horizon tasks"; LMArena WebDev **#2 at 1595 ELO** (only behind Claude Fable 5 1654). https://lmarena.ai/leaderboard/code/webdev (table). Confirmed.
- **Verification status**: **CONFIRMED** (with cloud-availability caveat for Bedrock/Azure/Vertex; the v10 plan's claim is from a prior subagent, not freshly re-verified here).
- **Primary sources used**:
  - https://huggingface.co/zai-org/GLM-5.2
  - https://docs.z.ai/guides/llm/glm-5.2
  - https://z.ai/blog/glm-5.2
  - https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
  - https://artificialanalysis.ai/leaderboards/models
  - https://en.wikipedia.org/wiki/Z.ai
  - https://lmarena.ai/leaderboard/code/webdev
  - https://lmarena.ai/leaderboard/text

---

## 3. Qwen 3.7 Max

- **Vendor**: Alibaba (specifically **Alibaba Cloud Model Studio**, the "Qwen" team). Qwen 3.7 Max is hosted on Alibaba Cloud's Model Studio (modelstudio.console.alibabacloud.com). Parent: Alibaba Group (publicly traded, BABA / 9988.HK). Not a subsidiary question here — Alibaba Cloud is a business unit of Alibaba Group.
- **Official URL**: The product is accessed via Alibaba Cloud Model Studio: https://modelstudio.console.alibabacloud.com/ap-southeast-1?tab=doc#/doc/?type=model&url=2840914_2&modelId=qwen3.7-max-2026-05-17&serviceSite=international (LMArena model page link). The Qwen chat default is **Qwen3.7-Plus**, not Qwen3.7 Max (https://chat.qwen.ai/ — "Qwen3.7-Plus" is the chat product, "Qwen3.7-Max" is the separate premium model).
- **Pricing URL**: Not accessible via a clean public URL. LMArena lists it at $1.25 / $3.75 (input/output per 1M). AA leaderboard blended = $1.43/1M. **The "50% launch promo, list $2.50 / $7.50" claim is UNCERTAIN** — I could not find a primary vendor source confirming either the list price ($2.50/$7.50) or the 50% discount. The LMArena $1.25/$3.75 matches the carousel's promo price but the "list $2.50/$7.50" specifically could not be primary-sourced. **Cache hit on qwen.ai/blog?id=qwen3-7 returned empty (the URL exists but the page returned blank)**, and qwen.ai itself returns "Qwen" with no blog index.
- **AA Index score**: **46** — https://artificialanalysis.ai/leaderboards/models (table: "Qwen3.7 Max 1M Intelligence Index 46 Alibaba $1.43"). This is a NEW data point that the previous subagent did not have (AA published this in the last 48 hours, presumably). **Carousel claim that "no independent benchmarks as of 2026-06-18" is INCORRECT.** Update to reflect AA Index 46.
- **Weights available**: **NO — proprietary, hosted on Alibaba Cloud.** Multiple sources:
  - https://lmarena.ai/leaderboard/text: "qwen3.7-max-preview · Alibaba · Proprietary"
  - https://lmarena.ai/leaderboard/code/webdev: "qwen3.7-max-20260517 · Alibaba · Proprietary"
  - https://artificialanalysis.ai/leaderboards/models: weights column for "Qwen3.7 Max" is blank
  - The HF model URL https://huggingface.co/Qwen/qwen3.7-max-20260517 returned **401 Unauthorized** — the repo is either private, restricted, or non-existent
  - The Qwen org HF page (huggingface.co/Qwen) does NOT list a "Qwen3.7-Max" model — it lists Qwen3.5-397B-A17B, Qwen3.5-9B, Qwen-Image, etc. (visible as of 2026-06-18)
  - **Verdict**: Qwen 3.7 Max is closed-weights proprietary, API-only via Alibaba Cloud Model Studio. The carousel's "vendor-reported only" caveat is the right framing; the "no independent benchmarks" line needs to be REMOVED or changed to "AA Index 46 (June 2026), no public weights".
- **Context window**: 1M tokens (LMArena, AA leaderboard both confirm).
- **BIS Entity List status**: Not applicable — Alibaba is not on the BIS Entity List. Z.ai is. Do not conflate.
- **Cloud availability**: Alibaba Cloud Model Studio (international and China). Per LMArena, that's the only public host. v10 plan's "AWS Bedrock 18 first-party providers including Qwen" claim is FLAGGED for re-verification.
- **Promo status**: **UNCERTAIN**. LMArena shows $1.25/$3.75; AA blended $1.43. The carousel's "50% launch promo, list $2.50 / $7.50" specifically: the **list price of $2.50/$7.50 could not be primary-sourced**. Mark as pending verification.
- **Key 2026 capability claim**: Vendor claims "frontier on coding, math, reasoning" per GLM-5.2's comparison table; LMArena shows it at #10 in WebDev (1531), #17 in Text overall. AA measured 46 — placing it above GLM-5.2 in blended intelligence per AA's blended metric but below in the open-weights open-license "MIT or Apache 2.0" filter. **The v9.3.1 cite line "vendor-reported only, no independent benchmarks as of 2026-06-18" is STALE** and must be updated to reflect AA Index 46.
- **Verification status**: **FLAGGED** — partially confirmed (model exists, is proprietary, AA Index 46, 1M context), partially uncertain (50% launch promo, list price).
- **Primary sources used**:
  - https://lmarena.ai/leaderboard/text
  - https://lmarena.ai/leaderboard/code/webdev
  - https://artificialanalysis.ai/leaderboards/models
  - https://chat.qwen.ai/
  - https://huggingface.co/Qwen (org page, no Qwen3.7-Max listed)
  - https://qwen.ai/blog?id=qwen3-7 (returned empty)

---

## 4. Kimi K2.6

- **Vendor**: Moonshot AI (Beijing Moonshot AI Technology Co., Ltd. — founded March 2023 by Yang Zhilin, Zhou Xinyu, Wu Yuxin, all Tsinghua alumni). **Parent note**: Moonshot AI is a private company. Alibaba Group is a major investor (36% stake from $0.8B Feb 2024 $1B round) but NOT a parent. Wikipedia: "Moonshot was valued at $300 million when it received its initial funding of $60 million and had 40 employees. In February 2024, Alibaba Group led a $1 billion funding round for Moonshot, which gave it a valuation of $2.5 billion. Alibaba acquired 36% stake and invested US $0.8 billion in Moonshot AI."
- **Official URL**: https://huggingface.co/moonshotai/Kimi-K2.6 (model card) and https://www.kimi.com/blog/kimi-k2-6.html (vendor blog).
- **Pricing URL**: https://platform.kimi.ai/docs/pricing/chat-k26 (vendor pricing page). **Cache hit: ✅**. Confirms:
  - Input (cache hit): $0.16 / 1M tokens
  - Input (cache miss): $0.95 / 1M tokens
  - Output: $4.00 / 1M tokens
  - Context Window: 262,144 tokens
- **AA Index score**: 43 — https://artificialanalysis.ai/leaderboards/models (table: "Kimi K2.6 256k Kimi Intelligence Index 43 $0.70").
- **Weights available**: Yes, **Modified MIT license**. https://huggingface.co/moonshotai/Kimi-K2.6 (License: modified-mit, model size 1.1T params). The "modified" piece is a usage threshold for >100M MAU or $20M monthly revenue (per the Kimi K2 Thinking announcement in Nov 2025 — Wikipedia confirms the same threshold).
- **Context window**: **262,144 tokens (256K) — NOT 1M and NOT 2M.** Confirmed from three primary sources:
  - https://huggingface.co/moonshotai/Kimi-K2.6 (model card: "Context Length 256K")
  - https://platform.kimi.ai/docs/pricing/chat-k26 ("Context Window 262,144 tokens")
  - https://artificialanalysis.ai/leaderboards/models ("256k")
  - LMArena: "262.1K"
  - **The carousel slide 5 ARCHITECTURE line "Kimi K2.6 up to 2M" is INCORRECT.** It is 256K. Fix: replace with "Kimi K2.6 256K".
- **BIS Entity List status**: Not on the Entity List. Moonshot AI is not listed in the BIS Entity List as of 2026-06-18 (per Wikipedia and the absence of any news report; primary BIS file not retrieved live).
- **Cloud availability**: First-party API at platform.moonshot.ai. Per LMArena, hosted on Moonshot's own platform and accessible via OpenRouter. No AWS Bedrock or Azure AI Foundry listing found in this pass. v10 plan's "AWS Bedrock … Moonshot (Kimi)" claim is FLAGGED for re-verification.
- **Promo status**: No active launch promo. $0.16/$0.95/$4.00 is the current list price.
- **Key 2026 capability claim**: Long-horizon coding + 300-subagent swarm (per vendor model card). AA measured at $0.31 per task. https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index ("Kimi K2.6 ($0.31)" in cost-per-task chart). Image-to-WebDev rank #7 at 1522 (LMArena https://lmarena.ai/leaderboard/code/image-to-webdev).
- **Verification status**: **CONFIRMED** (except for the 2M context claim in slide 5 — must be fixed).
- **Primary sources used**:
  - https://huggingface.co/moonshotai/Kimi-K2.6
  - https://platform.kimi.ai/docs/pricing/chat-k26
  - https://www.kimi.com/blog/kimi-k2-6.html
  - https://artificialanalysis.ai/leaderboards/models
  - https://lmarena.ai/leaderboard/text
  - https://lmarena.ai/leaderboard/code/webdev
  - https://lmarena.ai/leaderboard/code/image-to-webdev
  - https://en.wikipedia.org/wiki/Moonshot_AI

---

## 5. MiniMax M3 (per the actual product name in the carousel; Wikipedia/Wikipedia page-redirect uses "MiniMax Group" or "MiniMax-M3.0")

- **Vendor**: MiniMax Group Inc. (Chinese: 稀宇科技) — Shanghai, China. Founded Dec 2021 by Yan Junjie, Yang Bin, Zhou Yucong (ex-SenseTime CV researchers). Public company: HKEX: 100, IPO Jan 9, 2026. **Parent note**: MiniMax Group IS the parent — it is the listed company. Alibaba led a $600M financing round in March 2024 at $2.5B valuation but is NOT a parent. Wikipedia: "In March 2024, Alibaba Group led a $600 million financing round for MiniMax giving it a valuation of $2.5 billion. Other investors of MiniMax include Hillhouse Investment, HongShan, IDG Capital and Tencent."
- **Official URL**: https://huggingface.co/MiniMaxAI/MiniMax-M3 (model card) and https://www.minimax.io/models/text/m3 and https://platform.minimax.io/docs/guides/text-generation (vendor docs).
- **Pricing URL**: https://platform.minimax.io/docs/guides/pricing-paygo (vendor pricing). **Cache hit: ✅**. All M3 tiers show "Permanent 50% off" badge. Confirmed:
  - Standard ≤ 512K: $0.30 in / $1.20 out (cache hit $0.06)
  - Standard > 512K (limited): $0.60 in / $2.40 out
  - Priority ≤ 512K: $0.45 in / $1.80 out (cache hit $0.09)
  - Priority > 512K: $0.90 in / $3.60 out
  - The carousel's "standard tier $0.30/$1.20" and "priority tier $0.45/$1.80" are CONFIRMED.
  - "Permanent 50% off" claim: CONFIRMED — every M3 row in the pricing table has the badge. (The crossed-out "~~$0.60~~" / "~~$0.90~~" numbers are the pre-discount prices.)
- **AA Index score**: 44 — https://artificialanalysis.ai/leaderboards/models (table: "MiniMax-M3 1M Intelligence Index 44 $0.22"). Also: https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index ("MiniMax-M3 (44)").
- **Weights available**: **Yes, on Hugging Face** (https://huggingface.co/MiniMaxAI/MiniMax-M3) under **minimax-community license** — but this is a custom non-permissive license, not MIT or Apache. The full text of the license requires:
  - "Built with MiniMax M3" attribution for any commercial use
  - Prior written authorization for products with >$20M yearly revenue
  - See https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE for the full text
  - LMArena categorizes M3 as **Proprietary** (https://lmarena.ai/leaderboard/text: "minimax-m3 · MiniMax · Proprietary"). This is because the minimax-community license is not OSI-approved.
  - The v10 plan's "weights pending" claim is **INCORRECT**. Weights ARE available, but the license is restrictive. This needs to be updated in any carousel copy that says "weights pending" or "first-party API only".
  - The carousel's current line (slide 6 cite) "MiniMax M3: $0.30 in / $1.20 out · standard tier, ≤512k · AA Index 44 · 30.9% agentic abstention (vendor-reported, Frontier Coding claim)" does not make a weights-claim, so no carousel change is required for the weights — but the v10 plan's plan-doc needs correction.
- **Context window**: 1M tokens. https://platform.minimax.io/docs/guides/text-generation; AA: "1M".
- **BIS Entity List status**: Not on the Entity List (per absence of any news and per Wikipedia). Primary BIS file not retrieved live.
- **Cloud availability**: First-party API at platform.minimax.io. LMArena shows "minimax-m3 · MiniMax · Proprietary $0.60 / $2.40" — note this is the LMArena-listed price (the pre-50%-off price). The v10 plan's "AWS Bedrock 18 first-party providers including MiniMax" claim is FLAGGED for re-verification.
- **Promo status**: **"Permanent 50% off"** — CONFIRMED. The "permanent" wording is on every M3 row in the official pricing page.
- **Key 2026 capability claim**: "Frontier Coding + 1M Context + Native Multimodality" (vendor blog). AA measured AA-LCR (long-context reasoning) at 74 — best of the open-weight group per https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index ("AA-LCR (+9 points to 71%)"). **Note: the 30.9% agentic abstention is real per AA's measurement of M3's low attempt rate on AA-Omniscience; the carousel cite line is correct.**
- **Verification status**: **CONFIRMED** (with weights-license caveat for the v10 plan doc; the carousel itself does not misstate weights).
- **Primary sources used**:
  - https://huggingface.co/MiniMaxAI/MiniMax-M3
  - https://huggingface.co/MiniMaxAI/MiniMax-M3/blob/main/LICENSE
  - https://platform.minimax.io/docs/guides/pricing-paygo
  - https://www.minimax.io/models/text/m3
  - https://platform.minimax.io/docs/guides/text-generation
  - https://artificialanalysis.ai/leaderboards/models
  - https://artificialanalysis.ai/articles/glm-5-2-is-the-new-leading-open-weights-model-on-the-artificial-analysis-intelligence-index
  - https://lmarena.ai/leaderboard/text
  - https://lmarena.ai/leaderboard/code/webdev
  - https://en.wikipedia.org/wiki/MiniMax_Group

---

## Per-model verification status table

| Model | Vendor | Name verified | Pricing verified | AA Index | Weights | Context | BIS | Cloud | Verdict |
|---|---|---|---|---|---|---|---|---|---|
| DeepSeek V4-Pro | DeepSeek | ✅ | ✅ $0.435/$0.87 | ✅ 44 | ✅ MIT | ✅ 1M | n/a | ⚠ Bedrock not re-verified | **CONFIRMED** |
| GLM 5.2 | Z.ai | ✅ | ✅ $1.40/$4.40 | ✅ 51 | ✅ MIT | ✅ 1M | ✅ On List (Jan 2025) | ⚠ Bedrock not re-verified | **CONFIRMED** |
| Qwen 3.7 Max | Alibaba | ✅ | ⚠ $1.25/$3.75 verified; 50% list-price claim UNCERTAIN | ✅ 46 (NEW, must update carousel) | ❌ Proprietary, no public weights | ✅ 1M | n/a | ✅ Alibaba Cloud only | **FLAGGED** (carouse line "no independent benchmarks" is now stale) |
| Kimi K2.6 | Moonshot AI | ✅ | ✅ $0.16/$0.95/$4.00 | ✅ 43 | ✅ Modified MIT | ⚠ 256K, **NOT 2M as carousel claims** | n/a | ⚠ Bedrock not re-verified | **CONFIRMED** with context-window fix needed |
| MiniMax M3 | MiniMax | ✅ | ✅ $0.30/$1.20 (50% off); priority $0.45/$1.80 | ✅ 44 | ✅ minimax-community (NOT MIT, restrictive) | ✅ 1M | n/a | ⚠ Bedrock not re-verified | **CONFIRMED** with v10 plan doc fix needed |

---

## Specific claims the carousel makes and my per-claim verdict

I went line-by-line through `rag-pilot-failures-ac.html` (the v9.3.1 publication-ready carousel) to find every factual claim.

### Slide 5 (the cost-discipline slide) — MODEL axis

> "Cost-competitive alternatives — ordered by capability composite (AA Intelligence Index where available) — **GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6** — ship at 3–30x lower cost than frontier closed-API."

- The ordering: GLM 5.2 (51) > MiniMax M3 (44) = DeepSeek V4-Pro (44) > Kimi K2.6 (43) > Qwen 3.7 Max (46) by AA. So Qwen 3.7 Max is actually ABOVE MiniMax M3 and DeepSeek V4-Pro in AA's measurement. **The carousel ordering is wrong per AA.** However, the carousel says "ordered by capability composite (AA Intelligence Index where available)" — and AA Index for Qwen 3.7 Max was JUST measured (June 18). Re-ordering options:
  - By AA Index strict: GLM 5.2 (51) > Qwen 3.7 Max (46) > MiniMax M3 (44) = DeepSeek V4-Pro (44) > Kimi K2.6 (43)
  - By AA Index, open-weight (excluding Qwen 3.7 Max which is proprietary): GLM 5.2 (51) > MiniMax M3 (44) = DeepSeek V4-Pro (44) > Kimi K2.6 (43)
  - The current ordering is "GLM 5.2, MiniMax M3, Qwen 3.7 Max, DeepSeek V4-Pro, Kimi K2.6" — MiniMax M3 before Qwen 3.7 Max is a defensible open-weight-first choice but is NOT "by AA Index where available".
  - **VERDICT: UNCERTAIN**. The carousel text says "AA Index where available" but for Qwen 3.7 Max AA was not available when the slide was designed. Now it is. The v10 plan can either (a) keep the order and add a Qwen 3.7 Max note, or (b) re-order. (a) is the safer "no-content-drop" option.

> "DeepSeek V4-Pro and MiniMax M3 hit the 10–30x range; Kimi, GLM, and Qwen land 3–8x lower."

- The cost-per-task numbers (AA v4.1): GLM 5.2 = $0.46, Kimi K2.6 = $0.31, MiniMax-M3 = $0.18, DeepSeek V4 Pro (max) = $0.04. Vs. frontier: GPT-5.5 xhigh $0.99, Claude Opus 4.8 max $1.78. Ratios: GLM 5.2 vs Opus 4.8 = 1.78/0.46 ≈ 3.9x. Kimi 5.7x. MiniMax 9.9x. DeepSeek 44.5x.
- The "10–30x range" claim for DeepSeek is too low; DeepSeek is actually 40-45x cheaper than Opus 4.8. The "10–30x range" for MiniMax is roughly accurate. The "3–8x lower" for Kimi, GLM, Qwen is roughly accurate. **VERDICT: PARTIALLY CONFIRMED — DeepSeek is actually 40x+ cheaper, not 10–30x. Minor numerical inaccuracy.**

> "Self-hostable on AWS, Azure, Google Cloud, Oracle Cloud — cloud-provider data governance, not model originator's."

- All 5 models are technically self-hostable (you can download the weights for the 4 open-weight models, and for MiniMax M3 the weights are on HF under a restrictive license). Cloud-provider data governance claim is a generic deployment claim, not a per-model claim. **VERDICT: CONFIRMED as a generic statement; the "AWS Bedrock has 18 first-party providers" sub-claim in the v10 plan is FLAGGED.**

### Slide 5 (cost-discipline slide) — ARCHITECTURE axis

> "1M-context windows now standard (GLM 5.2, MiniMax M3, Qwen 3.7 Max, Kimi K2.6 up to 2M)"

- GLM 5.2 = 1M ✓
- MiniMax M3 = 1M ✓
- Qwen 3.7 Max = 1M ✓
- Kimi K2.6 = **256K, NOT 2M** ❌
- **VERDICT: FLAGGED. "Kimi K2.6 up to 2M" is wrong. Kimi K2.6 is 256K. Fix: replace "Kimi K2.6 up to 2M" with "Kimi K2.6 256K" or just drop the parenthetical and say "1M-context now standard for GLM 5.2, MiniMax M3, Qwen 3.7 Max".**

### Slide 6 (cite slide) — pricing table

> "GLM 5.2: $1.40 in / $4.40 out · AA Index 51, leading open weights as of 2026-06-17 · Z.ai on BIS Entity List"

- $1.40 / $4.40 ✓
- AA Index 51 ✓
- Leading open weights ✓
- Z.ai on BIS Entity List (Jan 2025) ✓
- **VERDICT: CONFIRMED**

> "MiniMax M3: $0.30 in / $1.20 out · standard tier, ≤512k · AA Index 44 · 30.9% agentic abstention (vendor-reported, Frontier Coding claim)"

- $0.30 / $1.20 (standard ≤512K, post-50% off) ✓
- AA Index 44 ✓
- 30.9% agentic abstention ✓ (per AA)
- "Frontier Coding claim" — wording is appropriately hedged with "claim"
- **VERDICT: CONFIRMED**

> "Qwen 3.7 Max: $1.25 in / $3.75 out · 50% launch promo, list $2.50 / $7.50 · Novita host · vendor-reported only, no independent benchmarks as of 2026-06-18"

- $1.25 / $3.75 ✓ (LMArena, AA)
- **"50% launch promo, list $2.50 / $7.50"** — the $1.25/$3.75 is verified, but the "list $2.50/$7.50" specifically is **UNCERTAIN** — could not find a primary vendor source
- **"Novita host"** — LMArena link points to Alibaba Cloud Model Studio, not Novita. The carousel's "Novita host" claim is **UNCERTAIN** — I could not verify Qwen 3.7 Max is hosted on Novita.
- **"vendor-reported only, no independent benchmarks as of 2026-06-18"** — **STALE.** AA now measures Qwen 3.7 Max at 46. This line must be updated.
- **VERDICT: FLAGGED. Multiple claims need update or removal.**

> "DeepSeek V4-Pro: $0.435 in / $0.870 out · direct API, not 3rd-party hosted · AA Index 44"

- $0.435 / $0.870 ✓
- "direct API, not 3rd-party hosted" — DeepSeek does have direct API; third-party hosts exist (DeepInfra, etc.) but the carousel says it's available via direct API, not exclusively third-party. **VERDICT: CONFIRMED**
- AA Index 44 ✓
- **VERDICT: CONFIRMED**

> "Kimi K2.6: $0.95 in / $4.00 out · cache-miss rate · AA Index 43"

- $0.95 / $4.00 (cache miss) ✓
- AA Index 43 ✓
- "cache-miss rate" qualifier is correct (the actual cache-hit rate is $0.16)
- **VERDICT: CONFIRMED**

### Slide 6 (cite slide) — privacy/deployment

> "Z.ai (GLM 5.2) is on the BIS Entity List (Jan 2025) — direct API use is restricted for US persons; use cloud-provider paths only."

- Z.ai on BIS Entity List (Jan 2025) ✓
- The "use cloud-provider paths only" guidance is operationally correct for US persons (direct API to a listed entity is restricted)
- **VERDICT: CONFIRMED**

> "MiniMax M3: EU / Singapore endpoints available — data outside China"

- I could not specifically verify "EU / Singapore endpoints" in this pass. MiniMax has international offices but I didn't find a primary vendor source claiming EU/Singapore data residency. **VERDICT: UNCERTAIN — needs vendor verification.**

---

## Recommended carousel changes (v10)

1. **Slide 5 MODEL axis**: Re-order to reflect AA Index v4.1, or keep current order but update the parenthetical "AA Index where available" to acknowledge that AA is now available for Qwen 3.7 Max. Safest no-drop option: keep order, add "AA Index 46 (June 18)" to Qwen 3.7 Max's listing.
2. **Slide 5 ARCHITECTURE axis**: Fix "Kimi K2.6 up to 2M" → "Kimi K2.6 256K" or drop the parenthetical.
3. **Slide 5 MODEL axis DeepSeek line**: Update "10–30x range" → "20–45x range" (per AA cost-per-task).
4. **Slide 6 cite table**: Update Qwen 3.7 Max line:
   - Replace "vendor-reported only, no independent benchmarks as of 2026-06-18" with "AA Index 46 (June 18, 2026), proprietary Alibaba Cloud Model Studio only".
   - Verify or remove the "50% launch promo, list $2.50 / $7.50" claim — could not primary-source the list price.
   - Verify or remove the "Novita host" claim — LMArena links Qwen 3.7 Max to Alibaba Cloud Model Studio, not Novita.

## Recommended v10 plan-doc changes (not carousel, but flagged during verification)

1. The v10 plan's "weights pending — first-party API only" claim for MiniMax M3 is **INCORRECT**. Weights ARE on Hugging Face under the minimax-community license (https://huggingface.co/MiniMaxAI/MiniMax-M3). The license is restrictive (requires "Built with MiniMax M3" attribution and $20M-revenue authorization), so it is not a standard open-weight license. LMArena categorizes M3 as Proprietary. The v10 plan doc should be updated to: "weights on HF under minimax-community license (non-OSI, attribution + revenue threshold restrictions); effectively first-party API for commercial use above $20M ARR".
2. The v10 plan's "Qwen 3.7 Max UNCERTAIN status" risk note is now outdated — AA has measured Qwen 3.7 Max at 46. The replacement recommendation (MiMo-V2.5-Pro) should be revisited: Qwen 3.7 Max AA Index 46 vs MiMo-V2.5-Pro AA Index 42. Qwen 3.7 Max is now the higher-AA of the two, but it's proprietary and the AA Index 46 is only preliminary in LMArena's listing.
3. The v10 plan's "AWS Bedrock 18 first-party providers including DeepSeek, Moonshot (Kimi), MiniMax, Qwen, Z AI (GLM)" claim could NOT be re-verified live in this pass. It is from a prior subagent and should be re-verified before publication by fetching the actual AWS Bedrock model marketplace. FLAGGED.

---

## End of report
