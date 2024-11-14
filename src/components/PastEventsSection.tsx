"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Component() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="past-events"
      className="w-full bg-[#111111] py-16 md:py-24 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider leading-tight">
            PAST GLOBAL
            <br />
            HACKATHON SERIES
          </h2>
          <Link
            href="/more"
            className="hidden md:flex items-center gap-2 text-white border-2 border-white/20 rounded-full px-6 py-2 hover:border-white transition-colors duration-300"
          >
            Find out more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Column */}
          <div className="space-y-6">
            {["26,000+ Developers", "5000+ Solutions", "100+ Cities"].map(
              (stat, index) => (
                <div key={index} className="relative group">
                  {/* Background shape with skew and glow */}
                  <div className="absolute inset-0 bg-[#1a1a1a] transform -skew-x-12 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wider">
                      {stat}
                    </h3>
                  </div>

                  {/* Glowing border */}
                  <div className="absolute inset-0 transform -skew-x-12">
                    <div className="absolute inset-0 rounded-lg border border-white/20 group-hover:border-white/40 transition-colors duration-300" />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent" />
                  </div>
                </div>
              )
            )}
          </div>

          {/* Image Column */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Past Event ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 md:hidden">
          <Link
            href="/more"
            className="flex items-center justify-center gap-2 text-white border-2 border-white/20 rounded-full px-6 py-2 hover:border-white transition-colors duration-300 w-full"
          >
            Find out more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
