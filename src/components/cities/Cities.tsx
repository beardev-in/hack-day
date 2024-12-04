import React from "react";
import Timelines from "./Timelines";
import DraggableTimeline from "./DraggableTimeline";

const Cities = () => {
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
    <div className="gap_section flex flex-col gap-4 min-h-screen mt-10">
      <div className="w-full flex items-center justify-center ">
        <h1 className="monasans text-[32px] font-semibold ">
          Hack$Day Hackathon
        </h1>
      </div>
      <div className="text-[14px]">
        <p className="MonaSansBoldWide">
          Join a transformative hackathon journey where creativity and
          technology merge to tackle meaningful challenges.Problem
          Statement: Innovate solutions for pressing issues in sustainability,
          fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and
          Green Technology.
        </p>
      </div>

      {/* About Hackathon */}
      <div className="flex w-full justify-between mt-6">
        <div className="w-[379px] flex flex-col gap-5 ">
          <DraggableTimeline />
        </div>

        <div className="w-[654px] bg-custom-gradient p-[32px] rounded-[12px] border border-gray-600 ">
          <div className="h-[200px] bg-white rounded-lg"></div>
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
          <div className="text-[#D2D2D2] text-[14px] mt-6 flex flex-col gap-5">
            <p>
              Join a transformative hackathon journey where creativity and
              technology merge to tackle meaningful challenges.Problem
              Statement: Innovate solutions for pressing issues in
              sustainability, fintech, and healthcare. Target Domains: AI,
              Blockchain, IoT, and Green Technology.Supported By: Leading global
              brands committed to empowering innovation. Prizes: Cash rewards,
              exclusive mentorship, and career opportunities.
            </p>
            <h2 className="text-lg font-semibold text-[#FFFFFF]">
              Sub heading
            </h2>
            <p>
              Join a transformative hackathon journey where creativity and
              technology merge to tackle meaningful challenges.Problem
              Statement: Innovate solutions for pressing issues in
              sustainability, fintech, and healthcare. Target Domains: AI,
              Blockchain, IoT, and Green Technology.Supported By: Leading global
              brands committed to empowering innovation. Prizes: Cash rewards,
              exclusive mentorship, and career opportunities.
            </p>
          </div>
          <div className="w-full h-[1px] bg-custom-gradient mt-6">
          </div>
          <div className="w-full flex justify-center mt-6 border rounded-full p-[16px] font-bold text-[18px] relative overflow-hidden group">
            <button className="relative z-10 text-white group-hover:text-black transition duration-300">
              Apply
            </button>
            <div className="absolute w-full h-[500px] bg-white rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cities;
