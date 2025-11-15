"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const hasAnimatedRef = useRef(false);

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

  // Reset animation flag when popup closes
  useEffect(() => {
    if (!isOpen) {
      hasAnimatedRef.current = false;
    }
  }, [isOpen]);

  // Helper function to start the animation
  const startAnimation = useCallback(
    (
      popup: HTMLDivElement,
      overlay: HTMLDivElement,
      position: { x: number; y: number; width: number; height: number } | null
    ) => {
      // Check if mobile (less than 768px - md breakpoint)
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

      // On mobile, always use simple center animation
      if (isMobile) {
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
        return;
      }

      // Desktop: use enhanced 3D animations
      if (position) {
        // Calculate center position
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate button center position
        const buttonCenterX = position.x + position.width / 2;
        const buttonCenterY = position.y + position.height / 2;

        // Calculate initial offset from center (same logic as close animation)
        const initialX = buttonCenterX - centerX;
        const initialY = buttonCenterY - centerY;

        // Calculate initial scale based on button size (same logic as close animation)
        const popupWidth =
          popup.offsetWidth || popup.getBoundingClientRect().width;
        const popupHeight =
          popup.offsetHeight || popup.getBoundingClientRect().height;

        const initialScale =
          popupWidth > 0 && popupHeight > 0
            ? Math.min(
                position.width / popupWidth,
                position.height / popupHeight,
                0.3
              )
            : 0.3;

        // Set initial state (start from button position with 3D transforms)
        gsap.set(popup, {
          x: initialX,
          y: initialY,
          scale: initialScale,
          opacity: 0,
          rotationX: -45,
          rotationY: 15,
          rotationZ: -10,
          skewX: 5,
          transformPerspective: 1000,
          transformOrigin: "center center",
        });

        gsap.set(overlay, {
          opacity: 0,
        });

        // Animate to final state (center) with appealing 3D effects
        const tl = gsap.timeline();

        // Fade in overlay smoothly
        tl.to(overlay, {
          opacity: 0.5,
          duration: 0.5,
          ease: "power2.out",
        })
          // Start fading in popup with 3D rotation
          .to(
            popup,
            {
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
            },
            "-=0.3"
          )
          // Smoothly animate position, scale, rotation, and skew to center
          .to(
            popup,
            {
              x: 0,
              y: 0,
              scale: 1,
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              skewX: 0,
              duration: 1.0,
              ease: "back.out(1.2)",
            },
            "-=0.3"
          )
          // Add a subtle bounce effect at the end
          .to(
            popup,
            {
              scale: 1.02,
              duration: 0.15,
              ease: "power2.out",
            },
            "-=0.1"
          )
          .to(popup, {
            scale: 1,
            duration: 0.2,
            ease: "power2.inOut",
          });
      } else {
        // Fallback: enhanced fade-in and scale animation from center with 3D effects
        gsap.set(popup, {
          scale: 0.8,
          opacity: 0,
          rotationX: -30,
          rotationY: 10,
          rotationZ: -5,
          skewX: 3,
          transformPerspective: 1000,
          transformOrigin: "center center",
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
              rotationX: 0,
              rotationY: 0,
              rotationZ: 0,
              skewX: 0,
              duration: 0.8,
              ease: "back.out(1.1)",
            },
            "-=0.2"
          )
          // Add subtle bounce
          .to(
            popup,
            {
              scale: 1.02,
              duration: 0.15,
              ease: "power2.out",
            },
            "-=0.1"
          )
          .to(popup, {
            scale: 1,
            duration: 0.2,
            ease: "power2.inOut",
          });
      }
    },
    []
  );

  // Set initial hidden state immediately when popup opens
  useEffect(() => {
    if (
      isOpen &&
      popupRef.current &&
      overlayRef.current &&
      !hasAnimatedRef.current
    ) {
      const popup = popupRef.current;
      const overlay = overlayRef.current;

      // Immediately hide popup and overlay before animation starts
      gsap.set(popup, {
        opacity: 0,
        visibility: "hidden",
      });

      gsap.set(overlay, {
        opacity: 0,
        visibility: "hidden",
      });
    }
  }, [isOpen]);

  // Animate popup reveal from button position to center
  useEffect(() => {
    if (
      isOpen &&
      popupRef.current &&
      overlayRef.current &&
      !isAnimatingOut &&
      !hasAnimatedRef.current
    ) {
      const popup = popupRef.current;
      const overlay = overlayRef.current;

      // Check if mobile (less than 768px - md breakpoint)
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

      // On mobile, skip button position and use center animation
      if (isMobile) {
        hasAnimatedRef.current = true;

        // Make visible before starting animation
        gsap.set([popup, overlay], {
          visibility: "visible",
        });

        // Use double requestAnimationFrame to ensure DOM and dimensions are ready
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            startAnimation(popup, overlay, null);
          });
        });

        return () => {
          // Cleanup animation on unmount
          gsap.killTweensOf([popup, overlay]);
        };
      }

      // Desktop: use button position
      // Use buttonPosition prop directly if available, otherwise use ref
      const position = buttonPosition || buttonPositionRef.current;

      // If no position yet, wait a bit and check again (button might still be animating)
      if (!position) {
        const checkPosition = setInterval(() => {
          const currentPosition = buttonPosition || buttonPositionRef.current;
          if (currentPosition && popupRef.current && overlayRef.current) {
            clearInterval(checkPosition);
            // Make visible before starting animation
            gsap.set([popupRef.current, overlayRef.current], {
              visibility: "visible",
            });
            // Trigger animation with the position
            hasAnimatedRef.current = true;
            startAnimation(
              popupRef.current,
              overlayRef.current,
              currentPosition
            );
          }
        }, 100);

        return () => {
          clearInterval(checkPosition);
        };
      }

      // Mark as animated to prevent re-running
      hasAnimatedRef.current = true;

      // Make visible before starting animation
      gsap.set([popup, overlay], {
        visibility: "visible",
      });

      // Use double requestAnimationFrame to ensure DOM and dimensions are ready
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          startAnimation(popup, overlay, position);
        });
      });

      return () => {
        // Cleanup animation on unmount
        gsap.killTweensOf([popup, overlay]);
      };
    }
  }, [isOpen, buttonPosition, startAnimation]);

  // Handle close with reverse animation
  const handleClose = () => {
    if (!popupRef.current || !overlayRef.current || isAnimatingOut) {
      return;
    }

    setIsAnimatingOut(true);
    const popup = popupRef.current;
    const overlay = overlayRef.current;
    const position = buttonPositionRef.current;

    // Check if mobile (less than 768px - md breakpoint)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // On mobile, use simple center fade-out animation
    if (isMobile) {
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
      return;
    }

    // Desktop: use enhanced 3D animations
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

      // Animate back to button position with enhanced 3D effects
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
        // Animate position, scale, rotation, and skew back to button with 3D effects
        .to(
          popup,
          {
            x: finalX,
            y: finalY,
            scale: finalScale,
            rotationX: -45,
            rotationY: 15,
            rotationZ: -10,
            skewX: 5,
            duration: 0.9,
            ease: "power2.in",
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
      // Fallback: enhanced fade-out animation with 3D effects
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
          rotationX: -30,
          rotationY: 10,
          rotationZ: -5,
          skewX: 3,
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
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
        style={{ opacity: 0, visibility: "hidden" }}
        onClick={handleClose}
      />

      {/* Popup - Fixed center, not scrollable */}
      <div
        ref={popupRef}
        className="fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-[90%] max-w-lg origin-center"
        style={{
          opacity: 0,
          visibility: "hidden",
          perspective: "1000px",
          transformStyle: "preserve-3d",
        }}
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
