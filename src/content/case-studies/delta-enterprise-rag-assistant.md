---
title: "Self-hosted internal knowledge assistant"
summary: "A self-hosted internal assistant for Delta Holding built as an enterprise-ready internal product with operator controls, org-aware access, and post-launch visibility."
client: "Delta Holding"
clientContext: "Internal enterprise knowledge-access system serving multiple business units, with requirements around access control, quality governance, and operational visibility."
outcome: "A self-hosted internal assistant with operator controls, org-aware access, feedback-driven quality loops, and usage/cost observability for real internal use."
order: 2
featured: true
services:
  - Build
  - Hardening
technologies:
  - Flask
  - Docker
  - PostgreSQL
  - pgvector
  - LangChain
  - Azure AD SSO
ogImage: "/og-default.png"
signalLabel: "Delivered system"
---

## Context

At Delta Holding, one of the high-value internal AI opportunities was an
assistant that could make internal knowledge more usable without ignoring the
operational realities of a large business environment.

## Problem

Internal assistant work becomes serious once the system has to be governable
after launch. Hosting, identity, access boundaries, retrieval quality,
operator controls, and post-launch visibility all matter. A basic
retrieval-backed chatbot is easy to demo. A useful internal system is harder
to run responsibly.

## What I built

I implemented a self-hosted internal knowledge assistant built for real
internal use, not just first-pass retrieval.

The system included not only chat and retrieval, but also the operator layer
needed to run it in practice, including:

- user and operator controls
- org-aware access behavior
- feedback review and answer-quality visibility
- structured logging and health visibility
- usage analytics and post-launch observability

The point of the architecture was not to collect infrastructure labels. It was
to support a system that could be operated, reviewed, and improved after
launch.

<figure class="my-8 overflow-hidden rounded-[1.2rem] border border-[color:var(--rule)] bg-[color:var(--surface-strong)]">
  <div class="grid gap-px bg-[color:var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Access layer</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Enterprise identity and org-aware access behavior shaped who could use what.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Assistant surface</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Internal users interacted through a self-hosted assistant rather than a public SaaS interface.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Retrieval core</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Grounded retrieval, indexing, and response generation supported internal knowledge access.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Operator controls</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">The system included controls for review, configuration, and operational oversight.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Feedback loop</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Answer-quality signals and user feedback created a path for iterative improvement.</p>
    </div>
    <div class="bg-[color:var(--surface-strong)] p-4">
      <p class="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-soft)]">Observability</p>
      <p class="mt-2 text-sm leading-7 text-[color:var(--ink-soft)]">Logging, health visibility, and usage/cost signals made post-launch behavior legible.</p>
    </div>
  </div>
  <figcaption class="border-t border-[color:var(--rule)] px-4 py-3 text-xs leading-6 text-[color:var(--muted)]">
    Public-safe operating-model view of the system after launch: enough to clarify how it was run, without exposing sensitive internal details.
  </figcaption>
</figure>

## Delivery context

### My role

I implemented the assistant and the operator-facing layer around retrieval,
access, logging, and feedback signals needed for real internal use.

### Team shape

The work connected business-side internal knowledge needs with the operational
expectations of the people who would have to run, review, and support the
system after launch.

### Constraints

The architecture had to respect self-hosting, enterprise identity and access
expectations, and the need for post-launch visibility from the first version
onward.

## Why self-hosted mattered

Self-hosting was part of the product posture. In enterprise settings,
architecture choices are tightly connected to trust, governance, and
operational fit. This system was shaped to live inside those constraints
rather than bypass them for demo convenience.

## Operational choices

- Retrieval had to be grounded enough to support real internal use.
- Identity and access had to fit enterprise expectations.
- The operator layer had to exist from the start instead of being retrofitted
  later.
- Feedback loops and usage visibility made post-launch behavior observable
  instead of guesswork.
- The build had to be maintainable by a real organization once the first
  version existed.

## Why this case matters

This case matters because it shows internal AI product work beyond the
prototype layer: self-hosted, operator-managed, org-aware, and built to remain
usable after the first demo.
