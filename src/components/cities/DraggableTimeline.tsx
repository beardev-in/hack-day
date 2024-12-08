"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Timelines from "./Timelines";
import countries from "@/countriesData";

const DraggableTimeline: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0); // Position of the scroller
  const timelineRef = useRef<HTMLDivElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);

  const itemHeight = 100; // Height of a timeline item (including gaps)
  const maxHeight = 600; // The maximum height of the timeline container

  // Get selected country and city from Redux store
  const { selectedCountry, selectedCity } = useSelector(
    (state: RootState) => state.event
  );

  useEffect(() => {
    // Reset the position to the top when the country changes
    if (selectedCountry) {
      setPosition(0); // Reset the scroller position when country changes
      syncTimelineWithScroller(0); // Sync the timeline scroll to the top
    }
  }, [selectedCountry]); // Only trigger when the country changes

  useEffect(() => {
    // Scroll to the position of the selected city
    if (selectedCountry && selectedCity && timelineRef.current) {
      const countryData = countries.find(
        (country) => country.name === selectedCountry
      );

      if (countryData) {
        const cityIndex = countryData.cities.findIndex(
          (city) => city.name === selectedCity
        );

        if (cityIndex >= 0) {
          const newPosition = cityIndex * itemHeight; // Calculate position
          setPosition(newPosition); // Update position state
          syncTimelineWithScroller(newPosition); // Sync the timeline scroll
        }
      }
    }
  }, [selectedCity, selectedCountry]); // Trigger on city or country change

  // Synchronize the scroller with the timeline scroll
  const syncScrollerWithTimeline = useCallback(() => {
    if (timelineRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const draggerHeight = draggerRef.current?.offsetHeight || 0;

      const newPosition = scrollPercentage * (maxHeight - draggerHeight);
      setPosition(Math.round(newPosition / itemHeight) * itemHeight); // Snap to nearest item
    }
  }, [itemHeight, maxHeight]);

  // Synchronize the timeline with the scroller drag
  const syncTimelineWithScroller = useCallback(
    (newPosition: number) => {
      if (timelineRef.current) {
        const { scrollHeight, clientHeight } = timelineRef.current;
        const scrollPercentage =
          newPosition / (maxHeight - (draggerRef.current?.offsetHeight || 0));
        timelineRef.current.scrollTo({
          top: scrollPercentage * (scrollHeight - clientHeight),
          behavior: "auto",
        });
      }
    },
    [maxHeight]
  );

  // Handle drag start
  const handleDragStart = useCallback(() => setDragging(true), []);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setDragging(false);
    // Snap to nearest timeline item
    const snappedPosition = Math.round(position / itemHeight) * itemHeight;
    setPosition(snappedPosition);
    syncTimelineWithScroller(snappedPosition);
  }, [position, itemHeight, syncTimelineWithScroller]);

  // Handle drag move
  const handleDragMove = useCallback(
    (e: MouseEvent) => {
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
    },
    [dragging, syncTimelineWithScroller]
  );

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
  }, [dragging, handleDragMove, handleDragEnd]);

  // Attach scroll synchronization
  useEffect(() => {
    const currentTimeline = timelineRef.current;
    currentTimeline?.addEventListener("scroll", syncScrollerWithTimeline);

    return () => {
      currentTimeline?.removeEventListener("scroll", syncScrollerWithTimeline);
    };
  }, [syncScrollerWithTimeline]);

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
