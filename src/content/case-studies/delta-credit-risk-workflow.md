---
title: "Credit-risk decision-support workflow"
summary: "An analyst-assistive credit-risk workflow for Delta Holding that combined public-company risk signals with internal operating context to produce structured, analyst-ready recommendations."
client: "Delta Holding"
clientContext: "B2B credit-risk analysis and limit-setting workflow inside a multi-entity enterprise finance function."
outcome: "Observed workflow outcomes included ~75% faster analysis, 4.4/5 analyst-rated quality, and 90%+ recommendation acceptance."
order: 1
featured: true
services:
  - Build
  - Hardening
technologies:
  - Python
  - LLM APIs
  - Workflow design
  - Structured decision support
ogImage: "/og-credit-risk.png"
---

## Context

Delta Holding had credit analysis work that was valuable but time-intensive.
Analysts were working across two layers of information: public-company risk
signals and internal operating context like cooperation history, payment
behavior, and exposure across business entities.

The opportunity was not to replace analysts with a generic chatbot. It was to
make the existing process faster and more usable by combining both signal
layers into a structured workflow without removing the need for judgment.

## Problem

The core challenge was operational, not cosmetic: analysts still needed useful
assessments and limit recommendations, but assembling the relevant context
from multiple sources was a poor use of expert time. Any AI-assisted path also
had to fit the existing decision process and produce outputs analysts would
actually trust and use, not disconnected summaries with no workflow home.

## What I built

I helped shape and deliver a credit-risk decision-support workflow that
combined public-company risk signals with internal operating and payment
context to produce structured, analyst-ready recommendations across business
lines.

The output was not just a free-form summary. It was closer to a constrained
recommendation layer that could support outcomes like approve, decline,
reduced limit, conditional approval, or further review.

The system was designed to support analyst judgment, not replace it. Trust
came from workflow fit, constrained output shapes, and the reviewability of
every recommendation.

<figure class="my-8 overflow-hidden rounded-[1.2rem] border border-[color:var(--rule)] bg-[color:var(--surface-strong)]">
  <div class="grid gap-px bg-[color:var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Input layer</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Public-company risk signals and market-facing context.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Internal context</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Operating history, payment behavior, and exposure context across business entities.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Recommendation layer</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Structured analyst-ready outputs such as approve, decline, reduced limit, conditional approval, or further review.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Final ownership</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Analyst review remained the decision boundary; the workflow accelerated judgment instead of replacing it.</p>
    </div>
  </div>
  <figcaption class="border-t border-[color:var(--rule)] px-4 py-3 text-xs leading-6 text-[color:var(--muted)]">
    Workflow-first capability view — not internal architecture. Exact thresholds, source mappings, and scoring logic are intentionally omitted.
  </figcaption>
</figure>

## Delivery context

### My role

I worked across workflow shaping, recommendation design, and implementation
decisions that made the first version usable inside the existing analyst
process.

### Team shape

The work sat between domain users who owned the credit decision flow and the
technical path required to turn scattered inputs into a structured
recommendation workflow.

### Constraints

The system had to fit an existing analyst-owned process, combine external and
internal context safely, and keep every recommendation reviewable instead of
pushing black-box automation.

Platform framing: the reusable layer was the workflow normalization and recommendation scaffolding around the analyst process, not a claim of shared scoring logic across every tenant or buyer context.

## Production-minded choices

- The workflow was designed around an existing analyst process instead of
  treating the model as a stand-alone product.
- The focus stayed on usefulness, recommendation quality, and business
  acceptance rather than novelty.
- The implementation had to earn trust from users, because a speed gain
  without trust would not hold in practice.
- The work evolved from tenant-specific proofs of concept toward a shared
  internal platform shape, with reusable architecture and governance
  considerations built in from early stages.

## Outcome

The strongest public outcome evidence from this case was workflow-level:
analysis time dropped by roughly **75%**, analyst-rated quality reached
**4.4/5**, and recommendation acceptance was above **90%**.

Those signals matter because they point not only to speed, but to trust,
consistency, and real workflow adoption.

## Why this case matters

This case matters because it shows how I approach internal AI systems in
higher-trust workflows: make the data blend useful, keep outputs structured
and reviewable, and design the system so it supports real decisions instead of
sounding impressive in a demo.
