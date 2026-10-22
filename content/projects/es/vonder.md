---
locale: es
title: Vonder
slug: vonder
summary: SaaS de gestión operativa y punto de venta para negocios
role: Desarrollador full-stack (producto propio)
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

Producto propio que diseñé y desarrollé de punta a punta: control de stock y ventas para kioscos y comercios que hoy trabajan con papel y lápiz. El foco es doble: que el dueño sepa qué tiene en stock y que pueda frenar los faltantes.

## Qué hace

- **Punto de venta** — Venta por código de barras o búsqueda, productos por unidad o por peso, medios de pago y ticket no fiscal para impresora térmica.
- **Stock y compras** — Compras a proveedores que actualizan stock y costo, historial de movimientos y avisos de vencimiento.
- **Caja y turnos** — Apertura, cierre y arqueo de caja; cada empleado opera con su PIN y cada venta, movimiento y diferencia de caja queda asociada a su turno.
- **Panel del dueño** — Dashboard de ventas, productos más vendidos, empleados y configuración del negocio.

## Lo técnico

- **UI intuitiva y moderna** — Le puse mucho foco a que la use cualquiera sin capacitación: shadcn/ui y Radix sobre design tokens propios, modo claro y oscuro, y flujos cortos pensados para el mostrador.
- **Arquitectura** — Backend en NestJS organizado en servicios (SOLID, responsabilidad única) con Prisma sobre PostgreSQL (Neon). Frontend en Next.js con TanStack Query para el estado del servidor.
- **Multi-tenant** — Una sola instancia sirve a todos los negocios. El aislamiento por tenant se aplica a nivel de ORM con una Prisma Client Extension, y lo probé intentando leer y modificar datos de otro negocio.
- **Prácticas de producción** — CI con GitHub Actions, un chequeo automático que frena migraciones destructivas para que el rollback sea seguro, y backups de la base.
- **Especificar antes de codear** — La lógica crítica (editar compras ya recibidas, referencias entre negocios) se especifica con OpenSpec antes de implementarla.
- **Testing y flujo de trabajo** — Tests con Jest y Vitest como red de seguridad. Trabajo con agentes de código a partir de especificaciones previas, con revisión de cada cambio antes de mergearlo.
