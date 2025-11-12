import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance",
  description:
    "Participating as delegates across DAOs through active engagement, discussion, and voting.",
  openGraph: {
    title: "Governance",
    description:
      "Participating as delegates across DAOs through active engagement, discussion, and voting.",
    url: "https://lamprosdao.com/governance",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.com/OGImages/governance.png",
        width: 1200,
        height: 630,
        alt: "Governance Lampros DAO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
