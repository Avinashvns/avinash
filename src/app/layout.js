import "../app/globals.css";
import Body from "../components/LayoutBridge";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Body>{children}</Body>
      </body>
    </html>
  );
}
