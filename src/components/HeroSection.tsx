"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Component() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add any globe animation/interaction logic here if needed
  }, []);

  return (
    <section className="relative mt-10 md:mt-44 min-h-[100dvh] overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 h-full items-center pt-20 lg:pt-0">
          {/* Left Content */}
          <div className="relative z-10 space-y-6 lg:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight tracking-wide">
              The Global
              <br />
              Hackathon
              <br />
              Series
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 tracking-widest font-medium">
              5000 DEVELOPERS. 7 CITIES. 1 GRAND FINAL.
            </p>
            <div>
              <Link
                href="#grand-finals"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300"
              >
                Grand Finals
              </Link>
            </div>
          </div>

          {/* Right Content - Globe */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-3/5 lg:h-full">
            <div
              ref={globeRef}
              className="w-full h-[400px] lg:h-full opacity-75"
            >
              <img
                src="/placeholder.svg"
                alt="Globe visualization"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Cities Timeline */}
        <div className="absolute mt-32 left-0 right-0 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Horizontal Line */}
              <div className="absolute left-0 right-0 h-px bg-white/30 top-1/2 transform -translate-y-1/2" />

              {/* Cities */}
              <div className="grid grid-cols-7 relative">
                {[
                  "Mexico",
                  "Bangalore",
                  "Singapore",
                  "Warsaw",
                  "HCMC",
                  "Jakarta",
                  "Seoul",
                ].map((city, index) => (
                  <div key={city} className="flex flex-col items-center">
                    <div className="w-8 h-8 mb-2">
                      <img
                        src={`/placeholder.svg`}
                        alt={`${city} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white/80 text-sm lg:text-base font-medium tracking-wider">
                      {city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
