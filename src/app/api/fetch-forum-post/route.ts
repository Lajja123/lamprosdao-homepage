// app/api/fetch-forum-post/route.ts
import { NextRequest, NextResponse } from "next/server";

interface ForumPost {
  post_number: number;
  cooked: string;
  [key: string]: any;
}

interface ForumResponse {
  post_stream?: {
    posts?: ForumPost[];
  };
  [key: string]: any;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");
  const postNumber = searchParams.get("postNumber");
  const protocol = searchParams.get("protocol")?.toLowerCase();

  // console.log(`Fetching forum post with postId: ${postId}, postNumber: ${postNumber}, protocol: ${protocol}`);

  if (!postId || !postNumber) {
    return NextResponse.json(
      { error: "Missing postId or postNumber" },
      { status: 400 }
    );
  }

  // Determine the forum URL based on protocol
  let forumUrl: string;
  if (protocol === "superfluid") {
    forumUrl = `https://forum.superfluid.org/t/${postId}/${postNumber}.json`;
  } else {
    // Default to Arbitrum forum for Arbitrum and other protocols
    forumUrl = `https://forum.arbitrum.foundation/t/${postId}/${postNumber}.json`;
  }

  try {
    const response = await fetch(forumUrl);

    if (!response.ok) {
      console.error(
        `Failed to fetch forum post: ${response.status} ${response.statusText}`
      );
      return NextResponse.json(
        { error: "Failed to fetch forum post" },
        { status: response.status }
      );
    }

    const data: ForumResponse = await response.json();

    // Find the specific post with the matching post_number
    const targetPost = data.post_stream?.posts?.find(
      (post: ForumPost) => post.post_number === parseInt(postNumber)
    );

    if (!targetPost) {
      console.warn(`Post not found for postNumber: ${postNumber}`);
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Assuming 'cooked' is a field in targetPost
    if (!targetPost.cooked) {
      console.warn(
        `'cooked' field missing in targetPost for postNumber: ${postNumber}`
      );
    }

    return NextResponse.json(targetPost);
  } catch (error) {
    console.error("Error fetching forum post:", error);
    return NextResponse.json(
      { error: "Failed to fetch forum post" },
      { status: 500 }
    );
  }
}
