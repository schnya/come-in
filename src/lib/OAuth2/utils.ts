import { google } from "googleapis";

export async function getOAuth2Client() {
  const magicalOAuthClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );

  magicalOAuthClient.setCredentials({
    refresh_token: process.env.REFRESH_TOKEN,
  });

  const { token } = await magicalOAuthClient.getAccessToken();
  return token;
}
