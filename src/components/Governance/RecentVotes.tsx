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
import vote1 from "@/assests/Governance/Vote.svg";
import Typography from "../UI/Typography";
import arbitrum from "@/assests/Governance/Arbitrum.svg";
import op from "@/assests/Governance/optimism.svg";
import uniswap from "@/assests/Governance/uniswap.svg";
import superfluid from "@/assests/Governance/superfluid_green.svg";
import bgImage1 from "@/assests/Governance/reportbg.png";
import Arrow from "../UI/Arrow";
import Button from "../UI/Button";
import linkLight from "@/assests/Governance/link-light.png";
import voterIcon from "@/assests/Governance/voter.svg";
import type {
  Proposal,
  Protocol,
  ForumPostResponse,
  ParsedForumUrl,
  NotionProposalData,
} from "@/types";

// Memoized Loading Skeleton Component
const LoadingSkeleton = React.memo(() => (
  <>
    {Array.from({ length: 4 }).map((_, index) => (
      <React.Fragment key={index}>
        <div
          className={`row-start-${
            index + 2
          } border border-black p-6 flex items-center justify-center`}
        >
          <div className="w-8 h-8 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div
          className={`col-span-2 row-start-${
            index + 2
          } border border-black p-6 flex items-center`}
        >
          <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
        </div>
        <div
          className={`col-span-6 col-start-4 row-start-${
            index + 2
          } border border-black p-6`}
        >
          <div className="w-full h-4 bg-gray-300 animate-pulse rounded mb-3"></div>
          <div className="flex gap-2">
            <div className="w-16 h-6 bg-gray-300 animate-pulse rounded-full"></div>
            <div className="w-20 h-6 bg-gray-300 animate-pulse rounded-full"></div>
          </div>
        </div>
        <div
          className={`relative col-start-8 row-start-${
            index + 2
          } border-b border-white bg-[#2A2A2A] flex items-center justify-center`}
        >
          <div className="w-6 h-6 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </React.Fragment>
    ))}
  </>
));

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
          isActive ? "bg-[#2F2B2B] text-white" : "bg-white text-gray-700"
        }`}
      >
        <Image src={protocol.icon} alt={protocol.name} className="w-7" />
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
  const [activeTab, setActiveTab] = useState("Arbitrum");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add a ref to track the latest request ID
  const latestRequestIdRef = useRef(0);
  const currentRequestId = useRef(0);

  // Memoize protocols to prevent unnecessary re-renders
  const protocols: Protocol[] = useMemo(
    () => [
      {
        name: "Arbitrum",
        value: "arbitrum",
        icon: arbitrum,
        link: "https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642",
      },
      {
        name: "Optimism",
        value: "optimism",
        icon: op,
        link: "https://vote.optimism.io/delegates/lamprosdao.eth",
      },
      {
        name: "Uniswap",
        value: "uniswap",
        icon: uniswap,
        link: "",
      },
      {
        name: "Superfluid",
        value: "superfluid",
        icon: superfluid,
        link: "https://forum.superfluid.org/t/lampros-dao-delegate-thread/266",
      },
    ],
    []
  );

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
      return "Arbitrum";
    },
    []
  );

  // Memoize getProtocolIcon function
  const getProtocolIcon = useCallback((protocol: string) => {
    const iconMapping: Record<string, any> = {
      arbitrum: arbitrum,
      optimism: op,
      uniswap: uniswap,
      superfluid: superfluid,
    };

    return (
      iconMapping[protocol.toLowerCase()] ||
      `/governance/${protocol.toLowerCase()}.svg`
    );
  }, []);

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
              const supportedProtocols = ["arbitrum", "superfluid"];
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
    setActiveTab(protocol);
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
        return "text-[#000000]";
      case "Against":
        return "text-[#000000]";
      case "Abstain":
        return "text-[#000000]";
      default:
        return "text-[#000000]";
    }
  }, []);

  useEffect(() => {
    fetchProposals();
  }, [fetchProposals]);

  return (
    <>
      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="border border-black p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#CBE9FF]">
          <Typography
            variant="h1"
            color="primary"
            weight="semibold"
            className="tracking-wider"
          >
            Recent Votes
          </Typography>
          <div className="flex items-center gap-2 flex-wrap justify-center">
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
            <div className=" text-center">
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
            <div className="text-center">
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
                There are no recent votes to display for {activeTab} at the
                moment. Please check back later!
              </Typography>
            </div>
          ) : (
            // Mobile vote cards
            <div className="">
              {proposals.map((proposal, index) => (
                <div key={proposal.id} className="">
                  {/* Vote Header */}
                  <div className="flex items-stretch border border-black">
                    {/* Number cell */}
                    <div className="w-14 md:w-16 p-3 border-r border-black flex items-center justify-center">
                      <Typography
                        variant="h4"
                        color="primary"
                        weight="light"
                        className="font-psygen text-lg md:text-xl"
                      >
                        {proposal.id}
                      </Typography>
                    </div>
                    {/* Status cell */}
                    <div className="flex-1 p-3 flex items-center">
                      <Typography
                        variant="body1"
                        color="primary"
                        weight="medium"
                        className="font-ppmori text-sm md:text-base"
                      >
                        Voted [
                        <span className={getVoteResultColor(proposal.result)}>
                          {" "}
                          {proposal.result}{" "}
                        </span>
                        ]
                      </Typography>
                    </div>
                    {/* Arrow cell */}
                    <button
                      onClick={() =>
                        setExpandedItem(expandedItem === index ? null : index)
                      }
                      className="w-12 md:w-14 bg-[#1A1A1A] flex items-center justify-center"
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
                  <div className="p-4 ">
                    <Typography
                      variant="body1"
                      color="primary"
                      weight="normal"
                      className="text-sm md:text-base"
                    >
                      {proposal.title}
                    </Typography>
                    <div className="flex gap-2 flex-wrap">
                      <Typography
                        variant="caption"
                        color="accent"
                        weight="medium"
                        className="px-3 py-1 border-2 border-[#A885CD] rounded-full bg-transparent text-xs md:text-sm"
                      >
                        {proposal.protocol}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="accent"
                        weight="medium"
                        className="px-3 py-1 border-2 border-[#A885CD] rounded-full bg-transparent text-xs md:text-sm"
                      >
                        {proposal.type}
                      </Typography>
                    </div>
                  </div>

                  {/* Expandable content */}
                  {expandedItem === index && (
                    <div className="mt-0 pt-4 border-t border-black p-4">
                      {proposal.voter && (
                        <div className="space-y-4">
                          {/* Voter Information */}
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <Image
                                src={voterIcon.src}
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
                                Voted{" "}
                                <Typography
                                  variant="body1"
                                  color="primary"
                                  weight="medium"
                                  className={`inline ${getVoteResultColor(
                                    proposal.result
                                  )}`}
                                >
                                  {proposal.result}
                                </Typography>{" "}
                                on{" "}
                                <Typography
                                  variant="body1"
                                  color="primary"
                                  weight="medium"
                                  className="inline"
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
                                    className="prose prose-sm max-w-none text-xs md:text-sm"
                                    style={{
                                      color: "#1A1A1A",
                                      fontFamily: "PPMori, sans-serif",
                                    }}
                                    dangerouslySetInnerHTML={{
                                      __html: proposal.forumContent,
                                    }}
                                  />
                                ) : (
                                  <Typography
                                    variant="body1"
                                    color="light-gray"
                                    weight="normal"
                                    className="text-xs md:text-sm"
                                  >
                                    {proposal.commentLink}
                                  </Typography>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="border border-black bg-[#DFF48D] p-5 md:p-6 flex items-center justify-center">
          <Link
            href="https://lamprosdao.notion.site/governance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label="See More" color="#000000" textColor="#FFFFFF" />
          </Link>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-8">
        <div className=" border-b border-black bg-[#C5D9E8] p-6 flex items-center justify-center">
          <div className="  flex items-center justify-center">
            <Image src={vote1} alt="vote1" />
          </div>
        </div>
        <div className="col-span-6 border border-black p-10 flex items-center justify-between">
          <Typography
            variant="h2"
            color="primary"
            weight="semibold"
            className="tracking-wide"
          >
            Recent Votes
          </Typography>
          <div className="flex items-center ">
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
        <div className=" col-start-8 border border-black"></div>

        {/* Dynamic Vote Rows */}
        {loading ? (
          // Memoized loading skeleton
          <LoadingSkeleton />
        ) : error ? (
          // Error state
          <div className="col-span-8 row-start-2 border border-black p-8 flex items-center justify-center">
            <div className="text-center">
              <Typography
                variant="h3"
                color="primary"
                weight="medium"
                className="mb-2"
              >
                Oops! Something Went Wrong
              </Typography>
              <Typography variant="body1" color="primary" weight="normal">
                {error}
              </Typography>
            </div>
          </div>
        ) : noData ? (
          // No data state
          <div className="col-span-8 row-start-2 border border-black p-8 flex items-center justify-center">
            <div className="text-center">
              <Typography
                variant="h3"
                color="primary"
                weight="medium"
                className="mb-2"
              >
                No Votes Available
              </Typography>
              <Typography variant="body1" color="primary" weight="normal">
                There are no recent votes to display for {activeTab} at the
                moment. Please check back later!
              </Typography>
            </div>
          </div>
        ) : (
          // Dynamic vote rows
          proposals.map((proposal, index) => {
            const baseRow = index * 2 + 2; // Each proposal takes 2 rows (main + expanded)
            const expandedRow = baseRow + 1;

            return (
              <React.Fragment key={proposal.id}>
                <div
                  className={`row-start-${baseRow} border border-black p-6 flex items-center justify-center`}
                >
                  <Typography
                    variant="h4"
                    color="primary"
                    weight="light"
                    className="font-psygen"
                  >
                    {proposal.id}
                  </Typography>
                </div>
                <div
                  className={` row-start-${baseRow} border border-black p-6 flex items-center justify-items-start`}
                >
                  <Typography
                    variant="body1"
                    color="primary"
                    weight="medium"
                    className="font-ppmori "
                  >
                    Voted [{" "}
                    <span className={getVoteResultColor(proposal.result)}>
                      {proposal.result}
                    </span>{" "}
                    ]
                  </Typography>
                </div>
                <div
                  className={`col-span-8 col-start-3 row-start-${baseRow} border border-black p-6 `}
                >
                  <Typography
                    variant="body1"
                    color="primary"
                    weight="normal"
                    className="mb-4 mx-w-[600px]"
                  >
                    {proposal.title}
                  </Typography>
                  <div className="flex gap-3">
                    <Typography
                      variant="caption"
                      color="accent"
                      weight="medium"
                      className="px-4 py-1.5 border-2 border-[#A885CD] rounded-full bg-transparent"
                    >
                      {proposal.protocol}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="accent"
                      weight="medium"
                      className="px-4 py-1.5 border-2 border-[#A885CD] rounded-full bg-transparent"
                    >
                      {proposal.type}
                    </Typography>
                  </div>
                </div>
                <div
                  className={`relative col-start-8 row-start-${baseRow} border-b border-white bg-[#2A2A2A] flex items-center justify-center cursor-pointer hover:bg-[#3A3A3A] transition-colors`}
                  onClick={() =>
                    setExpandedItem(expandedItem === index ? null : index)
                  }
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${bgImage1.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center left",
                      backgroundRepeat: "no-repeat",
                      backgroundBlendMode: "multiply",
                    }}
                  ></div>
                  <Arrow direction={expandedItem === index ? "up" : "down"} />
                </div>

                {/* Expandable content for each proposal */}
                {expandedItem === index && (
                  <div
                    className={`col-span-8 row-start-${expandedRow} border border-black bg-gray-50 p-6`}
                  >
                    {proposal.voter && (
                      <div className="space-y-6">
                        {/* Voter Information */}
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={voterIcon.src}
                              alt={`${proposal.voter.name} icon`}
                              width={40}
                              height={40}
                              className="rounded-full"
                              quality={100}
                            />
                          </div>
                          <div className="flex-1">
                            <Typography
                              variant="body2"
                              color="primary"
                              weight="medium"
                              className="mb-1"
                            >
                              {proposal.voter.name}
                            </Typography>
                            <Typography
                              variant="body1"
                              color="primary"
                              weight="normal"
                            >
                              Voted{" "}
                              <Typography
                                variant="body1"
                                color="primary"
                                weight="medium"
                                className={`inline ${getVoteResultColor(
                                  proposal.result
                                )}`}
                              >
                                {proposal.result}
                              </Typography>{" "}
                              on{" "}
                              <Typography
                                variant="body1"
                                color="primary"
                                weight="medium"
                                className="inline"
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
                              variant="subtitle2"
                              color="primary"
                              weight="medium"
                              className="mb-3"
                            >
                              Rationale
                            </Typography>
                            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                              {proposal.forumContent ? (
                                <div
                                  className="prose prose-sm max-w-none"
                                  style={{
                                    color: "#1A1A1A",
                                    fontFamily: "PPMori, sans-serif",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: proposal.forumContent,
                                  }}
                                />
                              ) : (
                                <Typography
                                  variant="body1"
                                  color="light-gray"
                                  weight="normal"
                                >
                                  {proposal.commentLink}
                                </Typography>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })
        )}

        {/* Footer Row - Always position at the bottom */}
        <div
          className={`col-span-8 row-start-10 
         border border-black bg-[#DFF48D] p-10 flex items-center justify-center`}
        >
          <Link
            href="https://lamprosdao.notion.site/governance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button label="See More" color="#000000" textColor="#FFFFFF" />
          </Link>
        </div>
      </div>
    </>
  );
});

export default RecentVotes;
