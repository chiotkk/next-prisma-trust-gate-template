# Current Tasks

## How to use this file (PWJ)
- Planner owns: creating/reordering tasks, clarifying acceptance criteria.
- Worker owns: implementing ONE task at a time, updating status, pasting verify output in PR/notes.
- Judge owns: accepting/rejecting tasks based on acceptance + `npm run verify`.

## Task format
### T<n>: <short title>
**Status:** TODO | DOING | BLOCKED | DONE  
**Goal:** <what changes for the user/system>  
**Acceptance:**
- [ ] `npm run verify` passes
- [ ] <observable check 1>
- [ ] <observable check 2>
**Notes:** <optional>

---

## Tasks
### T1: Establish a vertical slice
**Status:** TODO  
**Goal:** A minimal end-to-end flow exists (even if stubbed).  
**Acceptance:**
- [ ] `npm run verify` passes
- [ ] User can complete the flow via UI or API
- [ ] Result is persisted or returned deterministically
**Notes:**

