import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Hpone Myat Thu | Software Engineer",
  description: "Portfolio of Hpone Myat Thu — Software Engineer with 3+ years experience building web, mobile (Flutter, React Native), and desktop (C# .NET) applications. First Class Honours Computing graduate from University of Greenwich.",
  keywords: [
    "Hpone Myat Thu",
    "Software Engineer",
    "Full-Stack Developer",
    "Flutter",
    "Python",
    "FastAPI",
    "C# .NET",
    "Next.js",
    "React Native",
    "Singapore Software Engineer",
    "Remote Developer"
  ],
  authors: [{ name: "Hpone Myat Thu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
