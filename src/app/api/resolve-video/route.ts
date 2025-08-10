import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoUrl = searchParams.get("url");

  if (!videoUrl) {
    return NextResponse.json(
      { error: 'Missing "url" query parameter.' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(videoUrl);

    if (!response.ok) {
      console.error(
        `Failed to fetch video from ${videoUrl}: ${response.statusText}`,
      );
      return NextResponse.json(
        { error: `Failed to fetch video: ${response.statusText}` },
        { status: response.status },
      );
    }

    const contentType =
      response.headers.get("content-type") || "application/octet-stream";

    return new Response(response.body, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch (error) {
    console.error("Error streaming video from URL:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
