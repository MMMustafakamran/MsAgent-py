# Instructions for 06-prebuilt-components

## Setup Steps
1. Copy `page-tests/06-prebuilt-components/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify CopilotChat Tab**:
   - Check that the embedded chat box displays `"Hi! How can I assist you today?"` as the custom welcome text.
   - Verify input text area has custom styling (`text-blue-500`) and the send button is styled (`bg-blue-600`).
3. **Verify CopilotSidebar Tab**:
   - Click the **CopilotSidebar** tab button.
   - Confirm the sidebar chat panel opens automatically (`defaultOpen={true}`).
   - Verify sidebar header displays `"Sidebar Assistant"`.
4. **Verify CopilotPopup Tab**:
   - Click the **CopilotPopup** tab button.
   - Confirm a floating chat trigger button appears in the bottom right corner.
   - Click the popup trigger button and confirm the modal header displays `"Popup Assistant"`.
5. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
