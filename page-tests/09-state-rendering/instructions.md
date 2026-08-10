# Instructions for 09-state-rendering

## Setup Steps
1. Copy `page-tests/09-state-rendering/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
2. Copy `page-tests/09-state-rendering/after-files/src/agent/main.py` into `01-build-with-agents/my-agent/main.py` (registers `STATE_SCHEMA` and `@tool def update_searches`).
3. Ensure the Python agent server is running/reloaded:
   ```bash
   cd 01-build-with-agents/my-agent
   uv run main.py
   ```
4. Start the Next.js dev server:
   ```bash
   cd 01-build-with-agents/my-copilot-app
   npm run dev
   ```

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your web browser.
2. **Verify State Rendering Panel**:
   - Check title `"State Rendering Test"` centered on page.
   - Check top state panel displays `"Agent Searches State:"` with `"No searches in state yet."` initially.
3. **Verify State Sync**:
   - Type in the chat: `Search for artificial intelligence news and mark it done`
   - Observe the agent calling `update_searches`.
   - Confirm that the top state panel updates in real-time to render:
     `✅ artificial intelligence news`
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
