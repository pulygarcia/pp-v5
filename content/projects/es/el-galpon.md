---
locale: es
title: El Galpón
slug: el-galpon
summary: Sistema de reservas fullstack para club de pádel
role: Desarrollador full-stack
tags:
  - Nest.js
  - TypeORM
  - PostgreSQL
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Zod
  - Email
cover: /galpon-cap.PNG
gallery:
  - /galpon-cap.PNG
  - /caja-galpon.PNG
  - /historial-galpon.PNG
  - /precios-galpon.PNG
clientRepo: https://github.com/pulygarcia/Courts-reservations-client
apiRepo: https://github.com/pulygarcia/Courts-reservations
order: 3
---

Aplicación web fullstack construida para un club de pádel para gestionar reservas de canchas y llevar el control de ventas y precios de productos.

## Funcionalidades

- **Autenticación y roles** — Login y registro con acceso basado en roles (Usuario, Admin).
- **Reservas de canchas** — Los usuarios eligen día, hora y cancha para reservar turnos simples y fijos.
- **Prevención de conflictos** — Bloquea automáticamente reservas superpuestas o inválidas. Se puede reservar hasta una semana de anticipación; no se permiten fechas posteriores.
- **Notificaciones por email** — Envía confirmaciones de reserva y avisos de cancelación.
- **Acciones de administrador** — Gestión de stock, precios y listado de productos.
- **Caja / Ventas** — Los empleados registran cada venta en su cuenta para mantener un registro financiero transparente.
- **Historial de ventas y reservas** — Cada transacción queda registrada según el empleado o dueño activo; sin ediciones para evitar discrepancias.
- **UI responsive** — Funciona sin problemas en escritorio y dispositivos móviles.
