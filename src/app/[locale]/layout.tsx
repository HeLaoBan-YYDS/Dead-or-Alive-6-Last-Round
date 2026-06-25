import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ThemeProvider } from "next-themes";
import { JsonLd, SiteFooter, SiteHeader } from "@/components/site";
import { routing } from "@/i18n/routing";
import { absoluteUrl, defaultSeoImagePath, languageAlternates, openGraphLocale, siteUrl } from "@/lib/seo";
import en from "@/locales/en.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

type Messages = typeof en;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const loc = hasLocale(routing.locales, locale) ? locale : routing.defaultLocale;
  const messages = (await getMessages({ locale: loc })) as Messages;
  const image = absoluteUrl(defaultSeoImagePath);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: "dead or alive 6 last round Wiki", template: "%s" },
    description: messages.site.description,
    alternates: { languages: languageAlternates("/") },
    openGraph: {
      type: "website",
      locale: openGraphLocale(loc),
      url: absoluteUrl("/", loc),
      siteName: messages.site.name,
      images: [{ url: image, width: 1200, height: 675, alt: `${messages.site.name} key art` }],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.site.name,
      description: messages.site.description,
      images: [image],
    },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  const messages = (await getMessages()) as Messages;
  const loc = locale as (typeof routing.locales)[number];
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: messages.site.name,
    url: absoluteUrl("/", loc),
    logo: `${siteUrl}/android-chrome-512x512.png`,
    image: absoluteUrl(defaultSeoImagePath),
  };

  return (
    <html lang={locale} className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <JsonLd data={organization} />
            <SiteHeader locale={locale} />
            {children}
            <SiteFooter locale={locale} />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
