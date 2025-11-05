"use client";
import React from "react";

interface AboutTitleProps {
  text: string;
  wavyLetters?: Array<{ letter: string; position: number }>;
}

export const AboutTitle = ({ text, wavyLetters }: AboutTitleProps) => {
  if (!wavyLetters || wavyLetters.length === 0) {
    return <>{text}</>;
  }

  const parts: React.ReactElement[] = [];
  let currentIndex = 0;

  // Sort wavy letters by position
  const sortedWavyLetters = [...wavyLetters].sort(
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
        className="uppercase font-bohemian wavy-letter inline-block"
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

  return <>{parts}</>;
};

export default AboutTitle;
