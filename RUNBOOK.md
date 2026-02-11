# RUNBOOK.md

Common failure modes and fixes.

---

## Port already in use
If EADDRINUSE occurs:
- Use port 3010
- Do not kill unrelated processes

---

## Next command not found
Use:
- npx net ...
- or npm scripts.

---

## Prisma issues
Run: 
- Ensure DB is running

---

## Migration drifs
Run:
- npx prisma migrate dev
- Avoid manual edits to migration files.

## Docker issues
Check:
- docker ps
- docker compose up -d

---

## Smoke test failing
Check:
- server running
- DB reachable
- correct port
