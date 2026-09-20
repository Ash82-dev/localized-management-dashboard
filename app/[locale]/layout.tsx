import "./globals.css";

import { Locale } from "@/i18n/i18nConfig";
import initTranslations from "@/i18n";

import TranslationsProvider from "@/components/providers/TranslationsProvider";
import { TanstackProvider } from "@/components/providers/TanstackProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dir = locale === "en" ? "ltr" : "rtl";
  const { resources } = await initTranslations(locale, ["dashboard"]);

  return (
    <html
      lang={locale}
      dir={dir}
      className="antialiased"
      suppressHydrationWarning
    >
      <body>
        <TanstackProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TranslationsProvider
              resources={resources}
              locale={locale}
              namespaces={["dashboard"]}
            >
              <main className="grid h-screen grid-cols-[auto_1fr]">
                <Sidebar direction={dir} />

                <div className="grid min-h-0 grid-rows-[80px_1fr]">
                  <Header locale={locale} />
                  <section className="min-h-0 overflow-y-scroll bg-background">
                    {children}
                  </section>
                </div>
              </main>
            </TranslationsProvider>
          </ThemeProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
