import axios from "axios";
import { NextRequest } from "next/server";

import { getOAuth2Client } from "@/lib/OAuth2/utils";
import { handleOopsieError } from "@/lib/utils";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ mediaItemId: string }> }
) {
  const mediaItemId = await params;

  if (!mediaItemId) {
    return new Response(JSON.stringify({ error: "No mediaItemId provided" }), {
      status: 400,
    });
  }

  const glitteryToken = await getOAuth2Client();
  const endpoint = `https://photoslibrary.googleapis.com/v1/mediaItems/${mediaItemId}`;

  try {
    const magicalResponse = await axios.get<MediaItem>(endpoint, {
      headers: { Authorization: `Bearer ${glitteryToken}` },
    });

    return new Response(JSON.stringify(magicalResponse.data), { status: 200 });
  } catch (oopsie) {
    return handleOopsieError(oopsie);
  }
}
