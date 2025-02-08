"use server";

import { z } from "zod";
import { redirect } from "next/navigation";

const envSchema = z.object({
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  FACEBOOK_CLIENT_ID: z.string(),
  FACEBOOK_CLIENT_SECRET: z.string(),
  NEXT_PUBLIC_BASE_URL: z.string(),
});

const env = envSchema.parse({
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,

  FACEBOOK_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  FACEBOOK_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,

  NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
});

const GOOGLE_CLIENT_ID = env.GOOGLE_CLIENT_ID;
const FACEBOOK_CLIENT_ID = "949761743723079";

const GOOGLE_REDIRECT_URI = "http://localhost:3000/api/v1/auth/google/callback";
const FACEBOOK_REDIRECT_URI =
  "http://localhost:3000/api/v1/auth/facebook/callback";

export async function signinWithGoogle() {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: GOOGLE_REDIRECT_URI,
    response_type: "code",
    scope: "email profile",
  });

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  redirect(authUrl);
}

export async function signinWithFacebook() {
  console.log("hit2");
}
