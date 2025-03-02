import Navbar from "../components/navbar";
import "./globals.css"; // Pastikan file ini ada
import { ReactNode } from "react";

export const metadata = {
  title: "belajar react",
  icons: {
    icon: "/favicon.ico", // Bisa juga PNG atau SVG
  },
  description: "Navbar with Tailwind CSS in Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
