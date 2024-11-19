"use client";

import Link from "next/link";

export default function Component() {
  return (
    <section
      id="buidl-statements"
      className="w-full bg-[#09090B] py-16 md:py-24 relative z-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-tight uppercase">
            Buidl Statements
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Explore cutting-edge technologies, solve real-world problems, and
            innovate with purpose.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Technology Space */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Your Playground for Innovation
            </h3>
            <p className="text-gray-400">
              Immerse yourself in cutting-edge domains like Artificial
              Intelligence, Blockchain, and Sustainable Tech. Choose a space
              where your passion meets purpose and create solutions that matter.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Artificial Intelligence", "Blockchain", "Sustainability"].map(
                (domain, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm font-medium text-gray-200 bg-gray-800 rounded-full"
                  >
                    {domain}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Challenge */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Solve Real-World Problems
            </h3>
            <p className="text-gray-400">
              This hackathon challenges you to tackle significant global issues.
              Build solutions to optimize AI-driven decision-making, enhance
              sustainability, or strengthen cybersecurity in a digital-first
              world.
            </p>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </div>

          {/* Your Path */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Guiding Statements for Innovation
            </h3>
            <ul className="space-y-3 text-gray-400 list-disc pl-5">
              {[
                "How can AI transform urban planning?",
                "What solutions can improve data security on blockchain?",
                "How can we gamify sustainability for greater impact?",
              ].map((statement, index) => (
                <li key={index} className="text-base md:text-lg">
                  {statement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/#buidl-statements"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:to-teal-400 px-6 py-3 rounded-full text-lg font-bold tracking-wide shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
}
