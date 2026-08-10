# Instructions for 12-frontend-tools

## Setup Steps
1. Copy `page-tests/12-frontend-tools/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify Frontend Tools Page**:
   - Check title `"Frontend Tools Test"` centered on page.
   - Check chat welcome text reads `"Frontend Tools Demo: Ask me to say hello to someone!"`.
3. **Verify `useFrontendTool` Execution**:
   - Type in the chat: `Say hello to Alice`
   - Verify the agent executes the client-side tool `sayHello`.
   - Confirm a blue banner appears above the chat: `Frontend Alert: Hello, Alice!`.
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
