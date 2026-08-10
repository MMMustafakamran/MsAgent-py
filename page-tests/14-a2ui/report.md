# Test Report: 14-a2ui

- **Status**: [ ] PASS / [x] FAIL
- **Remarks**:
  - **Documentation Requirement Mismatch**: As documented in `docs/3-generative ui/a2ui.md` (lines 51-64), A2UI streaming UI requires backend `CopilotRuntime({ a2ui: {} })` middleware. When connecting directly to a raw Python AG-UI FastAPI server without `CopilotRuntime`, the model outputs plain text/HTML instead of parsing A2UI JSONL streams into dynamic components.
