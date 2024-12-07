"use client";

import { useState, useEffect } from "react";
import globe from "../../public/assets/globe.png";
import Navbar from "./Navbar";
import doller from "../../public/assets/doller.png";
import Image from "next/image";
import Link from "next/link";

// Type for the stars
interface Star {
  left: string;
  animationDuration: string;
  size: number;
  opacity: number;
}

export default function Component() {
  // const dispatch = useDispatch();
  // const {toast} = useToast();
  // const navigate = useNavigate();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = (): Star[] =>
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
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0A0F17]">
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
          radial-gradient(circle at 50% 0%, rgba(0,255,0, 0.1), transparent 40%),
          linear-gradient(to bottom, rgba(0,0,0,0) 100%, rgba(0,0,0,0.8) 100%) /* Fading effect */
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

      {/* Rotating Globe */}
      <div className="absolute top-20 -right-64 transform -translate-y-1/2 w-[650px] h-[650px] animate-rotate-circular">
        <Image
          className="w-full h-full object-contain"
          src={globe}
          alt="Globe"
        />
      </div>

      {/* Content Container */}
      <div>
        <Navbar />
        <div className="w-full flex min-h-[calc(100vh-120px)] px-4 h-full">
          <div className="w-full h-full flex flex-col pt-20 pl-24 lg:pt-28">
            <div className="relative z-10 space-y-6 lg:space-y-4 flex flex-col justify-center h-[199px] w-[677.32px]">
              <h1 className="monasans text-3xl sm:text-[50px] lg:text-[50px] font-bold text-white leading-tight tracking-wide flex items-center">
                Hack{" "}
                <Image className="pl-4 h-[50px] w-[50px]" src={doller} alt="" />{" "}
                DAY Series
              </h1>
              <div>
                <p className="text-lg sm:text-[14px] lg:text-[14px] text-[#D2D2D2]">
                  Join a transformative hackathon journey where creativity and
                  technology merge to tackle meaningful challenges. Problem
                  Statement: Innovate solutions for pressing issues in
                  sustainability, fintech, and healthcare. Target Domains: AI,
                  Blockchain, IoT, and Green Technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 w-full flex flex-col items-center gap-3 justify-center">
          <div className="aquireBold text-[20px]">
            <h1>LEARN • HACK • BUIDL</h1>
          </div>

          <div className="flex justify-center border rounded-full pt-[12px] pb-[12px] text-[16px] relative overflow-hidden group">
            <Link
              href="/hackathon/pondy"
              className="relative z-10 px-3 text-white group-hover:text-black transition duration-300"
            >
              The Application for Hack $DAY Pondy is live now
            </Link>
            <div className="absolute w-full h-[500px] bg-white rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
