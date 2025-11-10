import Image from "next/image";
import Link from "next/link";
import mediumIcon from "@/assests/Footer/medium.svg";
import linkedinIcon from "@/assests/Footer/linkedin.svg";
import discordIcon from "@/assests/Footer/discord.svg";
import farcasterIcon from "@/assests/Footer/farcaster.svg";
import telegramIcon from "@/assests/Footer/telegram.svg";
import twitterIcon from "@/assests/Footer/twitter.svg";

type SocialPlatform =
  | "medium"
  | "linkedin"
  | "discord"
  | "farcaster"
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
  farcaster: farcasterIcon,
  telegram: telegramIcon,
  twitter: twitterIcon,
};

const socialLinks = {
  medium: "https://mirror.xyz/0xF362eaCAf0a28651d6f6218e5fD0Faf360fa779F",
  linkedin: "https://linkedin.com/company/lamprosdao",
  discord: "https://discord.gg/5jxNq8bDt2",
  farcaster: "https://farcaster.xyz/lamprosdao.eth",
  telegram: "https://t.me/+7I_N47MwS7VlMDJl",
  twitter: "https://x.com/lamprosdao",
};

export default function SocialIcon({
  platform,
  color,
  className,
}: SocialIconProps) {
  return (
    <Link
      href={socialLinks[platform]}
      target="_blank"
      rel="noopener noreferrer"
    >
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
    </Link>
  );
}
