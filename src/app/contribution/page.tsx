import ContributionsWrapper from "@/components/Contributions/ContributionsWrapper";

export const metadata = {
  title: "Contribution",
  description:
    "Driving impact through governance, development, research, and ecosystem growth.",
  openGraph: {
    title: "Contribution",
    description:
      " Driving impact through governance, development, research, and ecosystem growth.",
    url: "https://lamprosdao.com/contribution",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.com/OGImages/contribution.png",
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
