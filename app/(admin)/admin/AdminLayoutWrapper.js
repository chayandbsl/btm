"use client";

import { usePathname } from "next/navigation";
import AppHeader from "../../../components/layouts/admin/app-header";
import AppSidebar from "../../../components/layouts/admin/app-sidebar";

const AdminLayoutWrapper = ({ children }) => {
  const currentPathname = usePathname();

  if (currentPathname === "/admin/login")
    return (
      <div className="flex flex-col justify-center min-h-screen">
        {children}
      </div>
    );
  return (
    <>
      <AppSidebar />

      <div className="sm:pl-64">
        <AppHeader />
        <main className="flex flex-1 flex-col">
          <div className="px-4 sm:px-10 pt-6 pb-16">{children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminLayoutWrapper;
