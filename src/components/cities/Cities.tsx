'use-client'
import React from "react";
import Timelines from "./Timelines";
import DraggableTimeline from "./DraggableTimeline";
import TrackCard from "../TrackCard";

const Cities = () => {
  
  return (
    <div className="gap_section flex flex-col gap-4 min-h-screen mt-10">
      <div className="w-full flex items-center justify-center ">
        <h1 className="monasans text-[32px] font-semibold ">
          Hack$Day Hackathon
        </h1>
      </div>
      <div className="text-[14px] text-center">
        <p className="text-[14px] text-[#D2D2D2]">
          Join a transformative hackathon journey where creativity and
          technology merge to tackle meaningful challenges.Problem
          Statement: Innovate solutions for pressing issues in sustainability,
          fintech, and healthcare. Target Domains: AI, Blockchain, IoT, and
          Green Technology.
        </p>
      </div>

      {/* About Hackathon */}
      <div className="flex w-full max-h-[743px] justify-between mt-6">
        <div className="w-[379px] flex flex-col gap-5 mt-4">
          <DraggableTimeline />
        </div>

        <div className="rounded-[12px] grid items-center justify-center grid-cols-2 gap-4 border-none mt-4">
          <TrackCard/>
          <TrackCard/>
          <TrackCard/>
          <TrackCard/>
          <TrackCard/>
          <TrackCard/>
        </div>
      </div>
    </div>

    
  );
};

export default Cities;
