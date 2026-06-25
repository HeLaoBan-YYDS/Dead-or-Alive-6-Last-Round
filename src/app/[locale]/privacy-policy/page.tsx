import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { type Locale } from "@/i18n/routing";
import { pageAlternates } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Privacy Policy",
    description: "Privacy policy for the independent Dead or Alive 6 Last Round Wiki.",
    alternates: pageAlternates("/privacy-policy", locale),
  };
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for Dead or Alive 6 Last Round. We do not request platform account credentials, payment information, or private console profile data.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Steam, PlayStation Store, Xbox Store, Team NINJA, KOEI TECMO, Discord, YouTube, Reddit, or Steam Community. Those services are governed by their own privacy policies.</p>
    </LegalPage>
  );
}
