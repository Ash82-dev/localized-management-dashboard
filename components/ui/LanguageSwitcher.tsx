"use client";

import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import { i18nConfig } from "@/i18n/i18nConfig";

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleSwitchLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <select
      className="text-md h-9 cursor-pointer rounded-md bg-transparent px-2.5 hover:bg-surface-variant"
      onChange={handleSwitchLanguage}
      value={currentLocale}
    >
      <option className="bg-surface text-on-surface" value="en">
        English
      </option>
      <option className="bg-surface text-on-surface" value="fa">
        فارسی
      </option>
    </select>
  );
}

export default LanguageSwitcher;
