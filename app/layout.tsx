import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/manrope";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/noto-sans-tamil/tamil-500.css";
import { Analytics } from "@vercel/analytics/next";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishnupriya-saravanar.vercel.app"),
  title: { default: "Vishnupriya Saravanar · Product Owner & AI Builder", template: "%s · Vishnupriya Saravanar" },
  description:
    "Product Owner who builds AI products that give people time back. B2B SaaS delivery for US and German clients, two AI products shipped solo, and a focus on AI guardrails and evals.",
  openGraph: {
    title: "Vishnupriya Saravanar · Product Owner & AI Builder",
    description: "Full effort. Honest outcomes. Case studies: Catalyst, Ungal Kural and KidQ.",
    images: ["/og.png"],
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = { themeColor: "#0F1A1B" };

// Sets the saved theme before paint, to avoid a flash.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.dataset.theme='light'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <div className="app">
          <Sidebar />
          <main id="main" className="main">
            <div className="page">{children}</div>
            <Footer />
          </main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
