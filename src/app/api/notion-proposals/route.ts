import { Client } from "@notionhq/client";
import { NextRequest, NextResponse } from "next/server";

// Notion API types
interface NotionRichText {
  type: "text" | "mention";
  plain_text: string;
}

interface NotionProperty {
  type: "rich_text" | "title" | string;
  rich_text?: NotionRichText[];
  title?: NotionRichText[];
}

interface NotionPage {
  properties: Record<string, NotionProperty>;
  [key: string]: any;
}

interface NotionQueryResponse {
  results: NotionPage[];
  [key: string]: any;
}

// Application types
interface ProtocolPageMapping {
  id: string;
  votingType: "Off-chain Voting" | "On-chain Voting";
}

interface FormattedPageId {
  id: string;
  votingType: "Off-chain Voting" | "On-chain Voting";
}

interface SimplifiedRecord {
  [key: string]: string;
  Type: "Off-chain Voting" | "On-chain Voting";
}

interface ApiResponse {
  success?: boolean;
  data?: SimplifiedRecord[];
  timestamp?: number;
  error?: string;
  details?: string;
  code?: string;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

function extractPlainText(property: NotionProperty): string {
  // Function to extract plain text from different Notion property types
  if (!property) return "";

  // Handle rich_text type
  if (
    property.type === "rich_text" &&
    property.rich_text &&
    property.rich_text.length > 0
  ) {
    return property.rich_text
      .map((item: NotionRichText) => {
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
    return property.title
      .map((item: NotionRichText) => item.plain_text)
      .join(" ");
  }

  // Handle other potential types if needed
  return "";
}

const PROTOCOL_PAGE_MAPPING: Record<string, ProtocolPageMapping[]> = {
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

export async function GET(request: NextRequest): Promise<NextResponse> {
  console.log("request", request);
  if (!process.env.NOTION_API_KEY) {
    return NextResponse.json(
      { error: "Notion API key is not configured" },
      { status: 500 }
    );
  }
  console.log("process.env.NOTION_API_KEY", process.env.NOTION_API_KEY);

  try {
    const { searchParams } = new URL(request.url);
    const selectedProtocol = searchParams.get("protocol")?.toLowerCase();
    console.log("selected protocol is:::", selectedProtocol);

    // Validate the protocol
    if (selectedProtocol && !PROTOCOL_PAGE_MAPPING[selectedProtocol]) {
      return NextResponse.json(
        { error: "Invalid protocol specified" },
        { status: 400 }
      );
    }

    const timestamp = Date.now();

    // Determine which page IDs to use
    let pageIdsToUse: string[] = [];

    if (selectedProtocol && PROTOCOL_PAGE_MAPPING[selectedProtocol]) {
      // If a specific protocol is selected, only fetch its data
      pageIdsToUse = PROTOCOL_PAGE_MAPPING[selectedProtocol]
        .map((item: ProtocolPageMapping) => process.env[item.id])
        .filter((id): id is string => Boolean(id));
    } else {
      // If no protocol is selected, fetch data from all protocols
      Object.values(PROTOCOL_PAGE_MAPPING).forEach(
        (protocolPages: ProtocolPageMapping[]) => {
          protocolPages.forEach((page: ProtocolPageMapping) => {
            const envValue = process.env[page.id];
            if (envValue) {
              pageIdsToUse.push(envValue);
            }
          });
        }
      );
    }

    console.log("IdsToUse", pageIdsToUse);

    const headers = {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    };

    // Filter out any undefined page IDs
    const validPageIds = pageIdsToUse.filter((id: string) => id);
    console.log("validIDs", validPageIds);

    if (validPageIds.length === 0) {
      return NextResponse.json(
        { error: "No valid Page IDs configured" },
        { status: 400 }
      );
    }

    // Format page IDs and determine voting type based on original index in the full array
    const formattedPageIds: FormattedPageId[] = validPageIds.map(
      (id: string, index: number) => {
        // Find the protocol and the voting type for this ID
        const protocol = Object.keys(PROTOCOL_PAGE_MAPPING).find(
          (proto: string) =>
            PROTOCOL_PAGE_MAPPING[proto].some(
              (item: ProtocolPageMapping) => process.env[item.id] === id
            )
        );

        console.log("inside fPI", protocol);

        const votingType = protocol
          ? PROTOCOL_PAGE_MAPPING[protocol].find(
              (item: ProtocolPageMapping) => process.env[item.id] === id
            )?.votingType || "Off-chain Voting"
          : index % 2 === 0
          ? "Off-chain Voting"
          : "On-chain Voting";

        console.log("voting type", votingType);

        return {
          id: id.replace(/-/g, ""),
          votingType,
        };
      }
    );

    console.log("formattedIds", formattedPageIds);

    // Fetch database records for all pages
    const databasePromises = formattedPageIds.map(
      async ({
        id,
        votingType,
      }: FormattedPageId): Promise<SimplifiedRecord[]> => {
        const response: NotionQueryResponse = await (
          notion.databases as any
        ).query({
          database_id: id,
        });

        // console.log(`Debug - Database ${id} (${votingType}):`, {
        //   resultsCount: response.results.length,
        //   firstResult: response.results[0] // Log the first result if exists
        // });

        // Transform each result to extract plain text and add voting type
        return response.results.map((result: NotionPage): SimplifiedRecord => {
          const simplifiedRecord: SimplifiedRecord = {
            Type: votingType,
          };

          // Iterate through all properties
          Object.entries(result.properties).forEach(
            ([key, value]: [string, NotionProperty]) => {
              simplifiedRecord[key] = extractPlainText(value);
            }
          );

          return simplifiedRecord;
        });
      }
    );

    // Fetch all database records
    const allDatabaseRecords: SimplifiedRecord[] = (
      await Promise.all(databasePromises)
    ).flat();

    // Sort database records
    const sortedRecords = allDatabaseRecords.sort(
      (a: SimplifiedRecord, b: SimplifiedRecord) => {
        const parseDate = (dateStr: string): Date | null => {
          if (!dateStr) return null;
          const [day, month, year] = dateStr.split("/");
          // Use explicit constructor with 0-indexed month for consistency
          return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
        };

        const dateA = parseDate(a["Start Date"]);
        const dateB = parseDate(b["Start Date"]);

        if (!dateA && !dateB) return 0;
        if (!dateA) return 1;
        if (!dateB) return -1;

        // Sort in descending order (newest first)
        return dateB.getTime() - dateA.getTime();
      }
    );

    // console.log("sortedData", sortedRecords);

    return NextResponse.json(
      {
        success: true,
        data: sortedRecords,
        timestamp,
      },
      { headers }
    );
  } catch (error: any) {
    console.error("Notion API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch Notion data",
        details: error.message,
        code: error.code,
      },
      { status: 500 }
    );
  }
}
