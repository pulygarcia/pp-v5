---
locale: en
title: Fintech mortgage credit SaaS
slug: creditu
summary: SaaS platform for mortgage credit management in Chile, Brazil and Peru
role: Full-stack developer
tags:
  - Nest.js
  - Vue.js
  - TypeScript
  - PostgreSQL
  - TypeORM
  - Jest
  - Tailwind CSS
  - shadcn/ui
cover: /creditu-dashboard.PNG
gallery:
  - /creditu-dashboard.PNG
order: 0
draft: false
---

SaaS platform for mortgage credit simulation and management, operating in Chile, Brazil and Peru. I worked as a full-stack developer on the product team from June 2025 to May 2026, on production code with real users.

## What I did

- **Brazil frontend from scratch** — Built, together with the team, the standalone frontend for the Brazilian SaaS, including administration, simulation and mortgage pre-evaluation features, plus new business flows and validations.
- **Production bug fixing** — Resolved real production bugs from the first weeks, on code with active users.
- **Multi-country expansion** — Adapted the Chilean platform to support Brazilian business rules: different origination flows, distinct stages up to credit signing, and country-specific legal validations. Handled via an `x-country` header on every backend request, with simulation logic, validations and stages driven by the issuing country.
- **Credit simulation microservice** — Contributed to the service that calculates installments, terms and conditions according to each market's rules.
- **Frontend contributions** — UI improvements and bug fixes in Vue + TypeScript, back-office dashboards and internal panels.
- **Testing** — Frontend and backend test coverage maintained at a minimum of 85%, using Jest and Vitest.
- **Architecture** — Worked within a service-oriented architecture applying SOLID principles across a large-scale product. Refactored NestJS components by moving business logic out of controllers into dedicated services.
- **Production releases** — Took part in shipping new features to production: release preparation, post-deploy validation and follow-up with real users.
- **Working with the business** — Worked directly with real-estate executives and business users: training sessions, gathering operational needs and proposing improvements to their daily processes.
