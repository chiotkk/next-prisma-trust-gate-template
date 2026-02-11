# Next + Prisma Trust-Gate Template

Baseline for agent-friendly, verifiable greenfield apps.

## New Project Checklist

### 1) Create project from template
- Click "Use this template" on GitHub
- Name your repo

### 2) Update project identity
- Update `name` in package.json
- Update README title

### 3) Configure database
Pick a free port (avoid collisions):

lsof -iTCP -sTCP:LISTEN | grep 543

Edit:
- docker-compose.yml (Postgres port)
- .env DATABASE_URL

### 4) Start services
docker compose up -d

### 5) Sync DB
npx prisma db push
npx prisma generate

### 6) Run the trust gate
npm run verify

Must pass before writing features.

---

## Trust Gate Philosophy

Agents can claim anything.
`npm run verify` is reality.

Always run it:
- after schema changes
- after refactors
- before commits
- before deploys

---

## Stack

- Next.js
- Prisma 7 + adapter-pg
- Postgres
- Redis + BullMQ
- ESLint + TypeScript
- Smoke-tested verification

---

## Future Improvements

- Add test runner (Vitest)
- Add CI to run `npm run verify`
- Add S3/R2 file storage
- Add auth

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
