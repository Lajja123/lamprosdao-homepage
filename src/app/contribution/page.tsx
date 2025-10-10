import Hero from "@/components/Contributions/Hero";
import Reports from "@/components/Contributions/Reports";

export const metadata = {
  title: "Contribution",
  // description: "About Page Description...",
  openGraph: {
    title: "Contribution",
    // description: "About Page Description...",
    url: "https://lamprosdao.vercel.app/contribution",
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
    <div>
      <Hero />
      <Reports />
    </div>
  );
}
