import Image from "next/image";
import mediumIcon from "@/assests/Footer/medium.svg";
import linkedinIcon from "@/assests/Footer/linkedin.svg";
import discordIcon from "@/assests/Footer/discord.svg";
import notionIcon from "@/assests/Footer/notion.svg";
import telegramIcon from "@/assests/Footer/telegram.svg";
import twitterIcon from "@/assests/Footer/twitter.svg";

type SocialPlatform =
  | "medium"
  | "linkedin"
  | "discord"
  | "notion"
  | "telegram"
  | "twitter";

interface SocialIconProps {
  platform: SocialPlatform;
  size?: number;
  color?: string;
  className?: string;
}

const socialIcons = {
  medium: mediumIcon,
  linkedin: linkedinIcon,
  discord: discordIcon,
  notion: notionIcon,
  telegram: telegramIcon,
  twitter: twitterIcon,
};

export default function SocialIcon({
  platform,
  color,
  className,
}: SocialIconProps) {
  return (
    <div
      className={className}
      style={{
        display: "inline-block",
        backgroundColor: color,
        mask: `url(${socialIcons[platform].src}) no-repeat center`,
        maskSize: "contain",
        WebkitMask: `url(${socialIcons[platform].src}) no-repeat center`,
        WebkitMaskSize: "contain",
      }}
    />
  );
}
