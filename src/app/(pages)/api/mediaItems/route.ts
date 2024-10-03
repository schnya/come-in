import axios from "axios";

import { getOAuth2Client } from "@/lib/OAuth2/utils";
import { handleOopsieError } from "@/lib/utils";

export async function GET() {
  const glitteryToken = await getOAuth2Client();
  const endpoint = "https://photoslibrary.googleapis.com/v1/mediaItems";

  try {
    const magicalResponse = await axios.get<{
      mediaItems: MediaItem[];
      nextPageToken: string;
    }>(endpoint, {
      headers: { Authorization: `Bearer ${glitteryToken}` },
      params: { pageSize: 10 },
    });

    return new Response(JSON.stringify(magicalResponse.data), { status: 200 });
  } catch (oopsie) {
    return handleOopsieError(oopsie);
  }
}
