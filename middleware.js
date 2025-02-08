// import { NextResponse } from "next/server";
// import { authConfig } from "./config/auth.config";
// import { getCookie } from "./lib/auth/cookie";


// class AuthMiddleware {
//   static  APP_ROUTE_PREFIX = "admin";

//   /**
//    * Main middleware handler for authentication and routing
//    * @param request Incoming Next.js request
//    * @returns NextResponse with appropriate routing or authentication action
//    */
//   static async handle(request) {
//     const { pathname } = request.nextUrl;
  
//     if (!pathname.startsWith(`/${this.APP_ROUTE_PREFIX}`)) {
//       return NextResponse.next();
//     }
  
//     const tokens = await this.extractTokens(request);
//     const isPublicAppPath = this.isPublicPath(pathname);
  
//     if (!tokens.accessToken && tokens.refreshToken) {
//       const refreshResult = await this.attemptTokenRefresh(tokens.refreshToken);
//       if (!refreshResult) {
//         const response = NextResponse.redirect(new URL('/admin/login', request.url));
//         response.cookies.delete(authConfig.jwt.cookieName);
//         response.cookies.delete(authConfig.jwt.refreshCookieName);
//         return response;
//       }
//       return refreshResult;
//     }
  
//     if (!tokens.accessToken && !isPublicAppPath) {
//       return this.redirectToLogin(request);
//     }
  
//     if (tokens.accessToken && isPublicAppPath) {
//       return this.redirectToDashboard(request);
//     }
  
//     return NextResponse.next();
//   }

//   /**
//    * Extract access and refresh tokens from request cookies
//    * @param request Incoming Next.js request
//    * @returns Object containing access and refresh tokens
//    */
//    static async extractTokens(request) {
//     return {
//       accessToken: await getCookie(authConfig.jwt.cookieName),
//       refreshToken: await getCookie(authConfig.jwt.refreshCookieName),
//     };
//   }

//   /**
//    * Check if the current path is a public app path
//    * @param pathname Current request pathname
//    * @returns Boolean indicating if path is public
//    */
//    static isPublicPath(pathname) {
//     return authConfig.publicPaths.some((path) => pathname.startsWith(path));
//   }

//   /**
//    * Attempt to refresh access token
//    * @param refreshToken Current refresh token
//    * @returns Refreshed response or null
//    */
//   // static async attemptTokenRefresh(
//   //   refreshToken
//   // ) {
//   //   try {
//   //     const headers = new Headers({
//   //       "Content-Type": "application/json",
//   //     });
//   //     if (process.env.API_KEY) {
//   //       headers.append("x-api-key", process.env.API_KEY);
//   //     }

//   //     const refreshResponse = await Promise.race([
//   //       fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
//   //         method: "POST",
//   //         headers,
//   //         body: JSON.stringify({ refreshToken }),
//   //         cache: "no-store",
//   //       }),
//   //       new Promise((_, reject) =>
//   //         setTimeout(
//   //           () => reject(new Error("Token refresh timeout")),
//   //           parseInt(process.env.TOKEN_REFRESH_TIMEOUT || "5000")
//   //         )
//   //       ),
//   //     ]);

//   //     if (!refreshResponse.ok) {
//   //       throw new Error("Internal server error");
//   //     }

//   //     const responseData = await refreshResponse.json();
//   //     if (!responseData.success) {
//   //       throw new Error("Token refresh failed");
//   //     }

//   //     const response = NextResponse.next();
//   //     response.cookies.set(
//   //       authConfig.jwt.cookieName,
//   //       responseData?.accessToken,
//   //       authConfig.session
//   //     );

//   //     return response;
//   //   } catch (error) {
//   //     console.error("Token refresh failed:", error.message);
//   //   }

//   //   return null;
//   // }
//   static async attemptTokenRefresh(refreshToken) {
//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           ...(process.env.API_KEY && { "x-api-key": process.env.API_KEY })
//         },
//         body: JSON.stringify({ refreshToken }),
//         cache: "no-store",
//       });
  
//       if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      
//       const { accessToken, refreshToken: newRefreshToken } = await response.json();
      
//       const nextResponse = NextResponse.next();
//       nextResponse.cookies.set(authConfig.jwt.cookieName, accessToken, authConfig.session);
//       nextResponse.cookies.set(authConfig.jwt.refreshCookieName, newRefreshToken, authConfig.session);
      
//       return nextResponse;
//     } catch (error) {
//       console.error("Token refresh failed:", error);
//       return null;
//     }
//   }

//   /**
//    * Redirect to login page with return path
//    */
//   static redirectToLogin(request) {
//     const redirectUrl = new URL(authConfig.authRedirects.login, request.url);
//     redirectUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
//     return NextResponse.redirect(redirectUrl);
//   }

//   /**
//    * Redirect to dashboard for authenticated users on public paths
//    */
//   static redirectToDashboard(request) {
//     return NextResponse.redirect(
//       new URL(authConfig.authRedirects.dashboard, request.url)
//     );
//   }
// }

// export async function middleware(request) {
//   return AuthMiddleware.handle(request);
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
// };

import { NextResponse } from "next/server";
import { authConfig } from "./config/auth.config";
import { getCookie } from "./lib/auth/cookie";

