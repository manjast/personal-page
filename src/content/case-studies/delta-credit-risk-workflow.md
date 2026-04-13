---
title: "LLM-assisted credit-risk workflow"
summary: "A Delta Holding workflow redesign that used LLM assistance to reduce analysis time by roughly 75% while staying grounded in an existing analyst process."
client: "Delta Holding"
clientContext: "Enterprise finance and credit workflow context inside a diversified holding company."
outcome: "~75% faster analysis, with 4.4 out of 5 analyst-rated quality and over 90% recommendation acceptance."
order: 1
featured: true
services:
  - Build
  - Productionize
technologies:
  - Python
  - LLM APIs
  - Workflow design
  - Internal data context
---

## Context

Delta Holding had credit analysis work that was valuable but time-intensive. The opportunity was not to replace analysts with a generic chatbot. It was to make the existing process faster and more usable without removing the need for judgment.

## Problem

The core challenge was operational, not cosmetic: analysts still needed useful summaries and recommendations, but the workflow had enough repetition that it was a poor use of expert time. Any LLM-assisted path also had to fit the existing decision process instead of behaving like a disconnected demo.

## What I built

I helped shape and deliver an LLM-assisted workflow that produced summaries and limit recommendations across business lines. The point was not only text generation. The point was reducing analyst effort in a way that still fit a real credit workflow.

## Production-minded choices

- The workflow was designed around an existing analyst process instead of treating the model as a stand-alone product.
- The focus stayed on usefulness, recommendation quality, and business acceptance rather than novelty.
- The implementation had to earn trust from users, because a speed gain without trust would not hold in practice.

## Outcome

The result was a workflow that reduced analysis time by roughly **75%**, with analyst quality rated at **4.4/5** and recommendation acceptance above **90%**. That is the strongest public signal from this case study, because it ties LLM assistance not only to speed, but to trust and actual workflow adoption.

## Why this case matters

This case matters because it shows how I think about internal workflows: identify a high-friction process, design the LLM layer around real user behavior, and keep the system tied to usefulness rather than hype.
