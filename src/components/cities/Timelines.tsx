import React from 'react';

interface TimelinesProps {
  position: number; // Current vertical position of the scroller
}

const Timelines: React.FC<TimelinesProps> = ({ position }) => {
  // Highlight the timeline item only when the scroller aligns perfectly
  const highlightTimeline = (index: number) => {
    const itemHeight = 100; // Height of each timeline item (including margins)
    const itemCenter = index * itemHeight + itemHeight / 2; // Center of the timeline item
    const scrollerCenter = position; // Center of the scroller

    const threshold = 10; // Tolerance for alignment (in pixels)

    return Math.abs(scrollerCenter - itemCenter) <= threshold;
  };

  return (
    <div className="relative select-none">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className={`w-[379px] h-[100px] my-2 p-4 rounded-md`}
        >
          <h2
            className={`text-[#ffffff] ${
              highlightTimeline(index) ? 'opacity-100 text-xl' : 'opacity-50'
            }`}
          >
            Timeline {index + 1}
          </h2>
          <p
            className={`text-[#ffffff] ${
              highlightTimeline(index) ? 'opacity-100 text-red-400' : 'opacity-50'
            }`}
          >
            Description for timeline {index + 1}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timelines;
