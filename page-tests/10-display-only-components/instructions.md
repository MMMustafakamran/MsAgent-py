# Instructions for 10-display-only-components

## Setup Steps
1. Copy `page-tests/10-display-only-components/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.
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
2. **Verify Display-Only Components Page**:
   - Check title `"Display-Only Components Test"` centered on page.
   - Check chat welcome text reads `"Display-Only Component Demo: Try asking to show weather or greetings!"`.
3. **Verify `useComponent` Parameterized Render**:
   - Verify `useComponent` registers `showWeather` with schema (`city`, `temperature`, `condition`).
4. **Complete Report**: Mark your results in `report.md` (PASS/FAIL).
