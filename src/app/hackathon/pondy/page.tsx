'use-client'
import Navbar from "@/components/Navbar";
import React from "react";
import hackerImg from "../../../../public/assets/hacker.svg";
import Image from "next/image";
import Link from "next/link";

const Pondy = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <>
      <Navbar />
      <div className="gap_section">
        <div className="flex justify-between items-center mt-4">
          <h1 className="monasans text-[22px] font-bold mt-4">
            Hack Day Series - 01 <span className="text-[#06C270]">Pondy</span>
          </h1>
          <div className="hidden lg:flex items-center gap-10monasans font-sans">
            <div className="hidden lg:flex gap-3 items-center justify-center">
              <div className="w-11 h-11 hidden lg:flex flex-col items-center justify-around rounded-md border border-gray-400 dark:border-[#343434]">
                <div className="h-5 w-full bg-[#07C271] text-[#FFFFFF] rounded-t-md flex justify-center items-center">
                  <span>{months[new Date().getMonth()]}</span>
                </div>
                <div>
                  <span className="text-[#3A3A3C] dark:text-[#FFFFFF]">
                    {new Date().getDate()}
                  </span>
                </div>
              </div>
              <div className="flex justify-start items-center lg:block mt-4 md:mt-0">
                <p className="text-[14px]">
                  {days[new Date().getDay()]} {new Date().getDate()}{" "}
                  {months[new Date().getMonth()]}
                </p>
                <span className="text-sm text-[#9CA3AF]">
                  {" "}
                  {new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#D2D2D2] text-[18px] mt-6 flex flex-col gap-5">
          <p>
          Join a transformative hackathon journey where creativity and technology merge to tackle meaningful challenges.Problem Statement: Innovate solutions for pressing issues in sustainability, fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and Green Technology.Supported By: Leading global brands committed to empowering innovation. Prizes: Cash rewards, exclusive mentorship, and career opportunities.
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-between gap-5 mt-10">
          <div className="bg-custom-gradient p-5 rounded-xl border border-gray-600 md:w-[65%]">
            <h1 className="text-[28px] font-semibold">Hackathon Overview</h1>
            <p className="font-semibold mt-2">Tracks</p>
            <div className="grid grid-cols-3 gap-4 mt-2">
              <button className="px-1 py-1 bg-custom-gradient border border-gray-600 rounded-xl">
                AI/ML
              </button>
              <button className="px-2 py-4 bg-custom-gradient border border-gray-600 rounded-xl">
                BlockChain
              </button>
              <button className="px-2 py-4 bg-custom-gradient border border-gray-600 rounded-xl">
                Gaming
              </button>
              <button className="px-2 py-4 bg-custom-gradient border border-gray-600 rounded-xl">
                IOT
              </button>
              <button className="px-2 py-4 bg-custom-gradient border border-gray-600 rounded-xl">
                Cyber Security
              </button>
              <button className="px-2 py-4 bg-custom-gradient border border-gray-600 rounded-xl">
                Web Development
              </button>
            </div>
            <h2 className="text-lg font-semibold text-[#FFFFFF] mt-4">
              Sub heading
            </h2>
            <p className="text-[#D2D2D2] text-[14px] mt-2 flex flex-col gap-5">
              Join a transformative hackathon journey where creativity and
              technology merge to tackle meaningful challenges.Problem
              Statement: Innovate solutions for pressing issues in
              sustainability, fintech, and healthcare. Target Domains: AI,
              Blockchain, IoT, and Green Technology.Supported By: Leading global
              brands committed to empowering innovation. Prizes: Cash rewards,
              exclusive mentorship, and career opportunities.
            </p>
            <h2 className="text-lg font-semibold text-[#FFFFFF] mt-4">
              Sub heading
            </h2>
            <p className="text-[#D2D2D2] text-[14px] mt-2 flex flex-col gap-5">
              Join a transformative hackathon journey where creativity and
              technology merge to tackle meaningful challenges.Problem
              Statement: Innovate solutions for pressing issues in
              sustainability, fintech, and healthcare. Target Domains: AI,
              Blockchain, IoT, and Green Technology.Supported By: Leading global
              brands committed to empowering innovation. Prizes: Cash rewards,
              exclusive mentorship, and career opportunities.
            </p>
          </div>
          <div className="max-h-[522px] bg-custom-gradient p-5 rounded-xl border border-gray-600 flex flex-col gap-5 items-center">
            <Image
              src={hackerImg}
              className="w-[310.49px] h-[289.86px]"
              alt="0xDay-Logo"
            />
            <h1 className="text-[22px] font-semibold">
              Solo or Team, Register to Hack now!
            </h1>

            <div className="w-full h-[1px] bg-custom-gradient"></div>
            <div className="w-full flex justify-center border rounded-full pt-[12px] pb-[12px] font-bold text-[18px] relative overflow-hidden group">
              <Link href='/registrations/register' className="relative z-10 text-white group-hover:text-black transition duration-300">
                Register Now
              </Link>
              <div className="absolute w-full h-[500px] bg-white rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            </div>
            <p className="text-[14px]">
              Already a registered user?{" "}
              <Link href="/registrations/apply" className="text-[#06C270]">Apply here</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pondy;
