# Test Report: 13-shared-state-writing

- **Status**: [x] PASS / [ ] FAIL
- **Remarks**:
  - `agent.setState` writing to agent state passed manual browser verification cleanly.
  - **Doc Bug Note**: `initialState` property in `useAgent({...})` from documentation is invalid in `@copilotkit/react-core/v2` TypeScript types (`TS2353`); fixed by initializing state via `agent.setState` in client `useEffect`.
