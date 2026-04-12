---
title: "Self-hosted internal knowledge assistant"
summary: "A self-hosted internal assistant for Delta Holding, built to support enterprise knowledge access with practical architecture choices around hosting, retrieval, and identity."
client: "Delta Holding"
clientContext: "Internal enterprise knowledge-access and assistant use cases across a large business environment."
outcome: "A production-minded, self-hosted internal assistant with Dockerized services, PostgreSQL + pgvector retrieval, LangChain ingestion, and Azure AD SSO."
order: 2
featured: true
services:
  - Build
  - Productionize
technologies:
  - Flask
  - Docker
  - PostgreSQL
  - pgvector
  - LangChain
  - Azure AD SSO
---

## Context

At Delta Holding, one of the high-value internal AI opportunities was an enterprise assistant that could work with internal knowledge in a way that fit the organization’s operational reality.

## Problem

Internal assistant work becomes more serious once questions of hosting, identity, retrieval quality, and maintainability show up. A toy chatbot is easy. A useful internal system is not. The system had to be shaped for enterprise use rather than demo convenience.

## What I built

I implemented a self-hosted internal knowledge assistant with a retrieval-backed architecture that included:

- a Dockerized Flask backend,
- PostgreSQL plus pgvector for retrieval,
- LangChain-based ingestion,
- and Azure AD SSO for identity.

The point of that stack was not to collect logos. It was to support a system shape that made sense for internal enterprise use.

## Why self-hosted mattered

Self-hosting was part of the value proposition. In internal enterprise settings, architecture choices often matter as much as model behavior. This case reflects the kind of work I want to do more of: systems where operational posture, trust, and usability are part of the implementation problem.

## Operational choices

- Retrieval needed to be grounded enough to make the assistant actually useful.
- Identity and access had to fit enterprise expectations.
- The build had to be maintainable by a real organization after the first version existed.

## Why this case matters

This case matters because it shows practical system-building ability around internal knowledge access under enterprise constraints, not only experimentation. It is directly relevant to teams that need a reliable internal assistant, document-backed workflow, or knowledge-access system that has to live inside enterprise constraints.
