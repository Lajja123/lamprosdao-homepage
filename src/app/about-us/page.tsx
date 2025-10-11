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
    images: [
      {
        url: "https://lamprosdao.vercel.app/about-us.png",
        width: 1200,
        height: 630,
        alt: "About Lampros DAO",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
};

export default function page() {
  return (
    <>
      <Hero />
      <Ethos />
      <Journey />
    </>
  );
}
