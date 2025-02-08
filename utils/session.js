import { redirect } from "next/navigation";
import { getAdminSession, getEmployeeSession } from "../lib/auth/session";

export async function getCurrentSession(userType) {
  try {
    const session =
      userType === "admin"
        ? await getAdminSession()
        : await getEmployeeSession();

    if (!session) return null;

    return {
      user: {
        id: session.id,
        name: session.name,
        email: session.email,
        user_Type: userType,
      },
    };
  } catch (error) {
    console.error("Auth error:", error);
    return null;
  }
}

export async function requireAuth(userType) {
  const session = await getCurrentSession(userType);

  if (!session) {
    const loginPath = userType === "admin" ? "/admin/login" : "/login";
    redirect(loginPath);
  }

  return session;
}
