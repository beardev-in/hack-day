"use client";

import Link from "next/link";

export default function GuidelinesSection() {
  return (
    <section
      id="guidelines"
      className="w-full bg-[#09090B] py-16 md:py-24 relative"
    >
      {/* Section Wrapper */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight uppercase">
            Guidelines for Participation
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-400">
            Understand the requirements, process, and criteria to ensure a
            smooth and successful hackathon experience.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Application Requirements */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              Application Process
            </h3>
            <p className="text-gray-400">
              Submit your application with a brief description of your team,
              skills, and your interest in the hackathon. Ensure all
              requirements are met for consideration.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">Timeline</h3>
            <p className="text-gray-400">
              Follow key dates: application deadline, hackathon start,
              submission deadlines, and the finale. Stay organized to stay
              ahead.
            </p>
          </div>

          {/* Rules & Resources */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              Rules & Resources
            </h3>
            <p className="text-gray-400">
              Access problem statements, documentation, and starter kits to
              tackle challenges effectively. Adhere to guidelines for
              submissions.
            </p>
          </div>

          {/* Judges & Evaluation */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              Judges & Evaluation
            </h3>
            <p className="text-gray-400">
              Projects are assessed by an expert panel based on innovation,
              feasibility, technical implementation, and presentation.
            </p>
          </div>

          {/* Hackathon Standard */}
          <div className="relative group bg-[#1a1a1a] p-6 md:p-8 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-4">
              Hackathon Standards
            </h3>
            <p className="text-gray-400">
              Uphold professionalism, adhere to ethical standards, and
              demonstrate originality to create impactful solutions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            href="/#guidelines"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:to-pink-400 px-6 py-3 rounded-full text-lg font-bold tracking-wide shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