class AuthMiddleware {
  // Route prefixes
  static ADMIN_PREFIX = "admin";
  static EMPLOYEE_PREFIX = "";  // Root routes for employees
  
  // Public paths for both portals
  static PUBLIC_PATHS = {
    admin: ['/admin/login', '/admin/forgot-password'],
    employee: ['/login', '/signup', '/forgot-password']
  };

  /**
   * Main middleware handler
   */
  static async handle(request) {
    const { pathname } = request.nextUrl;
    
    // Determine which portal is being accessed
    const isAdminPortal = pathname.startsWith(`/${this.ADMIN_PREFIX}`);
    // Get tokens for both user types
    // const adminTokens = await this.extractTokens('admin');
    // const employeeTokens = await this.extractTokens('employee');
    // console.log(`Accessing ${isAdminPortal} portal: adminTokens`, adminTokens);
    // console.log(`Accessing employeeTokens portal: adminTokens`, employeeTokens);
   

    // Handle admin portal routes
    if (isAdminPortal) {
      const adminTokens = await this.extractTokens('admin');
      return this.handleAdminAuth(request, adminTokens);
    } else {  
      // Handle employee portal routes (root routes)
      const employeeTokens = await this.extractTokens('employee');
      return this.handleEmployeeAuth(request, employeeTokens);
    }
    
    
  }

  /**
   * Handle admin portal authentication
   */
  static async handleAdminAuth(request, tokens) {
    const { pathname } = request.nextUrl;
    const isPublicPath = this.PUBLIC_PATHS.admin.some(path => pathname.startsWith(path));

    // Token refresh logic for admin
    if (!tokens.accessToken && tokens.refreshToken) {
      const refreshResult = await this.attemptTokenRefresh(tokens.refreshToken, 'admin');
      if (!refreshResult) {
        return this.clearAuthAndRedirect(request, '/admin/login');
      }
      return refreshResult;
    }

    // Redirect logic for admin
    if (!tokens.accessToken && !isPublicPath) {
      return this.redirectToLogin(request, '/admin/login');
    }

    if (tokens.accessToken && isPublicPath) {
      return this.redirectToDashboard(request, '/admin/dashboard');
    }

    return NextResponse.next();
  }

  /**
   * Handle employee portal authentication
   */
  static async handleEmployeeAuth(request, tokens) {
   const { pathname } = request.nextUrl;
    const isPublicPath = this.PUBLIC_PATHS.employee.some(path => pathname === path);
    // Token refresh logic for employee
    if (!tokens.accessToken && tokens.refreshToken) {
      const refreshResult = await this.attemptTokenRefresh(tokens.refreshToken, 'employee');
      if (!refreshResult) {
        return this.clearAuthAndRedirect(request, '/login');
      }
      return refreshResult;
    }

    // Redirect logic for employee
    if (!tokens.accessToken && !isPublicPath) {
      return this.redirectToLogin(request, '/login');
    }

    if (tokens.accessToken && isPublicPath) {
      return this.redirectToDashboard(request, '/');
    }

    return NextResponse.next();
  }

  /**
   * Extract tokens based on user type
   */
  static async extractTokens(userType) {
    const prefix = userType === 'admin' ? 'admin' : 'employee';
  
    return {
      accessToken: await getCookie(authConfig.jwt[prefix].cookieName),
      refreshToken: await getCookie(authConfig.jwt[prefix].refreshCookieName),
    }; 
  }

  /**
   * Attempt to refresh token with user type context
   */
  static async attemptTokenRefresh(refreshToken, userType) {
    try {
      const response = await fetch(`http://localhost:3000/api/v1/auth/${userType}/refresh-token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.API_KEY && { "x-api-key": process.env.API_KEY })
        },
        body: JSON.stringify({ refreshToken }),
        cache: "no-store",
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
      
      const { accessToken, refreshToken: newRefreshToken } = await response.json();
      
      const nextResponse = NextResponse.next();
      
      nextResponse.cookies.set(
        authConfig.jwt[userType].cookieName, 
        accessToken, 
        authConfig.session
      );
      nextResponse.cookies.set(
        authConfig.jwt[userType].refreshCookieName, 
        newRefreshToken, 
        authConfig.session
      );
      
      return nextResponse;
    } catch (error) {
      console.error(`${userType} token refresh failed:`, error);
      return null;
    }
  }

  /**
   * Clear auth and redirect to login
   */
  static clearAuthAndRedirect(request, loginPath) {
    const response = NextResponse.redirect(new URL(loginPath, request.url));
    // Clear all possible cookies
    ['admin', 'employee'].forEach(prefix => {
      response.cookies.delete(`${prefix}_${authConfig.jwt.cookieName}`);
      response.cookies.delete(`${prefix}_${authConfig.jwt.refreshCookieName}`);
    });
    return response;
  }

  /**
   * Redirect to login with return path
   */
  static redirectToLogin(request, loginPath) {
    const redirectUrl = new URL(loginPath, request.url);
    redirectUrl.searchParams.set("redirectTo", request.nextUrl.pathname);
    return NextResponse.redirect(redirectUrl);
  }

  /**
   * Redirect to appropriate dashboard
   */
  static redirectToDashboard(request, dashboardPath) {
    return NextResponse.redirect(new URL(dashboardPath, request.url));
  }
}

export async function middleware(request) {
  return AuthMiddleware.handle(request);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
};