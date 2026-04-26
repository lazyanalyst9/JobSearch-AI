# StudentApply AI

StudentApply AI is a modern, student-first job search portal built with **Next.js + Tailwind CSS + Prisma (PostgreSQL schema)**.

## Features Implemented

- Student registration/login/profile page scaffolds.
- Landing page with required headline, subheadline, and CTA buttons.
- Dashboard with application KPIs and recent activity.
- Job search page with student-specific filters and job cards.
- Job details page with Apply call-to-action and tracker behavior explanation.
- AI Resume Modifier page with ATS keyword suggestions and tailored summary/bullets.
- Application Tracker page with upload + Excel export.
- Follow-up reminders page with AI-generated follow-up message.
- Admin dashboard for managing jobs and viewing analytics stats.
- API routes for jobs, applications, tracker, resume matching, and follow-up drafting.
- Prisma schema modeling students, jobs, applications, and follow-up reminders.

## Run locally

```bash
npm install
npm run dev
```

## Core flow

Register -> upload resume -> search job -> use resume agent -> apply -> auto tracker entry -> 5 business day follow-up reminder -> AI follow-up draft.
