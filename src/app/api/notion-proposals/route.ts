import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

// Type definitions for Notion properties
type NotionProperty =
  | { type: "date"; date: { start: string } | null }
  | {
      type: "rich_text";
      rich_text: Array<{ type: "text" | "mention"; plain_text: string }>;
    }
  | { type: "title"; title: Array<{ plain_text: string }> };

// Type for Notion pages returned from database query
type NotionPage = {
  properties?: Record<string, any>;
  [key: string]: any;
};

interface SimplifiedRecord {
  [key: string]: string;
  Type: string;
  Protocol: string;
}

type ProtocolKey = "arbitrum" | "optimism" | "uniswap" | "superfluid";

interface ProtocolPageConfig {
  id: string;
  votingType: string;
}

const PROTOCOL_PAGE_MAPPING: Record<ProtocolKey, ProtocolPageConfig[]> = {
  arbitrum: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID1", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID2", votingType: "On-chain Voting" },
  ],
  optimism: [
    // { id: "NEXT_PUBLIC_NOTION_PAGE_ID3", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID4", votingType: "On-chain Voting" },
  ],
  uniswap: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID5", votingType: "Off-chain Voting" },
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID6", votingType: "On-chain Voting" },
  ],
  // ens: [
  //   { id: "NEXT_PUBLIC_NOTION_PAGE_ID7", votingType: "Off-chain Voting" },
  //   { id: "NEXT_PUBLIC_NOTION_PAGE_ID8", votingType: "On-chain Voting" }
  // ],
  superfluid: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID9", votingType: "Off-chain Voting" },
    // { id: "NEXT_PUBLIC_NOTION_PAGE_ID10", votingType: "On-chain Voting" }
  ],
};

