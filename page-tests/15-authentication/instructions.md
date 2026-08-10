# Instructions for 15-authentication

## Overview & Purpose
- **Target Documentation**: `docs/5-microsoft agent framework/authentication.md`
- **Purpose**: Verify end-to-end user authentication forwarding from CopilotKit frontend headers to Python FastAPI `auth_middleware`.
- **What Was Implemented**:
  - **Frontend**: Configured `<CopilotKit headers={{ Authorization: 'Bearer ...' }}>` in `layout.tsx`.
  - **Backend**: Added `auth_middleware` in `my-agent/main.py` to validate `Authorization: Bearer sample-test-auth-token`.

## Quick Setup
1. Copy `page-tests/15-authentication/after-files/src/app/layout.tsx` into `01-build-with-agents/my-copilot-app/app/layout.tsx`.
2. Copy `page-tests/15-authentication/after-files/src/agent/main.py` into `01-build-with-agents/my-agent/main.py`.

## Browser Verification Steps
1. Open **`http://localhost:3000`** in your browser.
2. **Verify Authorized Chat Request**:
   - Send a message in the chat box (e.g. `Hello`).
   - Confirm that the agent responds successfully without 401 Unauthorized errors.
3. **Verify Network Header Payload**:
   - Open Browser Dev Tools (F12) -> **Network** tab.
   - Click the HTTP `POST /api/copilotkit` request.
   - Inspect **Request Headers** and confirm `Authorization: Bearer sample-test-auth-token` is present.
4. **Mark Result**: Update `report.md` (PASS/FAIL).
