// import "server-only";

// import { authConfig } from "../../config/auth.config";
// import {
//   createAccessToken,
//   createRefreshToken,
//   refreshToken,
//   verifyRefreshToken,
//   verifyToken,
// } from "./JWT";
// import { getCookie, setCookie } from "./cookie";

// export async function createSession(payload) {
//   try {
//     if (!payload) {
//       throw new Error("Missing payload");
//     }

//     if (!authConfig.jwt.secret || !authConfig.jwt.refreshSecret) {
//       throw new Error("JWT secrets must be defined in environment variables");
//     }

//     const token = await createAccessToken(payload);
//     const refreshToken = await createRefreshToken(payload);
//     if (!token || !refreshToken) {
//       throw new Error(
//         "Failed to create session: Token or refresh token missing"
//       );
//     }

//     const isVerifiedToken = await verifyToken(token);
//     const isVerifiedRefreshToken = await verifyRefreshToken(refreshToken);
//     if (!isVerifiedToken || !isVerifiedRefreshToken) {
//       throw new Error(
//         "Failed to create session: Token or refresh token verification failed"
//       );
//     }

//     setCookie(authConfig.jwt.cookieName, token, authConfig.session);
//     setCookie(authConfig.jwt.refreshCookieName, refreshToken, {
//       ...authConfig.session,
//       maxAge: 7 * 24 * 60 * 60, // 7 days
//     });

//     return true;
//   } catch (error) {
//     console.error("Failed to create session:", error);
//     return false;
//   }
// }

// export async function getSession() {
//   try {
//     const accessToken = await getCookie(authConfig.jwt.cookieName);
//     if (!accessToken) return null;

//     const payload = await verifyToken(accessToken);
//     if (!payload) {
//       console.log(
//         "Token is expired or invalid. Attempting to refresh the session..."
//       );

//       const refreshedPayload = await refreshToken();
//       if (!refreshedPayload) {
//         console.log("Session refresh failed. Please log in again.");
//         return null;
//       }

//       // If the session is refreshed, return the new payload
//       return refreshedPayload;
//     }

//     return payload;
//   } catch (error) {
//     console.error("Session retrieval error:", error);
//     return null;
//   }
// }


import "server-only";

import { authConfig } from "../../config/auth.config";
import {
  createAccessToken,
  createRefreshToken,
  refreshToken,
  USER_TYPES,
  verifyRefreshToken,
  verifyToken
} from "./JWT";
import { getAuthCookies, setAuthCookies } from "./cookie";

class SessionManager {
  /**
   * Create a new session for a specific user type
   */
  static async createSession(payload, userType) {
    try {
      if (!payload) {
        throw new Error("Missing payload");
      }

      const config = authConfig.jwt[userType];
      if (!config.secret || !config.refreshSecret) {
        throw new Error(`JWT secrets must be defined for ${userType}`);
      }

      // Create tokens
      const accessToken = await createAccessToken(payload, userType);
      const refreshToken = await createRefreshToken(payload, userType);
      
      if (!accessToken || !refreshToken) {
        throw new Error("Failed to create session: Token or refresh token missing");
      }

      // Verify tokens
      const isVerifiedToken = await verifyToken(accessToken, userType);
      const isVerifiedRefreshToken = await verifyRefreshToken(refreshToken, userType);
      
      if (!isVerifiedToken || !isVerifiedRefreshToken) {
        throw new Error("Failed to create session: Token verification failed");
      }

      // Set cookies
      await setAuthCookies(userType, {
        accessToken,
        refreshToken
      });

      return true;
    } catch (error) {
      console.error(`Failed to create ${userType} session:`, error);
      return false;
    }
  }

  /**
   * Get current session for a specific user type
   */
  static async getSession(userType) {
    try {
      const { accessToken } = await getAuthCookies(userType);
      if (!accessToken) return null;

      const payload = await verifyToken(accessToken, userType);
    
      if (!payload) {
        const refreshedPayload = await refreshToken(userType);
        if (!refreshedPayload) {
          console.log(`${userType} session refresh failed. Re-authentication required.`);
          return null;
        }

        return refreshedPayload;
      }

      return payload;
    } catch (error) {
      console.error(`${userType} session retrieval error:`, error);
      return null;
    }
  }

  /**
   * Get current admin session
   */
  static async getAdminSession() {
    return this.getSession(USER_TYPES.ADMIN);
  }

  /**
   * Get current employee session
   */
  static async getEmployeeSession() {
    return this.getSession(USER_TYPES.EMPLOYEE);
  }

  /**
   * Create admin session
   */
  static async createAdminSession(payload) {
    return this.createSession(payload, USER_TYPES.ADMIN);
  }

  /**
   * Create employee session
   */
  static async createEmployeeSession(payload) {
    return this.createSession(payload, USER_TYPES.EMPLOYEE);
  }
}

// Export convenience functions
export const createSession = SessionManager.createSession.bind(SessionManager);
export const getSession = SessionManager.getSession.bind(SessionManager);
export const getAdminSession = SessionManager.getAdminSession.bind(SessionManager);
export const getEmployeeSession = SessionManager.getEmployeeSession.bind(SessionManager);
export const createAdminSession = SessionManager.createAdminSession.bind(SessionManager);
export const createEmployeeSession = SessionManager.createEmployeeSession.bind(SessionManager);