import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import BuidlStatementsSection from "@/components/BuidlStatementsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import CitiesSection from "@/components/CitiesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <OverviewSection />
      <GuidelinesSection />
      <BuidlStatementsSection />
      <HowItWorksSection />
      {/* <PartnerWithUsSection /> */}
      {/* <CitiesSection /> */}
    </main>
  );
}
