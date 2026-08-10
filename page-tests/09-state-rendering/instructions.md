# Instructions for 09-state-rendering

## Setup Steps
1. Copy `page-tests/09-state-rendering/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify State Rendering Panel**:
   - Check title `"State Rendering Test"` centered on page.
   - Check top state panel displays `"Agent Searches State:"` with `"No searches in state yet."` initially.
3. **Verify State Updates**:
   - Interact with the chat box by sending a prompt.
   - Verify `agent.state` property reads the agent's streamed state object without errors.
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
