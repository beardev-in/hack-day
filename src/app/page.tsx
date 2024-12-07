import HeroSection from "@/components/HeroSection";
import Hack$Day from "@/components/Hack$Day";
import Cities from "@/components/cities/Cities";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <div className="w-full">
        <Hack$Day/>
        <Cities/>
      </div>
    </main>
  );
}
