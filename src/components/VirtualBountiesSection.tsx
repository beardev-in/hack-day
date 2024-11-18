import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Component() {
  return (
    <section
      id="buidl-statements"
      className="w-full bg-[#111111] py-16 md:py-24  z-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 mx-auto gap-12 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider">
              BUIDL STATEMENTS
            </h2>
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed tracking-wide">
                We're excited to introduce Virtual Bounties, an engaging
                addition to The Global Hackathon Series that offers participants
                the opportunity to undertake diverse challenges and earn
                additional points, regardless of their hackathon city.
              </p>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed tracking-wide">
                Dive into these quests to showcase your skills, creativity, and
                knowledge while climbing up the leaderboard!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#learn-more"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300"
              >
                LEARN MORE
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#start-bounty-hunting"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white border-2 border-white/20 rounded-full hover:border-white transition-colors duration-300"
              >
                START BOUNTY HUNTING
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative bg-[#1a1a1a] p-8 md:p-12 rounded-lg border border-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider mb-8">
                  Season Schedule
                </h3>
                <div className="space-y-6">
                  {[
                    "Season 1: May 6 – May 31",
                    "Season 2: July 5 – August 2",
                    "Season 3: August 26 – September 13",
                  ].map((season, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                      <span className="text-lg text-gray-200 tracking-wide">
                        {season}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Decorative corner accents */}
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-white/20" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
