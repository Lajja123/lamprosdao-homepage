"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "./Typography";
import star from "../../assests/star.svg";

type MarqueeProps = {
  text: string;
  separatorSrc?: string;
  speedMs?: number;
};

export default function Marquee({
  text,

  speedMs = 70000,
}: MarqueeProps) {
  const items = Array.from({ length: 8 }).map((_, i) => (
    <li key={i} className="flex items-center gap-4">
      <Typography
        variant="body1"
        className="whitespace-nowrap --font-pp-mori uppercase"
        color="primary"
      >
        {text}
      </Typography>
      <Image
        src={star}
        alt="separator"
        className="h-3 w-3 opacity-80"
        width={100}
        height={100}
      />
    </li>
  ));

  return (
    <div className="marquee w-full overflow-hidden border-b border-black/10 bg-[#F3FBD4]">
      <div
        className="marquee__track flex gap-8"
        style={{
          animationDuration: `${speedMs}ms`,
        }}
      >
        <ul className="flex items-center gap-8 py-2 pl-4">{items}</ul>
        <ul className="flex items-center gap-8 py-2 pl-4" aria-hidden="true">
          {items}
        </ul>
      </div>
    </div>
  );
}
