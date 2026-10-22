---
locale: en
title: Vonder
slug: vonder
summary: Operations management and point-of-sale SaaS for businesses
role: Full-stack developer (own product)
tags:
  - Nest.js
  - Prisma
  - PostgreSQL
  - Next.js
  - TypeScript
  - TanStack Query
  - Tailwind CSS
  - shadcn/ui
  - Jest
  - Vitest
  - GitHub Actions
cover: /vonder-login.PNG
gallery:
  - /vonder-login.PNG
order: 1
---

My own product, designed and built end to end: stock and sales control for convenience stores and small retailers that still run on pen and paper. The goal is twofold: owners always know what's in stock, and they can stop inventory shrinkage.

## What it does

- **Point of sale** — Sell by barcode or search, products by unit or by weight, payment methods and non-fiscal receipts for thermal printers.
- **Stock and purchases** — Supplier purchases that update stock and cost, movement history and expiration alerts.
- **Cash register and shifts** — Opening, closing and cash counts; each employee works with their own PIN, and every sale, stock movement and cash difference is tied to their shift.
- **Owner dashboard** — Sales dashboard, top-selling products, employees and business settings.

## Under the hood

- **Intuitive, modern UI** — A big focus was making it usable by anyone without training: shadcn/ui and Radix on top of custom design tokens, light and dark mode, and short flows built for the counter.
- **Architecture** — NestJS backend organized into services (SOLID, single responsibility) with Prisma on PostgreSQL (Neon). Next.js frontend with TanStack Query for server state.
- **Multi-tenant** — A single instance serves every business. Tenant isolation is enforced at the ORM level with a Prisma Client Extension, and I tested it by trying to read and modify another business's data.
- **Production practices** — CI with GitHub Actions, an automated check that blocks destructive migrations so rollbacks stay safe, and database backups.
- **Spec before code** — Critical logic (editing already-received purchases, cross-business references) is specified with OpenSpec before it's implemented.
- **Testing and workflow** — Jest and Vitest tests as a safety net. I work with coding agents from upfront specs, reviewing every change before it gets merged.
