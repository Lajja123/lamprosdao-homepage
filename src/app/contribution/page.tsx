import ContributionsWrapper from "@/components/Contributions/ContributionsWrapper";

export const metadata = {
  title: "Contribution",
  // description: "About Page Description...",
  openGraph: {
    title: "Contribution",
    // description: "About Page Description...",
    url: "https://lamprosdao.vercel.app/contribution",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.vercel.app/OGImages/contribution.png",
        width: 1200,
        height: 630,
        alt: "Contribution Lampros DAO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function page() {
  return (
    <div>
      <ContributionsWrapper />
    </div>
  );
}
