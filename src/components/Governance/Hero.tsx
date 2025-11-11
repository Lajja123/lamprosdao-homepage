"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "../UI/Typography";
import Link from "next/link";
import Grid, { GridCell } from "../UI/Grid";
import { useGovernanceHeroConfig } from "@/hooks/useGovernanceHeroConfig";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const { images, teamMembers, delegations, textConfig, layoutConfig } =
    useGovernanceHeroConfig();

  // Refs for animation elements
  // Mobile refs
  const mobileTitleRef = useRef<HTMLDivElement>(null);
  const mobileClipImageRef = useRef<HTMLDivElement>(null);
  const mobileDescriptionRef = useRef<HTMLDivElement>(null);
  const mobileTeamHeaderRef = useRef<HTMLDivElement>(null);
  const mobileTeamMemberRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Desktop refs
  const desktopClipImageRef = useRef<HTMLDivElement>(null);
  const desktopDescriptionRef = useRef<HTMLDivElement>(null);
  const desktopTeamHeaderRef = useRef<HTMLDivElement>(null);
  const desktopTeamMemberRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const scrollTriggers: ScrollTrigger[] = [];

    // Mobile title animation
    if (mobileTitleRef.current) {
      gsap.set(mobileTitleRef.current, {
        opacity: 0,
        y: 40,
      });

      const titleAnimation = gsap.to(mobileTitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileTitleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (titleAnimation.scrollTrigger) {
        scrollTriggers.push(titleAnimation.scrollTrigger);
      }
    }

    // Mobile clip image animation
    if (mobileClipImageRef.current) {
      gsap.set(mobileClipImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(mobileClipImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileClipImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (imageAnimation.scrollTrigger) {
        scrollTriggers.push(imageAnimation.scrollTrigger);
      }
    }

    // Mobile description animation
    if (mobileDescriptionRef.current) {
      gsap.set(mobileDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const descAnimation = gsap.to(mobileDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: mobileDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (descAnimation.scrollTrigger) {
        scrollTriggers.push(descAnimation.scrollTrigger);
      }
    }

    // Mobile team header animation
    if (mobileTeamHeaderRef.current) {
      gsap.set(mobileTeamHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const teamHeaderAnimation = gsap.to(mobileTeamHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: mobileTeamHeaderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (teamHeaderAnimation.scrollTrigger) {
        scrollTriggers.push(teamHeaderAnimation.scrollTrigger);
      }
    }

    // Mobile team member images animation
    mobileTeamMemberRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          scale: 0.8,
          y: 20,
        });

        const memberAnimation = gsap.to(ref, {
          opacity: 1,
          scale: 1,
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

        if (memberAnimation.scrollTrigger) {
          scrollTriggers.push(memberAnimation.scrollTrigger);
        }
      }
    });

    // Desktop clip image animation
    if (desktopClipImageRef.current) {
      gsap.set(desktopClipImageRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 30,
      });

      const imageAnimation = gsap.to(desktopClipImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopClipImageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (imageAnimation.scrollTrigger) {
        scrollTriggers.push(imageAnimation.scrollTrigger);
      }
    }

    // Desktop description animation
    if (desktopDescriptionRef.current) {
      gsap.set(desktopDescriptionRef.current, {
        opacity: 0,
        y: 40,
      });

      const descAnimation = gsap.to(desktopDescriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopDescriptionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (descAnimation.scrollTrigger) {
        scrollTriggers.push(descAnimation.scrollTrigger);
      }
    }

    // Desktop team header animation
    if (desktopTeamHeaderRef.current) {
      gsap.set(desktopTeamHeaderRef.current, {
        opacity: 0,
        y: 30,
      });

      const teamHeaderAnimation = gsap.to(desktopTeamHeaderRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopTeamHeaderRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (teamHeaderAnimation.scrollTrigger) {
        scrollTriggers.push(teamHeaderAnimation.scrollTrigger);
      }
    }

    // Desktop team member images animation
    desktopTeamMemberRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          scale: 0.8,
          y: 20,
        });

        const memberAnimation = gsap.to(ref, {
          opacity: 1,
          scale: 1,
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

        if (memberAnimation.scrollTrigger) {
          scrollTriggers.push(memberAnimation.scrollTrigger);
        }
      }
    });

    return () => {
      scrollTriggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [teamMembers.length]);

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Main Content Section */}
        <div className={layoutConfig.mobile.mainContent.container.className}>
          <div
            className={layoutConfig.mobile.mainContent.titleSection.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.mainContent.titleSection.backgroundColor,
            }}
          >
            <div ref={mobileTitleRef}>
              <Typography
                variant={textConfig.title.variant}
                weight={textConfig.title.weight}
                align={textConfig.title.align}
                color={textConfig.title.color as `#${string}` | "light-purple"}
                className={textConfig.title.className}
              >
                {textConfig.title.text.split("").map((letter, index) => {
                  const isHighlighted = textConfig.title.wavyLetters.some(
                    (w) => w.position === index + 1
                  );
                  return (
                    <span
                      key={index}
                      className={
                        isHighlighted
                          ? "uppercase font-bohemian wavy-letter"
                          : ""
                      }
                    >
                      {letter}
                    </span>
                  );
                })}
              </Typography>
            </div>
            {/* Image Section */}
            <div
              ref={mobileClipImageRef}
              className={layoutConfig.mobile.mainContent.imageSection.className}
            >
              <Image
                src={images.clip.src}
                alt={images.clip.alt}
                quality={images.clip.quality}
                className={images.clip.className}
              />
            </div>
          </div>
          {/* Text Section */}
          <div
            ref={mobileDescriptionRef}
            className={layoutConfig.mobile.mainContent.textSection.className}
          >
            <Typography
              variant={textConfig.description.variant}
              color={textConfig.description.color as `#${string}` | "primary"}
              weight={textConfig.description.weight}
              align={textConfig.description.align}
              className={textConfig.description.className}
            >
              {textConfig.description.text}
            </Typography>
          </div>

          {/* Team Section */}
          <div
            ref={mobileTeamHeaderRef}
            className={layoutConfig.mobile.mainContent.teamHeader.className}
            style={{
              backgroundColor:
                layoutConfig.mobile.mainContent.teamHeader.backgroundColor,
            }}
          >
            <Typography
              variant={textConfig.teamHeader.variant}
              color={textConfig.teamHeader.color as `#${string}` | "primary"}
              weight={textConfig.teamHeader.weight}
              className={textConfig.teamHeader.className}
            >
              {textConfig.teamHeader.text}
            </Typography>
          </div>

          {/* Team Members */}
          <div className={layoutConfig.mobile.mainContent.teamGrid.className}>
            {teamMembers.map((member, index) => (
              <Link
                key={member.name}
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  layoutConfig.mobile.mainContent.teamMemberCard.className
                }
              >
                <div
                  ref={(el) => {
                    mobileTeamMemberRefs.current[index] = el;
                  }}
                  className="flex flex-col items-center justify-between w-full"
                >
                  <div
                    className={
                      layoutConfig.mobile.mainContent.teamMemberCard
                        .imageContainer.className
                    }
                  >
                    <Image
                      src={member.src}
                      alt={member.name}
                      className={
                        layoutConfig.mobile.mainContent.teamMemberCard.image
                          .className
                      }
                      quality={100}
                    />
                  </div>
                  <div
                    className={
                      layoutConfig.mobile.mainContent.teamMemberCard
                        .nameContainer.className
                    }
                  >
                    <Typography
                      variant="body1"
                      color="primary"
                      weight="semibold"
                      className={`${layoutConfig.mobile.mainContent.teamMemberCard.name.className} font-ppmori`}
                    >
                      {member.name}
                    </Typography>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Delegations Section */}
        <div
          className={layoutConfig.mobile.delegations.container.className}
          style={{
            backgroundColor:
              layoutConfig.mobile.delegations.container.backgroundColor,
          }}
        >
          <div
            className={layoutConfig.mobile.delegations.titleSection.className}
          >
            <Typography
              variant={textConfig.delegationsTitle.variant}
              align="center"
              className={`${textConfig.delegationsTitle.className} ${layoutConfig.mobile.delegations.title.className}`}
            >
              {textConfig.delegationsTitle.text
                .split("")
                .map((letter, index) => {
                  const isHighlighted =
                    textConfig.delegationsTitle.wavyLetters.some(
                      (w) => w.position === index + 1
                    );
                  return (
                    <span key={index}>
                      {letter === " " ? (
                        <br />
                      ) : (
                        <span
                          className={
                            isHighlighted
                              ? "uppercase font-bohemian wavy-letter"
                              : ""
                          }
                        >
                          {letter}
                        </span>
                      )}
                    </span>
                  );
                })}
            </Typography>
          </div>

          <div className={layoutConfig.mobile.delegations.grid.className}>
            {delegations.map((delegation, index) => {
              return (
                <div
                  key={delegation.name}
                  className={`${layoutConfig.mobile.delegations.buttonCell.className} border border-white`}
                >
                  <Link
                    href={delegation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className={
                        layoutConfig.mobile.delegations.button.className
                      }
                    >
                      <Image
                        src={delegation.icon}
                        alt={delegation.name.toLowerCase()}
                        className="w-6 md:w-10"
                        quality={100}
                      />
                      <Typography
                        variant={textConfig.delegationButton.variant}
                        color={
                          textConfig.delegationButton.color as
                            | `#${string}`
                            | "primary"
                        }
                        weight={textConfig.delegationButton.weight}
                        className={textConfig.delegationButton.className}
                      >
                        {delegation.name}
                      </Typography>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell1.rowSpan}
          colSpan={1}
          className={layoutConfig.desktop.emptyCell1.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.imageCell.colSpan}
          rowSpan={layoutConfig.desktop.imageCell.rowSpan}
          className={layoutConfig.desktop.imageCell.className}
        >
          <div ref={desktopClipImageRef}>
            <Image
              src={images.clipDesktop.src}
              alt={images.clipDesktop.alt}
              quality={images.clipDesktop.quality}
            />
          </div>
        </GridCell>

        <GridCell
          colSpan={layoutConfig.desktop.textCell.colSpan}
          rowSpan={layoutConfig.desktop.textCell.rowSpan}
          colStart={layoutConfig.desktop.textCell.colStart}
          className={layoutConfig.desktop.textCell.className}
        >
          <div ref={desktopDescriptionRef}>
            <Typography
              variant={textConfig.description.variant}
              color={textConfig.description.color as `#${string}` | "primary"}
              weight={textConfig.description.weight}
              className="mx-w-[500px] tracking-wider font-ppmori text-xl mx-auto px-10 py-10"
            >
              {textConfig.description.text}
            </Typography>
          </div>
        </GridCell>

        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell2.rowSpan}
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          className={layoutConfig.desktop.emptyCell2.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.teamHeaderCell.colSpan}
          colStart={layoutConfig.desktop.teamHeaderCell.colStart}
          rowStart={layoutConfig.desktop.teamHeaderCell.rowStart}
          className={layoutConfig.desktop.teamHeaderCell.className}
          style={{
            backgroundColor:
              layoutConfig.desktop.teamHeaderCell.backgroundColor,
          }}
        >
          <div ref={desktopTeamHeaderRef}>
            <Typography
              variant={textConfig.teamHeaderDesktop.variant}
              color={
                textConfig.teamHeaderDesktop.color as `#${string}` | "primary"
              }
              weight={textConfig.teamHeaderDesktop.weight}
              className={textConfig.teamHeaderDesktop.className}
            >
              {textConfig.teamHeaderDesktop.text}
            </Typography>
          </div>
        </GridCell>

        {teamMembers.map((member, index) => (
          <GridCell
            key={member.name}
            colSpan={layoutConfig.desktop.teamMemberCell.colSpan}
            colStart={2 + index * 2}
            rowStart={4}
            className={layoutConfig.desktop.teamMemberCell.className}
          >
            <Link
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={layoutConfig.desktop.teamMemberLink.className}
            >
              <div
                ref={(el) => {
                  desktopTeamMemberRefs.current[index] = el;
                }}
                className="flex items-center gap-4"
              >
                <div className="p-4">
                  <Image
                    src={member.src}
                    alt={member.name}
                    className={layoutConfig.desktop.teamMemberImage.className}
                    quality={100}
                  />
                </div>
                <Typography
                  variant="body1"
                  color="primary"
                  weight="semibold"
                  className={`${layoutConfig.desktop.teamMemberName.className} font-ppmori`}
                >
                  {member.name}
                </Typography>
                <Image
                  src={images.link.src}
                  alt="link"
                  className={images.link.className}
                />
              </div>
            </Link>
          </GridCell>
        ))}
        <GridCell
          rowSpan={layoutConfig.desktop.emptyCell2.rowSpan}
          colStart={layoutConfig.desktop.emptyCell2.colStart}
          className={layoutConfig.desktop.emptyCell2.className}
        />
      </Grid>

      {/* OUR DELEGATIONS Section */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.delegations.grid.className}
        style={{
          backgroundColor:
            layoutConfig.desktop.delegations.grid.backgroundColor,
        }}
      >
        <GridCell
          rowSpan={layoutConfig.desktop.delegations.emptyCell1.rowSpan}
          colSpan={1}
          className={layoutConfig.desktop.delegations.emptyCell1.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.delegations.titleCell.colSpan}
          colStart={layoutConfig.desktop.delegations.titleCell.colStart}
          className={layoutConfig.desktop.delegations.titleCell.className}
        >
          <Typography
            variant={textConfig.delegationsTitleDesktop.variant}
            className={textConfig.delegationsTitleDesktop.className}
          >
            {textConfig.delegationsTitleDesktop.text
              .split("")
              .map((letter, index) => {
                const isHighlighted =
                  textConfig.delegationsTitleDesktop.wavyLetters.some(
                    (w) => w.position === index + 1
                  );
                return (
                  <span
                    key={index}
                    className={
                      isHighlighted ? "uppercase font-bohemian wavy-letter" : ""
                    }
                  >
                    {letter}
                  </span>
                );
              })}
          </Typography>
        </GridCell>

        <GridCell
          rowStart={layoutConfig.desktop.delegations.emptyCell2.rowStart}
          className={layoutConfig.desktop.delegations.emptyCell2.className}
        />

        <GridCell
          colSpan={layoutConfig.desktop.delegations.buttonsCell.colSpan}
          rowStart={layoutConfig.desktop.delegations.buttonsCell.rowStart}
          className={layoutConfig.desktop.delegations.buttonsCell.className}
        >
          {delegations.map((delegation) => (
            <Link
              key={delegation.name}
              href={delegation.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={layoutConfig.desktop.delegations.button.className}
              >
                <Image
                  src={delegation.icon}
                  alt={delegation.name.toLowerCase()}
                  className="w-5 md:w-7"
                  quality={100}
                />
                <Typography
                  variant={textConfig.delegationButtonDesktop.variant}
                  color={
                    textConfig.delegationButtonDesktop.color as
                      | `#${string}`
                      | "primary"
                  }
                  weight={textConfig.delegationButtonDesktop.weight}
                  className={textConfig.delegationButtonDesktop.className}
                >
                  {delegation.name}
                </Typography>
              </div>
            </Link>
          ))}
        </GridCell>

        <GridCell
          colStart={layoutConfig.desktop.delegations.emptyCell3.colStart}
          rowStart={layoutConfig.desktop.delegations.emptyCell3.rowStart}
          className={layoutConfig.desktop.delegations.emptyCell3.className}
        />
      </Grid>
    </>
  );
}
