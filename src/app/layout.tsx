import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Marquee from "@/components/UI/Marquee";
import Navbar from "@/components/Navbar/Navbar";
import DesktopOnly from "@/components/UI/DesktopOnly";
import Footer from "@/components/Footer/Footer";
import FloatingCTA from "@/components/UI/FloatingCTA";

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
    // <html lang="en">
    //   <body
    //     className={`${CSBohemian.variable} ${PPMori.variable} ${Psygen.variable} min-h-screen flex flex-col justify-between`}
    //   >
    //     <DesktopOnly />
    //     <div className="hidden md:block">
    //       <Marquee
    //         items={[
    //           {
    //             text: "Lampros DAO ranks #1 on the Scroll Delegator Program - View on X",
    //             link: {
    //               text: "View on X",
    //               url: "https://x.com/lamprosdao/status/1972921578825412711",
    //             },
    //           },
    //           "MegaETH Public Sale Dune Dashboard by Lampros DAO is now live - Explore the Dashboard",
    //           "Arbitrum Expansion Dune Dashboard, now tracking Orbit chains settling on Arbitrum and Ethereum - Explore the Dashboard",
    //           "Proud to be in Optimism Top 100 Delegates - View Delegate Profile",
    //           "Arbitrum DRIP Epoch 4 live - Earn Rewards",
    //           "Check out our latest X space on Arbitrum Orbit Chain Revenues & AEP flows - Broadcast link",
    //         ]}
    //       />
    //       <Navbar />
    //       {children}
    //       <Footer />
    //       <FloatingCTA />
    //       </div>
    //   </body>
    // </html>

    <html lang="en">
      <body
        className={`${CSBohemian.variable} ${PPMori.variable} ${Psygen.variable} flex flex-col justify-between`}
      >
        <Marquee
          items={[
            {
              text: "Lampros DAO ranks #1 on the Scroll Delegator Program - View on X",
              link: {
                text: "View on X",
                url: "https://x.com/lamprosdao/status/1972921578825412711",
              },
            },
            {
              text: "MegaETH Public Sale Dune Dashboard by Lampros DAO is now live - Explore the Dashboard",
              link: {
                text: "Explore the Dashboard",
                url: "https://dune.com/lamprosdao/megaeth-public-sale-overview",
              },
            },
            {
              text: "Arbitrum Expansion Dune Dashboard, now tracking Orbit chains settling on Arbitrum and Ethereum - Explore the Dashboard",
              link: {
                text: "Explore the Dashboard",
                url: "https://dune.com/lamprosdao/arbitrum-ecosystem-revenue-from-orbit-chains",
              },
            },
            {
              text: "Proud to be in Optimism Top 100 Delegates - View Delegate Profile",
              link: {
                text: "View Delegate Profile",
                url: "https://vote.optimism.io/delegates/lamprosdao.eth",
              },
            },
            {
              text: "Arbitrum DRIP Epoch 4 live - Earn Rewards",
              link: {
                text: "Earn Rewards",
                url: "https://arbitrumdrip.com/",
              },
            },
            {
              text: "Check out our latest X space on Arbitrum Orbit Chain Revenues & AEP flows - Broadcast link",
              link: {
                text: "Broadcast link",
                url: "https://x.com/i/broadcasts/1vAGRQRoXDjKl",
              },
            },
          ]}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
