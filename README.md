# Salon Owner Dashboard SaaS

## Broad Project Description

This project is a frontend-heavy SaaS dashboard built with `Next.js 16`, `React 19`, `TypeScript`, and `Tailwind CSS 4`. It represents an internal admin and operations platform for managing salons, subscriptions, staff, billing, analytics, support, automations, and regional business performance from a single interface.

The codebase is structured around a single client-driven application entry in `src/app/page.tsx`, where the active screen is controlled through React state instead of file-based multi-route pages. A shared `Layout` component combines a top header, responsive sidebar navigation, and a large content workspace. The sidebar supports both primary navigation and nested sub-navigation for analytics and salon-specific detail views.

The project includes around `43` source components and `48` public assets, which together form a fairly complete dashboard experience. Key areas include:

- Dashboard overview with KPI cards, revenue trend chart, recent activity, alerts, and ticket previews
- Salon management with list views and detailed salon profiles
- Staff and permissions workflows for salon-level user administration
- Billing and revenue analytics pages
- Deep analytics modules for `MRR`, `ARR`, `ASP`, `LTV`, `cashflow`, `ARPA`, `churn`, `cohorts`, subscribers, leads, and trials
- Support center with tickets, announcements, audiences, notes, and communication flows
- Automations and mail center for notification history, filters, message details, and manual send actions
- Regional performance map using `Leaflet` and `react-leaflet` with a client-only dynamic import
- Rich visual UI patterns such as export actions, filters, tabs, modals, drawers, toasts, and interactive charts

From the implementation, this project is best described as a polished SaaS admin dashboard prototype or frontend product shell. It is strong in UI coverage, feature breadth, and dashboard behavior. Most data is currently mocked in component state, so the repo appears focused on frontend delivery, stakeholder demos, design implementation, and workflow simulation rather than a live connected backend.



## Technical Notes

- Framework: `Next.js 16`
- UI stack: `React 19`, `TypeScript`, `Tailwind CSS 4`
- Maps: `Leaflet`, `react-leaflet`
- Fonts: `Geist`, `Geist Mono`, `Manrope`
- Rendering style: mostly client-side state-driven views
- Data layer status: mock/demo data in component state, no evident API integration in this repo
