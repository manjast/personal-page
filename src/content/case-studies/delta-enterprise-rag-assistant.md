---
title: "Self-hosted internal knowledge assistant"
summary: "A self-hosted internal knowledge assistant built in-house at Delta Holding, with Azure AD-scoped access, operator/admin surfaces, feedback loops, and usage and cost observability built in from the first version."
organization: "Delta Holding"
workContext: "Internal enterprise knowledge-access system serving multiple business units, with requirements around access control, quality governance, and operational visibility."
outcome: "Deployed across roughly 1,500 eligible users, with 300+ actual users and 85%+ positive explicit feedback on thumbs-up/down responses."
signalLabel: "Adoption and feedback signal"
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
ogImage: "/og-rag-assistant.png"
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

That was the real bar here. The system needed to work as an employee-facing
assistant without becoming opaque to the people who would have to manage
content, permissions, quality issues, and operating cost once it was live.

## What I built

I implemented a self-hosted internal knowledge assistant built for real
internal use, using a Dockerized Flask/PostgreSQL stack, pgvector-based
retrieval, LangChain-assisted document ingestion, and Azure AD SSO.

The practical result was a governed internal assistant that employees could use
against approved knowledge while operators could review feedback, knowledge
gaps, usage, cost, and system health after launch.

The public-safe adoption and feedback signal is summarized below.

The visible layer was chat and retrieval. The more important part was the
operator/admin layer around it, including:

- resource and knowledge-base management for the underlying document set
- user and role controls with company- and department-aware access behavior
- feedback and quality loops, including answer reactions, negative-feedback
  signals, knowledge-gap review, and response attribution
- usage analytics and cost visibility for post-launch monitoring
- structured logging, load testing, health checks, and admin views for ongoing
  operation

The point was not to collect infrastructure labels. It was to support a system
that could be operated, reviewed, and improved after launch.

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

## What made it more than chat over documents?

The important layer was not the chat interface. It was the operating model
around it: identity, scoped access, content ownership, feedback review, usage
visibility, cost monitoring, and health checks.

Those choices made the assistant something the organization could operate,
not just something employees could try.

## Delivery context

### My role

I implemented the assistant and the operator-facing surfaces around retrieval,
access, quality signals, and operational visibility needed for real internal
use.

This work was done in-house at Delta Holding, where I progressed from AI
Specialist to AI Innovation Lead, led a small AI team, and stayed hands-on in
the system design and implementation work.

### Team shape

The work connected internal knowledge-access needs with the operational
expectations of the people who would have to run, review, and support the
system after launch.

### Constraints

The architecture had to respect self-hosting, enterprise identity and access
expectations, org-aware access boundaries, and the need for post-launch
visibility from the first version onward.

## Why self-hosted mattered

Self-hosting was part of the product posture. In this kind of environment,
identity, access boundaries, operator controls, usage and cost visibility, and
operational ownership all sit close to the delivery choice. The system was
shaped to live inside those constraints rather than bypass them for demo
convenience.

## Operational choices

- Retrieval had to stay useful inside access boundaries instead of behaving
  like a generic search layer.
- The operator layer had to exist from the first version instead of being
  retrofitted later.
- Feedback loops had to surface answer-quality issues, knowledge gaps, and
  response attribution after launch.
- Usage and cost observability had to make real adoption visible instead of
  leaving the system opaque once deployed.
- Operational readiness had to include health checks, logging, and deployment
  visibility, not just an app that worked in development.
- The build had to be maintainable by a real organization once the first
  version existed.

## Adoption signal

At the public-safe level, the system was deployed across roughly 1,500 eligible
users, saw 300+ actual users, and explicit thumbs-up/down feedback was more
than 85% positive.

That matters because it shows the assistant was used by a meaningful share of
the eligible audience, not just shown in a demo. The positive feedback rate
suggests the retrieval and access choices were usually good enough for real
workflows, and the feedback stream also produced useful follow-on feature ideas.
Workflow-time impact was not measured at v1; the public-safe measurement scope
was adoption and explicit feedback after first deployment.

## Why this case matters

This case matters because it shows internal AI product work beyond the
prototype layer: employee-facing use, admin/operations surfaces, org-aware
access, and a deployment posture designed to stay workable after the first
demo.
