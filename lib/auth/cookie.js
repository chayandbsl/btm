// import { cookies } from "next/headers";
// import { authConfig } from "../../config/auth.config";

// // Set a cookie with options
// export const setCookie = async (key, value, options = {}) => {
//   const cookieStore = await cookies();
  
//   await cookieStore.set(key, value, options);
// };

// // Get a cookie by key
// export const getCookie = async (key) => {
//   const cookieStore = await cookies();
//   const cookie = await cookieStore.get(key);
//   return cookie?.value ?? null;
// };

// export async function clearCookies() {
//   const cookieStore = await cookies();
//   const options = { 
//     path: '/',
//     maxAge: 0,
//     expires: new Date(0)
//   };

//   await cookieStore.set(authConfig.jwt.cookieName, '', options);
//   await cookieStore.set(authConfig.jwt.refreshCookieName, '', options);
//   return true;
// }


import { cookies } from "next/headers";
import { authConfig } from "../../config/auth.config";

/**
 * Cookie Manager class to handle all cookie operations
 */
class CookieManager {
  static USER_TYPES = {
    ADMIN: 'admin',
    EMPLOYEE: 'employee'
  };

  /**
   * Get cookie configuration for specific user type
   */
  static getConfig(userType) {
    return authConfig.jwt[userType];
  }

  /**
   * Set a cookie with options
   */
  static async setCookie(key, value, options = {}) {
    const cookieStore = await cookies();
    cookieStore.set(key, value, {
      ...authConfig.session,
      ...options
    });
  }

  /**
   * Get a cookie by key
   */
  static async getCookie(key) {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(key);
    return cookie?.value ?? null;
  }

  /**
   * Set auth cookies for specific user type
   */
  static async setAuthCookies(userType, { accessToken, refreshToken }) {
    const config = this.getConfig(userType);
    
    await this.setCookie(config.cookieName, accessToken);
    await this.setCookie(config.refreshCookieName, refreshToken);
  }

  /**
   * Get auth cookies for specific user type
   */
  static async getAuthCookies(userType) {
    const config = this.getConfig(userType);
    return {
      accessToken: await this.getCookie(config.cookieName),
      refreshToken: await this.getCookie(config.refreshCookieName)
    };
  }

  /**
   * Clear cookies for specific user type
   */
  static async clearUserCookies(userType) {
    const config = this.getConfig(userType);
    const cookieStore = await cookies();
    const options = { 
      path: '/',
      maxAge: 0,
      expires: new Date(0)
    };

   cookieStore.set(config.cookieName, '', options);
   cookieStore.set(config.refreshCookieName, '', options);
  }

  /**
   * Clear all auth cookies (both admin and employee)
   */
  static async clearAllAuthCookies() {
    await this.clearUserCookies(this.USER_TYPES.ADMIN);
    await this.clearUserCookies(this.USER_TYPES.EMPLOYEE);
    return true;
  }
}

// Export utility functions
export const setCookie = CookieManager.setCookie.bind(CookieManager);
export const getCookie = CookieManager.getCookie.bind(CookieManager);
export const setAuthCookies = CookieManager.setAuthCookies.bind(CookieManager);
export const getAuthCookies = CookieManager.getAuthCookies.bind(CookieManager);
export const clearUserCookies = CookieManager.clearUserCookies.bind(CookieManager);
export const clearCookies = CookieManager.clearAllAuthCookies.bind(CookieManager);
export const { USER_TYPES } = CookieManager;