import Homepage from "@/components/Homepage/Homepage";

export const metadata = {
  title: "Lampros DAO",
  description:
    "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",
  metadataBase: new URL("https://lamprosdao.com"),
  openGraph: {
    title: "Lampros DAO",
    description:
      "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",
    url: "https://lamprosdao.com/",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.com/OGImages/homepage.png",
        width: 1200,
        height: 630,
        alt: "Lampros DAO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "format-detection": "telephone=no",
  },
};
export default function Home() {
  return (
    <main className=" w-full min-h-screen">
      <Homepage />
    </main>
  );
}
