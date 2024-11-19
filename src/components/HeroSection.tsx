"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Component() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () =>
      [...Array(50)].map(() => ({
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 100 + 10}s`,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      }));

    setStars(generateStars());

    const interval = setInterval(() => {
      setStars(generateStars());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden bg-[#0A0F17]">
      {/* Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Spotlight Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(circle at 50% 0%, rgba(0,255,0, 0.08), transparent 60%),
          linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.8) 100%) /* Fading effect */
        `,
        }}
      />

      {/* Animated Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full animate-star"
          style={{
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: star.animationDuration,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container w-full flex justify-center mt-28 md:mt-48 mx-auto px-4 h-full">
        <div className="w-full h-full flex items-center justify-center pt-20 lg:pt-0">
          <div className="relative z-10 space-y-6 lg:space-y-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-center leading-tight tracking-wide">
              BUIDL&apos;s Decentralised Hackathons and
              <br />
              Develops the SKILL PROTOCOL
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-300 tracking-wide">
              We leverage blockchain technology to revolutionize deep tech
              education,
              <br />
              create verifiable social proof, and empower global tech
              professionals.
            </p>
            <div>
              <Link
                href="#join-waitlist"
                className="inline-block bg-white/10 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300"
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Learn More Link */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => {
              const targetSection = document.getElementById("overview");
              if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white/60 hover:text-white transition-colors duration-300"
          >
            Learn more
            <svg
              className="inline-block ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes star-rise {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-10vh);
          }
        }
        .animate-star {
          animation: star-rise linear infinite;
        }
      `}</style>
    </section>
  );
}
