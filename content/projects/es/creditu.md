---
locale: es
title: SaaS fintech de crédito hipotecario
slug: creditu
summary: Plataforma SaaS para la gestión de crédito hipotecario en Chile, Brasil y Perú
role: Desarrollador full-stack
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

Plataforma SaaS para la simulación y gestión de crédito hipotecario, operando en Chile, Brasil y Perú.

## Qué hice

- **Resolución de bugs en producción** — Resolví bugs reales en producción desde las primeras semanas, sobre código con usuarios activos.
- **Expansión multipaís** — Adapté la plataforma chilena para soportar las reglas de negocio de Brasil: distintos flujos de originación, etapas diferentes hasta la firma del crédito y validaciones legales específicas por país. Manejado mediante un header `x-country` en cada request al backend, con la lógica de simulación, validaciones y etapas determinadas por el país emisor.
- **Microservicio de simulación de créditos** — Contribuí al servicio que calcula cuotas, plazos y condiciones según las reglas de cada mercado.
- **Aportes en frontend** — Mejoras de UI y corrección de bugs en Vue + TypeScript, dashboards de back-office y paneles internos.
- **Testing** — Cobertura de tests en frontend y backend mantenida en un mínimo del 85%, usando Jest y Cypress.
- **Arquitectura** — Trabajé dentro de una arquitectura orientada a servicios aplicando principios SOLID en un producto de gran escala.
