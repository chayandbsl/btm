"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Icons } from "../components/Icon";
import { MenuItem as MenuItemType } from "../lib/types/menu";

interface MenuItemProps {
  item: MenuItemType;
  isActive: boolean;
  openMenus: Set<string>;
  onToggle: (menuId: string, parentId: string | null) => void;
  level?: number;
  parentId?: string | null;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  item,
  isActive,
  openMenus,
  onToggle,
  level = 1,
  parentId = null,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  const pathname = usePathname();

  const isCurrentActive =
    isActive ||
    (item.href && pathname === item.href) ||
    item.children?.some(
      (child) =>
        child.href === pathname ||
        child.children?.some((grandChild) => grandChild.href === pathname)
    );

  const isOpen = openMenus.has(item.id);
  const isParentOpen = parentId ? openMenus.has(parentId) : true;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggle(item.id, parentId);
  };

  return (
    <li>
      {hasChildren ? (
        <>
          <button
            type="button"
            onClick={handleToggle}
            className={`flex items-center w-full p-2 text-base text-gray-900 transition-all duration-200 rounded-lg group hover:bg-gray-100  ${
              isCurrentActive ? "bg-gray-100 " : ""
            }`}
            style={{ paddingLeft: `${level * 1}rem` }}
          >
            {item.icon}
            <span className="flex-1 text-sm ms-3 text-left rtl:text-right whitespace-nowrap">
              {item.label}
            </span>
            <Icons.carrowdown
              size={15}
              className={`font-semibold transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen && isParentOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <ul>
              {item.children && item.children.length > 0 ? (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen && isParentOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="text-sm">
                    {item.children.map((child, index) => (
                      <MenuItem
                        key={index}
                        item={child}
                        isActive={isActive}
                        openMenus={openMenus}
                        onToggle={onToggle}
                        level={level + 1}
                        parentId={item.id}
                      />
                    ))}
                  </ul>
                </div>
              ) : null}
            </ul>
          </div>
        </>
      ) : (
        <Link
          href={item.href || "#"}
          className={`flex items-center p-2 text-gray-900 rounded-md hover:bg-gray-100 group ${
            pathname === item.href ? "bg-gray-100" : ""
          }`}
          style={{ paddingLeft: `${level * 1}rem` }}
        >
          {item.icon}
          <span className="text-sm flex-1 ms-3 whitespace-nowrap">
            {item.label}
          </span>
          {item.badge && (
            <span className={item.badge.className}>{item.badge.text}</span>
          )}
        </Link>
      )}
    </li>
  );
};
