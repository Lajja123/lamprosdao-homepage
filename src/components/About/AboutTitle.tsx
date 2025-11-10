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

  const parts: (React.ReactElement | string)[] = [];
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
        // Check if beforeText ends with a space - if so, split it to preserve the space
        if (beforeText.endsWith(" ")) {
          const textWithoutSpace = beforeText.slice(0, -1);
          if (textWithoutSpace) {
            parts.push(
              <span key={`before-${idx}`} className="inline-block">
                {textWithoutSpace}
              </span>
            );
          }
          // Add space as a regular text node (not inline-block) to ensure it's preserved
          parts.push(" ");
        } else {
          parts.push(
            <span key={`before-${idx}`} className="inline-block">
              {beforeText}
            </span>
          );
        }
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
