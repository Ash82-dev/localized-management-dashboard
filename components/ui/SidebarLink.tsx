import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { SidebarItem } from "@/types/sidebar-types";

interface SidebarLinkProps {
  item: SidebarItem;
  isOpen: boolean;
  isExpanded: boolean;
}

function SidebarLink({ item, isOpen, isExpanded }: SidebarLinkProps) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  const isActive = pathname === `/${i18n.language}/${item.route}`;

  return (
    <Link
      href={`/${i18n.language}/${item.route}`}
      className={cn(
        "flex h-10 items-center rounded-sm px-2",
        "bg-surface text-on-surface",
        "hover:bg-surface-variant hover:text-on-surface-variant",
        isActive &&
          "bg-primary text-on-primary hover:bg-primary hover:text-on-primary",
        isOpen ? "justify-start gap-2" : "justify-center gap-0",
        isExpanded ? "sm:justify-start sm:gap-2" : "sm:justify-center sm:gap-0",
      )}
    >
      <item.icon size={18} className="shrink-0" />

      <span
        className={cn(
          "overflow-hidden whitespace-nowrap transition-[width,opacity] duration-200",
          isOpen ? "w-auto opacity-100" : "w-0 opacity-0",
          isExpanded ? "sm:w-auto sm:opacity-100" : "sm:w-0 sm:opacity-0",
        )}
      >
        {t(item.text)}
      </span>
    </Link>
  );
}

export default SidebarLink;
