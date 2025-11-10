"use client";
import React from "react";
import type { TitleWavyConfig } from "@/types/home/research";

interface ResearchTitleProps {
  title: string;
  wavyConfig?: TitleWavyConfig;
}

export const ResearchTitle = ({ title, wavyConfig }: ResearchTitleProps) => {
  const renderTitleWithWavyLetters = () => {
    if (!wavyConfig || !wavyConfig.wavyLetters.length) {
      return <>{title}</>;
    }

    const parts: React.ReactElement[] = [];
    let currentIndex = 0;
    const text = title;

    // Sort wavy letters by position
    const sortedWavyLetters = [...wavyConfig.wavyLetters].sort(
      (a, b) => a.position - b.position
    );

    sortedWavyLetters.forEach((wavyLetter, idx) => {
      // Add text before wavy letter
      if (currentIndex < wavyLetter.position) {
        const beforeText = text.substring(currentIndex, wavyLetter.position);
        if (beforeText) {
          parts.push(
            <span key={`before-${idx}`} className="inline-block">
              {beforeText}
            </span>
          );
        }
      }

      // Add wavy letter
      const letterToShow = text[wavyLetter.position];
      parts.push(
        <span
          key={`wavy-${idx}`}
          className="uppercase font-bohemian inline-block"
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

  return <>{renderTitleWithWavyLetters()}</>;
};

export default ResearchTitle;
