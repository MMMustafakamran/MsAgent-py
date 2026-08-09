# Plan V2: Documentation Page Testing Workflow

## Goal

Streamline the documentation testing process by using designated base projects, directly creating target files in `after-files/`, and isolating backups to only the files that actually change. This allows the agent to prepare the tests and perform automated build checks, while leaving final verification to the human.

## Base Projects

We will maintain two running projects for testing:

1. **Existing Agent Project** (`01-build-with-agents`): Used for testing **all non-threads pages** (tested first).
2. **CLI Project** (`cli-agent-backup`): Used specifically for testing **all Threads pages** (e.g., Threads Drawer, Headless Threads, Lifecycle).

**Execution Order Rule**: Test all non-threads pages using `01-build-with-agents` **first**. Test all Threads pages using `cli-agent-backup` **last**.

## Workflow (Per Documentation Page)

1. **Target File Generation**:
   - Write the modified code directly into the appropriate `page-tests/XX-page-name/after-files/...` paths.
   - Use the appropriate base project's pristine code and inject the documentation snippets into it.
   - **Coverage & Simplicity**: Test most code examples and features described in the documentation page, keeping test implementations simple, clean, and un-overcomplicated (avoid excessive custom styling or complex wrappers).
   - **Retain `// [!code highlight:X]` (or JSX `{/* [!code highlight:X] */}`) markers around all injected code** in both `after-files/` and the active working base project so that human reviewers can instantly identify the modified lines in their editor.
   - **Rule**: Do not fix documentation bugs initially. Implement them exactly as written.
2. **Automated Checks**:
   - The agent will copy the `after-files` into the base project (preserving all `// [!code highlight:X]` markers) and run a build test (e.g., `npm run build` or `npx next build`).
   - If a build error occurs and it's a documentation bug, the agent will fix it in the `after-files` and document the fix in the report.
3. **Generate Instructions & Report**:
   - Create `instructions.md` detailing the exact setup steps and **explicit browser verification steps** (e.g., URL to open, exact text to input, UI elements to click, and expected visual/agent responses to look for).
   - Create an **empty** `report.md` for the human to fill out (PASS/FAIL/Remarks).
4. **Manual Testing**:
   - The human manually copies the files from `after-files/` into the active base project (if not already there).
   - The human runs the dev server, opens `http://localhost:3000`, follows the step-by-step browser testing instructions in `instructions.md`, and marks the `report.md`.
5. **Cleanup**:
   - Restore the modified files back to their pristine states using the `.copy` backups.
   - Delete any entirely new files that were created specifically for that test.

## File Backups

Backups will be stored **directly next to the original files** in the running projects (e.g., `page copy.tsx`).

Based on an analysis of all pending tests, the following files will be altered and require `.copy` backups:
this is the example of testing of agno project , use this only as clarificatipon dont follow this exactly as your files might be different.

- **CLI Project**:
  - `src/app/page.tsx` -> `page copy.tsx`
- **Existing Agent Project**:
  - `my-copilot-app/src/app/page.tsx` -> `page copy.tsx`
  - `my-copilot-app/src/app/layout.tsx` -> `layout copy.tsx`
  - `my-copilot-app/src/app/api/copilotkit/route.ts` -> `route copy.ts`
  - `my-agent/main.py` -> `main copy.py`

Additionally, some tests create entirely new files which must simply be deleted after testing:

- `my-copilot-app/src/components/custom-chat.tsx`
- `my-agent/tools/frontend.py`

this is the planned tree (this exact is for the agno project use it as inspo)

## File Structure

```text
documentation-testing/
├── cli-agent-backup/                 <-- (CLI Project base)
│   ├── src/app/
│   │   ├── page.tsx
│   │   └── page copy.tsx             <-- (Isolated backup)
│   └── ...
│
├── 01-build-with-agents/             <-- (Existing Agent Project base)
│   ├── my-copilot-app/
│   │   ├── src/app/
│   │   │   ├── page.tsx
│   │   │   ├── page copy.tsx         <-- (Isolated backup)
│   │   │   ├── layout.tsx
│   │   │   ├── layout copy.tsx       <-- (Isolated backup)
│   │   │   └── api/copilotkit/
│   │   │       ├── route.ts
│   │   │       └── route copy.ts     <-- (Isolated backup)
│   │   └── ...
│   ├── my-agent/
│   │   ├── main.py
│   │   └── main copy.py              <-- (Isolated backup)
│   └── ...
│
└── page-tests/
    ├── 14-headless-threads/          <-- (Specific page test folder)
    │   ├── instructions.md           <-- (Manual instructions for human)
    │   ├── report.md                 <-- (Test result template)
    │   └── after-files/              <-- (Code snippet injections)
    │       └── src/app/page.tsx
    └── ...remaining pages
```
