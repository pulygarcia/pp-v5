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
  - Cypress
  - Tailwind CSS
  - shadcn/ui
cover: /creditu-dashboard.PNG
gallery:
  - /creditu-dashboard.PNG
order: 0
draft: false
---

SaaS platform for mortgage credit simulation and management, operating in Chile, Brazil and Peru.

## What I did

- **Production bug fixing** — Resolved real production bugs from the first weeks, on code with active users.
- **Multi-country expansion** — Adapted the Chilean platform to support Brazilian business rules: different origination flows, distinct stages up to credit signing, and country-specific legal validations. Handled via an `x-country` header on every backend request, with simulation logic, validations and stages driven by the issuing country.
- **Credit simulation microservice** — Contributed to the service that calculates installments, terms and conditions according to each market's rules.
- **Frontend contributions** — UI improvements and bug fixes in Vue + TypeScript, back-office dashboards and internal panels.
- **Testing** — Frontend and backend test coverage maintained at a minimum of 85%, using Jest and Cypress.
- **Architecture** — Worked within a service-oriented architecture applying SOLID principles across a large-scale product.
