
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KaXro Clips | Free AI Video Clipper",
  description:
    "Turn long gaming videos into amazing AI-powered short clips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
