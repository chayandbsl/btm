export const authConfig = {
  /*
    |--------------------------------------------------------------------------
    | Public Paths
    |--------------------------------------------------------------------------
    |
    | Define the routes that do not require user authentication, separated by
    | user type.
    |
    */
  publicPaths: {
    admin: [
      "/admin/login",
      "/admin/registration",
      "/admin/forget-password",
      "/admin/reset-password",
    ],
    employee: [
      "/login",
      "/signup",
      "/forget-password",
      "/reset-password",
    ]
  },

  /*
    |--------------------------------------------------------------------------
    | Email-based authentication toggle
    |--------------------------------------------------------------------------
    */
  emailAuthEnabled: true,

  /*
    |--------------------------------------------------------------------------
    | Session Configuration
    |--------------------------------------------------------------------------
    */
  session: {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  },

  /*
    |--------------------------------------------------------------------------
    | JSON Web Token (JWT) Configuration
    |--------------------------------------------------------------------------
    */
  jwt: {
    admin: {
      cookieName: "admin_accessToken",
      refreshCookieName: "admin_refreshToken",
      secret: process.env.ADMIN_JWT_SECRET || "admin_default_secret",
      refreshSecret: process.env.ADMIN_JWT_REFRESH_SECRET || "admin_default_refresh_secret",
      expiry: "15m",
      refreshExpiry: "7d",
    },
    employee: {
      cookieName: "employee_accessToken",
      refreshCookieName: "employee_refreshToken",
      secret: process.env.EMPLOYEE_JWT_SECRET || "employee_default_secret",
      refreshSecret: process.env.EMPLOYEE_JWT_REFRESH_SECRET || "employee_default_refresh_secret",
      expiry: "15m",
      refreshExpiry: "7d",
    },
    encryption: true,
  },

  /*
    |--------------------------------------------------------------------------
    | Password Policy
    |--------------------------------------------------------------------------
    */
  passwordPolicy: {
    minLength: 6,
    requireUppercase: false,
    requireLowercase: false,
    requireNumber: false,
    requireSymbol: false,
  },

  /*
    |--------------------------------------------------------------------------
    | Multi-Factor Authentication (MFA) Configuration
    |--------------------------------------------------------------------------
    */
  mfa: {
    enabled: false,
    provider: "authenticator",
    smsProviderApiKey: process.env.SMS_API_KEY || "",
  },

  /*
    |--------------------------------------------------------------------------
    | Authentication Redirects
    |--------------------------------------------------------------------------
    */
  authRedirects: {
    admin: {
      login: "/admin/login",
      dashboard: "/admin/dashboard",
      forbidden: "/admin/403",
    },
    employee: {
      login: "/login",
      dashboard: "/",
      forbidden: "/403",
    }
  },

  /*
    |--------------------------------------------------------------------------
    | CSRF Protection Configuration
    |--------------------------------------------------------------------------
    */
  csrfConfig: {
    enabled: true,
    secret: process.env.CSRF_SECRET || "csrf_default_secret",
  },

  /*
    |--------------------------------------------------------------------------
    | OAuth Providers Configuration
    |--------------------------------------------------------------------------
    */
  oauthProviders: {
    facebook: {
      enabled: false,
      authUri: process.env.FACEBOOK_AUTH_URI || "",
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
      redirectUri: process.env.FACEBOOK_REDIRECT_URI || "",
    },
    google: {
      enabled: true,
      authUri: process.env.GOOGLE_AUTH_URI || "https://accounts.google.com/o/oauth2/v2/auth",
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      redirectUri: process.env.GOOGLE_REDIRECT_URI || "",
    },
    twitter: {
      enabled: false,
      authUri: process.env.TWITTER_AUTH_URI || "",
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      redirectUri: process.env.TWITTER_REDIRECT_URI || "",
    },
    github: {
      enabled: false,
      authUri: process.env.GITHUB_AUTH_URI || "",
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
      redirectUri: process.env.GITHUB_REDIRECT_URI || "",
    },
  },
};