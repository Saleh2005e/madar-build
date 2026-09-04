import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madar Build — Construction & Contracting",
  description: "Madar Build is a fictional construction company concept website.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
