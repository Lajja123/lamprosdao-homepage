import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Governance",
  openGraph: {
    title: "Governance",
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

export default function GovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
