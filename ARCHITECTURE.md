# ARCHITECTURE.md

Baseline architecture for apps generated from this template.

---

# Stack

- Next.js (App Router)  
- TypeScript  
- Prisma + Postgres  
- Redis + BullMQ  
- Docker local services  

---

# Project Structure

Web routes:
- app/
API routes:
- app/api/**
Database:
- prisma/
Queues and workers:
- lib/queues/
- scripts/

---

# Health Endpoints

`/api/health/db` must return 200 if DB reachable.

---

# Invariants

- `npm run verify` must pass before merge  
- Prefer small diffs  
- Avoid unnecessary refactors  
