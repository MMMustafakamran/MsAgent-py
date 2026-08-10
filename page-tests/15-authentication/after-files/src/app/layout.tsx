import { CopilotKit } from "@copilotkit/react-core/v2";
import "@copilotkit/react-core/v2/styles.css";

const userToken = "sample-test-auth-token";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* [!code highlight:6] */}
        <CopilotKit
          runtimeUrl="/api/copilotkit"
          headers={{
            Authorization: `Bearer ${userToken}`,
          }}
        >
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
