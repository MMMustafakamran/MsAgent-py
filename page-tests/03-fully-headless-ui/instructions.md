# Instructions for 03-fully-headless-ui

## Setup Steps
1. Copy `page-tests/03-fully-headless-ui/after-files/src/components/custom-chat.tsx` into `01-build-with-agents/my-copilot-app/app/components/custom-chat.tsx`.
2. In `01-build-with-agents/my-copilot-app/app/page.tsx`, import `CustomChat` from `@/app/components/custom-chat` and replace `<CopilotSidebar />` with `<CustomChat />`.
3. Ensure the Python agent server is running:
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
2. **Verify Layout**: Check that the default `<CopilotSidebar />` is gone and replaced by the custom headless chat UI embedded on the page.
3. **Send Message**:
   - In the input field at the bottom, type: `Hello, who are you?`
   - Click the **Send** button (or press Enter).
4. **Verify Message Rendering**:
   - Verify your input message appears immediately in a blue bubble aligned to the right (`ml-auto bg-blue-100`).
   - Verify the `"Thinking..."` text indicator appears while waiting for the agent response.
5. **Verify Agent Streaming Response**:
   - Verify the agent response appears in a gray bubble aligned to the left (`bg-gray-100`).
6. **Verify Stop Functionality**:
   - Send another long prompt such as `Write a long 500 word story about space exploration.`
   - While the agent is responding and `"Thinking..."` is visible, click the red **Stop** button.
   - Verify that execution immediately stops.
7. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
