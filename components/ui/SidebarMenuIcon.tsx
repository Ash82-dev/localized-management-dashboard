"use client";

import { useSidebarStore } from "@/features/dashboard/store";
import { Menu as MenuIcon } from "lucide-react";

function SidebarMenuIcon() {
  const { toggleOpen } = useSidebarStore();
  return (
    <MenuIcon onClick={toggleOpen} className="block cursor-pointer sm:hidden" />
  );
}

export default SidebarMenuIcon;