function extractPlainText(property: any): string {
  // Function to extract plain text from different Notion property types
  if (!property) return "";

  // Handle date type
  if (property.type === "date" && property.date) {
    const dateObj = property.date.start;
    if (dateObj) {
      const date = new Date(dateObj);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      return `${day}/${month}/${year}`;
    }
    return "";
  }

  // Handle rich_text type
  if (
    property.type === "rich_text" &&
    property.rich_text &&
    property.rich_text.length > 0
  ) {
    return property.rich_text
      .map((item: any) => {
        if (item.type === "text") return item.plain_text;
        if (item.type === "mention") return item.plain_text;
        return "";
      })
      .filter((text: string) => text.trim() !== "")
      .join(" ");
  }

  // Handle title type
  if (
    property.type === "title" &&
    property.title &&
    property.title.length > 0
  ) {
    return property.title.map((item: any) => item.plain_text).join(" ");
  }

  // Handle other potential types if needed
  return "";
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion API key is not configured" },
      { status: 500 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    let selectedProtocol = searchParams.get("protocol")?.toLowerCase() as
      | ProtocolKey
      | undefined; // Convert to lowercase

    // Validate the protocol
    if (selectedProtocol && !PROTOCOL_PAGE_MAPPING[selectedProtocol]) {
      return NextResponse.json(
        { error: "Invalid protocol specified" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();

    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };

    // Helper function to parse dates for sorting
    const parseDate = (dateStr: string | undefined): Date | null => {
      if (!dateStr || typeof dateStr !== "string") return null;

      // Handle DD/MM/YYYY format
      const parts = dateStr.trim().split("/");
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10);
        const year = parseInt(parts[2], 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

        const date = new Date(year, month - 1, day);
        // Validate the date
        if (
          date.getFullYear() === year &&
          date.getMonth() === month - 1 &&
          date.getDate() === day
        ) {
          return date;
        }
      }

      // If format doesn't match, try to parse as ISO string
      const isoDate = new Date(dateStr);
      if (!isNaN(isoDate.getTime())) {
        return isoDate;
      }

      return null;
    };

    // Determine which protocols to process
    // If no protocol is selected, we need to fetch from all protocols to get latest 5 per chain
    const protocolsToFetch: ProtocolKey[] = selectedProtocol
      ? [selectedProtocol]
      : (Object.keys(PROTOCOL_PAGE_MAPPING) as ProtocolKey[]);

    console.log(
      `\n[INIT] Processing protocols: ${protocolsToFetch.join(", ")} ${
        selectedProtocol ? "(single)" : "(all chains)"
      }`
    );

    // Fetch and process data for each protocol
    const protocolPromises = protocolsToFetch.map(
      async (protocol): Promise<SimplifiedRecord[]> => {
        const protocolPages = PROTOCOL_PAGE_MAPPING[protocol];

        // Fetch data for each voting type in this protocol
        const votingTypePromises = protocolPages.map(
          async ({ id, votingType }): Promise<SimplifiedRecord[]> => {
            const pageId = process.env[id];

            if (!pageId) {
              return [];
            }

            try {
              // Fetch all records from this database (handle pagination)
              let allResults: NotionPage[] = [];
              let hasMore = true;
              let nextCursor: string | undefined = undefined;

              while (hasMore) {
                const response = await notion.databases.query({
                  database_id: pageId.replace(/-/g, ""),
                  start_cursor: nextCursor,
                  page_size: 100, // Maximum page size
                });

                allResults = allResults.concat(
                  response.results as NotionPage[]
                );
                hasMore = response.has_more;
                nextCursor = response.next_cursor ?? undefined;
              }

              console.log(
                `\n[FETCH] ${protocol} - ${votingType}: Total records from Notion: ${allResults.length}`
              );

              // Transform each result to extract plain text
              const records: SimplifiedRecord[] = allResults.map((result) => {
                const simplifiedRecord: SimplifiedRecord =
                  {} as SimplifiedRecord;

                // Iterate through all properties
                if (
                  result.properties &&
                  typeof result.properties === "object"
                ) {
                  Object.entries(result.properties).forEach(([key, value]) => {
                    simplifiedRecord[key] = extractPlainText(value);
                  });
                }

                // Add voting type and protocol to each record
                simplifiedRecord["Type"] = votingType;
                simplifiedRecord["Protocol"] = protocol;

                return simplifiedRecord;
              });

              // Debug: Log extracted dates for off-chain voting
              if (votingType === "Off-chain Voting") {
                console.log(`[EXTRACTED DATES] ${protocol} - ${votingType}:`);
                records
                  .filter((r: SimplifiedRecord) => r["Start Date"])
                  .slice(0, 15)
                  .forEach((record: SimplifiedRecord, idx: number) => {
                    console.log(
                      `  ${idx + 1}. Start Date: "${record["Start Date"]}"`
                    );
                  });
              }

              return records;
            } catch (error) {
              console.error(
                `Error fetching data for ${protocol} ${votingType}:`,
                error
              );
              return [];
            }
          }
        );

        // Wait for all voting types to complete for this protocol
        const votingTypeResults = await Promise.all(votingTypePromises);
        // Combine all voting types for this protocol
        const allProtocolRecords = votingTypeResults.flat();

        // Sort all records for this protocol by date (descending - newest first)
        const sortedProtocolRecords = allProtocolRecords.sort(
          (a: SimplifiedRecord, b: SimplifiedRecord) => {
            const dateA = parseDate(a["Start Date"]);
            const dateB = parseDate(b["Start Date"]);

            if (!dateA && !dateB) return 0;
            if (!dateA) return 1;
            if (!dateB) return -1;

            return dateB.getTime() - dateA.getTime();
          }
        );

        // Debug: Log dates for off-chain voting to help identify sorting issues
        if (protocol === "arbitrum" || selectedProtocol === protocol) {
          const offChainRecords = sortedProtocolRecords.filter(
            (r: SimplifiedRecord) => r["Type"] === "Off-chain Voting"
          );
          if (offChainRecords.length > 0) {
            console.log(
              `\n[SORTED] ${protocol} - Top 15 Off-chain records after sorting:`
            );
            offChainRecords
              .slice(0, 15)
              .forEach((record: SimplifiedRecord, idx: number) => {
                const parsedDate = parseDate(record["Start Date"]);
                console.log(
                  `  ${idx + 1}. Date: "${
                    record["Start Date"]
                  }" -> Parsed: ${parsedDate?.toISOString()} -> Timestamp: ${parsedDate?.getTime()}`
                );
              });
            console.log(`Total off-chain records: ${offChainRecords.length}`);
          }

          // Also log all records (mixed types) top 10
          console.log(
            `\n[ALL TYPES] ${protocol} - Top 10 records after sorting (all voting types):`
          );
          sortedProtocolRecords
            .slice(0, 10)
            .forEach((record: SimplifiedRecord, idx: number) => {
              const parsedDate = parseDate(record["Start Date"]);
              console.log(
                `  ${idx + 1}. Type: ${record["Type"]}, Date: "${
                  record["Start Date"]
                }" -> Parsed: ${parsedDate?.toISOString()}`
              );
            });
        }

        // Return only the latest 5 records for this protocol (across all voting types)
        const latest5 = sortedProtocolRecords.slice(0, 5);

        // Debug: Log what we're returning per protocol
        console.log(
          `\n[PROTOCOL RESULT] ${protocol.toUpperCase()} - Latest 5 records:`
        );
        latest5.forEach((record: SimplifiedRecord, idx: number) => {
          const parsedDate = parseDate(record["Start Date"]);
          console.log(
            `  ${idx + 1}. Protocol: ${record["Protocol"]}, Type: ${
              record["Type"]
            }, Date: "${record["Start Date"]}" (${parsedDate?.toISOString()})`
          );
        });

        return latest5;
      }
    );

    // Wait for all protocols to complete
    const allProtocolResults = await Promise.all(protocolPromises);

    let finalRecords: SimplifiedRecord[];

    if (selectedProtocol) {
      // If a protocol is selected, return the latest 5 from that protocol
      finalRecords = allProtocolResults[0] || [];
      // Console log the fetched 5 data when protocol is selected
      console.log(
        `\n=== Fetched 5 data for protocol: ${selectedProtocol.toUpperCase()} ===`
      );
      console.log(`Total records fetched: ${finalRecords.length}`);
      console.log("Records:", JSON.stringify(finalRecords, null, 2));
      console.log(`=== End of ${selectedProtocol.toUpperCase()} data ===\n`);
    } else {
      // If no protocol is selected, combine all protocols' latest 5, sort, and return top 5 overall
      console.log(
        `\n[COMBINING] Combining data from ${allProtocolResults.length} protocols`
      );

      const allRecords = allProtocolResults.flat();
      console.log(
        `[COMBINING] Total records before sorting: ${allRecords.length}`
      );

      // Log records from each protocol before sorting
      const protocolGroups: Record<string, SimplifiedRecord[]> = {};
      allRecords.forEach((record: SimplifiedRecord) => {
        const protocol = record["Protocol"];
        if (!protocolGroups[protocol]) {
          protocolGroups[protocol] = [];
        }
        protocolGroups[protocol].push(record);
      });

      console.log(`[COMBINING] Records per protocol:`);
      Object.keys(protocolGroups).forEach((protocol: string) => {
        console.log(
          `  - ${protocol}: ${protocolGroups[protocol].length} records`
        );
      });

      // Sort all records by date (descending - newest first) across all protocols
      const sortedAllRecords = allRecords.sort(
        (a: SimplifiedRecord, b: SimplifiedRecord) => {
          const dateA = parseDate(a["Start Date"]);
          const dateB = parseDate(b["Start Date"]);

          if (!dateA && !dateB) return 0;
          if (!dateA) return 1;
          if (!dateB) return -1;

          return dateB.getTime() - dateA.getTime();
        }
      );

      console.log(`\n[FINAL SORT] Top 10 records after sorting all chains:`);
      sortedAllRecords
        .slice(0, 10)
        .forEach((record: SimplifiedRecord, idx: number) => {
          const parsedDate = parseDate(record["Start Date"]);
          console.log(
            `  ${idx + 1}. Protocol: ${record["Protocol"]}, Type: ${
              record["Type"]
            }, Date: "${record["Start Date"]}" (${parsedDate?.toISOString()})`
          );
        });

      // Return only the latest 5 records overall
      finalRecords = sortedAllRecords.slice(0, 5);

      console.log(`\n[FINAL RESULT] Returning top 5 records from all chains:`);
      finalRecords.forEach((record: SimplifiedRecord, idx: number) => {
        console.log(
          `  ${idx + 1}. Protocol: ${record["Protocol"]}, Type: ${
            record["Type"]
          }, Date: "${record["Start Date"]}"`
        );
      });
    }

    return NextResponse.json(
      {
        success: true,
        data: finalRecords,
        timestamp,
      },
      { headers }
    );
  } catch (error) {
    console.error("Notion API Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorCode =
      error && typeof error === "object" && "code" in error
        ? error.code
        : undefined;
    return NextResponse.json(
      {
        error: "Failed to fetch Notion data",
        details: errorMessage,
        code: errorCode,
      },
      { status: 500 }
    );
  }
}
