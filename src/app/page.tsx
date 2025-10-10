import Homepage from "@/components/Homepage/Homepage";

export const metadata = {
  title: "Lampros DAO",
  // description: "Home Page Description...",
  openGraph: {
    title: "Lampros DAO",
    // description: "Home Page Description...",
    url: "https://lamprosdao.vercel.app/",
    siteName: "LamprosDAO",
    // images: [
    //   {
    //     url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
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
