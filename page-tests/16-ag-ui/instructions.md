# Instructions for 16-ag-ui

## Overview & Purpose
- **Target Documentation**: `docs/6-backend/ag-ui.md`
- **Purpose**: Verify AG-UI protocol event subscriptions (`agent.subscribe({...})`) receiving Server-Sent Events (SSE) from the copilot agent.
- **What Was Implemented**:
  - Subscribed to `agent.subscribe({ onTextMessageContentEvent, onToolCallEndEvent, onStateChanged })` using `useAgent` and displayed real-time event logs in a preview box.

## Quick Setup
Copy `page-tests/16-ag-ui/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your browser.
2. **Verify AG-UI Protocol Page**:
   - Confirm heading `"AG-UI Protocol Test"` is centered on page.
   - Confirm top box heading reads `"AG-UI Protocol SSE Event Log:"`.
3. **Verify Event Subscription**:
   - Type in the chat box: `Hello agent`
   - Observe the top event box as the response streams in.
   - Confirm real-time text streaming logs appear (e.g. `➜ Streaming text: Hello...`).
4. **Mark Result**: Update `report.md` (PASS/FAIL).
