# Instructions for 14-a2ui

## Overview & Purpose
- **Target Documentation**: `docs/3-generative ui/a2ui.md`
- **Purpose**: Test Google's A2UI (Agent to UI) declarative streaming UI specification renderer in CopilotKit.
- **What Was Implemented**:
  - Configured `CopilotChat` to verify automatic activation of the A2UI streaming renderer protocol without requiring custom frontend component handlers.

## Quick Setup
Copy `page-tests/14-a2ui/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your browser.
2. **Verify Page Title**: Confirm title `"A2UI Declarative UI Test"` centered on page.
3. **Verify Chat Welcome Text**: Confirm chat welcome text reads:
   `"A2UI Spec Demo: A2UI renderer activates automatically for declarative streaming UI!"`
4. **Verify A2UI Renderer Behavior**:
   - **Note**: A2UI streaming protocol requires `CopilotRuntime({ a2ui: {} })` middleware on backend runtime endpoints. In raw agent setups, the model returns text/HTML representations.
   - Type in the chat: `Generate an A2UI JSONL string for a profile widget`
   - Confirm `CopilotChat` receives the response stream and renders without runtime errors.
5. **Mark Result**: Update `report.md` (PASS/FAIL).
