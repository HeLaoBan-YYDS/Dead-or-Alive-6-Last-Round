import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Copyright",
    description: "Copyright information for the independent Dead or Alive 6 Last Round Wiki.",
    alternates: pageAlternates("/copyright", locale),
  };
}

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Dead or Alive 6 Last Round, Dead or Alive, Team NINJA, KOEI TECMO, platform logos, character names, screenshots, trailers, and related media belong to their respective owners.</p>
      <p>This site is a non-official fan wiki implementation for educational and guide presentation purposes.</p>
      <p>If you own rights to content displayed here and have a concern, please contact the site operator for review.</p>
    </LegalPage>
  );
}
