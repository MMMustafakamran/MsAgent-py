# Instructions for 13-shared-state-writing

## Setup Steps
1. Copy `page-tests/13-shared-state-writing/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify Shared State Page**:
   - Check title `"Writing Agent State Test"` centered on page.
   - Check top box displays `"Language: english"` initially.
3. **Verify `agent.setState` Execution**:
   - Click the **"Toggle Language"** button.
   - Verify `"Language: english"` dynamically updates to `"Language: spanish"`.
   - Click it again to verify it toggles back to `"Language: english"`.
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
