// import "server-only";

// import { SignJWT, jwtVerify } from "jose";
// import { authConfig } from "../../config/auth.config";
// import prisma from "../../lib/db";
// import { clearCookies, getCookie, setCookie } from "./cookie";

// const secret = new TextEncoder().encode(authConfig.jwt.secret);
// const refreshTokenSecret = new TextEncoder().encode(
//   authConfig.jwt.refreshSecret
// );
// const currentTime = Math.floor(Date.now() / 1000);

// export async function createAccessToken(payload) {
//   const jti = crypto.randomUUID();

//   return await new SignJWT({ ...payload, jti })
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt(currentTime)
//     .setExpirationTime(authConfig.jwt.expiry)
//     .setNotBefore(currentTime)
//     .sign(secret);
// }

// export async function createRefreshToken(payload) {
//   const jti = crypto.randomUUID();

//   return await new SignJWT({ _id: payload.id, jti })
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt(currentTime)
//     .setExpirationTime(authConfig.jwt.refreshExpiry)
//     .sign(refreshTokenSecret);
// }

// export async function verifyToken(token) {
//   try {
//     const { payload } = await jwtVerify(token, secret, {
//       algorithms: ["HS256"], 
//       clockTolerance: 15
//     });

//     if (!payload.jti || !payload.id) {
//       throw new Error("Invalid token payload");
//     }

//     return payload;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(`Token verification failed: ${error.message}`);
//     }
//     return null;
//   }
// }

// export async function verifyRefreshToken(token) {
//   try {
//     const { payload } = await jwtVerify(token, refreshTokenSecret, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.error(`Refresh token verification failed: ${error.message}`);
//     }
//     return null;
//   }
// }

// export async function refreshToken() {
//   try {
//     const refreshToken = getCookie(authConfig.jwt.refreshCookieName);
//     if (!refreshToken) return null;

//     const payload = await verifyRefreshToken(refreshToken);
//     if (!payload) {
//       await clearCookies();
//       return null;
//     }

//     const user = await prisma.users.findUnique({
//       where: { id: payload._id },
//       select: {
//         id: true,
//         name: true,
//         email: true,
//         user_type: true,
//       },
//     });

//     if (!user) {
//       await clearCookies();
//       return null;
//     }

//     const newAccessToken = await createAccessToken(user);
//     setCookie(authConfig.jwt.cookieName, newAccessToken, authConfig.session);

//     return payload;
//   } catch (error) {
//     console.error("Failed to refresh session:", error);
//     await clearCookies();
//     return null;
//   }
// }


import "server-only";

import { SignJWT, jwtVerify } from "jose";
import { authConfig } from "../../config/auth.config";
import prisma from "../../lib/db";
import { clearCookies, getCookie, setCookie } from "./cookie";

class JWTManager {
  static USER_TYPES = {
    ADMIN: 'admin',
    EMPLOYEE: 'employee'
  };

  /**
   * Get JWT configuration based on user type
   */
  static getConfig(userType) {
    return authConfig.jwt[userType];
  }

  /**
   * Get secrets for a specific user type
   */
  static getSecrets(userType) {
    const config = this.getConfig(userType);
    return {
      accessSecret: new TextEncoder().encode(config.secret),
      refreshSecret: new TextEncoder().encode(config.refreshSecret)
    };
  }

  /**
   * Create access token for specific user type
   */
  static async createAccessToken(payload, userType) {
    const { accessSecret } = this.getSecrets(userType);
    const config = this.getConfig(userType);
    const currentTime = Math.floor(Date.now() / 1000);
    const jti = crypto.randomUUID();

    return await new SignJWT({ ...payload, jti, userType })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt(currentTime)
      .setExpirationTime(config.expiry)
      .setNotBefore(currentTime)
      .sign(accessSecret);
  }

  /**
   * Create refresh token for specific user type
   */
  static async createRefreshToken(payload, userType) {
    const { refreshSecret } = this.getSecrets(userType);
    const config = this.getConfig(userType);
    const currentTime = Math.floor(Date.now() / 1000);
    const jti = crypto.randomUUID();

    return await new SignJWT({ 
      _id: payload.id, 
      jti,
      userType 
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt(currentTime)
      .setExpirationTime(config.refreshExpiry)
      .sign(refreshSecret);
  }

  /**
   * Verify access token for specific user type
   */
  static async verifyToken(token, userType) {
    try {
      const { accessSecret } = this.getSecrets(userType);
      const { payload } = await jwtVerify(token, accessSecret, {
        algorithms: ["HS256"],
        clockTolerance: 15
      });

      if (!payload.jti || !payload.id || payload.userType !== userType) {
        throw new Error("Invalid token payload");
      }

      return payload;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Token verification failed: ${error.message}`);
      }
      return null;
    }
  }

  /**
   * Verify refresh token for specific user type
   */
  static async verifyRefreshToken(token, userType) {
    try {
      const { refreshSecret } = this.getSecrets(userType);
      const { payload } = await jwtVerify(token, refreshSecret, {
        algorithms: ["HS256"]
      });

      if (payload.userType !== userType) {
        throw new Error("Invalid user type in token");
      }

      return payload;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Refresh token verification failed: ${error.message}`);
      }
      return null;
    }
  }

  /**
   * Refresh token for specific user type
   */
  static async refreshToken(userType) {
    try {
      const config = this.getConfig(userType);
      const refreshToken = await getCookie(config.refreshCookieName);
      if (!refreshToken) return null;

      const payload = await this.verifyRefreshToken(refreshToken, userType);
      if (!payload) {
        await this.clearUserCookies(userType);
        return null;
      }

      // Get user from appropriate table based on user type
      const table = userType === this.USER_TYPES.ADMIN ? 'users' : 'team';
      const user = await prisma[table].findUnique({
        where: { id: payload._id },
        select: {
          id: true,
          name: true,
          email: true,
        },
      });

      if (!user) {
        await this.clearUserCookies(userType);
        return null;
      }

      const newAccessToken = await this.createAccessToken(user, userType);
      setCookie(config.cookieName, newAccessToken, authConfig.session);

      return payload;
    } catch (error) {
      console.error(`Failed to refresh ${userType} session:`, error);
      await this.clearUserCookies(userType);
      return null;
    }
  }

  /**
   * Clear cookies for specific user type
   */
  static async clearUserCookies(userType) {
    const config = this.getConfig(userType);
    await clearCookies([config.cookieName, config.refreshCookieName]);
  }
}

// Export utility functions
export async function createAccessToken(payload, userType) {
  return JWTManager.createAccessToken(payload, userType);
}

export async function createRefreshToken(payload, userType) {
  return JWTManager.createRefreshToken(payload, userType);
}

export async function verifyToken(token, userType) {
  return JWTManager.verifyToken(token, userType);
}

export async function verifyRefreshToken(token, userType) {
  return JWTManager.verifyRefreshToken(token, userType);
}

export async function refreshToken(userType) {
  return JWTManager.refreshToken(userType);
}

export const { USER_TYPES } = JWTManager;