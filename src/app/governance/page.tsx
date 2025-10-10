import Delegate from "@/components/Governance/Delegate";
import Hero from "@/components/Governance/Hero";
import RecentVotes from "@/components/Governance/RecentVotes";

export const metadata = {
  title: "Governance",
  // description: "About Page Description...",
  openGraph: {
    title: "Governance",
    // description: "About Page Description...",
    url: "https://lamprosdao.vercel.app/governance",
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
      <RecentVotes />
      <Delegate />
    </div>
  );
}
