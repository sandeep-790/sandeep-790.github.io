@AGENTS.md

# Project Knowledge Base

A `PROJECT_MEMORY/` directory contains a complete portable knowledge base for this project.

**At the start of every session, read these files in order:**

1. `PROJECT_MEMORY/00_START_HERE.md` — orientation, constraints, quick commands
2. `PROJECT_MEMORY/05_CURRENT_STATE_AND_PROGRESS.md` — what's done and pending
3. `PROJECT_MEMORY/13_NEXT_SESSION_HANDOFF.md` — resume immediately

For deep dives:
- `PROJECT_MEMORY/02_TECHNICAL_ARCHITECTURE.md` — full stack details
- `PROJECT_MEMORY/04_DECISIONS_AND_RATIONALE.md` — why things are the way they are
- `PROJECT_MEMORY/09_ISSUES_AND_LESSONS_LEARNED.md` — known bugs and workarounds
- `PROJECT_MEMORY/10_FILE_AND_COMPONENT_INDEX.md` — navigable file map

## Restoring Context in a Fresh or Different-Account Session

If you are starting in a completely fresh session (different account, no prior history), use the restore prompt:

`PROJECT_MEMORY/RESTORE_PROJECT_CONTEXT.md` — copy the prompt inside and paste it as your opening message. It walks through full context restoration (read knowledge base → validate source code → check git state → produce a structured report) before any work begins.
