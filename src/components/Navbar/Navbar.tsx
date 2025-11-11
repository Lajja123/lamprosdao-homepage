"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assests/logo.svg";
import { Typography } from "@/components/UI/Typography";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavbarContent } from "@/hooks/useNavbarContent";
import type { NavbarProps } from "@/types";

// Navigation items configuration
const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/governance", label: "Governance" },
  { href: "/contribution", label: "Contribution" },
] as const;

export default function Navbar({ centerContent }: NavbarProps) {
  // Use hook to get dynamic content if no centerContent prop is provided
  const dynamicContent = useNavbarContent();
  const finalCenterContent = centerContent || dynamicContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const navbarRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const wavyLettersRef = useRef<HTMLSpanElement[]>([]);
  const pathname = usePathname();

  // Helper function to check if a navigation item is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  // Initial navbar animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate navbar elements on mount
      gsap.fromTo(
        [logoRef.current, centerRef.current, menuRef.current],
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      // Add wavy animation to special letters
      // wavyLettersRef.current.forEach((letter, index) => {
      //   if (letter) {
      //     gsap.to(letter, {
      //       y: -8,
      //       duration: 0.6,
      //       ease: "power2.inOut",
      //       repeat: -1,
      //       yoyo: true,
      //       delay: 1 + index * 0.1,
      //     });
      //   }
      // });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  // Menu toggle animation
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
    <nav
      ref={navbarRef}
      className="relative flex items-start md:items-start justify-between z-10  md:border-none border-b border-[#BFAFCF]"
    >
      <div ref={logoRef} className=" p-5 pb-2">
        <Link href="/">
          <Image
            src={logo}
            alt="Lampros DAO logo"
            className="cursor-pointer hover:scale-105 transition-transform duration-300 md:w-48 w-30"
            priority
            width={200}
            height={60}
          />
        </Link>
      </div>

      {/* Center: Dynamic Content - Hidden on mobile */}
      <div
        ref={centerRef}
        className="hidden md:flex justify-center items-center"
      >
        <Typography
          variant="h1"
          weight="normal"
          color="primary"
          className=" p-10 text-center uppercase"
        >
          {finalCenterContent?.title
            ? (() => {
                const title = finalCenterContent.title;

                switch (title) {
                  case "About Us":
                    return (
                      <>
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[0] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          A
                        </span>
                        bout{" "}
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[1] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          U
                        </span>
                        s
                      </>
                    );
                  case "Governance":
                    return (
                      <>
                        G
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[0] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          o
                        </span>
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[1] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          v
                        </span>
                        ern
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[2] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          a
                        </span>
                        nc
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[3] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          e
                        </span>
                      </>
                    );
                  case "Contribution":
                    return (
                      <>
                        C
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[0] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          o
                        </span>
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[1] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          nt
                        </span>
                        rib
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[2] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
                          u
                        </span>
                        t
                        <span
                          ref={(el) => {
                            if (el) wavyLettersRef.current[3] = el;
                          }}
                          className="uppercase font-bohemian wavy-letter inline-block"
                        >
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
      </div>

      {/* Right: Desktop Menu */}
      <div
        ref={menuRef}
        className="hidden md:flex justify-end p-5 relative z-20"
      >
        <ul className="flex flex-col items-end gap-2 bg-[#FFFFFF] rounded-lg">
          {navigationItems.map((item, index) => {
            const isActive = isActiveRoute(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className="group">
                  <Typography
                    variant="button"
                    weight="medium"
                    color={isActive ? "accent" : "primary"}
                    className={`uppercase tracking-wide transition-aljl duration-300 hover:scale-105 ${
                      isActive
                        ? "text-[#A885CD] font-semibold "
                        : "group-hover:text-[#A885CD]  "
                    }`}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <div className="md:hidden flex items-center p-4 z-50 pb-2 bg-[#BFAFCF]">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col justify-center items-center w-8 h-8 space-y-1 group"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#FFFFFF] transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FFFFFF] transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#FFFFFF] transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            ref={panelRef}
            className="absolute top-0 right-0 w-full h-full bg-white shadow-xl"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-5 h-5 text-[#BFAFCF]"
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
            </div>

            {/* Mobile Navigation */}
            <div className="p-6">
              <ul ref={listRef} className="space-y-4">
                {navigationItems.map((item) => {
                  const isActive = isActiveRoute(item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block group"
                      >
                        <Typography
                          variant="h4"
                          weight="medium"
                          color={isActive ? "accent" : "primary"}
                          className={`uppercase tracking-wide transition-all duration-300 py-3 px-4 rounded-lg ${
                            isActive
                              ? "text-[#A885CD] font-semibold bg-[#A885CD]/10"
                              : "group-hover:text-[#A885CD] group-hover:bg-gray-50"
                          }`}
                        >
                          {item.label}
                        </Typography>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
