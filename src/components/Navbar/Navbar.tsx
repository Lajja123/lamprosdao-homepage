"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assests/logo.svg";
import { Typography } from "@/components/UI/Typography"; // adjust path
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavbarContent } from "@/hooks/useNavbarContent";
import type { NavbarProps } from "@/types";

export default function Navbar({ centerContent }: NavbarProps) {
  // Use hook to get dynamic content if no centerContent prop is provided
  const dynamicContent = useNavbarContent();
  const finalCenterContent = centerContent || dynamicContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const panel = panelRef.current;
    const list = listRef.current;
    if (!panel) return;

    if (isMenuOpen) {
      gsap.set(panel, { display: "block" });
      gsap.fromTo(
        panel,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.35, ease: "power2.out" }
      );

      if (list) {
        gsap.fromTo(
          Array.from(list.children),
          { y: -6, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          }
        );
      }
    } else {
      gsap.to(panel, {
        autoAlpha: 0,
        y: -12,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(panel, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className="relative flex items-start md:items-start justify-between ">
      {/* Left: Logo */}
      <div className=" flex  p-10">
        <Link href="/">
          <Image
            src={logo}
            alt="Lampros DAO logo"
            width={200}
            height={200}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Center: Dynamic Content */}
      <div className="hidden md:flex flex-1 justify-center items-center p-10 ">
        {finalCenterContent?.type === "image" && finalCenterContent.imageSrc ? (
          <Image
            src={finalCenterContent.imageSrc}
            alt={finalCenterContent.imageAlt || "Center image"}
            className="object-contain absolute -top-10 w-2/5"
          />
        ) : (
          <Typography
            variant="h1"
            weight="bold"
            color="primary"
            className="text-center uppercase tracking-wider "
          >
            {finalCenterContent?.title
              ? (() => {
                  const title = finalCenterContent.title;

                  switch (title) {
                    case "About Us":
                      return (
                        <>
                          <span className="uppercase font-bohemian wavy-letter">
                            A
                          </span>
                          bout{" "}
                          <span className="uppercase font-bohemian wavy-letter">
                            U
                          </span>
                          s
                        </>
                      );
                    case "Governance":
                      return (
                        <>
                          G
                          <span className="uppercase font-bohemian wavy-letter">
                            o
                          </span>
                          <span className="uppercase font-bohemian wavy-letter">
                            v
                          </span>
                          ern
                          <span className="uppercase font-bohemian wavy-letter">
                            a
                          </span>
                          nc
                          <span className="uppercase font-bohemian wavy-letter">
                            e
                          </span>
                        </>
                      );
                    case "Contribution":
                      return (
                        <>
                          C
                          <span className="uppercase font-bohemian wavy-letter">
                            o
                          </span>
                          <span className="uppercase font-bohemian wavy-letter">
                            nt
                          </span>
                          rib
                          <span className="uppercase font-bohemian wavy-letter">
                            u
                          </span>
                          t
                          <span className="uppercase font-bohemian wavy-letter">
                            i
                          </span>
                          on
                        </>
                      );
                    default:
                      return title;
                  }
                })()
              : finalCenterContent?.title}
          </Typography>
        )}
      </div>

      {/* Right: Desktop Menu */}
      <div className="hidden md:flex  justify-end ">
        <ul className=" flex flex-col items-end gap-2 bg-[#FFFFFF] p-10 z-10 rounded-lg">
          <li>
            <Link href="/" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="accent"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Home
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                About Us
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/governance" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Governance
              </Typography>
            </Link>
          </li>
          <li>
            <Link href="/contribution" className="group">
              <Typography
                variant="body1"
                weight="medium"
                color="primary"
                className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors"
              >
                Contribution
              </Typography>
            </Link>
          </li>
        </ul>
      </div>

      {/* Center: Mobile Dynamic Content */}
      <div className="flex md:hidden flex-1 justify-center">
        {finalCenterContent?.type === "image" && finalCenterContent.imageSrc ? (
          <Image
            src={finalCenterContent.imageSrc}
            alt={finalCenterContent.imageAlt || "Center image"}
            width={80}
            height={80}
            className="object-contain"
          />
        ) : (
          <Typography
            variant="h1"
            weight="bold"
            color="primary"
            className="text-center uppercase tracking-wider  p-10"
          >
            {finalCenterContent?.title
              ? (() => {
                  const title = finalCenterContent.title;

                  switch (title) {
                    case "About Us":
                      return (
                        <>
                          <span className="uppercase font-bohemian wavy-letter">
                            A
                          </span>
                          bout{" "}
                          <span className="uppercase font-bohemian wavy-letter">
                            U
                          </span>
                          s
                        </>
                      );
                    case "Governance":
                      return (
                        <>
                          G
                          <span className="uppercase font-bohemian wavy-letter">
                            o
                          </span>
                          v
                          <span className="uppercase font-bohemian wavy-letter">
                            e
                          </span>
                          rn
                          <span className="uppercase font-bohemian wavy-letter">
                            a
                          </span>
                          nce
                        </>
                      );
                    case "Contribution":
                      return (
                        <>
                          C
                          <span className="uppercase font-bohemian wavy-letter">
                            o
                          </span>
                          ntr
                          <span className="uppercase font-bohemian wavy-letter">
                            i
                          </span>
                          b
                          <span className="uppercase font-bohemian wavy-letter">
                            u
                          </span>
                          t
                          <span className="uppercase font-bohemian wavy-letter">
                            i
                          </span>
                          on
                        </>
                      );
                    default:
                      return title;
                  }
                })()
              : "LAMPROS DAO"}
          </Typography>
        )}
      </div>

      {/* Right: Mobile Hamburger */}
      <div className="flex md:hidden flex-1 justify-end">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="inline-flex text-black items-center justify-center p-2 rounded-md "
        >
          {/* Icon */}
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel (animated with GSAP) */}
      <div className="absolute top-full left-0 w-full md:hidden z-50">
        <div
          ref={panelRef}
          style={{ display: "none" }}
          className="w-full mx-auto mt-3 rounded-xl border border-white/10 bg-black shadow-2xl backdrop-blur-md p-4"
        >
          <ul ref={listRef} className="flex flex-col items-end gap-3">
            <li>
              <Link
                href="/"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="accent"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Home
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  About Us
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/governance"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Governance
                </Typography>
              </Link>
            </li>
            <li>
              <Link
                href="/contribution"
                className="group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Typography
                  variant="body1"
                  weight="medium"
                  color="primary"
                  className="uppercase tracking-wide group-hover:text-[#A885CD] transition-colors text-white"
                >
                  Contribution
                </Typography>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
