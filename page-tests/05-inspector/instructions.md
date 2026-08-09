# Instructions for 05-inspector

## Setup Steps
1. Copy `page-tests/05-inspector/after-files/src/app/layout.tsx` into `01-build-with-agents/my-copilot-app/app/layout.tsx`.
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
2. **Verify Inspector Disabling**:
   - Inspect the screen (bottom-right/bottom-left corners).
   - Verify that the CopilotKit Inspector overlay button/badge is **NOT** present anywhere on the page.
3. **Verify App Functionality**:
   - Open the Copilot sidebar or custom chat interface and send a quick message like `Test inspector disabled`.
   - Verify the chat still communicates normally with the agent even with `enableInspector={false}` set.
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
