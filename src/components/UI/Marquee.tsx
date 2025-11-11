"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./Typography";
import star from "../../assests/star.svg";

type MarqueeItem = {
  text: string;
  link?: {
    text: string;
    url: string;
  };
};

type MarqueeProps = {
  items: (string | MarqueeItem)[];
  separatorSrc?: string;
  speedMs?: number;
};

export default function Marquee({ items, speedMs = 70000 }: MarqueeProps) {
  const renderItemContent = (item: string | MarqueeItem) => {
    if (typeof item === "string") {
      return item;
    }

    const { text, link } = item;
    if (!link) {
      return text;
    }

    const parts = text.split(link.text);
    if (parts.length !== 2) {
      return text;
    }

    return (
      <>
        {parts[0]}
        <Link
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-80 transition-opacity"
        >
          {link.text}
        </Link>
        {parts[1]}
      </>
    );
  };

  const marqueeItems = items.map((item, i) => (
    <li key={i} className="flex items-center gap-4">
      <Typography
        variant="body1"
        className="whitespace-nowrap --font-pp-mori uppercase"
        color="primary"
      >
        {renderItemContent(item)}
      </Typography>
      <Image
        src={star}
        alt="separator"
        className="h-3 w-3 opacity-80"
        width={12}
        height={12}
        loading="lazy"
      />
    </li>
  ));

  return (
    <div className="marquee w-full overflow-hidden border-b border-black/10 bg-[#F3FBD4] py-1 backdrop-blur-lg">
      <div
        className="marquee__track flex gap-8"
        style={{
          animationDuration: `${speedMs}ms`,
        }}
      >
        <ul className="flex items-center gap-8 py-2 pl-4">{marqueeItems}</ul>
        <ul className="flex items-center gap-8 py-2 pl-4" aria-hidden="true">
          {marqueeItems}
        </ul>
      </div>
    </div>
  );
}
