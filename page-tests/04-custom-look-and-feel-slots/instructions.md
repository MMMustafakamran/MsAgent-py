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
2. **Verify Children Render Function & Header**:
   - Check that the chat box header displays `"My Agent (Slots Test)"` with a light gray background (`bg-gray-100 border-b`).
3. **Verify Custom Labels & Props Override**:
   - Check input placeholder text: Should display `"Ask your agent anything..."`.
   - Check input focus: Verify the input area has `autoFocus` enabled on page load.
   - Check input styling: Input area features blue borders with rounded corners (`border-2 border-blue-400 rounded-xl`).
4. **Verify Custom Message View Slot**:
   - Type `Hello agent!` in the input field and press Enter.
   - Verify user message is rendered in a right-aligned bubble (`text-right`).
   - Verify `"Thinking..."` pulsing text appears while generation is in progress.
   - Verify assistant response renders left-aligned (`text-left`).
5. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
