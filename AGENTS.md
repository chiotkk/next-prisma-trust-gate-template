# AGENTS.md

This repo is designed for agentic development using a Planner / Worker / Judge (PWJ) loop.

---

# Core Principle

**`npm run verify` is the source of truth.**

Agents must not claim success without running it and showing full output.

---

# Workflow (PWJ)

## Planner
- Read in order:
  1) PRODUCT.md
  2) TASKS/current.md
  3) ARCHITECTURE.md
  4) RUNBOOK.md
- Select the top TODO task
- Break into atomic subtasks with acceptance criteria

## Worker
- Implement ONE subtask at a time
- Make small diffs
- Run `npm run verify`
- Update TASKS/current.md

## Judge
- Accept only if:
  - verify passes
  - acceptance criteria met
- Otherwise return concrete fixes

---

# Change Discipline

- Small diffs only
- No refactors unless required
- No dependency upgrades unless needed
- If Prisma schema changes:
  - migrations must be handled
  - verify must pass

---

# Environment

- Local services via Docker
- Default app port: **3010**
- Do not assume port 3000 is free

---

# Commands

Verify:
- npm run verify
Prisma:
- npx prisma generate
- npx prisma migrate dev

---

# Important Rule

If this repo is generated from a template,
**prefer this repo’s docs over assumptions from other projects.**
