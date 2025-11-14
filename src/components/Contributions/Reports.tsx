"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../UI/Button";
import Grid, { GridCell } from "../UI/Grid";
import Typography from "../UI/Typography";
import Link from "next/link";
import { useContributionsReportsConfig } from "@/hooks/useContributionsReportsConfig";
import type { ContributionItem } from "@/types/contributions/reports";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ReportsProps {
  activeChain: "arbitrum" | "optimism";
}

export default function Reports({ activeChain }: ReportsProps) {
  const { backgroundImages, textConfig, layoutConfig, contributionsData } =
    useContributionsReportsConfig();
  const contributions = contributionsData[activeChain]?.contributions;
  const items = (contributions?.items as ContributionItem[]) || [];

  // Refs for animation elements
  // Mobile refs
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileFooterRef = useRef<HTMLDivElement | null>(null);

  // Desktop refs
  const desktopHeaderRef = useRef<HTMLDivElement>(null);
  const desktopItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopFooterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Mobile header animation
    if (mobileHeaderRef.current) {
      gsap.set(mobileHeaderRef.current, {
        opacity: 0,
        y: 40,
      });

      const headerAnimation = gsap.to(mobileHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileHeaderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (headerAnimation.scrollTrigger) {
        scrollTriggers.push(headerAnimation.scrollTrigger);
      }
    }

    // Mobile items animation
    mobileItemRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          y: 40,
        });

        const itemAnimation = gsap.to(ref, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (itemAnimation.scrollTrigger) {
          scrollTriggers.push(itemAnimation.scrollTrigger);
        }
      }
    });

    // Mobile footer animation
    if (mobileFooterRef.current) {
      gsap.set(mobileFooterRef.current, {
        opacity: 0,
        y: 30,
      });

      const footerAnimation = gsap.to(mobileFooterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileFooterRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (footerAnimation.scrollTrigger) {
        scrollTriggers.push(footerAnimation.scrollTrigger);
      }
    }

    // Desktop header animation
    if (desktopHeaderRef.current) {
      gsap.set(desktopHeaderRef.current, {
        opacity: 0,
        y: 40,
      });

      const headerAnimation = gsap.to(desktopHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopHeaderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (headerAnimation.scrollTrigger) {
        scrollTriggers.push(headerAnimation.scrollTrigger);
      }
    }

    // Desktop items animation
    desktopItemRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          y: 40,
        });

        const itemAnimation = gsap.to(ref, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            once: true,
          },
        });

        if (itemAnimation.scrollTrigger) {
          scrollTriggers.push(itemAnimation.scrollTrigger);
        }
      }
    });

    // Desktop footer animation
    if (desktopFooterRef.current) {
      gsap.set(desktopFooterRef.current, {
        opacity: 0,
        y: 30,
      });

      const footerAnimation = gsap.to(desktopFooterRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopFooterRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (footerAnimation.scrollTrigger) {
        scrollTriggers.push(footerAnimation.scrollTrigger);
      }
    }

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [items.length, activeChain]);

  return (
    <>
      {/* Mobile Layout */}
      <div
        className={layoutConfig.mobile.container.className}
        style={{
          backgroundColor: layoutConfig.mobile.container.backgroundColor,
        }}
      >
        {/* Header Section */}
        <div className={layoutConfig.mobile.header.className}>
          <div ref={mobileHeaderRef}>
            <Typography
              variant={textConfig.header.variant}
              color={textConfig.header.color as `#${string}` | "yellow"}
              weight={textConfig.header.weight}
              align={textConfig.header.align}
              className={textConfig.header.className}
            >
              {contributions?.header || ""}
            </Typography>
          </div>
        </div>

        {/* Contribution Items */}
        <div className="">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={layoutConfig.mobile.item.container.className}
            >
              {/* Header Row */}
              <div className={layoutConfig.mobile.item.headerRow.className}>
                {/* Number cell */}
                <div className={layoutConfig.mobile.item.numberCell.className}>
                  <div
                    className="w-full h-full"
                    style={{
                      background:
                        " linear-gradient(270deg, #606060 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",
                    }}
                  >
                    <div
                      className="w-full h-full absolute top-0 left-0 z-10"
                      style={{
                        backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        mixBlendMode: "normal",
                        opacity: 0.5,
                      }}
                    ></div>
                    <Typography
                      variant={textConfig.itemNumber.variant}
                      color={
                        textConfig.itemNumber.color as `#${string}` | "white"
                      }
                      weight={textConfig.itemNumber.weight}
                      className={`${textConfig.itemNumber.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                  </div>
                </div>
                {/* Title cell */}
                <div className={layoutConfig.mobile.item.titleCell.className}>
                  <Typography
                    variant={textConfig.itemTitle.variant}
                    color={textConfig.itemTitle.color as `#${string}` | "white"}
                    weight={textConfig.itemTitle.weight}
                    className={textConfig.itemTitle.className}
                  >
                    {item.title}
                  </Typography>
                </div>
              </div>

              {/* Body */}
              <div className={layoutConfig.mobile.item.body.className}>
                <div
                  ref={(el) => {
                    mobileItemRefs.current[index] = el;
                  }}
                >
                  <Typography
                    variant={textConfig.itemDescription.variant}
                    color={
                      textConfig.itemDescription.color as `#${string}` | "white"
                    }
                    weight={textConfig.itemDescription.weight}
                    className={textConfig.itemDescription.className}
                  >
                    {item.description}
                  </Typography>
                  <div className="mt-4">
                    <Link
                      href={item.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        label={item.buttonLabel}
                        color={item.buttonColor}
                        textColor={item.buttonTextColor}
                        className={layoutConfig.mobile.item.button.className}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        {contributions.showSeeMoreButton && (
          <div
            className={layoutConfig.mobile.footer.className}
            style={{
              backgroundColor: layoutConfig.mobile.footer.backgroundColor,
            }}
          >
            <div ref={mobileFooterRef}>
              <Link
                href="https://lamprosdao.notion.site/arbitrum-contributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label={textConfig.seeMoreButton.label}
                  color={textConfig.seeMoreButton.color}
                  textColor={textConfig.seeMoreButton.textColor}
                />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
        style={{
          backgroundColor: layoutConfig.desktop.grid.backgroundColor,
        }}
      >
        <GridCell
          className={layoutConfig.desktop.header.emptyCell1.className}
        />
        <GridCell
          colSpan={layoutConfig.desktop.header.titleCell.colSpan}
          className={layoutConfig.desktop.header.titleCell.className}
        >
          <div ref={desktopHeaderRef}>
            <Typography
              variant={textConfig.headerDesktop.variant}
              color={textConfig.headerDesktop.color as `#${string}` | "yellow"}
              weight={textConfig.headerDesktop.weight}
              className={textConfig.headerDesktop.className}
            >
              {contributions?.header || ""}{" "}
            </Typography>
          </div>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.header.emptyCell2.colStart}
          className={layoutConfig.desktop.header.emptyCell2.className}
        />

        {items
          .map((_, idx) => idx)
          .filter((i) => i % 2 === 0)
          .map((i) => {
            const pairIndex = i / 2;
            const leftItem = items[i];
            const rightItem = items[i + 1];
            const leftNumber = String(i + 1).padStart(2, "0");
            const rightNumber = rightItem
              ? String(i + 2).padStart(2, "0")
              : null;
            const rowBase = 2 + pairIndex * 2;
            return (
              <React.Fragment key={`pair-${i}`}>
                <GridCell
                  key={`num-left-${i}`}
                  rowStart={rowBase}
                  className={layoutConfig.desktop.item.numberCell.className}
                  style={{
                    background:
                      " linear-gradient(270deg, #606060 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",
                  }}
                >
                  <div
                    className="w-full h-full absolute top-0 left-0 z-10"
                    style={{
                      backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      mixBlendMode: "normal",
                      opacity: 0.5,
                    }}
                  >
                    <Typography
                      variant={textConfig.itemNumberDesktop.variant}
                      color={
                        textConfig.itemNumberDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemNumberDesktop.weight}
                      className={`${textConfig.itemNumberDesktop.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
                    >
                      {leftNumber}
                    </Typography>
                  </div>
                </GridCell>
                <GridCell
                  key={`title-left-${i}`}
                  colSpan={layoutConfig.desktop.item.titleCell.colSpan}
                  rowStart={rowBase}
                  className={layoutConfig.desktop.item.titleCell.className}
                >
                  <Typography
                    variant={textConfig.itemTitleDesktop.variant}
                    color={
                      textConfig.itemTitleDesktop.color as
                        | `#${string}`
                        | "white"
                    }
                    weight={textConfig.itemTitleDesktop.weight}
                    className={textConfig.itemTitleDesktop.className}
                  >
                    {leftItem.title}
                  </Typography>
                </GridCell>

                {rightItem && (
                  <GridCell
                    key={`num-right-${i + 1}`}
                    colStart={6}
                    rowStart={rowBase}
                    className={layoutConfig.desktop.item.numberCell.className}
                  >
                    <div
                      className="w-full h-full"
                      style={{
                        background:
                          " linear-gradient(270deg, #606060 0%, rgba(0, 0, 0, 0.78) 35.5%, #000000 66%, #000000 100%)",
                      }}
                    >
                      <div
                        className="w-full h-full absolute top-0 left-0 z-10"
                        style={{
                          backgroundImage: `url(${backgroundImages.arrowBg.src})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          mixBlendMode: "normal",
                          opacity: 0.5,
                        }}
                      ></div>
                      <Typography
                        variant={textConfig.itemNumberDesktop.variant}
                        color={
                          textConfig.itemNumberDesktop.color as
                            | `#${string}`
                            | "white"
                        }
                        weight={textConfig.itemNumberDesktop.weight}
                        className={`${textConfig.itemNumberDesktop.className} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20`}
                      >
                        {rightNumber}
                      </Typography>
                    </div>
                  </GridCell>
                )}

                {rightItem && (
                  <GridCell
                    key={`title-right-${i + 1}`}
                    colSpan={layoutConfig.desktop.item.titleCell.colSpan}
                    colStart={7}
                    rowStart={rowBase}
                    className={layoutConfig.desktop.item.titleCell.className}
                  >
                    <Typography
                      variant={textConfig.itemTitleDesktop.variant}
                      color={
                        textConfig.itemTitleDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemTitleDesktop.weight}
                      className={textConfig.itemTitleDesktop.className}
                    >
                      {rightItem.title}
                    </Typography>
                  </GridCell>
                )}

                <GridCell
                  key={`spacer-${i}`}
                  rowStart={rowBase + 1}
                  className={layoutConfig.desktop.item.spacerCell.className}
                />
                <GridCell
                  key={`desc-left-${i}`}
                  colSpan={layoutConfig.desktop.item.descriptionCell.colSpan}
                  rowStart={rowBase + 1}
                  className={
                    layoutConfig.desktop.item.descriptionCell.className
                  }
                >
                  <div
                    ref={(el) => {
                      desktopItemRefs.current[i] = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.itemDescriptionDesktop.variant}
                      color={
                        textConfig.itemDescriptionDesktop.color as
                          | `#${string}`
                          | "white"
                      }
                      weight={textConfig.itemDescriptionDesktop.weight}
                      className={textConfig.itemDescriptionDesktop.className}
                    >
                      {leftItem.description}
                    </Typography>
                    <div className="mt-4">
                      <Link
                        href={leftItem.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          label={leftItem.buttonLabel}
                          color={leftItem.buttonColor}
                          textColor={leftItem.buttonTextColor}
                          className={layoutConfig.desktop.item.button.className}
                        />
                      </Link>
                    </div>
                  </div>
                </GridCell>
                <GridCell
                  key={`desc-spacer-${i}`}
                  colStart={
                    layoutConfig.desktop.item.descriptionSpacerCell.colStart
                  }
                  rowStart={rowBase + 1}
                  className={
                    rightItem ? "border-b border-white" : "border-none"
                  }
                />

                {rightItem && (
                  <GridCell
                    key={`desc-right-${i + 1}`}
                    colSpan={layoutConfig.desktop.item.descriptionCell.colSpan}
                    colStart={7}
                    rowStart={rowBase + 1}
                    className={`${layoutConfig.desktop.item.descriptionCell.className} border-b border-white`}
                  >
                    <div
                      ref={(el) => {
                        desktopItemRefs.current[i + 1] = el;
                      }}
                    >
                      <Typography
                        variant={textConfig.itemDescriptionDesktop.variant}
                        color={
                          textConfig.itemDescriptionDesktop.color as
                            | `#${string}`
                            | "white"
                        }
                        weight={textConfig.itemDescriptionDesktop.weight}
                        className={textConfig.itemDescriptionDesktop.className}
                      >
                        {rightItem.description}
                      </Typography>
                      <div className="mt-4">
                        <Link
                          href={rightItem.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            label={rightItem.buttonLabel}
                            color={rightItem.buttonColor}
                            textColor={rightItem.buttonTextColor}
                            className={
                              layoutConfig.desktop.item.button.className
                            }
                          />
                        </Link>
                      </div>
                    </div>
                  </GridCell>
                )}
              </React.Fragment>
            );
          })}
        {contributions?.showSeeMoreButton && items.length <= 4 && (
          <GridCell
            colSpan={layoutConfig.desktop.footer.colSpan}
            rowStart={6}
            className={layoutConfig.desktop.footer.className}
            style={{
              backgroundColor: layoutConfig.desktop.footer.backgroundColor,
            }}
          >
            <div ref={desktopFooterRef}>
              <Link
                href="https://lamprosdao.notion.site/arbitrum-contributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label={textConfig.seeMoreButton.label}
                  color={textConfig.seeMoreButton.color}
                  textColor={textConfig.seeMoreButton.textColor}
                />
              </Link>
            </div>
          </GridCell>
        )}
        {contributions?.showSeeMoreButton && items.length > 4 && (
          <GridCell
            colSpan={layoutConfig.desktop.footer.colSpan}
            rowStart={8}
            className={layoutConfig.desktop.footer.className}
            style={{
              backgroundColor: layoutConfig.desktop.footer.backgroundColor,
            }}
          >
            <div ref={desktopFooterRef}>
              <Link
                href="https://lamprosdao.notion.site/arbitrum-contributions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  label={textConfig.seeMoreButton.label}
                  color={textConfig.seeMoreButton.color}
                  textColor={textConfig.seeMoreButton.textColor}
                />
              </Link>
            </div>
          </GridCell>
        )}
      </Grid>
    </>
  );
}
