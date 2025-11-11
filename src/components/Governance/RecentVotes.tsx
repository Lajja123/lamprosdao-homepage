"use client";
import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useMemo,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Typography from "../UI/Typography";
import Grid, { GridCell } from "../UI/Grid";
import Arrow from "../UI/Arrow";
import Button from "../UI/Button";
import { useRecentVotesConfig } from "@/hooks/useRecentVotesConfig";
import type {
  Proposal,
  Protocol,
  ForumPostResponse,
  ParsedForumUrl,
  NotionProposalData,
} from "@/types";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Memoized Loading Skeleton Component
const LoadingSkeleton = React.memo(
  ({ layoutConfig }: { layoutConfig: any }) => (
    <>
      {Array.from({ length: 4 }).map((_, index) => {
        const rowStart = index + 2;
        return (
          <React.Fragment key={index}>
            <GridCell
              rowStart={rowStart}
              className={layoutConfig.desktop.proposalNumberCell.className}
            >
              <div className="w-8 h-8 bg-gray-300 animate-pulse rounded"></div>
            </GridCell>
            <GridCell
              colSpan={layoutConfig.desktop.proposalStatusCell.colSpan}
              rowStart={rowStart}
              className={layoutConfig.desktop.proposalStatusCell.className}
            >
              <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
            </GridCell>
            <GridCell
              colSpan={layoutConfig.desktop.proposalContentCell.colSpan}
              colStart={layoutConfig.desktop.proposalContentCell.colStart}
              rowStart={rowStart}
              className={layoutConfig.desktop.proposalContentCell.className}
            >
              <div className="w-full h-4 bg-gray-300 animate-pulse rounded mb-3"></div>
              <div className="flex gap-2">
                <div className="w-16 h-6 bg-gray-300 animate-pulse rounded-full"></div>
                <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-full"></div>
              </div>
            </GridCell>
            <GridCell
              colStart={layoutConfig.desktop.proposalArrowCell.colStart}
              rowStart={rowStart}
              className={layoutConfig.desktop.proposalArrowCell.className}
              style={{
                backgroundColor:
                  layoutConfig.desktop.proposalArrowCell.backgroundColor,
              }}
            >
              <div className="w-6 h-6 bg-gray-300 animate-pulse rounded"></div>
            </GridCell>
          </React.Fragment>
        );
      })}
    </>
  )
);

LoadingSkeleton.displayName = "LoadingSkeleton";

