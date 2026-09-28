import { CampaignsSection } from "../components/campaigns-section";
import { ContactSection } from "../components/contact-section";
import { HeroSection } from "../components/hero-section";
import { IntroSection } from "../components/intro-section";
import { QuoteSection } from "../components/quote-section";
import { ServicesSection } from "../components/services-section";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { TrustBar } from "../components/trust-bar";

export default function Home() {
  return (
    <main dir="rtl">
      <SiteHeader />
      <HeroSection />
      <TrustBar />
      <IntroSection />
      <ServicesSection />
      <CampaignsSection />
      <QuoteSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
