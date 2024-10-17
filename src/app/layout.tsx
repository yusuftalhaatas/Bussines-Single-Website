import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
        <Header />
        <main style={{ margin: 0, padding: 0, width: "100%", height: "100%" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
