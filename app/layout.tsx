import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager 2.0",
  description: "A simple task manager app built with Next.js 13 and Tailwind CSS with a dark grey and orange theme.",
};

// ==================================================
// COMPONENT: RootLayout
// PURPOSE: Wraps the full app with global fonts and styles.
// This file is only structural and does not contain anytask logic.
// TYPE: Root Layout
// PROPS:
// - children: page content rendered inside the layout
// ==================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
