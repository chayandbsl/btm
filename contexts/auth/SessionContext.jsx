// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import { session } from "../../actions/auth"; // Ensure this is a client-safe function

// const SessionContext = createContext(null);

// export const SessionProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const updateSession = async () => {
//     try {
//       const sessionData = await session();
//       if (sessionData) {
//         setUser({
//           id: sessionData.id,
//           name: sessionData.name,
//           email: sessionData.email,
//         });
//         setIsAuthenticated(true);
//       } else {
//         setUser(null);
//         setIsAuthenticated(false);
//       }
//     } catch (error) {
//       console.error("Session update failed", error);
//       clearSession();
//     }
//   };

//   const clearSession = () => {
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   useEffect(() => {
//     updateSession();
//   }, []);

//   return (
//     <SessionContext.Provider
//       value={{ user, isAuthenticated, updateSession, clearSession }}
//     >
//       {children}
//     </SessionContext.Provider>
//   );
// };

// export const useSession = () => {
//   const context = useContext(SessionContext);
//   if (!context) {
//     throw new Error("useSession must be used within a SessionProvider");
//   }
//   return context;
// };
"use client"

import { createContext, useContext, useEffect, useState } from "react";
import { getAdminSessionData } from "../../actions/auth/adminAuth";
import { getEmployeeSessionData } from "../../actions/auth/employeeAuth";

// Define session types
export const SESSION_TYPES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
};

// Create separate contexts for each user type
const AdminSessionContext = createContext(null);
const EmployeeSessionContext = createContext(null);

// Initial state for a session
const createInitialSessionState = () => ({
  userData: null,
  isAuthenticated: false,
  isLoading: true,
});

// Separate providers for each session type
export const AdminSessionProvider = ({ children }) => {
  const [adminSession, setAdminSession] = useState(createInitialSessionState());

  const updateAdminSession = async () => {
    try {
      const sessionData = await getAdminSessionData();
      console.log("Session", sessionData)
      setAdminSession({
        userData: sessionData ? {
          id: sessionData.id,
          name: sessionData.name,
          email: sessionData.email,
        } : null,
        isAuthenticated: !!sessionData,
        isLoading: false,
      });
    } catch (error) {
      console.error("Admin session update failed", error);
      clearAdminSession();
    }
  };

  const clearAdminSession = () => {
    setAdminSession({
      userData: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const logoutAdmin = async () => {
    try {
      // await adminSignout();
      clearAdminSession();
    } catch (error) {
      console.error("Admin logout failed", error);
    }
  };

  useEffect(() => {
    updateAdminSession();
  }, []);

  return (
    <AdminSessionContext.Provider
      value={{
        ...adminSession,
        updateSession: updateAdminSession,
        clearSession: clearAdminSession,
        logout: logoutAdmin,
      }}
    >
      {children}
    </AdminSessionContext.Provider>
  );
};

export const EmployeeSessionProvider = ({ children }) => {
  const [employeeSession, setEmployeeSession] = useState(createInitialSessionState());

  const updateEmployeeSession = async () => {
    try {
      const sessionData = await getEmployeeSessionData();
      setEmployeeSession({
        userData: sessionData ? {
          id: sessionData.id,
          name: sessionData.name,
          email: sessionData.email,
        } : null,
        isAuthenticated: !!sessionData,
        isLoading: false,
      });
    } catch (error) {
      console.error("Employee session update failed", error);
      clearEmployeeSession();
    }
  };

  const clearEmployeeSession = () => {
    setEmployeeSession({
      userData: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  const logoutEmployee = async () => {
    try {
      await employeeSignout();
      clearEmployeeSession();
    } catch (error) {
      console.error("Employee logout failed", error);
    }
  };

  useEffect(() => {
    updateEmployeeSession();
  }, []);

  return (
    <EmployeeSessionContext.Provider
      value={{
        ...employeeSession,
        updateSession: updateEmployeeSession,
        clearSession: clearEmployeeSession,
        logout: logoutEmployee,
      }}
    >
      {children}
    </EmployeeSessionContext.Provider>
  );
};

// Custom hooks remain the same
export const useAdminSession = () => {
  const context = useContext(AdminSessionContext);
  if (!context) {
    throw new Error("useAdminSession must be used within an AdminSessionProvider");
  }
  return context;
};

export const useEmployeeSession = () => {
  const context = useContext(EmployeeSessionContext);
  if (!context) {
    throw new Error("useEmployeeSession must be used within an EmployeeSessionProvider");
  }
  return context;
};