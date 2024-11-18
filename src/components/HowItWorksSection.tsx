import { ClipboardCheck, DollarSign, Trophy, Crown } from "lucide-react";

export default function Component() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Register",
      description:
        "Join the Global Hackathon Series by registering once for the entire circuit, including The Global Hackathon Series and the exciting addition of virtual bounties.",
    },
    {
      icon: DollarSign,
      title: "Form a team",
      description:
        "Participate in hackathons, tackle challenges, and earn points. Alongside points, cash prizes await you.",
    },
    {
      icon: Trophy,
      title: "Start Hack",
      description:
        "Your points contribute to your position on The Global Hackathon Series Leaderboard, which we track throughout the year.",
    },
    {
      icon: Crown,
      title: "Aim for the Top",
      description:
        "At the end of the circuit, the top 30 teams will be selected to participate in the Grand Finals in Singapore, with all expenses covered.",
    },
  ];

  return (
    <section id="prizes" className="w-full bg-black py-16 md:py-24  z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-8 uppercase">
            Prizes
          </h2>
          <p className="text-xl text-gray-200 tracking-wide mb-16 max-w-4xl">
            Embark on an extraordinary year-long adventure where innovation
            knows no bounds. Here's how it works:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Main Card */}
                <div className="relative bg-[#1a1a1a] p-6 rounded-lg border border-white/10 h-full">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-[#222] rounded-lg flex items-center justify-center relative">
                      <step.icon className="w-8 h-8 text-white" />
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 bg-white/5 rounded-lg filter blur-sm" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-wide mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Border Glow Effect */}
                <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 italic">
            *To be eligible for the Grand Finals, participate in at least one
            in-person hackathon across the year.
          </p>
        </div>
      </div>
    </section>
  );
}
