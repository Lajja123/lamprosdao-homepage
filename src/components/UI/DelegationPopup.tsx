"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography } from "./Typography";
import { smoothScrollToSection } from "@/hooks/smoothScrollToSection";
import Image from "next/image";
import logoIcon from "../../assests/Footer/logo-light.png";
import { gsap } from "gsap";

interface DelegationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  buttonPosition?: {
    x: number;
    y: number;
    width: number;
    height: number;
  } | null;
}

export default function DelegationPopup({
  isOpen,
  onClose,
  buttonPosition,
}: DelegationPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const buttonPositionRef = useRef(buttonPosition);

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

  // Store button position in ref for close animation
  useEffect(() => {
    if (buttonPosition) {
      buttonPositionRef.current = buttonPosition;
    }
  }, [buttonPosition]);

  // Animate popup reveal from button position to center
  useEffect(() => {
    if (isOpen && popupRef.current && overlayRef.current && !isAnimatingOut) {
      const popup = popupRef.current;
      const overlay = overlayRef.current;

      // Reset animation state
      setIsAnimatingOut(false);

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        if (buttonPosition) {
          // Calculate center position
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          // Calculate button center position
          const buttonCenterX = buttonPosition.x + buttonPosition.width / 2;
          const buttonCenterY = buttonPosition.y + buttonPosition.height / 2;

          // Calculate initial offset from center
          const initialX = buttonCenterX - centerX;
          const initialY = buttonCenterY - centerY;

          // Calculate initial scale based on button size (make it start small)
          // Ensure popup has dimensions before calculating
          const popupWidth =
            popup.offsetWidth || popup.getBoundingClientRect().width;
          const popupHeight =
            popup.offsetHeight || popup.getBoundingClientRect().height;

          const initialScale =
            popupWidth > 0 && popupHeight > 0
              ? Math.min(
                  buttonPosition.width / popupWidth,
                  buttonPosition.height / popupHeight,
                  0.3
                )
              : 0.3;

          // Set initial state
          gsap.set(popup, {
            x: initialX,
            y: initialY,
            scale: initialScale,
            opacity: 0,
          });

          gsap.set(overlay, {
            opacity: 0,
          });

          // Animate to final state with smooth, fluid motion
          const tl = gsap.timeline();

          // Fade in overlay smoothly
          tl.to(overlay, {
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          })
            // Start fading in popup slightly before overlay completes
            .to(
              popup,
              {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              },
              "-=0.3"
            )
            // Smoothly animate position and scale with gentle easing
            .to(
              popup,
              {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.9,
                ease: "power3.out",
              },
              "-=0.2"
            );
        } else {
          // Fallback: simple fade-in and scale animation from center
          gsap.set(popup, {
            scale: 0.8,
            opacity: 0,
          });

          gsap.set(overlay, {
            opacity: 0,
          });

          const tl = gsap.timeline();

          tl.to(overlay, {
            opacity: 0.5,
            duration: 0.5,
            ease: "power2.out",
          })
            .to(
              popup,
              {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out",
              },
              "-=0.3"
            )
            .to(
              popup,
              {
                scale: 1,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.2"
            );
        }
      });

      return () => {
        // Cleanup animation on unmount
        gsap.killTweensOf([popup, overlay]);
      };
    }
  }, [isOpen, buttonPosition, isAnimatingOut]);

  // Handle close with reverse animation
  const handleClose = () => {
    if (!popupRef.current || !overlayRef.current || isAnimatingOut) {
      return;
    }

    setIsAnimatingOut(true);
    const popup = popupRef.current;
    const overlay = overlayRef.current;
    const position = buttonPositionRef.current;

    if (position) {
      // Calculate center position
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Calculate button center position
      const buttonCenterX = position.x + position.width / 2;
      const buttonCenterY = position.y + position.height / 2;

      // Calculate final offset from center
      const finalX = buttonCenterX - centerX;
      const finalY = buttonCenterY - centerY;

      // Calculate final scale based on button size
      const popupWidth =
        popup.offsetWidth || popup.getBoundingClientRect().width;
      const popupHeight =
        popup.offsetHeight || popup.getBoundingClientRect().height;

      const finalScale =
        popupWidth > 0 && popupHeight > 0
          ? Math.min(
              position.width / popupWidth,
              position.height / popupHeight,
              0.3
            )
          : 0.3;

      // Animate back to button position with ultra-smooth motion
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimatingOut(false);
          onClose();
        },
      });

      // Start fading overlay first, very smoothly
      tl.to(overlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        // Animate position and scale back to button with smooth deceleration
        .to(
          popup,
          {
            x: finalX,
            y: finalY,
            scale: finalScale,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.3"
        )
        // Fade out popup smoothly, starting slightly after movement begins
        .to(
          popup,
          {
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.5"
        );
    } else {
      // Fallback: simple fade-out animation with smooth motion
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimatingOut(false);
          onClose();
        },
      });

      tl.to(overlay, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      }).to(
        popup,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }
  };

  const handleDelegateClick = () => {
    // Store flag in localStorage so popup doesn't show again
    if (typeof window !== "undefined") {
      localStorage.setItem("delegationPopupDismissed", "true");
    }
    handleClose();
    // Delay navigation slightly to allow animation to start
    setTimeout(() => {
      smoothScrollToSection("/governance", "delegate");
    }, 100);
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

  // Keep component mounted during close animation
  if (!isOpen && !isAnimatingOut) return null;

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
        onClick={handleClose}
      />

      {/* Popup - Fixed center, not scrollable */}
      <div
        ref={popupRef}
        className="fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-lg origin-center"
      >
        <div className="relative bg-gradient-to-br from-[#0B0B0B] via-[#1a1a1a] to-[#0B0B0B] rounded-2xl p-8 shadow-2xl ">
          {/* Close button */}
          <button
            onClick={handleClose}
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
                quality={100}
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
