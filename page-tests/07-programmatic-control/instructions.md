# Instructions for 07-programmatic-control

## Setup Steps
1. Copy `page-tests/07-programmatic-control/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify Telemetry Box**:
   - Check the top gray box displays **Agent Name**, **Status** (`"Idle"` initially), and **Total Messages** (`0`).
3. **Verify Programmatic Execution**:
   - In the custom input box, type: `What is 2 + 2?`
   - Click the **`runAgent()`** button.
4. **Verify Status & Message Updates**:
   - Check that **Status** temporarily changes to `"Running..."` while the agent responds.
   - Confirm your prompt appears in a right-aligned bubble.
   - Confirm the agent's answer appears in a left-aligned bubble.
   - Confirm **Total Messages** updates dynamically (e.g. increases to `2`).
5. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
