# Instructions for 04-custom-look-and-feel-slots

## Setup Steps
1. Copy `page-tests/04-custom-look-and-feel-slots/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify Title & Layout**:
   - Check that the page displays the heading `"Slots UI Test"` centered on screen.
   - Verify the chat box container has a shadow border card (`max-w-2xl h-[600px] border rounded-xl`).
3. **Verify Custom Slots & Labels**:
   - Check input placeholder text: Should display `"Ask your agent anything..."`.
   - Check input styling: Input area should feature a blue border with rounded corners (`border-2 border-blue-400 rounded-xl`).
   - Check disclaimer / welcome text labels as configured in the slots `labels` prop.
4. **Verify Custom Message View Slot**:
   - Type `Tell me a joke` in the input field and submit.
   - Verify user message is rendered plain text aligned to the right (`text-right`).
   - Verify `"Thinking..."` pulsing animation (`animate-pulse`) appears while generation is in progress.
   - Verify assistant response renders plain text aligned to the left (`text-left`).
5. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
