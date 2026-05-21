# Edge Platform - Project Structure

## Overview
Edge Platform is a comprehensive job management system for Edge Exterior, built with Next.js 16, TypeScript, Tailwind CSS, and Supabase.

## Directory Structure

```
edge-platform/
├── .env.local                          ← Supabase keys (never commit this)
├── .gitignore                          
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                  ← Root layout (fonts, metadata)
│   │   ├── page.tsx                    ← Landing page with hub links
│   │   ├── globals.css                 ← Tailwind + brand CSS variables
│   │   │
│   │   ├── (admin)/                    ← Admin Hub (requires admin auth)
│   │   │   ├── layout.tsx              ← Admin layout with sidebar
│   │   │   └── dashboard/
│   │   │       └── page.tsx            ← Dashboard with stats
│   │   │
│   │   ├── (field)/                    ← Field Hub (requires field auth)
│   │   │   └── layout.tsx              ← Mobile layout with bottom nav
│   │   │
│   │   ├── (portal)/                   ← Client Portal (requires portal auth)
│   │   │   └── layout.tsx
│   │   │
│   │   └── auth/
│   │       ├── login/page.tsx          ← Shared login (role-based redirect)
│   │       └── callback/route.ts       ← Supabase auth callback
│   │
│   ├── components/
│   │   ├── ui/                         ← Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── admin/
│   │   ├── job/
│   │   ├── field/
│   │   └── portal/
│   │
│   ├── lib/
│   │   ├── supabase/
│   │   │   ├── client.ts               ← Browser Supabase client
│   │   │   ├── server.ts               ← Server Supabase client
│   │   │   └── middleware.ts           ← Auth middleware
│   │   ├── types/
│   │   │   └── database.ts             ← TypeScript types for all tables
│   │   ├── hooks/
│   │   └── utils/
│   │
│   └── middleware.ts                   ← Route protection (auth guards)
```

## Current Status

### ✅ Completed
- Next.js 16 project setup with TypeScript
- Supabase integration (@supabase/ssr, @supabase/supabase-js)
- Lucide React icons
- Tailwind CSS configuration
- Source directory structure (src/)
- UI component library (Button, Card, Badge, Input, Modal)
- Supabase client configuration (browser, server, middleware)
- Route groups for admin, field, and portal hubs
- Admin dashboard with sample data
- Admin layout with sidebar navigation
- Landing page with hub links
- Middleware for auth protection

### 🚧 To Be Implemented
- Database schema and migrations
- Authentication pages (login, signup, password reset)
- Admin Hub pages:
  - Jobs management (list, detail, pipeline)
  - CRM (leads, clients)
  - Schedule/calendar
  - Invoicing
  - Reports
  - Settings
- Field Hub pages:
  - My jobs
  - Time tracking
  - Diary/notes
  - Measurements
  - Incident reporting
- Client Portal pages:
  - Job overview
  - Documents
  - Photos
- Custom hooks for data fetching
- Utility functions
- Type definitions from database schema

## Tech Stack
- **Framework**: Next.js 16.2.6 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Icons**: Lucide React
- **Deployment**: TBD (Vercel recommended)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables in `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000)

## Next Steps

1. Set up Supabase project and database schema
2. Generate TypeScript types from database
3. Implement authentication flow
4. Build out admin hub features
5. Create field hub mobile interface
6. Develop client portal
7. Add real-time features
8. Implement file uploads
9. Set up email notifications
10. Deploy to production
