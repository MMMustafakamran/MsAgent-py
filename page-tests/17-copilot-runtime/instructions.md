# Instructions for 17-copilot-runtime

## Overview & Purpose
- **Target Documentation**: `docs/6-backend/copilot-runtime.md`
- **Purpose**: Verify Copilot Runtime backend connection, agent routing, and default agent discovery.
- **What Was Implemented**:
  - Connected `CopilotChat` component to verify backend runtime communication (`runtimeUrl="/api/copilotkit"`).

## Quick Setup
Copy `page-tests/17-copilot-runtime/after-files/src/app/page.tsx` into `01-build-with-agents/my-copilot-app/app/page.tsx`.

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your browser.
2. **Verify Page & Welcome Text**:
   - Confirm heading `"Copilot Runtime Test"` centered on page.
   - Confirm welcome text reads: `"Copilot Runtime Demo: Backend routing, default agent discovery, and security middleware active!"`.
3. **Verify Runtime Communication**:
   - Type in the chat box: `Hi agent`
   - Confirm response stream receives message from the default agent backend.
4. **Mark Result**: Update `report.md` (PASS/FAIL).
