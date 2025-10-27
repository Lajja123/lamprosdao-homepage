"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoIconDark from "@/assests/Footer/logo-dark.png";
import logoIconLight from "@/assests/Footer/logo-light.png";
import logoLight from "@/assests/Footer/lampros-light.png";
import logoDark from "@/assests/Footer/lampros-dark.png";
import rectangle from "@/assests/Footer/Rectangle.png";
import { Typography } from "@/components/UI/Typography";
import SocialIcon from "@/components/UI/SocialIcon";
import Link from "next/link";

// Define color theme variants
type FooterVariant = "light" | "dark";

interface FooterProps {
  variant?: FooterVariant;
}

// Color theme configurations
const footerThemes = {
  light: {
    background: "bg-[#FFFFFF] ",
    textColor: "text-black",
    borderColor: "border-black",
    customBorderColor: "border-[#DFF48D]",
    hoverBackgroundColor: "hover:bg-[#1a1a1a]",
    hoverTextColor: "group-hover:text-[#DFF48D]",
    bottomBorderColor: "#FFFFFF", // Custom border color for bottom section
    iconColor: "#D0FFAC", // Black icons for light theme
    logo: logoLight, // Use light logo variant
    logoIcon: logoIconLight, // Use light logo icon variant
  },
  dark: {
    background: "bg-[#1a1a1a]",
    textColor: "text-[#DFF48D]",
    borderColor: "border-white",
    customBorderColor: "border-white",
    hoverBackgroundColor: "hover:bg-[#DFCDF2]",
    hoverTextColor: "group-hover:text-[#1a1a1a]",
    iconColor: "#FFFFFF", // White icons for dark theme
    logo: logoDark, // Use dark logo variant
    logoIcon: logoIconDark, // Use dark logo icon variant
  },
};

// Social media platforms configuration
const socialPlatforms = [
  "medium",
  "linkedin",
  "discord",
  "notion",
  "telegram",
  "twitter",
] as const;

export default function Footer({ variant }: FooterProps) {
  const pathname = usePathname();

  // Determine variant based on pathname if not explicitly provided
  const effectiveVariant = variant ?? (pathname === "/" ? "dark" : "light");
  const theme = footerThemes[effectiveVariant];

  return (
    <footer className={`w-full ${theme.background} ${theme.textColor}`}>
      {/* Navigation Section */}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 text-center`}
        style={{ fontFamily: "PP Mori" }}
      >
        <Link
          href="/"
          className={`group w-full border ${theme.borderColor} ${theme.hoverBackgroundColor} p-3 sm:p-4 md:p-6 transition-colors duration-200`}
        >
          <Typography
            variant="button"
            align="center"
            weight="bold"
            className={`${theme.textColor} ${theme.hoverTextColor} text-sm sm:text-base transition-colors duration-200`}
          >
            Home
          </Typography>
        </Link>
        <Link
          href="/about-us"
          className={`group w-full border ${theme.borderColor} ${theme.hoverBackgroundColor} p-3 sm:p-4 md:p-6 transition-colors duration-200`}
        >
          <Typography
            variant="button"
            align="center"
            weight="bold"
            className={`${theme.textColor} ${theme.hoverTextColor} text-sm sm:text-base transition-colors duration-200`}
          >
            About Us
          </Typography>
        </Link>
        <Link
          href="/governance"
          className={`group w-full border ${theme.borderColor} ${theme.hoverBackgroundColor} p-3 sm:p-4 md:p-6 transition-colors duration-200`}
        >
          <Typography
            variant="button"
            align="center"
            weight="bold"
            className={`${theme.textColor} ${theme.hoverTextColor} text-sm sm:text-base transition-colors duration-200`}
          >
            Governance
          </Typography>
        </Link>
        <Link
          href="/contribution"
          className={`group w-full border ${theme.borderColor} ${theme.hoverBackgroundColor} p-3 sm:p-4 md:p-6 transition-colors duration-200`}
        >
          <Typography
            variant="button"
            align="center"
            weight="bold"
            className={`${theme.textColor} ${theme.hoverTextColor} text-sm sm:text-base transition-colors duration-200`}
          >
            Contribution
          </Typography>
        </Link>
      </div>

      {/* Logo Section */}
      <div
        className={`border-r border-l border-white relative w-full p-3 sm:p-4 md:p-6`}
      >
        <Image
          src={rectangle}
          alt={""}
         
          className="mx-auto block md:hidden w-32 h-auto "
          quality={100}
        />
        <Image
          src={rectangle}
          alt={""}
         
          className="mx-auto hidden md:block"
          quality={100}
        />
        <div className="absolute inset-0 flex items-center justify-center p-5 ">
          <Image src={theme.logo} alt={""} className="" />
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`border  ${theme.borderColor} flex flex-col sm:flex-row items-stretch`}
        style={{
          backgroundColor: "#1a1a1a",
        }}
      >
        <div
          className={`hidden sm:block border-r ${theme.customBorderColor} flex items-center justify-center w-full sm:w-auto sm:min-w-[80px] border-b sm:border-b-0 p-3 sm:p-4`}
        >
          <Link href="/">
            <Image
              src={theme.logoIcon}
              alt="Lampros logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
              quality={100}
            />
          </Link>
        </div>

        {/* Spacer for larger screens */}
        <div className="flex-1 hidden sm:block p-3" />

        {/* Social Icons */}
        <div
          className={`${theme.borderColor} grid grid-cols-6 sm:grid-cols-6 w-full sm:w-auto sm:min-w-[300px] text-center border-t sm:border-t-0 sm:border-l`}
        >
          {socialPlatforms.map((platform, index) => (
            <div
              key={platform}
              className={`border-l ${theme.customBorderColor} flex items-center justify-center px-4 sm:px-6 md:px-8 py-4 sm:py-6 hover:bg-white transition-colors duration-200 group`}
            >
              <SocialIcon
                platform={platform}
                color={theme.iconColor}
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:!bg-black transition-colors duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
