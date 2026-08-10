# Instructions for 08-tool-rendering

## Setup Steps
1. Copy `page-tests/08-tool-rendering/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
2. Copy `page-tests/08-tool-rendering/after-files/src/agent/main.py` into `01-build-with-agents/my-agent/main.py` (registers `@tool def get_weather`).
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
2. **Verify Tool Rendering Page**:
   - Check title `"Tool Rendering Test"` centered on page.
   - Check chat welcome text reads `"Ask me about the weather or any tool call!"`.
3. **Verify `useRenderTool` Execution**:
   - Ask the agent: `What is the weather in Tokyo?`
   - Verify a custom blue tool box (`bg-blue-50`) renders inside the chat message while calling the weather API tool.
   - Confirm it displays `Called the weather API for Tokyo.` upon completion.
4. **Verify `useDefaultRenderTool` Wildcard Fallback**:
   - Ask the agent to execute any un-named tool call and verify generic gray tool card (`bg-gray-100`) displays `✓ Tool Call: ...`.
5. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
