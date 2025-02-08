"use client";

import { useState } from "react";
import { useSidebar } from "../../../contexts/SidebarContext";
import { Icons } from "../../Icon";
import { MessageDropdown } from "./_components/MessageDropdown";
import { NotificationDropdown } from "./_components/NotificationDropdown";
import { UserProfileDropdown } from "./_components/UserProfileDropdown";

export const NavigationButton = ({ onClick, ariaControls, children }) => (
  <button
    onClick={onClick}
    aria-controls={ariaControls}
    type="button"
    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
  >
    {children}
  </button>
);

export const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      fillRule="evenodd"
      d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
    />
  </svg>
);

const AppHeader = () => {
  const { toggleSidebar } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-4 sm:px-10">
        <nav className="flex items-center justify-between py-3">
          {/* Left Side: Menu Toggle and Search (Desktop Only) */}
          <div className="flex items-center">
            <NavigationButton
              onClick={toggleSidebar}
              ariaControls="logo-sidebar"
            >
              <span className="sr-only">Toggle sidebar</span>
              <MenuIcon />
            </NavigationButton>

            {/* Desktop Search - Hidden on mobile */}
            <div className="hidden md:block w-full max-w-xs">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.search className="w-5 h-5 text-gray-500" />
                </div>
              </form>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-baseline gap-8 leading-normal">
            <NotificationDropdown />
            <MessageDropdown />
            <UserProfileDropdown />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AppHeader;
