import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import PastEventsSection from "@/components/PastEventsSection";
import VirtualBountiesSection from "@/components/VirtualBountiesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import CitiesSection from "@/components/CitiesSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <OverviewSection />
      <PastEventsSection />
      <VirtualBountiesSection />
      <HowItWorksSection />
      <PartnerWithUsSection />
      <CitiesSection />
    </main>
  );
}
