"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useSidebar } from "../../../contexts/SidebarContext";
import { menuItems } from "../../../lib/constants/menuItem";
import { Icons } from "../../Icon";
import { MenuItem } from "../../MenuItem";
import Logo from "../../ui/logo";

export const AppSidebar = () => {
  const [openMenus, setOpenMenus] = useState(new Set());
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const pathname = usePathname();

  const toggleMenu = (menuId, parentId) => {
    setOpenMenus((prev) => {
      const newSet = new Set(prev);

      if (!parentId) {
        if (newSet.has(menuId)) {
          return new Set();
        }
        return new Set([menuId]);
      }

      if (newSet.has(menuId)) {
        newSet.delete(menuId);
      } else {
        newSet.add(menuId);
      }

      return newSet;
    });
  };

  return (
    <>
      <aside
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 `}
        aria-label="Sidebar"
      >
        <div className="flex items-center justify-between px-4 py-3.5 ">
          {/* Logo Area */}
          <div className="flex items-center">
            <Logo className="text-xl" />
          </div>

          <button
            onClick={toggleSidebar}
            className="focus:outline-none"
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <Icons.chevronRight size={24} />
            ) : (
              <Icons.chevronLeft size={24} />
            )}
          </button>
        </div>

        <div className="h-[calc(100%-80px)] px-3 pt-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => (
              <MenuItem
                key={item.id}
                item={item}
                isActive={pathname.startsWith(item.href || "#")}
                openMenus={openMenus}
                onToggle={toggleMenu}
              />
            ))}
          </ul>
        </div>
      </aside>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default AppSidebar;
