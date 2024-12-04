'use client'

import React, { useState, useRef, useEffect } from 'react';
import Timelines from './Timelines';

const DraggableTimeline: React.FC = () => {
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0); // Position of the scroller
  const timelineRef = useRef<HTMLDivElement>(null);
  const draggerRef = useRef<HTMLDivElement>(null);

  // Synchronize the scroller with the timeline scroll
  const syncScrollerWithTimeline = () => {
    if (timelineRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = timelineRef.current;
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const lineHeight = timelineRef.current.offsetHeight;
      const draggerHeight = draggerRef.current?.offsetHeight || 0;

      setPosition(scrollPercentage * (lineHeight - draggerHeight));
    }
  };

  // Synchronize the timeline with the scroller drag
  const syncTimelineWithScroller = (newPosition: number) => {
    if (timelineRef.current) {
      const { scrollHeight, clientHeight } = timelineRef.current;
      const scrollPercentage = newPosition / (timelineRef.current.offsetHeight - (draggerRef.current?.offsetHeight || 0));
      timelineRef.current.scrollTo({
        top: scrollPercentage * (scrollHeight - clientHeight),
        behavior: 'auto',
      });
    }
  };

  // Handle drag start
  const handleDragStart = () => {
    setDragging(true);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setDragging(false);
  };

  // Handle drag move
  const handleDragMove = (e: MouseEvent) => {
    if (dragging && timelineRef.current) {
      const lineHeight = timelineRef.current.offsetHeight;
      const draggerHeight = draggerRef.current?.offsetHeight || 0;
      const newPos = Math.min(
        Math.max(0, e.clientY - timelineRef.current.getBoundingClientRect().top),
        lineHeight - draggerHeight
      );
      setPosition(newPos);
      syncTimelineWithScroller(newPos);
    }
  };

  // Event listeners for drag and scroll
  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
    } else {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [dragging]);

  // Attach scroll event listener to synchronize scroller with timeline scroll
  useEffect(() => {
    const currentTimeline = timelineRef.current;
    currentTimeline?.addEventListener('scroll', syncScrollerWithTimeline);

    return () => {
      currentTimeline?.removeEventListener('scroll', syncScrollerWithTimeline);
    };
  }, []);

  return (
    <div className="relative w-[379px] flex justify-between">
      <div className="flex gap-4">
        {/* Vertical Line */}
        <div
          ref={timelineRef}
          className="relative w-[2px] bg-custom-gradient min-h-screen"
          style={{ position: 'relative', height: '100%' }}
        >
          {/* Draggable Scroller */}
          <div
            ref={draggerRef}
            className="w-[16px] h-[16px] bg-[#969696] border border-[#FFFFFF] rounded-full absolute"
            style={{
              top: position, // Position of the scroller
              left: '-7px', // Slightly offset to align with the line
              cursor: 'pointer',
            }}
            onMouseDown={handleDragStart}
          />
        </div>

        {/* Scrollable Timeline Section */}
        <div
          ref={timelineRef}
          className="w-[379px] flex flex-col gap-5 overflow-y-auto overflow-x-hidden"
          style={{ height: '100vh' }} // Restrict height to viewport
        >
          {/* Timeline Items */}
          <Timelines position={position} />
        </div>
      </div>
    </div>
  );
};

export default DraggableTimeline;
