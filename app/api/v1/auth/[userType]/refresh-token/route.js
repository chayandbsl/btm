import { NextResponse } from "next/server";
import { createAccessToken, verifyRefreshToken } from "../../../../../../lib/auth/JWT";
import prisma from "../../../../../../lib/db";

export async function POST(req, { params }) {
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

    const {userType} = await params;
    if (!["admin", "employee"].includes(userType)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid user type",
        },
        { status: 400 }
      );
    }

    const {refreshToken} = await req.json();
    
    if (!refreshToken) {
      return NextResponse.json(
        {
          success: false,
          error: "Refresh token is required",
        },
        { status: 400 }
      );
    }

    const verifiedRefreshToken = await verifyRefreshToken(refreshToken, userType);

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

    const accessToken = await createAccessToken(user, userType);
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