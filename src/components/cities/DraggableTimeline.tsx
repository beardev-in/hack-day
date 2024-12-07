'use client';

import React, { useState, useRef, useEffect } from "react";
import Timelines from "./Timelines";

const DraggableTimeline: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0); // Position of the scroller
  const timelineRef = useRef<HTMLDivElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);

  const itemHeight = 100; // Height of a timeline item (including gaps)
  const maxHeight = 600; // The maximum height of the timeline container

  // Synchronize the scroller with the timeline scroll
  const syncScrollerWithTimeline = () => {
    if (timelineRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const draggerHeight = draggerRef.current?.offsetHeight || 0;

      const newPosition = scrollPercentage * (maxHeight - draggerHeight);
      setPosition(Math.round(newPosition / itemHeight) * itemHeight); // Snap to nearest item
    }
  };

  // Synchronize the timeline with the scroller drag
  const syncTimelineWithScroller = (newPosition: number) => {
    if (timelineRef.current) {
      const { scrollHeight, clientHeight } = timelineRef.current;
      const scrollPercentage = newPosition / (maxHeight - (draggerRef.current?.offsetHeight || 0));
      timelineRef.current.scrollTo({
        top: scrollPercentage * (scrollHeight - clientHeight),
        behavior: "auto",
      });
    }
  };

  // Handle drag start
  const handleDragStart = () => setDragging(true);

  // Handle drag end
  const handleDragEnd = () => {
    setDragging(false);
    // Snap to nearest timeline item
    const snappedPosition = Math.round(position / itemHeight) * itemHeight;
    setPosition(snappedPosition);
    syncTimelineWithScroller(snappedPosition);
  };

  // Handle drag move
  const handleDragMove = (e: MouseEvent) => {
    if (dragging && timelineRef.current) {
      const timeline = timelineRef.current;
      const lineHeight = timeline.offsetHeight;
      const draggerHeight = draggerRef.current?.offsetHeight || 0;
      const newPos = Math.min(
        Math.max(0, e.clientY - timeline.getBoundingClientRect().top),
        lineHeight - draggerHeight
      );

      setPosition(newPos);
      syncTimelineWithScroller(newPos);
    }
  };

  // Attach drag event listeners
  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
    } else {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    }

    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
    };
  }, [dragging]);

  // Attach scroll synchronization
  useEffect(() => {
    const currentTimeline = timelineRef.current;
    currentTimeline?.addEventListener("scroll", syncScrollerWithTimeline);

    return () => {
      currentTimeline?.removeEventListener("scroll", syncScrollerWithTimeline);
    };
  }, []);

  return (
    <div className="relative w-full sm:w-[379px] flex justify-between max-h-[600px]">
      <div className="flex gap-4 w-full max-h-[600px]">
        {/* Vertical Line */}
        <div
          className="relative w-[2px] bg-custom-gradient h-[600px]"
          style={{ height: "100%" }}
        >
          {/* Draggable Scroller */}
          <div
            ref={draggerRef}
            className="w-[16px] h-[16px] bg-[#969696] border border-[#FFFFFF] rounded-full absolute"
            style={{
              top: position, // Position of the scroller
              left: "-7px",
              cursor: "pointer",
            }}
            onMouseDown={handleDragStart}
          />
        </div>

        {/* Scrollable Timeline Section */}
        <div
          ref={timelineRef}
          className="hide-scrollbar w-full sm:w-[379px] flex flex-col gap-5 overflow-y-auto overflow-x-hidden max-h-[600px]"
        >
          {/* Timeline Items */}
          <Timelines position={position} />
        </div>
      </div>
    </div>
  );
};

export default DraggableTimeline;
