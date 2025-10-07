"use client";
import Image from "next/image";
import linkedin from "@/assests/Footer/linkedin.svg";
import twitter from "@/assests/Footer/twitter.svg";
import telegram from "@/assests/Footer/telegram.svg";
import medium from "@/assests/Footer/medium.svg";
import discord from "@/assests/Footer/discord.svg";
import notion from "@/assests/Footer/notion.svg";
import logo from "@/assests/Footer/logo.svg";
import lampros from "@/assests/Footer/lampros-dao.png";
import rectangle from "@/assests/Footer/Rectangle.svg";
import { Typography } from "@/components/UI/Typography";

export default function Footer() {
  return (
    <footer className="w-full bg-[#FFFFFF] text-white ">
      <div
        className="grid grid-cols-2 md:grid-cols-4 text-center border border-white divide-x md:divide-x divide-y md:divide-y-0 divide-white/60"
        style={{ fontFamily: "PP Mori" }}
      >
        <Typography
          variant="button"
          color="secondary"
          align="center"
          className="p-2 md:p-5"
        >
          Home
        </Typography>
        <Typography
          variant="button"
          color="secondary"
          align="center"
          className="p-2 md:p-5"
        >
          About
        </Typography>
        <Typography
          variant="button"
          color="secondary"
          align="center"
          className="p-2 md:p-5"
        >
          Governance
        </Typography>
        <Typography
          variant="button"
          color="secondary"
          align="center"
          className="p-2 md:p-5"
        >
          Contribution
        </Typography>
      </div>
      <div className="relative w-full border border-white p-5">
        <Image
          src={rectangle}
          alt={""}
          width={500}
          height={500}
          className="mx-auto"
        />
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <Image
            src={lampros}
            alt={""}
            width={1200}
            height={1200}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="border border-white flex flex-col md:flex-row items-stretch">
        <div className="flex items-center justify-center w-full md:w-1/10 border-b md:border-b-0 md:border-r border-white p-2 md:p-3">
          <Image
            src={logo}
            alt="Lampros light logo"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>
        <div className="flex-1 hidden md:block p-3" />
        <div className="grid grid-cols-3 md:grid-cols-6 w-full md:w-1/5 text-center border-t md:border-t-0 md:border-l border-white">
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={medium}
              alt="Medium"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={linkedin}
              alt="LinkedIn"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={discord}
              alt="Discord"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={notion}
              alt="Notion"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={telegram}
              alt="Telegram"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div className="border-l border-white flex items-center justify-center p-2 md:p-3">
            <Image
              src={twitter}
              alt="Twitter"
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
