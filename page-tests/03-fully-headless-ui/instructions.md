# Instructions for 03-fully-headless-ui

1. Run `cp -r page-tests/03-fully-headless-ui/after-files/src/components 01-build-with-agents/my-copilot-app/src/` to copy the custom chat component.
2. In `01-build-with-agents/my-copilot-app/src/app/page.tsx`, import `CustomChat` from `@/components/custom-chat` and replace `<CopilotSidebar />` with `<CustomChat />`.
3. Run `npm run dev` in `01-build-with-agents/my-copilot-app`.
4. Run `uv run main.py` in `01-build-with-agents/my-agent` if it's not already running.
5. Verify that the custom headless chat UI works and can send/receive messages and stop generation.
6. Fill out `report.md`.