// Memoized Protocol Button Component
const ProtocolButton = React.memo(
  ({
    protocol,
    isActive,
    onClick,
  }: {
    protocol: Protocol;
    isActive: boolean;
    onClick: (name: string) => void;
  }) => (
    <div className="relative group">
      <button
        onClick={() => onClick(protocol.name)}
        className={`cursor-pointer px-6 py-2 rounded-full transition-all flex items-center gap-2 hover:bg-[#2F2B2B] hover:text-white ${
          isActive
            ? "bg-[#2F2B2B] text-white border border-[#2F2B2B]"
            : "bg-white text-gray-700 border border-[#A885CD]"
        }`}
      >
        <Image src={protocol.icon} alt={protocol.name} className="w-5 md:w-7" />
      </button>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-[#2F2B2B] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
        {protocol.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </div>
  )
);

ProtocolButton.displayName = "ProtocolButton";

const RecentVotes = React.memo(function RecentVotes() {
  const { images, protocols, textConfig, layoutConfig } =
    useRecentVotesConfig();
  const [activeTab, setActiveTab] = useState("");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add a ref to track the latest request ID
  const latestRequestIdRef = useRef(0);
  const currentRequestId = useRef(0);

  // Refs for animation elements
  // Mobile refs
  const mobileHeaderRef = useRef<HTMLDivElement>(null);
  const mobileProtocolButtonsRef = useRef<HTMLDivElement>(null);
  const mobileVoteCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileFooterRef = useRef<HTMLDivElement>(null);

  // Desktop refs
  const desktopIconRef = useRef<HTMLDivElement>(null);
  const desktopHeaderRef = useRef<HTMLDivElement>(null);
  const desktopProtocolButtonsRef = useRef<HTMLDivElement>(null);
  const desktopProposalRowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopFooterRef = useRef<HTMLDivElement>(null);

  // Memoize parseForumUrl function
  const parseForumUrl = useCallback((url: string): ParsedForumUrl | null => {
    try {
      const urlWithoutQuery = url.split("?")[0];
      const matches = urlWithoutQuery.match(/\/(\d+)\/(\d+)$/);
      if (!matches) return null;

      return {
        postId: matches[1],
        postNumber: matches[2],
      };
    } catch (error) {
      console.error("Error parsing forum URL:", error);
      return null;
    }
  }, []);

  // Memoize fetchForumPost function
  const fetchForumPost = useCallback(
    async (
      url: string,
      protocol: string
    ): Promise<ForumPostResponse | null> => {
      try {
        const parsed = parseForumUrl(url);
        if (!parsed) return null;

        const { postId, postNumber } = parsed;

        const response = await fetch(
          `/api/fetch-forum-post?postId=${postId}&postNumber=${postNumber}&protocol=${protocol.toLowerCase()}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        return {
          content: data?.cooked || null,
          createdAt: data?.created_at || null,
        };
      } catch (error) {
        console.error("Error fetching forum post:", error);
        return null;
      }
    },
    [parseForumUrl]
  );

  // Memoize determineProtocol function
  const determineProtocol = useCallback(
    (forumLink: string, commentlink: string): string => {
      const link = forumLink.toLowerCase();

      if (link.includes("arbitrum")) return "Arbitrum";
      if (link.includes("optimism")) return "Optimism";
      if (link.includes("uniswap")) return "Uniswap";
      if (link.includes("ens")) return "ENS";
      if (link.includes("superfluid")) return "Superfluid";
      if (link.includes("scroll")) return "Scroll";
      return "Arbitrum";
    },
    []
  );

  // Memoize getProtocolIcon function
  const getProtocolIcon = useCallback(
    (protocol: string) => {
      const protocolObj = protocols.find(
        (p) => p.name.toLowerCase() === protocol.toLowerCase()
      );
      return protocolObj?.icon || `/governance/${protocol.toLowerCase()}.svg`;
    },
    [protocols]
  );

  const fetchProposals = useCallback(async () => {
    currentRequestId.current += 1;
    const thisRequestId = currentRequestId.current;
    latestRequestIdRef.current = thisRequestId;

    try {
      setLoading(true);
      setNoData(false);
      setError(null);

      const protocolObj = protocols.find((p) => p.name === activeTab);
      const queryString = protocolObj ? `?protocol=${protocolObj.value}` : "";

      console.log(
        `Fetching data for ${
          activeTab || "all protocols"
        }, request ID: ${thisRequestId}`
      );
      const response = await fetch(`/api/notion-proposals${queryString}`);

      const data = await response.json();
      console.log("data", data);

      if (thisRequestId !== latestRequestIdRef.current) {
        console.log(
          `Ignoring stale request ${thisRequestId}, latest is ${latestRequestIdRef.current}`
        );
        return;
      }

      if (data.success && data.data) {
        const validProposals = data.data.filter(
          (proposal: any) => proposal["Commented By"]
        );

        if (validProposals.length === 0) {
          setNoData(true);
        }

        const transformedProposals = await Promise.allSettled(
          validProposals
            .slice(0, 4)
            .map(async (proposal: NotionProposalData, index: number) => {
              const protocol =
                activeTab ||
                determineProtocol(
                  proposal["Forum Post Link"] || "",
                  proposal["Communication Rationale"] || ""
                );

              // Parse dates more safely
              const parseDate = (dateStr: string): Date => {
                try {
                  const [day, month, year] = dateStr.split("/");
                  return new Date(
                    parseInt(year),
                    parseInt(month) - 1,
                    parseInt(day)
                  );
                } catch {
                  return new Date();
                }
              };

              const date = proposal["Start Date"]
                ? parseDate(proposal["Start Date"])
                : new Date();
              const endDate = proposal["End Date"]
                ? parseDate(proposal["End Date"])
                : new Date();

              let forumContent = null;
              let forumCreatedAt = null;

              // Only fetch forum content for supported protocols
              const supportedProtocols = ["arbitrum", "superfluid", "scroll"];
              if (
                proposal["Communication Rationale"] &&
                supportedProtocols.includes(protocol.toLowerCase())
              ) {
                try {
                  const rawContent = await fetchForumPost(
                    proposal["Communication Rationale"],
                    protocol
                  );
                  forumContent = rawContent?.content || null;
                  forumCreatedAt = rawContent?.createdAt || null;
                } catch (error) {
                  console.error("Failed to fetch forum content:", error);
                }
              }

              if (thisRequestId !== latestRequestIdRef.current) {
                return { cancelled: true };
              }

              return {
                id: String(index + 1).padStart(2, "0"),
                protocol: protocol,
                icon: getProtocolIcon(protocol.toLowerCase()),
                title: proposal["Proposal Name"] || "Untitled Proposal",
                tag: "Governance",
                result: proposal["Voted"],
                content: proposal["Comment Draft"] || "",
                commentLink: proposal["Communication Rationale"] || "",
                forumContent: forumContent,
                forumCreatedAt: forumCreatedAt,
                endDate: endDate,
                hasRationale: !!proposal["Communication Rationale"],
                voter: {
                  icon: "/governance/voter.svg",
                  name: proposal["Commented By"] || "Anonymous",
                  date: `On ${formatDate(date)}`,
                },
                type: proposal["Type"],
              };
            })
        );

        if (thisRequestId !== latestRequestIdRef.current) {
          console.log(`Aborting state update for request ${thisRequestId}`);
          return;
        }

        const successfulProposals = transformedProposals
          .filter(
            (result) =>
              result.status === "fulfilled" && !(result as any).value.cancelled
          )
          .map((result) => (result as any).value);

        setProposals(successfulProposals);
      } else {
        setNoData(true);
      }
    } catch (error) {
      console.error(`Error in request ${thisRequestId}:`, error);

      if (thisRequestId === latestRequestIdRef.current) {
        setError(
          "Something went wrong while fetching proposals. Please try again later."
        );
        setProposals([]);
      }
    } finally {
      if (thisRequestId === latestRequestIdRef.current) {
        setLoading(false);
      }
    }
  }, [activeTab]);

  // Memoize handleProtocolSelection function
  const handleProtocolSelection = useCallback((protocol: string) => {
    setActiveTab((prevTab) => (prevTab === protocol ? "" : protocol));
  }, []);

  // Memoize formatDate function
  const formatDate = useCallback((date: Date | string): string => {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  // Memoize vote result color function
  const getVoteResultColor = useCallback((result: string): string => {
    switch (result) {
      case "For":
        return "bg-white text-[#A885CD]  ";
      case "Against":
        return "bg-white text-[#A885CD] ";
      default:
        return "bg-white text-[#A885CD] ";
    }
  }, []);

  // Memoize type styling function
  const getTypeStyle = useCallback((type: string): string => {
    const typeLower = type?.toLowerCase() || "";
    if (typeLower.includes("off-chain") || typeLower.includes("offchain")) {
      return "border-[#A885CD] bg-[#DFCDF2] text-[#8B6FA8]";
    }
    if (typeLower.includes("on-chain") || typeLower.includes("onchain")) {
      return "border-[#A885CD] bg-[#A885CD] text-white";
    }
    return "border-[#A885CD] bg-transparent";
  }, []);

  useEffect(() => {
    fetchProposals();
  }, [fetchProposals]);

  // Animation useEffect
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

    // Mobile protocol buttons animation
    if (mobileProtocolButtonsRef.current) {
      gsap.set(mobileProtocolButtonsRef.current, {
        opacity: 0,
        y: 30,
      });

      const buttonsAnimation = gsap.to(mobileProtocolButtonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: mobileProtocolButtonsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (buttonsAnimation.scrollTrigger) {
        scrollTriggers.push(buttonsAnimation.scrollTrigger);
      }
    }

    // Mobile vote cards animation
    mobileVoteCardRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          y: 40,
        });

        const cardAnimation = gsap.to(ref, {
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

        if (cardAnimation.scrollTrigger) {
          scrollTriggers.push(cardAnimation.scrollTrigger);
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

    // Desktop icon animation
    if (desktopIconRef.current) {
      gsap.set(desktopIconRef.current, {
        opacity: 0,
        scale: 0.9,
      });

      const iconAnimation = gsap.to(desktopIconRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: desktopIconRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (iconAnimation.scrollTrigger) {
        scrollTriggers.push(iconAnimation.scrollTrigger);
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
        delay: 0.1,
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

    // Desktop protocol buttons animation
    if (desktopProtocolButtonsRef.current) {
      gsap.set(desktopProtocolButtonsRef.current, {
        opacity: 0,
        y: 30,
      });

      const buttonsAnimation = gsap.to(desktopProtocolButtonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: desktopProtocolButtonsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      if (buttonsAnimation.scrollTrigger) {
        scrollTriggers.push(buttonsAnimation.scrollTrigger);
      }
    }

    // Desktop proposal rows animation
    desktopProposalRowRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, {
          opacity: 0,
          y: 40,
        });

        const rowAnimation = gsap.to(ref, {
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

        if (rowAnimation.scrollTrigger) {
          scrollTriggers.push(rowAnimation.scrollTrigger);
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
  }, [proposals.length, loading]);

  return (
    <>
      {/* Mobile Layout */}
      <div className={layoutConfig.mobile.container.className}>
        <div
          className={layoutConfig.mobile.header.className}
          style={{
            backgroundColor: layoutConfig.mobile.header.backgroundColor,
          }}
        >
          <div ref={mobileHeaderRef}>
            <Typography
              variant={textConfig.titleMobile.variant}
              color={textConfig.titleMobile.color as `#${string}` | "primary"}
              weight={textConfig.titleMobile.weight}
              className={textConfig.titleMobile.className}
            >
              Recent Votes
            </Typography>
          </div>
          <div
            className="flex items-center gap-2 flex-wrap justify-center"
            ref={mobileProtocolButtonsRef}
          >
            {protocols.map((protocol) => (
              <ProtocolButton
                key={protocol.name}
                protocol={protocol}
                isActive={activeTab === protocol.name}
                onClick={handleProtocolSelection}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="">
          {loading ? (
            // Mobile loading skeleton
            <div className="">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-6 h-6 bg-gray-300 animate-pulse rounded"></div>
                    <div className="w-20 h-4 bg-gray-300 animate-pulse rounded"></div>
                  </div>
                  <div className="w-full h-4 bg-gray-300 animate-pulse rounded mb-2"></div>
                  <div className="flex gap-2">
                    <div className="w-16 h-6 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            // Error state
            <div className=" text-center p-5">
              <Typography
                variant="h3"
                color="primary"
                weight="medium"
                className="mb-2 text-lg md:text-xl"
              >
                Oops! Something Went Wrong
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                weight="normal"
                className="text-sm md:text-base"
              >
                {error}
              </Typography>
            </div>
          ) : noData ? (
            // No data state
            <div className="text-center p-5">
              <Typography
                variant="h3"
                color="primary"
                weight="medium"
                className="mb-2 text-lg md:text-xl"
              >
                No Votes Available
              </Typography>
              <Typography
                variant="body1"
                color="primary"
                weight="normal"
                className="text-sm md:text-base"
              >
                There are no recent votes to display
                {activeTab ? ` for ${activeTab}` : ""} at the moment. Please
                check back later!
              </Typography>
            </div>
          ) : (
            // Mobile vote cards
            <div className={layoutConfig.mobile.content.className}>
              {proposals.map((proposal, index) => (
                <div
                  key={proposal.id}
                  className={layoutConfig.mobile.voteCard.className}
                >
                  <div
                    ref={(el) => {
                      mobileVoteCardRefs.current[index] = el;
                    }}
                  >
                    {/* Vote Header */}
                    <div className={layoutConfig.mobile.voteHeader.className}>
                      {/* Number cell */}
                      <div className={layoutConfig.mobile.numberCell.className}>
                        <Typography
                          variant={textConfig.proposalIdMobile.variant}
                          color={
                            textConfig.proposalIdMobile.color as
                              | `#${string}`
                              | "primary"
                          }
                          weight={textConfig.proposalIdMobile.weight}
                          className={textConfig.proposalIdMobile.className}
                        >
                          {proposal.id}
                        </Typography>
                      </div>
                      {/* Status cell */}
                      <div className={layoutConfig.mobile.statusCell.className}>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          weight="medium"
                          className="font-ppmori text-xs md:text-sm"
                        >
                          Voted{" "}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          color="primary"
                          weight="medium"
                          className="font-ppmori text-xs md:text-sm text-[#A885CD]"
                        >
                          <span>{proposal.result}</span>
                        </Typography>
                      </div>
                      {/* Arrow cell */}
                      <button
                        onClick={() =>
                          setExpandedItem(expandedItem === index ? null : index)
                        }
                        className={layoutConfig.mobile.arrowCell.className}
                        style={{
                          backgroundColor:
                            layoutConfig.mobile.arrowCell.backgroundColor,
                        }}
                      >
                        <Arrow
                          direction={expandedItem === index ? "up" : "down"}
                          color="#FFFFFF"
                          rounded={true}
                          size={24}
                        />
                      </button>
                    </div>

                    {/* Proposal Title */}
                    <div
                      className={layoutConfig.mobile.proposalSection.className}
                    >
                      <Typography
                        variant="body1"
                        color="primary"
                        weight="normal"
                        className="text-sm md:text-base pb-3"
                      >
                        {proposal.title}
                      </Typography>
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 border-2 border-[#A885CD] rounded-full bg-transparent text-xs md:text-sm flex items-center gap-2">
                          <Image
                            src={proposal.icon}
                            alt={proposal.protocol}
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                          <Typography
                            variant="caption"
                            color="accent"
                            weight="medium"
                            className="text-xs md:text-sm"
                          >
                            {proposal.protocol}
                          </Typography>
                        </span>
                        <Typography
                          variant="caption"
                          color="accent"
                          weight="medium"
                          className={`px-3 py-1 border-2 rounded-full text-xs md:text-sm ${getTypeStyle(
                            proposal.type
                          )}`}
                        >
                          {proposal.type}
                        </Typography>
                      </div>
                    </div>

                    {/* Expandable content */}
                    {expandedItem === index && (
                      <div
                        className={
                          layoutConfig.mobile.expandableContent.className
                        }
                        style={{
                          backgroundColor:
                            layoutConfig.mobile.expandableContent
                              .backgroundColor,
                        }}
                      >
                        {proposal.voter && (
                          <div className="space-y-4">
                            {/* Voter Information */}
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <Image
                                  src={images.voterIcon.src}
                                  alt={`${proposal.voter.name} icon`}
                                  width={32}
                                  height={32}
                                  className="rounded-full"
                                  quality={100}
                                />
                              </div>
                              <div className="flex-1">
                                <Typography
                                  variant="body2"
                                  color="primary"
                                  weight="medium"
                                  className="mb-1 text-sm md:text-base"
                                >
                                  {proposal.voter.name}
                                </Typography>
                                <Typography
                                  variant="body1"
                                  color="primary"
                                  weight="normal"
                                  className="text-xs md:text-sm"
                                >
                                  Voted
                                  <Typography
                                    variant="body1"
                                    color="primary"
                                    weight="medium"
                                    className="inline text-[#A885CD]"
                                  >
                                    {proposal.result}
                                  </Typography>{" "}
                                  on{" "}
                                  <Typography
                                    variant="body1"
                                    color="primary"
                                    weight="medium"
                                    className="inline text-[#A885CD]"
                                  >
                                    {proposal.hasRationale &&
                                    proposal.forumCreatedAt
                                      ? formatDate(proposal.forumCreatedAt)
                                      : formatDate(proposal.endDate)}
                                  </Typography>
                                </Typography>
                              </div>
                            </div>

                            {/* Rationale Section */}
                            {proposal.hasRationale && (
                              <div className="mt-4">
                                <Typography
                                  variant="subtitle2"
                                  color="primary"
                                  weight="medium"
                                  className="mb-2 text-sm md:text-base"
                                >
                                  Rationale
                                </Typography>
                                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                  {proposal.forumContent ? (
                                    <div
                                      className="prose prose-sm max-w-none text-xs md:text-sm [&_a]:text-[#A885CD] [&_a]:underline [&_a:hover]:text-[#8B6FA8]"
                                      style={{
                                        color: "#1A1A1A",
                                        fontFamily: "PPMori, sans-serif",
                                      }}
                                      dangerouslySetInnerHTML={{
                                        __html: proposal.forumContent,
                                      }}
                                    />
                                  ) : (
                                    <a
                                      href={proposal.commentLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs md:text-sm text-[#A885CD] hover:text-[#8B6FA8] underline break-all"
                                    >
                                      {proposal.commentLink}
                                    </a>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div
          className={layoutConfig.mobile.footer.className}
          style={{
            backgroundColor: layoutConfig.mobile.footer.backgroundColor,
          }}
        >
          <div ref={mobileFooterRef}>
            <Link
              href="https://lamprosdao.notion.site/governance"
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
      </div>

      {/* Desktop Layout */}
      <Grid
        variant="custom"
        noContainer
        className={layoutConfig.desktop.grid.className}
      >
        <GridCell
          className={layoutConfig.desktop.iconCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.iconCell.backgroundColor,
          }}
        >
          <div
            ref={desktopIconRef}
            className="flex items-center justify-center"
          >
            <Image src={images.voteIcon.src} alt={images.voteIcon.alt} />
          </div>
        </GridCell>
        <GridCell
          colSpan={layoutConfig.desktop.headerCell.colSpan}
          className={layoutConfig.desktop.headerCell.className}
        >
          <div ref={desktopHeaderRef}>
            <Typography
              variant={textConfig.titleDesktop.variant}
              color={textConfig.titleDesktop.color as `#${string}` | "primary"}
              weight={textConfig.titleDesktop.weight}
              className={textConfig.titleDesktop.className}
            >
              Recent Votes
            </Typography>
          </div>
          <div
            ref={desktopProtocolButtonsRef}
            className="flex items-center gap-2"
          >
            {protocols.map((protocol) => (
              <ProtocolButton
                key={protocol.name}
                protocol={protocol}
                isActive={activeTab === protocol.name}
                onClick={handleProtocolSelection}
              />
            ))}
          </div>
        </GridCell>
        <GridCell
          colStart={layoutConfig.desktop.emptyCell.colStart}
          colSpan={1}
          className={layoutConfig.desktop.emptyCell.className}
        />

        {/* Dynamic Vote Rows */}
        {loading ? (
          // Memoized loading skeleton
          <LoadingSkeleton layoutConfig={layoutConfig} />
        ) : error ? (
          // Error state
          <GridCell
            colSpan={layoutConfig.desktop.errorContainer.colSpan}
            rowStart={layoutConfig.desktop.errorContainer.rowStart}
            className={layoutConfig.desktop.errorContainer.className}
          >
            <div className="text-center">
              <Typography
                variant={textConfig.errorTitle.variant}
                color={textConfig.errorTitle.color as `#${string}` | "primary"}
                weight={textConfig.errorTitle.weight}
                className={textConfig.errorTitle.className}
              >
                Oops! Something Went Wrong
              </Typography>
              <Typography
                variant={textConfig.errorMessage.variant}
                color={
                  textConfig.errorMessage.color as `#${string}` | "primary"
                }
                weight={textConfig.errorMessage.weight}
                className={textConfig.errorMessage.className}
              >
                {error}
              </Typography>
            </div>
          </GridCell>
        ) : noData ? (
          // No data state
          <GridCell
            colSpan={layoutConfig.desktop.noDataContainer.colSpan}
            rowStart={layoutConfig.desktop.noDataContainer.rowStart}
            className={layoutConfig.desktop.noDataContainer.className}
          >
            <div className="text-center">
              <Typography
                variant={textConfig.noDataTitle.variant}
                color={textConfig.noDataTitle.color as `#${string}` | "primary"}
                weight={textConfig.noDataTitle.weight}
                className={textConfig.noDataTitle.className}
              >
                No Votes Available
              </Typography>
              <Typography
                variant={textConfig.noDataMessage.variant}
                color={
                  textConfig.noDataMessage.color as `#${string}` | "primary"
                }
                weight={textConfig.noDataMessage.weight}
                className={textConfig.noDataMessage.className}
              >
                There are no recent votes to display
                {activeTab ? ` for ${activeTab}` : ""} at the moment. Please
                check back later!
              </Typography>
            </div>
          </GridCell>
        ) : (
          // Dynamic vote rows
          proposals.map((proposal, index) => {
            const baseRow = index * 2 + 2; // Each proposal takes 2 rows (main + expanded)
            const expandedRow = baseRow + 1;

            return (
              <React.Fragment key={proposal.id}>
                <GridCell
                  rowStart={baseRow}
                  className={layoutConfig.desktop.proposalNumberCell.className}
                >
                  <div
                    ref={(el) => {
                      desktopProposalRowRefs.current[index] = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.proposalId.variant}
                      color={
                        textConfig.proposalId.color as `#${string}` | "primary"
                      }
                      weight={textConfig.proposalId.weight}
                      className={textConfig.proposalId.className}
                    >
                      {proposal.id}
                    </Typography>
                  </div>
                </GridCell>
                <GridCell
                  colSpan={layoutConfig.desktop.proposalStatusCell.colSpan}
                  rowStart={baseRow}
                  className={layoutConfig.desktop.proposalStatusCell.className}
                >
                  <div
                    ref={(el) => {
                      desktopProposalRowRefs.current[index] = el;
                    }}
                  >
                    {" "}
                    <Typography
                      variant={textConfig.votedLabel.variant}
                      color={
                        textConfig.votedLabel.color as `#${string}` | "primary"
                      }
                      weight={textConfig.votedLabel.weight}
                      className={`${textConfig.votedLabel.className} font-ppmori`}
                    >
                      Voted{" "}
                    </Typography>
                    <Typography
                      variant={textConfig.result.variant}
                      color={
                        textConfig.result.color as `#${string}` | "primary"
                      }
                      weight={textConfig.result.weight}
                      className={`${textConfig.result.className} ${getVoteResultColor(proposal.result)}`}
                    >
                      {proposal.result}
                    </Typography>
                  </div>
                </GridCell>
                <GridCell
                  colSpan={layoutConfig.desktop.proposalContentCell.colSpan}
                  colStart={layoutConfig.desktop.proposalContentCell.colStart}
                  rowStart={baseRow}
                  className={layoutConfig.desktop.proposalContentCell.className}
                >
                  <div
                    ref={(el) => {
                      desktopProposalRowRefs.current[index] = el;
                    }}
                  >
                    <Typography
                      variant={textConfig.proposalTitle.variant}
                      color={
                        textConfig.proposalTitle.color as
                          | `#${string}`
                          | "primary"
                      }
                      weight={textConfig.proposalTitle.weight}
                      className={textConfig.proposalTitle.className}
                    >
                      {proposal.title}
                    </Typography>
                    <div className="flex gap-3">
                      <span className="px-4 py-1.5 border-2 border-[#A885CD] rounded-full bg-transparent flex items-center gap-2">
                        <Image
                          src={proposal.icon}
                          alt={proposal.protocol}
                          width={20}
                          height={20}
                          className="w-5 h-5"
                        />
                        <Typography
                          variant={textConfig.protocolBadge.variant}
                          color={
                            textConfig.protocolBadge.color as
                              | `#${string}`
                              | "accent"
                          }
                          weight={textConfig.protocolBadge.weight}
                          className={textConfig.protocolBadge.className}
                        >
                          {proposal.protocol}
                        </Typography>
                      </span>
                      <Typography
                        variant={textConfig.typeBadge.variant}
                        color={
                          textConfig.typeBadge.color as `#${string}` | "accent"
                        }
                        weight={textConfig.typeBadge.weight}
                        className={`${textConfig.typeBadge.className} px-4 py-1.5 border-2 rounded-full ${getTypeStyle(
                          proposal.type
                        )}`}
                      >
                        {proposal.type}
                      </Typography>
                    </div>
                  </div>
                </GridCell>
                <GridCell
                  colStart={layoutConfig.desktop.proposalArrowCell.colStart}
                  rowStart={baseRow}
                  className={layoutConfig.desktop.proposalArrowCell.className}
                  style={{
                    backgroundColor:
                      layoutConfig.desktop.proposalArrowCell.backgroundColor,
                  }}
                  onClick={() =>
                    setExpandedItem(expandedItem === index ? null : index)
                  }
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${images.bgImage.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center left",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "multiply",
                    }}
                  ></div>
                  <div
                    ref={(el) => {
                      desktopProposalRowRefs.current[index] = el;
                    }}
                  >
                    <Arrow
                      direction={expandedItem === index ? "up" : "down"}
                      hoverColor="#DFF48D"
                    />
                  </div>
                </GridCell>

                {/* Expandable content for each proposal */}
                {expandedItem === index && (
                  <GridCell
                    colSpan={layoutConfig.desktop.expandableContentCell.colSpan}
                    rowStart={expandedRow}
                    className={
                      layoutConfig.desktop.expandableContentCell.className
                    }
                    style={{
                      backgroundColor:
                        layoutConfig.desktop.expandableContentCell
                          .backgroundColor,
                    }}
                  >
                    {proposal.voter && (
                      <div className="space-y-6">
                        {/* Voter Information */}
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={images.voterIcon.src}
                              alt={`${proposal.voter.name} icon`}
                              width={40}
                              height={40}
                              className="rounded-full"
                              quality={100}
                            />
                          </div>
                          <div className="flex-1">
                            <Typography
                              variant={textConfig.voterName.variant}
                              color={
                                textConfig.voterName.color as
                                  | `#${string}`
                                  | "primary"
                              }
                              weight={textConfig.voterName.weight}
                              className={textConfig.voterName.className}
                            >
                              {proposal.voter.name}
                            </Typography>
                            <Typography
                              variant={textConfig.voterInfo.variant}
                              color={
                                textConfig.voterInfo.color as
                                  | `#${string}`
                                  | "primary"
                              }
                              weight={textConfig.voterInfo.weight}
                              className={textConfig.voterInfo.className}
                            >
                              Voted{" "}
                              <Typography
                                variant="body1"
                                color="primary"
                                weight="medium"
                                className="inline text-[#A885CD]"
                              >
                                {proposal.result}
                              </Typography>{" "}
                              on{" "}
                              <Typography
                                variant="body1"
                                color="primary"
                                weight="medium"
                                className="inline text-[#A885CD]"
                              >
                                {proposal.hasRationale &&
                                proposal.forumCreatedAt
                                  ? formatDate(proposal.forumCreatedAt)
                                  : formatDate(proposal.endDate)}
                              </Typography>
                            </Typography>
                          </div>
                        </div>

                        {/* Rationale Section */}
                        {proposal.hasRationale && (
                          <div className="mt-6">
                            <Typography
                              variant={textConfig.rationaleTitle.variant}
                              color={
                                textConfig.rationaleTitle.color as
                                  | `#${string}`
                                  | "primary"
                              }
                              weight={textConfig.rationaleTitle.weight}
                              className={textConfig.rationaleTitle.className}
                            >
                              Rationale
                            </Typography>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                              {proposal.forumContent ? (
                                <div
                                  className="prose prose-sm max-w-none [&_a]:text-[#A885CD] [&_a]:underline [&_a:hover]:text-[#8B6FA8]"
                                  style={{
                                    color: "#1A1A1A",
                                    fontFamily: "PPMori, sans-serif",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: proposal.forumContent,
                                  }}
                                />
                              ) : (
                                <a
                                  href={proposal.commentLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#A885CD] hover:text-[#8B6FA8] underline break-all"
                                >
                                  {proposal.commentLink}
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </GridCell>
                )}
              </React.Fragment>
            );
          })
        )}

        {/* Footer Row - Always position at the bottom */}
        <GridCell
          colSpan={layoutConfig.desktop.footerCell.colSpan}
          rowStart={layoutConfig.desktop.footerCell.rowStart}
          className={layoutConfig.desktop.footerCell.className}
          style={{
            backgroundColor: layoutConfig.desktop.footerCell.backgroundColor,
          }}
        >
          <div ref={desktopFooterRef}>
            <Link
              href="https://lamprosdao.notion.site/governance"
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
      </Grid>
    </>
  );
});

export default RecentVotes;
