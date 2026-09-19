import { Locale } from "@/i18n/i18nConfig";
import initTranslations from "../../i18n";
import "./globals.css";
import TranslationsProvider from "@/components/providers/TranslationsProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dir = locale === "en" ? "ltr" : "rtl";
  const { resources } = await initTranslations(locale, ["dashboard"]);

  return (
    <html lang={locale} dir={dir} className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <TanstackProvider>
          <TranslationsProvider
            resources={resources}
            locale={locale}
            namespaces={["dashboard"]}
          >
            {children}
          </TranslationsProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
