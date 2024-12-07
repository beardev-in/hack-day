'use-client'
import React from "react";
import DraggableTimeline from "./DraggableTimeline";
import TrackCard from "./TrackCard";

const Cities = () => {
  return (
    <div className="gap_section flex flex-col gap-4 mt-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full flex items-center justify-center">
        <h1 className="monasans text-[32px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold">
          Hack$Day Hackathon
        </h1>
      </div>
      <div className="text-[14px] text-center sm:text-[16px]">
        <p className="text-[#D2D2D2]">
          Join a transformative hackathon journey where creativity and
          technology merge to tackle meaningful challenges. Problem Statement: Innovate solutions for pressing issues in sustainability, fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and Green Technology.
        </p>
      </div>

      {/* About Hackathon */}
      <div className="flex flex-col lg:flex-row w-full max-h-[743px] justify-between mt-6 gap-6 sm:gap-8">
        <div className="w-full sm:w-[379px] max-h-[600px] flex flex-col gap-5 mt-4 mb-20">
          <DraggableTimeline />
        </div>

        <div className="rounded-[12px] grid grid-cols-1 sm:grid-cols-2 gap-4 lg:mt-4">
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
          <TrackCard />
        </div>
      </div>
    </div>
  );
};

export default Cities;
