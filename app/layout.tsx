import type { Metadata } from "next";
import "./globals.css";
import "./public-pages.css";

export const metadata: Metadata = {
  title: "TINNOX Workspace",
  description: "One workspace. Every infrastructure. From agreed project to lifetime support.",
  icons: {
    icon: "/tinnox-tab-logo.jpg",
    shortcut: "/tinnox-tab-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
