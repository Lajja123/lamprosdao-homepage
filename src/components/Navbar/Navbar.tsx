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
  const pathname = usePathname();

  // Helper function to check if a navigation item is active
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

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
    <nav className="relative   flex items-start md:items-start justify-between ">
      {/* Left: Logo */}
      <div className="flex p-10">
        <Link href="/">
          <Image
            src={logo}
            alt="Lampros DAO logo"
            className="cursor-pointer w-full"
          />
        </Link>
      </div>

      {/* Center: Dynamic Content */}
      <div className="flex justify-center items-center ">
        {finalCenterContent?.type === "image" && finalCenterContent.imageSrc ? (
          <Image
            src={finalCenterContent.imageSrc}
            alt={finalCenterContent.imageAlt || "Center image"}
            className=" w-full "
          />
        ) : (
          <Typography
            variant="h2"
            weight="semibold"
            color="primary"
            className=" p-10 text-center uppercase tracking-wider text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
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
      <div className="hidden md:flex justify-end p-10">
        <ul className="flex flex-col items-end gap-2 bg-[#FFFFFF] z-10 rounded-lg">
          {navigationItems.map((item) => {
            const isActive = isActiveRoute(item.href);
            return (
              <li key={item.href}>
                <Link href={item.href} className="group">
                  <Typography
                    variant="body1"
                    weight="medium"
                    color={isActive ? "accent" : "primary"}
                    className={`uppercase tracking-wide transition-colors ${
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
    </nav>
  );
}
