"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Component() {
  const [currentLogo, setCurrentLogo] = useState(0);
  const logos = [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % logos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="partner-with-us"
      className="w-full bg-[#111111] py-16 md:py-24"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-16 text-center">
          PARTNER WITH US
        </h2>

        <div className="flex justify-center mb-16">
          <div className="relative w-64 h-24">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner Logo ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                  index === currentLogo ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-6">
            Join the Innovation Revolution
          </h3>
          <p className="text-lg text-gray-300 mb-8">
            Partner with us to showcase your brand, connect with top talent, and
            drive innovation. Our global hackathon series offers unparalleled
            opportunities for engagement and collaboration.
          </p>
          <Link
            href="#become-a-partner"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Become a Partner
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Brand Exposure",
              description:
                "Showcase your brand to a global audience of innovators and tech enthusiasts.",
            },
            {
              title: "Talent Acquisition",
              description:
                "Connect with top developers and identify potential hires for your organization.",
            },
            {
              title: "Innovation Pipeline",
              description:
                "Tap into a diverse pool of ideas and solutions to drive your innovation agenda.",
            },
          ].map((item, index) => (
            <div key={index} className="relative group">
              {/* Card Background with Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Main Card */}
              <div className="relative bg-[#1a1a1a] p-8 rounded-lg border border-white/10 h-full transition-transform duration-300 group-hover:scale-[1.02]">
                <h4 className="text-xl font-bold text-white tracking-wide mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-300">{item.description}</p>
              </div>

              {/* Border Glow Effect */}
              <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
