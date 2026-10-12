import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bullock TechnoSoft | Computer, Laptop & CCTV Services",
  description:
    "Computer, laptop repair, CCTV installation, CCTV repair and website development services in Ahmedabad.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
