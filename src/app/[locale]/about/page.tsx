import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "About",
    description: "About the independent Dead or Alive 6 Last Round Wiki guide hub.",
    alternates: pageAlternates("/about", locale),
  };
}

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>Dead or Alive 6 Last Round Wiki is an independent fan-made guide hub for fighters, controls, combos, stages, Photo Mode, platform details, and Core Fighters help.</p>
      <p>The site is not affiliated with Team NINJA or KOEI TECMO GAMES. It exists to organize community-friendly information and point players toward official stores and channels.</p>
    </LegalPage>
  );
}
