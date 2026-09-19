import initTranslations from "@/i18n";
import { Locale } from "@/i18n/i18nConfig";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
  locale: Locale;
}

async function Header({ locale }: HeaderProps) {
  const { t } = await initTranslations(locale, ["dashboard"]);

  return (
    <header className="flex items-center justify-between border-b border-outline bg-background px-7">
      <h2 className="text-2xl font-semibold text-on-surface">
        {t("dashboard")}
      </h2>

      <div className="flex items-center gap-7">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
