export default function Component() {
  return (
    <section
      id="overview"
      className="w-full bg-[#111111] text-white py-16 md:py-24 z-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-16">
          OVERVIEW
        </h1>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The AngelHack Global Hackathon Series is a remarkable year-long
              hackathon odyssey that spans seven vibrant cities worldwide. Over
              the years, we've brought together 26,000+ developers and hosted 12
              editions of this extraordinary series. In each city, innovation
              and creativity converge as teams gather to hack, ideate, and build
              solutions poised to change the world.
            </p>
            <p className="text-lg leading-relaxed">
              But that's not all — we're introducing virtual bounties alongside
              the in-person hackathons. It's your gateway to innovation,
              year-round engagement, and unmatched rewards.
            </p>
            <p className="text-lg leading-relaxed">
              The adventure culminates in the grand finale in the vibrant
              metropolis of Singapore. Here, champions from across the globe on
              the Global Hackathon Series leaderboard converge to showcase their
              innovations, vie for top honors, and etch their names into the
              annals of global innovation.
            </p>
            <p className="text-xl font-semibold mt-8">
              Are you ready to be part of this global movement?
            </p>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-8">
            {["5000 Developers", "7 Cities", "1 Grand Final"].map(
              (stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] transform skew-x-6 rounded-lg" />
                  <div className="relative bg-[#1a1a1a] p-8 rounded-lg transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#333] to-transparent opacity-10 rounded-lg" />
                    <div className="relative">
                      <h3 className="text-2xl md:text-3xl font-bold tracking-wider">
                        {stat}
                      </h3>
                    </div>
                  </div>
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff20] to-transparent opacity-0 group-hover:opacity-100 transform skew-x-6 rounded-lg transition-opacity" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
