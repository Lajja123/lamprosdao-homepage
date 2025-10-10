import Ethos from "@/components/About/Ethos";
import Hero from "@/components/About/Hero";
import Journey from "@/components/About/Journey";

export const metadata = {
  title: "About Us",
  // description: "About Page Description...",
  openGraph: {
    title: "About Us",
    // description: "About Page Description...",
    url: "https://lamprosdao.vercel.app/about-us",
    siteName: "LamprosDAO",
    // images: [
    //   {
    //     url: "https://uniswap.org/images/twitter-card.jpg",
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://uniswap.org/images/twitter-card.jpg",
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <>
      {/* <Hero /> */}
      {/* <Ethos /> */}
      <Journey />
    </>
  );
}
