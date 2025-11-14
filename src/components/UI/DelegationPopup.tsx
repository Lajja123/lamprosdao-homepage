"use client";
import React, { useEffect } from "react";
import { Typography } from "./Typography";
import { smoothScrollToSection } from "@/hooks/smoothScrollToSection";
import Image from "next/image";
import logoIcon from "../../assests/Footer/logo-light.png";

interface DelegationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DelegationPopup({
  isOpen,
  onClose,
}: DelegationPopupProps) {
  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleDelegateClick = () => {
    // Keep the localStorage flag so popup doesn't show again (user is going to delegate section)
    onClose();
    smoothScrollToSection("/governance", "delegate");
  };

  // Render title with wavy letters
  const renderTitleWithWavyLetters = () => {
    const firstLine = "DELEGATE TO";
    const secondLine = "LAMPROS DAO";

    // Helper function to render text with wavy letters
    const renderLineWithWavy = (text: string, wavyPositions: number[]) => {
      const parts: React.ReactElement[] = [];
      let currentIndex = 0;

      // Sort positions
      const sortedPositions = [...wavyPositions].sort((a, b) => a - b);

      sortedPositions.forEach((position, idx) => {
        // Add text before wavy letter
        if (currentIndex < position) {
          const beforeText = text.substring(currentIndex, position);
          if (beforeText) {
            parts.push(
              <span key={`before-${idx}`} className="inline-block">
                {beforeText}
              </span>
            );
          }
        }

        // Add wavy letter
        const letterToShow = text[position];
        parts.push(
          <span
            key={`wavy-${idx}`}
            className="uppercase font-bohemian wavy-letter inline-block"
          >
            {letterToShow}
          </span>
        );

        currentIndex = position + 1;
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
      <>
        <div className="block">
          {renderLineWithWavy(firstLine, [5])}{" "}
          {/* A in DELEGATE at position 5 */}
        </div>
        <div className="block">
          {renderLineWithWavy(secondLine, [1, 9])}{" "}
          {/* A in LAMPROS at position 1, A in DAO at position 9 */}
        </div>
      </>
    );
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={onClose}
      />

      {/* Popup - Fixed center, not scrollable */}
      <div className="fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-lg">
        <div className="relative bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] rounded-2xl p-8 shadow-2xl border-2 border-[#DFF48D]/30">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#DFF48D]/20 hover:bg-[#DFF48D]/40 transition-colors duration-200 group"
            aria-label="Close popup"
          >
            <svg
              className="w-5 h-5 text-[#DFF48D] group-hover:rotate-90 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Content */}
          <div className="space-y-6">
            {/* Icon/Emoji */}
            <div className="flex justify-center">
              <Image
                src={logoIcon}
                alt="logoIcon"
                width={100}
                height={100}
                className="md:w-20 md:h-20 w-10 h-10 object-contain"
              />
            </div>

            {/* Title */}
            <div className="text-center">
              <Typography
                variant="h4"
                color="white"
                weight="bold"
                align="center"
                className="mb-2 tracking-wider"
              >
                {renderTitleWithWavyLetters()}
              </Typography>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <Typography
                variant="body1"
                color="white"
                align="center"
                className="font-ppmori leading-relaxed tracking-wider"
              >
                By delegating your tokens to our team, you enable us to
                represent your interests and drive meaningful governance
                decisions.
              </Typography>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3 pt-2">
              <button
                onClick={handleDelegateClick}
                className="relative bg-[#DFF48D] text-[#0B0B0B] rounded-full px-6 py-3 shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer backdrop-blur-sm border-2 border-transparent group hover:shadow-[0_0_30px_rgba(168,133,205,0.4)] hover:brightness-110"
              >
                <Typography variant="button" color="#0B0B0B" weight="bold">
                  Delegate Now
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
