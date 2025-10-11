import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Marquee from "@/components/UI/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import DesktopOnly from "@/components/UI/DesktopOnly";
import Footer from "@/components/Footer/Footer";

const PPMori = localFont({
  src: "./fonts/PPMori-Regular.otf",
  display: "optional",
  variable: "--font-pp-mori",
  adjustFontFallback: false,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
  preload: true,
});

const CSBohemian = localFont({
  src: "./fonts/CSBohemian-Regular.otf",
  display: "optional",
  variable: "--font-cs-bohemian",
  adjustFontFallback: false,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
  preload: true,
});

const Psygen = localFont({
  src: "./fonts/Psygen-Regular.otf",
  display: "optional",
  variable: "--font-psygen",
  adjustFontFallback: false,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Arial",
    "sans-serif",
  ],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${CSBohemian.variable} ${PPMori.variable} ${Psygen.variable} min-h-screen`}
      >
        <DesktopOnly />
        <div className="hidden md:block">
          <Marquee text="Driving Mainstream Adoption, Empowering Developers, and Cultivating the Future of Web3" />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
