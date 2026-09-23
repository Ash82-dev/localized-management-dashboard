"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  PanelLeftClose as PanelLeftCloseIcon,
  PanelRightClose as PanelRightCloseIcon,
  XIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";
import SidebarLink from "./SidebarLink";
import { SidebarItem } from "@/types/sidebar-types";
import { useSidebarStore } from "@/features/dashboard/store";

interface SidebarProps {
  direction: "rtl" | "ltr";
}

function Sidebar({ direction }: SidebarProps) {
  const { isOpen, toggleOpen, closeSidebar } = useSidebarStore();
  const [isExpanded, setExpanded] = useState(false);

  function handleSidebarToggle() {
    setExpanded((value) => !value);
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/70 sm:hidden"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 inset-s-0 z-50 flex w-70 flex-col gap-5 border-e border-outline bg-background px-3",
          "transition-transform duration-200",

          direction === "ltr"
            ? isOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : isOpen
              ? "translate-x-0"
              : "translate-x-full",

          "sm:static sm:z-auto sm:translate-x-0 sm:transition-[width]",
          isExpanded ? "sm:w-70" : "sm:w-16",
        )}
      >
        <header
          className={cn(
            "flex h-20 w-full items-center",
            isOpen ? "justify-between" : "justify-center",
            isExpanded ? "sm:justify-between" : "sm:justify-center",
          )}
        >
          <h2
            className={cn(
              "overflow-hidden text-2xl font-semibold whitespace-nowrap",
              "transition-[width,opacity] duration-200",
              isOpen ? "w-auto opacity-100" : "w-0 opacity-0",
              isExpanded ? "sm:w-auto sm:opacity-100" : "sm:w-0 sm:opacity-0",
            )}
          >
            App
          </h2>

          <button
            type="button"
            className="hidden cursor-pointer sm:block"
            onClick={handleSidebarToggle}
          >
            {direction === "ltr" ? (
              isExpanded ? (
                <PanelLeftCloseIcon />
              ) : (
                <PanelRightCloseIcon />
              )
            ) : isExpanded ? (
              <PanelRightCloseIcon />
            ) : (
              <PanelLeftCloseIcon />
            )}
          </button>

          <button
            type="button"
            className="cursor-pointer sm:hidden"
            onClick={toggleOpen}
            aria-label="Close sidebar"
          >
            <XIcon />
          </button>
        </header>

        <nav className="flex w-full flex-col gap-2">
          {sidebarItems.map((item) => (
            <SidebarLink
              key={item.text}
              item={item}
              isOpen={isOpen}
              isExpanded={isExpanded}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;

const sidebarItems: SidebarItem[] = [
  {
    text: "dashboard",
    route: "dashboard",
    icon: LayoutDashboard,
  },
];
