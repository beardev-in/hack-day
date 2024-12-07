'use-client'
import React from "react";

interface TimelinesProps {
  position: number; // Current vertical position of the scroller
}

const Timelines: React.FC<TimelinesProps> = ({ position }) => {
  const itemHeight = 100; // Height of each timeline item (including gaps)

  // Highlight the timeline item only when the scroller aligns perfectly
  const highlightTimeline = (index: number) => {
    const itemTop = index * itemHeight;
    return Math.abs(position - itemTop) < itemHeight/2; // Highlight if within half an item's height
  };

  return (
    <div className="relative select-none">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`w-[332px] h-[86px] my-2 p-4 rounded-md ${
            highlightTimeline(index)
              ? "bg-custom-gradient border border-gray-800"
              : ""
          }`}
        >
          <h2
            className={`${
              highlightTimeline(index)
                ? "opacity-100 text-xl text-[18px]"
                : "opacity-50 text-[11px]"
            }`}
          >
            Timeline {index + 1}
          </h2>
          <div className="flex items-center gap-1">
          <p
            className={`${
              highlightTimeline(index)
                ? "opacity-100 text-[18px] text-[#969696]"
                : "opacity-50 text-[10px]"
            }`}
          >
            Description for timeline {index + 1}
          </p>
          {
             highlightTimeline(index)
             ?  <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg></span>
             :  <span><svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#969696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg></span>
          }
                   </div>
        </div>
      ))}
    </div>
  );
};

export default Timelines;
