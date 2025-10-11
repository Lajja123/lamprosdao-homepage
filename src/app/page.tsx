import Homepage from "@/components/Homepage/Homepage";

export const metadata = {
  title: "Lampros DAO",
  description:
    "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",

  openGraph: {
    title: "Lampros DAO",
    description:
      "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",
    url: "https://lamprosdao.vercel.app/",
    siteName: "Lampros DAO",
    images: [
      {
        url: "https://lamprosdao.vercel.app/OGImages/homepage.png", // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: "Lampros DAO",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function Home() {
  return (
    <main className=" w-full min-h-screen">
      <Homepage />
    </main>
  );
}
