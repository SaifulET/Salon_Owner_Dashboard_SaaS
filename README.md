# 🌟 MatDash — Salon Owner SaaS Super-Admin Dashboard

A modern, high-performance, multi-tenant SaaS management platform tailored for salon chains, salon owners, and platform administrators. Built with **Next.js 16 (Turbopack)**, **React 19**, **TypeScript**, and styled with precision using **Tailwind CSS** and **Lucide React**.

---

## 🚀 Key Modules & Feature Highlights

### 1. 📊 Executive Dashboard
- **Platform Analytics**: Real-time overview of active salon tenants, Monthly Recurring Revenue (MRR), Annual Recurring Revenue (ARR), churn metrics, and revenue trajectories.
- **Quick Metrics**: High-level counts for active salons, pending trials, and support alerts.

### 2. 💇 Salon Directory & Tenant Lifecycle (`src/components/salons/`)
- **Directory & Filters**: Filter salons by geographic region, city, subscription plan (Basic, Premium, Enterprise), and status (Active, Trial, Suspended).
- **Onboarding Wizard**: 5-step interactive wizard for manual salon registration with location mapping, manager assignments, and custom package selection.
- **Tenant Management**: Salon detail view with operational statistics, revenue charts, staff directory, email history, password resets, and suspension controls.

### 3. 👥 Staff & Workforce Management (`src/components/staff/`)
- **Staff Directory**: List of salon operators and specialists with status indicators, roles, and quick search.
- **Detailed Employee Profiles**:
  - Daily production statistics & appointment history.
  - Remuneration, commissions, and contract details.
  - Attendance stamp records and historical payslips.
  - Multi-language support and specialized certification tracking.

### 4. 📈 Leads & Sales Pipeline (`src/components/leads-pipeline/`)
- **Actual Pipeline (Kanban Board)**: Drag-and-drop sales pipeline with stage cards, deal values, priority badges, and customizable column visibility.
- **Leads da Gestire (Triage)**: Incoming lead triage queue with bulk actions, quick agent assignment, and custom follow-up tasks.
- **Stage Automations & Settings**: Customizable pipeline stages with automated email triggers, delay rules, and notification preferences.
- **Data Analysis & Funnel**: Conversion tracking by acquisition source (Organic, Website Chat, Social, Referrals).

### 5. 💳 Billing, MRR & Subscription Analytics
- **Billing History** (`src/components/billing-history/`): Tenant invoice log with payment status indicators, tax details, and PDF export.
- **Subscriber Analytics** (`src/components/subscribers/`): Active, new, and churned subscriber curves.
- **Trials Management** (`src/components/trials/`): Conversion funnels from free trial to paying tenant.
- **Financial Metrics**: Dedicated analytics for MRR, ARR, and Average Revenue Per Account (ARPA).

### 6. 🎧 Customer Support & Communications (`src/components/support/`)
- **Ticket Desk**: Multi-tier support ticketing with urgency badges, category classification, agent assignment, internal team notes, and email communication history.
- **Broadcast Announcements**: 2-step composer for system-wide announcements, scheduled maintenance alerts, and new feature broadcasts.
- **Audience Segmentation**: Custom audience builder based on employee count, plan tier, geographic province, and customer volume.

### 7. ⚡ Automations & Message Logs (`src/components/automations-mail/`)
- **Unified Log**: Comprehensive log of automated and manual communications across Email, SMS, and WhatsApp.
- **Advanced Filtering**: Filter by recipient role, source (Auto/Manual), status (Opened, Clicked, Sent), and date range.
- **Quick Compose**: In-app email dispatch modal for direct tenant communications.

### 8. ⚙️ System Settings (`src/components/settings/`)
- **Admin Configuration**: Profile settings, Two-Factor Authentication (2FA), billing plans, database backups, and notification preferences.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (Turbopack, App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) (`lucide-react`) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS Tokens |
| **Maps** | [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/) |
| **Rich Text Editor** | [Quill](https://quilljs.com/) |

---

## 📁 Modular Architecture & Structure

All modules follow a strict single-responsibility component design where **every file contains $\le 120$ lines of code** for optimal readability, testability, and maintainability:

```text
src/
├── app/                        # Next.js App Router root & page routers
│   ├── page.tsx                # Main entry point & layout shell
│   ├── AppViewRouter.tsx       # Primary navigation router
│   └── SalonSubViewRouter.tsx  # Salon sub-navigation router
├── components/
│   ├── analytics/              # Platform & marketing performance charts
│   ├── arpa/                   # Average Revenue Per Account metrics
│   ├── automations-mail/       # Messaging logs & email dispatch
│   ├── billing/                # Billing overviews & invoices
│   ├── billing-history/        # Detailed invoice ledger & receipts
│   ├── leads-pipeline/         # Kanban pipeline, triage & automation settings
│   ├── mrr/                    # Monthly Recurring Revenue tracking
│   ├── salons/                 # Salon list, detail views & onboarding wizard
│   ├── settings/               # System settings, security (2FA) & backups
│   ├── staff/                  # Staff directory & employee profile details
│   ├── subscribers/            # Subscription growth & churn movements
│   ├── support/                # Tickets, announcements & audience builder
│   └── trials/                 # Free trial conversions & analytics
└── types/                      # Shared global TypeScript definitions
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: v18.18.0 or higher
- **npm** or **yarn** / **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaifulET/Salon_Owner_Dashboard_SaaS.git
   cd Salon_Owner_Dashboard_SaaS
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open the browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔨 Build & Production

To create an optimized production build:

```bash
npm run build
```

To run the production bundle locally:

```bash
npm run start
```

---

## 📄 License
This project is proprietary software developed for salon management and multi-tenant SaaS operations. All rights reserved.
