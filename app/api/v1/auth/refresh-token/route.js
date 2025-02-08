import { NextResponse } from "next/server";
import { createAccessToken, verifyRefreshToken } from "../../../../../lib/auth/JWT";
import prisma from "../../../../../lib/db";

export async function POST(req) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized access",
        },
        { status: 403 }
      );
    }

    const { refreshToken } = await req.json();
    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Refresh token not provided",
        },
        { status: 400 }
      );
    }

    const verifiedRefreshToken = await verifyRefreshToken(refreshToken);
    if (!verifiedRefreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid refresh token",
        },
        { status: 401 }
      );
    }

    const user = await prisma.users.findUnique({
      where: {
        id: verifiedRefreshToken._id,
      },
      select: {
        id: true,
        name: true,
        email: true,
        user_type: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          error: "User not found",
        },
        { status: 404 }
      );
    }

    const accessToken = await createAccessToken(user);
    if (!accessToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to create access token",
        },
        { status: 403 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        accessToken,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}