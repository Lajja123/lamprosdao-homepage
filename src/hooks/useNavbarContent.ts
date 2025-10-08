import { usePathname } from "next/navigation";
import vector2 from "@/assests/common/clip.svg";
import type { NavbarContent } from "@/types";

export function useNavbarContent(): NavbarContent {
  const pathname = usePathname();

  // Define page titles for different routes
  const getPageTitle = (path: string) => {
    switch (path) {
      case "/about-us":
        return "About Us";
      case "/governance":
        return "Governance";
      case "/contribution":
        return "Contribution";
      default:
        return "/";
    }
  };

  // For homepage, show image; for other pages, show title
  return pathname === "/"
    ? {
        type: "image",
        imageSrc: vector2,
        imageAlt: "Lampros DAO Vector",
      }
    : {
        type: "title",
        title: getPageTitle(pathname),
      };
}
