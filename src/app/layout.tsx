import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
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
  title: "SBL Showcase | Prosjekter",
  description: "Showcase av prosjekter innen restaurant, fastfood og håndverk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-border py-8 text-center text-sm text-muted">
          <div className="mx-auto max-w-7xl px-6">
            © {new Date().getFullYear()} SBL Prosjekter. Alle rettigheter reservert.
          </div>
        </footer>
      </body>
    </html>
  );
}
