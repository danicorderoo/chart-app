import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chart ♥",
  description: "Creado por un fin, y dar un comienzo",
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
