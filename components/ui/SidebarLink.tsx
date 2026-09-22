import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/cn";
import { SidebarItem } from "@/types/sidebar-types";

interface SidebarLinkProps {
  item: SidebarItem;
  isOpen: boolean;
}

function SidebarLink({ item, isOpen }: SidebarLinkProps) {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const isActive = pathname === `/${i18n.language}/${item.route}`;

  return (
    <Link
      href={`/${i18n.language}/${item.route}`}
      className={cn(
        "flex h-10 items-center px-3",
        "bg-surface text-on-surface hover:bg-surface-variant hover:text-on-surface-variant",
        isActive &&
          "rounded-sm bg-primary text-on-primary hover:bg-primary hover:text-on-primary",
      )}
    >
      {isOpen ? t(item.text) : <item.icon size={20} />}
    </Link>
  );
}

export default SidebarLink;
