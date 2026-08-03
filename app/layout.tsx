import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MovieNet V2",
  description: "Netflix-style movie discovery platform built with Next.js and FastAPI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
