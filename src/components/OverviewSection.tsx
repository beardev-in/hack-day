export default function Component() {
  return (
    <section
      id="overview"
      className="w-full bg-[#09090B] text-white py-16 md:py-24 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider mb-12 text-center">
          <span className="relative inline-block text-white">
            HACKATHON OVERVIEW
          </span>
        </h1>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Brief Info */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Join a transformative hackathon journey where creativity and
              technology merge to tackle meaningful challenges.
            </p>
            <p>
              <strong>Problem Statement:</strong> Innovate solutions for
              pressing issues in sustainability, fintech, and healthcare.
            </p>
            <p>
              <strong>Target Domains:</strong> AI, Blockchain, IoT, and Green
              Technology.
            </p>
            <p>
              <strong>Supported By:</strong> Leading global brands committed to
              empowering innovation.
            </p>
            <p>
              <strong>Prizes:</strong> Cash rewards, exclusive mentorship, and
              career opportunities.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid gap-6">
            {[
              {
                title: "Real-World Challenges",
                description: "Solve impactful problems in tech-driven domains.",
              },
              {
                title: "Global Brand Partners",
                description: "Collaborate with top industry leaders.",
              },
              {
                title: "Grand Rewards",
                description:
                  "Win cash prizes and career-defining opportunities.",
              },
            ].map((highlight, index) => (
              <div
                key={index}
                className="relative rounded-xl bg-[#1a1a1a] p-6 shadow-lg"
              >
                <h3 className="text-2xl font-bold tracking-wide mb-2 text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-400">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
