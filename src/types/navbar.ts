export interface NavbarContent {
  type: "image" | "title";
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
}

export interface NavbarProps {
  centerContent?: NavbarContent;
}
