`# Silksong Completion Checklist (Next.js + Tailwind)

A fan-made checklist to track progress for Hollow Knight: Silksong items with per-item percentages. Inspired by [Hollow Knight Checklist](https://hollowknightchecklist.com/).

- Framework: Next.js (App Router) + TypeScript
- Styling: Tailwind CSS
- Persistence: Cookies (client-side)

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

3. Open http://localhost:3000.

## Features

- Categories and items loaded from `src/data/silksong.ts`
- Progress bar with total and per-category subtotals
- Cookie-based persistence of checked items
- Reset button to clear all progress

## Notes

- This is a fan project and not affiliated with Team Cherry.
- Checklist data and percentages were provided by the user request. They may not reflect official game data.
- Inspiration: https://hollowknightchecklist.com/

## Deploy

Deploy anywhere that supports Next.js (e.g., Vercel):

```bash
vercel
```
