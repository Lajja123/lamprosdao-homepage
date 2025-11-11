import { Client } from "@notionhq/client";
import { NextRequest } from "next/server";

// Cache this route for 1 hour (ISR)
export const revalidate = 3600;

// Types for Notion API
type NotionProperty =
  | {
      type: "date";
      date: { start: string } | null;
    }
  | {
      type: "rich_text";
      rich_text: Array<{
        type: string;
        plain_text: string;
      }>;
    }
  | {
      type: "title";
      title: Array<{
        plain_text: string;
      }>;
    }
  | {
      type: string;
      [key: string]: unknown;
    };

type Protocol = "arbitrum" | "optimism" | "uniswap" | "superfluid" | "scroll";

interface ProtocolPageConfig {
  id: string;
  votingType: "Off-chain Voting" | "On-chain Voting";
}

type ProtocolPageMapping = {
  [K in Protocol]: ProtocolPageConfig[];
};

interface SimplifiedRecord {
  [key: string]: string;
  Type: "Off-chain Voting" | "On-chain Voting";
  Protocol: Protocol;
}

interface ApiSuccessResponse {
  success: true;
  data: SimplifiedRecord[];
  timestamp: number;
}

interface ApiErrorResponse {
  error: string;
  details?: string;
  code?: string;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function extractPlainText(property: NotionProperty | null | undefined): string {
  // Function to extract plain text from different Notion property types
  if (!property) return "";

  // Handle date type
  if (property.type === "date") {
    const dateProperty = property as {
      type: "date";
      date: { start: string } | null;
    };
    if (dateProperty.date?.start) {
      const date = new Date(dateProperty.date.start);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      return `${day}/${month}/${year}`;
    }
    return "";
  }

  // Handle rich_text type
  if (property.type === "rich_text") {
    const richTextProperty = property as {
      type: "rich_text";
      rich_text: Array<{ type: string; plain_text: string }>;
    };
    if (richTextProperty.rich_text.length > 0) {
      return richTextProperty.rich_text
        .map((item: { type: string; plain_text: string }) => {
          if (item.type === "text") return item.plain_text;
          if (item.type === "mention") return item.plain_text;
          return "";
        })
        .filter((text: string) => text.trim() !== "")
        .join(" ");
    }
    return "";
  }

  // Handle title type
  if (property.type === "title") {
    const titleProperty = property as {
      type: "title";
      title: Array<{ plain_text: string }>;
    };
    if (titleProperty.title.length > 0) {
      return titleProperty.title
        .map((item: { plain_text: string }) => item.plain_text)
        .join(" ");
    }
    return "";
  }

  // Handle other potential types if needed
  return "";
}

const PROTOCOL_PAGE_MAPPING: ProtocolPageMapping = {
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
  scroll: [
    { id: "NEXT_PUBLIC_NOTION_PAGE_ID11", votingType: "On-chain Voting" },
  ],
};

export async function GET(request: NextRequest): Promise<Response> {
  if (!process.env.NOTION_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Notion API key is not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    let selectedProtocol = searchParams
      .get("protocol")
      ?.toLowerCase() as Protocol | null; // Convert to lowercase

    // Validate the protocol
    if (
      selectedProtocol &&
      !PROTOCOL_PAGE_MAPPING[selectedProtocol as Protocol]
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid protocol specified" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const timestamp: number = Date.now();

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
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
    const protocolsToFetch: Protocol[] = selectedProtocol
      ? [selectedProtocol]
      : (Object.keys(PROTOCOL_PAGE_MAPPING) as Protocol[]);

    console.log(
      `\n[INIT] Processing protocols: ${protocolsToFetch.join(", ")} ${
        selectedProtocol ? "(single)" : "(all chains)"
      }`
    );

    // Fetch and process data for each protocol
    const protocolPromises = protocolsToFetch.map(
      async (protocol: Protocol) => {
        const protocolPages = PROTOCOL_PAGE_MAPPING[protocol];

        // Fetch data for each voting type in this protocol
        const votingTypePromises = protocolPages.map(
          async ({
            id,
            votingType,
          }: ProtocolPageConfig): Promise<SimplifiedRecord[]> => {
            const pageId = process.env[id];

            if (!pageId) {
              return [];
            }

            try {
              // Fetch all records from this database (handle pagination)
              let allResults: Array<{
                properties: Record<string, NotionProperty>;
              }> = [];
              let hasMore: boolean = true;
              let nextCursor: string | undefined = undefined;

              while (hasMore) {
                const response = await notion.databases.query({
                  database_id: pageId.replace(/-/g, ""),
                  start_cursor: nextCursor,
                  page_size: 100, // Maximum page size
                });

                allResults = allResults.concat(
                  response.results as Array<{
                    properties: Record<string, NotionProperty>;
                  }>
                );
                hasMore = response.has_more;
                nextCursor = response.next_cursor as string | undefined;
              }

              console.log(
                `\n[FETCH] ${protocol} - ${votingType}: Total records from Notion: ${allResults.length}`
              );

              // Transform each result to extract plain text
              const records: SimplifiedRecord[] = allResults.map((result) => {
                const simplifiedRecord: Partial<SimplifiedRecord> = {};

                // Iterate through all properties
                Object.entries(result.properties).forEach(([key, value]) => {
                  simplifiedRecord[key] = extractPlainText(
                    value as NotionProperty | null | undefined
                  );
                });

                // Add voting type and protocol to each record
                simplifiedRecord["Type"] = votingType;
                simplifiedRecord["Protocol"] = protocol;

                return simplifiedRecord as SimplifiedRecord;
              });

              // Debug: Log extracted dates for off-chain voting
              if (votingType === "Off-chain Voting") {
                console.log(`[EXTRACTED DATES] ${protocol} - ${votingType}:`);
                records
                  .filter((r) => r["Start Date"])
                  .slice(0, 15)
                  .forEach((record, idx) => {
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
        const allProtocolRecords: SimplifiedRecord[] = votingTypeResults.flat();

        // Sort all records for this protocol by date (descending - newest first)
        const sortedProtocolRecords: SimplifiedRecord[] =
          allProtocolRecords.sort((a, b) => {
            const dateA = parseDate(a["Start Date"]);
            const dateB = parseDate(b["Start Date"]);

            if (!dateA && !dateB) return 0;
            if (!dateA) return 1;
            if (!dateB) return -1;

            return dateB.getTime() - dateA.getTime();
          });

        // Debug: Log dates for off-chain voting to help identify sorting issues
        if (protocol === "arbitrum" || selectedProtocol === protocol) {
          const offChainRecords = sortedProtocolRecords.filter(
            (r) => r["Type"] === "Off-chain Voting"
          );
          if (offChainRecords.length > 0) {
            console.log(
              `\n[SORTED] ${protocol} - Top 15 Off-chain records after sorting:`
            );
            offChainRecords.slice(0, 15).forEach((record, idx) => {
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
          sortedProtocolRecords.slice(0, 10).forEach((record, idx) => {
            const parsedDate = parseDate(record["Start Date"]);
            console.log(
              `  ${idx + 1}. Type: ${record["Type"]}, Date: "${
                record["Start Date"]
              }" -> Parsed: ${parsedDate?.toISOString()}`
            );
          });
        }

        // Return only the latest 5 records for this protocol (across all voting types)
        const latest5: SimplifiedRecord[] = sortedProtocolRecords.slice(0, 5);

        // Debug: Log what we're returning per protocol
        console.log(
          `\n[PROTOCOL RESULT] ${protocol.toUpperCase()} - Latest 5 records:`
        );
        latest5.forEach((record, idx) => {
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
    const allProtocolResults: SimplifiedRecord[][] =
      await Promise.all(protocolPromises);

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

      const allRecords: SimplifiedRecord[] = allProtocolResults.flat();
      console.log(
        `[COMBINING] Total records before sorting: ${allRecords.length}`
      );

      // Log records from each protocol before sorting
      const protocolGroups: Record<string, SimplifiedRecord[]> = {};
      allRecords.forEach((record) => {
        const protocol = record["Protocol"];
        if (!protocolGroups[protocol]) {
          protocolGroups[protocol] = [];
        }
        protocolGroups[protocol].push(record);
      });

      console.log(`[COMBINING] Records per protocol:`);
      Object.keys(protocolGroups).forEach((protocol) => {
        console.log(
          `  - ${protocol}: ${protocolGroups[protocol].length} records`
        );
      });

      // Sort all records by date (descending - newest first) across all protocols
      const sortedAllRecords: SimplifiedRecord[] = allRecords.sort((a, b) => {
        const dateA = parseDate(a["Start Date"]);
        const dateB = parseDate(b["Start Date"]);

        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;

        return dateB.getTime() - dateA.getTime();
      });

      console.log(`\n[FINAL SORT] Top 10 records after sorting all chains:`);
      sortedAllRecords.slice(0, 10).forEach((record, idx) => {
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
      finalRecords.forEach((record, idx) => {
        console.log(
          `  ${idx + 1}. Protocol: ${record["Protocol"]}, Type: ${
            record["Type"]
          }, Date: "${record["Start Date"]}"`
        );
      });
    }

    const response: ApiSuccessResponse = {
      success: true,
      data: finalRecords,
      timestamp,
    };

    return new Response(JSON.stringify(response), { headers });
  } catch (error) {
    console.error("Notion API Error:", error);
    const errorResponse: ApiErrorResponse = {
      error: "Failed to fetch Notion data",
      details: error instanceof Error ? error.message : String(error),
      code:
        error && typeof error === "object" && "code" in error
          ? String(error.code)
          : undefined,
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
