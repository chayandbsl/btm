"use client";

import { usePathname } from "next/navigation";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const LayoutWrapper = ({ children }) => {
  const currentPathname = usePathname();

  if (currentPathname === "/login" || currentPathname === "/signup")
    return (
      <div className="flex flex-col justify-center min-h-screen">
        {children}
      </div>
    );
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <div className="mt-20 pb-16">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
