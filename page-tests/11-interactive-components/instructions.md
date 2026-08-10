# Instructions for 11-interactive-components

## Setup Steps
1. Copy `page-tests/11-interactive-components/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
2. Ensure the Python agent server is running:
   ```bash
   cd 01-build-with-agents/my-agent
   uv run main.py
   ```
3. Start the Next.js dev server:
   ```bash
   cd 01-build-with-agents/my-copilot-app
   npm run dev
   ```

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your web browser.
2. **Verify Interactive Human-in-the-Loop Page**:
   - Check title `"Interactive Components Test"` centered on page.
   - Check chat welcome text reads `"Interactive Human-in-the-Loop Demo: Ask me to run a command!"`.
3. **Verify `useHumanInTheLoop` UI**:
   - Ask the agent to execute a command (e.g., `Deploy to production`).
   - Verify an amber `"Approval Required"` card renders inside the chat with **Approve** and **Deny** buttons.
   - Click **Approve** or **Deny** and confirm the decision responds back to the agent.
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
