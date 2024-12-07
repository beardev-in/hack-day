import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import BuidlStatementsSection from "@/components/BuidlStatementsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
import CitiesSection from "@/components/CitiesSection";
import Hack$Day from "@/components/Hack$Day";
import Cities from "@/components/cities/Cities";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <HeroSection />
      {/* <OverviewSection /> */}
      <div className="w-full">
        <Hack$Day/>
        <Cities/>
      </div>
      {/* <GuidelinesSection />
      <BuidlStatementsSection />
      <HowItWorksSection /> */}
      {/* <PartnerWithUsSection /> */}
      {/* <CitiesSection /> */}
    </main>
  );
}
