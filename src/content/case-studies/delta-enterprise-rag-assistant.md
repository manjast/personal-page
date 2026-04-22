---
title: "Self-hosted internal knowledge assistant"
summary: "A self-hosted internal assistant for Delta Holding built as an enterprise-ready internal product with operator controls, org-aware access, and post-launch visibility."
client: "Delta Holding"
clientContext: "Internal enterprise knowledge-access system serving multiple business units, with requirements around access control, quality governance, and operational visibility."
outcome: "A self-hosted internal assistant with operator controls, org-aware access, feedback-driven quality loops, and usage/cost observability for real internal use."
signalLabel: "Delivered system"
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
internal use, using a Dockerized Flask/PostgreSQL stack, pgvector-based
retrieval, LangChain-assisted document ingestion, and Azure AD SSO.

The visible layer was chat and retrieval. The more important part was the
operator layer around it, including:

- resource and knowledge-base management for the underlying document set
- user and role controls with company- and department-aware access behavior
- feedback and quality loops, including answer reactions, negative-feedback
  signals, knowledge-gap review, and response attribution
- usage analytics and cost visibility for post-launch monitoring
- structured logging, health checks, and admin views for ongoing operation

The point of the architecture was not to collect infrastructure labels. It was
to support a system that could be operated, reviewed, and improved after
launch.

At a public-safe level, the operating model looked roughly like this:

<figure class="panel panel-light technical-grid" style="margin-top: 1.5rem; padding: 1rem;">
  <div class="panel" style="margin-bottom: 0.9rem; border: 1px solid var(--rule); background: rgba(255, 252, 247, 0.72); border-radius: 1rem; padding: 0.8rem 0.95rem;">
    <p class="metric-label" style="margin: 0;">Operating model</p>
    <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
      Employee-facing use and operator review were designed together so the system could stay useful after launch.
    </p>
  </div>
  <div style="display: grid; gap: 0.9rem;">
    <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.82); border-radius: 1rem; padding: 0.85rem 0.95rem;">
      <p class="metric-label" style="margin: 0;">Employee-facing layer</p>
      <div style="display: grid; gap: 0.75rem; grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); margin-top: 0.75rem;">
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">01 / access</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Sign-in and scoped access</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Azure AD sign-in and access bounded to approved internal knowledge.
          </p>
        </div>
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">02 / ask</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Ask over internal knowledge</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Questions handled through retrieval shaped for internal use rather than open-ended chat.
          </p>
        </div>
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">03 / answer</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Grounded answer + feedback</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Retrieval-backed responses plus user feedback signals that could flow into later review.
          </p>
        </div>
      </div>
    </div>
    <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.82); border-radius: 1rem; padding: 0.85rem 0.95rem;">
      <p class="metric-label" style="margin: 0;">Operator / governance layer</p>
      <div style="display: grid; gap: 0.75rem; grid-template-columns: repeat(auto-fit, minmax(165px, 1fr)); margin-top: 0.75rem;">
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">04 / content</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Resources and ingestion</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Knowledge-base management and document ingestion for the underlying content set.
          </p>
        </div>
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">05 / quality</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Feedback, gaps, and attribution</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Operator review across feedback signals, knowledge gaps, and response attribution.
          </p>
        </div>
        <div class="panel" style="border: 1px solid var(--rule); background: rgba(255, 255, 255, 0.9); border-radius: 1rem; padding: 0.95rem;">
          <p class="metric-label" style="margin: 0;">06 / observe</p>
          <p style="margin: 0.45rem 0 0; color: var(--ink); font-weight: 600;">Usage, costs, and health</p>
          <p style="margin: 0.45rem 0 0; color: var(--muted); font-size: 0.92rem; line-height: 1.6;">
            Admin visibility into adoption, spend, and system health after launch.
          </p>
        </div>
      </div>
    </div>
  </div>
  <figcaption style="margin-top: 0.85rem; color: var(--muted); font-size: 0.88rem; line-height: 1.45;">
    Operating-model view — employee-facing use above, operator review below. Exact org mappings, prompt configuration, endpoints, and deployment details are intentionally omitted.
  </figcaption>
</figure>

## Delivery context

### My role

I implemented the assistant and the operator-facing surfaces around retrieval,
access, quality signals, and operational visibility needed for real internal
use.

### Team shape

The work connected internal knowledge-access needs with the operational
expectations of the people who would have to run, review, and support the
system after launch.

### Constraints

The architecture had to respect self-hosting, enterprise identity and access
expectations, org-aware access boundaries, and the need for post-launch
visibility from the first version onward.

## Why self-hosted mattered

Self-hosting was part of the product posture. In enterprise settings,
architecture choices are tightly connected to trust, governance, and
operational fit. This system was shaped to live inside those constraints
rather than bypass them for demo convenience.

## Operational choices

- Retrieval had to stay useful inside access boundaries instead of behaving
  like a generic search layer.
- The operator layer had to exist from the first version instead of being
  retrofitted later.
- Feedback loops had to surface answer-quality issues, knowledge gaps, and
  response attribution after launch.
- Usage and cost observability had to make real adoption visible instead of
  leaving the system opaque once deployed.
- The build had to be maintainable by a real organization once the first
  version existed.

## Why this case matters

This case matters because it shows internal AI product work beyond the
prototype layer: self-hosted, operator-managed, org-aware, and designed to
remain usable and governable after the first demo.
