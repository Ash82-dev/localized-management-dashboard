"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  PanelLeftClose as PanelLeftCloseIcon,
  PanelRightClose as PanelRightCloseIcon,
} from "lucide-react";

import { cn } from "@/lib/cn";
import SidebarLink from "./SidebarLink";
import { SidebarItem } from "@/types/sidebar-types";

interface SidebarProps {
  direction: "rtl" | "ltr";
}

function Sidebar({ direction }: SidebarProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleSidebarToggle() {
    setIsOpen((o) => !o);
  }

  return (
    <aside
      className={cn(
        "flex grow flex-col items-center gap-5 border-e border-outline bg-background px-4",
        "transition-[width] duration-200",
        isOpen ? "w-70" : "w-20",
      )}
    >
      <header
        className={cn(
          "flex h-20 w-full items-center",
          isOpen ? "justify-between" : "justify-center",
        )}
      >
        {isOpen && <h2 className="text-2xl font-semibold">App</h2>}
        <button className="cursor-pointer" onClick={handleSidebarToggle}>
          {direction === "ltr" ? (
            isOpen ? (
              <PanelLeftCloseIcon />
            ) : (
              <PanelRightCloseIcon />
            )
          ) : isOpen ? (
            <PanelRightCloseIcon />
          ) : (
            <PanelLeftCloseIcon />
          )}
        </button>
      </header>

      <nav className="flex w-full flex-col gap-2">
        {sidebarItems.map((item) => (
          <SidebarLink key={item.text} item={item} isOpen={isOpen} />
        ))}
      </nav>
    </aside>
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
