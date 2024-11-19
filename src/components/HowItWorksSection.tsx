import {
  ClipboardCheck,
  Info,
  LogIn,
  Code,
  UserRoundPen,
  Star,
  Gift,
} from "lucide-react";

export default function Component() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Register",
      description:
        "Sign up to become a part of the hackathon journey. This is your first step to innovation and collaboration.",
    },
    {
      icon: Info,
      title: "Learn About the Hackathon",
      description:
        "Dive into the event details, guidelines, and problem statements to get a head start.",
    },
    {
      icon: LogIn,
      title: "Log In",
      description:
        "Access your dashboard to track your progress, resources, and team activities.",
    },
    {
      icon: Code,
      title: "Start Hacking",
      description:
        "Collaborate with your team to create impactful solutions during the hackathon.",
    },
    {
      icon: UserRoundPen,
      title: "Jury Evaluation",
      description:
        "Submit your project for review and let the jury evaluate your creativity and technical execution.",
    },
    {
      icon: Star,
      title: "Climb the Leaderboard",
      description:
        "Earn points for your innovations and see your progress on the hackathon leaderboard.",
    },
    {
      icon: Gift,
      title: "Win Prizes",
      description:
        "Be recognized for your efforts and compete for amazing rewards and opportunities.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#09090B] py-16 md:py-24 z-10"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wider mb-8 uppercase">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 tracking-wide mb-16 ">
              Follow these steps to embark on your hackathon journey and leave a
              mark with your innovation.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Main Card */}
                <div className="relative bg-[#1a1a1a] p-6 rounded-lg border border-white/10 h-full">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-[#222] rounded-lg flex items-center justify-center relative">
                      <step.icon className="w-8 h-8 text-white" />
                      <div className="absolute inset-0 bg-white/5 rounded-lg filter blur-sm" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white tracking-wide mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-sm text-gray-400 italic">
            *Participate actively and submit your project to be eligible for
            rewards and recognition.
          </p>
        </div>
      </div>
    </section>
  );
}
