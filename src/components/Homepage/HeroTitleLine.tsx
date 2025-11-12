"use client";
import React from "react";
import { Typography } from "@/components/UI/Typography";
import type { HeroTitleLine } from "@/types/home/hero";

interface HeroTitleLineProps {
  line: HeroTitleLine;
  variant?: "mobile" | "desktop";
}

const HeroTitleLine = ({ line, variant = "mobile" }: HeroTitleLineProps) => {
  const renderTextWithWavyLetters = () => {
    if (!line.wavyLetters || line.wavyLetters.length === 0) {
      return (
        <span className="inline-block">
          {variant === "mobile" ? line.text.toUpperCase() : line.text}
        </span>
      );
    }

    const parts: React.ReactElement[] = [];
    let currentIndex = 0;
    const text = variant === "mobile" ? line.text.toUpperCase() : line.text;

    // Sort wavy letters by position
    const sortedWavyLetters = [...line.wavyLetters].sort(
      (a, b) => a.position - b.position
    );

    sortedWavyLetters.forEach((wavyLetter, idx) => {
      // Add text before wavy letter
      if (currentIndex < wavyLetter.position) {
        const beforeText = text.substring(currentIndex, wavyLetter.position);
        if (beforeText) {
          parts.push(<span key={`before-${idx}`}>{beforeText}</span>);
        }
      }

      // Add wavy letter
      const letterToShow = text[wavyLetter.position];
      parts.push(
        <span
          key={`wavy-${idx}`}
          className={`${variant === "mobile" ? "uppercase" : ""} font-bohemian wavy-letter inline-block`}
        >
          {letterToShow}
        </span>
      );

      currentIndex = wavyLetter.position + 1;
    });

    // Add remaining text after last wavy letter
    if (currentIndex < text.length) {
      const afterText = text.substring(currentIndex);
      if (afterText) {
        parts.push(
          <span key="after" className="inline-block">
            {afterText}
          </span>
        );
      }
    }

    return parts;
  };

  return (
    <Typography
      variant="h1"
      weight="normal"
      align="center"
      color="dark"
      className={`${variant === "mobile" ? "uppercase leading-tight" : "uppercase"} font-ppmori`}
    >
      {renderTextWithWavyLetters()}
    </Typography>
  );
};

export default HeroTitleLine;
export { HeroTitleLine };
