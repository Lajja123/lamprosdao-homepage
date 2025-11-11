import Ethos from "@/components/About/Ethos";
import Hero from "@/components/About/Hero";
import Journey from "@/components/About/Journey";

export const metadata = {
  title: "About Us",
  // description: "About Page Description...",
  openGraph: {
    title: "About Us",
    // description: "About Page Description...",
    url: "https://lamprosdao.com/about-us",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.com/OGImages/aboutus.png",
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
