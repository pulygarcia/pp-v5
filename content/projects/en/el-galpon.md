---
locale: en
title: El Galpón
slug: el-galpon
summary: Fullstack reservation system for pádel club
role: Full-stack developer
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

Fullstack web application built for a padel club to manage court reservations, track sales and product prices.

## Features

- **Authentication & Roles** — Login and registration with role-based access (User, Admin).
- **Court Reservations** — Users can select day, hour, and court to book simple and fixed reservations.
- **Conflict Prevention** — Automatically blocks overlapping or invalid reservations. Users can book courts up to one week ahead — reservations for later dates are not allowed.
- **Email Notifications** — Sends booking confirmations and cancellation notices.
- **Admin actions** — Manage stock, prices, and product list.
- **Cashier / Sales** — Employees can log each sale under their account to keep transparent financial records.
- **Sales & Reservation History** — Every transaction is stored by current club employee or owner; no edits allowed to avoid discrepancies.
- **Responsive UI** — Works seamlessly on desktop and mobile devices.
