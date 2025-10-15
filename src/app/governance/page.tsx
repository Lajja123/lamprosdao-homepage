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
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.vercel.app/OGImages/governance.png",
        width: 1200,
        height: 630,
        alt: "Governance Lampros DAO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      {/* <Hero />
      <RecentVotes />
      <Delegate /> */}
    </div>
  );
}
