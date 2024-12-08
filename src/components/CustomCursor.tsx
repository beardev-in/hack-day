"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    // Handle mouse move
    const handleMouseMove = (event: MouseEvent): void => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    // Handle mouse enter
    const handleMouseEnter = (): void => setVisible(true);

    // Handle mouse leave
    const handleMouseLeave = (): void => setVisible(false);

    // Attach event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: visible ? 1 : 0,
      }}
      className="custom-cursor"
    />
  );
}
