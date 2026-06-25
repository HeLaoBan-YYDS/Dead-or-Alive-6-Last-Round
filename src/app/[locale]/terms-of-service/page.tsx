import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Terms of Service",
    description: "Terms of service for the independent Dead or Alive 6 Last Round Wiki.",
    alternates: pageAlternates("/terms-of-service", locale),
  };
}

export default function TermsOfServicePage() {
  return (
    <LegalPage title="Terms of Service">
      <p>This site is an independent fan-made guide hub. Content is provided for informational and entertainment purposes only.</p>
      <p>Game systems, roster details, platform availability, store listings, and update details may change without notice. Always verify important information in-game or through official Team NINJA and KOEI TECMO channels.</p>
      <p>By using this site, you agree not to misuse it, attempt unauthorized access, or present this fan wiki as an official Team NINJA, KOEI TECMO, Steam, PlayStation, or Xbox property.</p>
    </LegalPage>
  );
}
