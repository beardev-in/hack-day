'use client';

import { RootState } from "@/app/redux/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";  // Import useDispatch
import { setSelectedCity } from "@/app/redux/features/EventSlice"; // Import the action
import countries from "@/countriesData";
import Link from "next/link";

interface TimelinesProps {
  position: number; // Current vertical position of the scroller
}

const Timelines: React.FC<TimelinesProps> = ({ position }) => {
  const dispatch = useDispatch(); // Initialize dispatch
  // Get the selected country from the Redux store
  const { selectedCountry } = useSelector((state: RootState) => state.event);

  // Get the cities data for the selected country
  const countryData = selectedCountry
    ? countries.find((country) => country.name === selectedCountry)
    : null;

  // Default to empty if no country is selected
  if (!countryData) {
    return <p>Please select a country to view the timeline.</p>;
  }

  const itemHeight = 100; // Height of each timeline item (including gaps)

  // Highlight the timeline item only when the scroller aligns perfectly
  const highlightTimeline = (index: number) => {
    const itemTop = index * itemHeight;
    return Math.abs(position - itemTop) < itemHeight / 2; // Highlight if within half an item's height
  };

  // Function to handle city card click and dispatch the selected city to the store
  const handleCityClick = (cityName: string) => {
    dispatch(setSelectedCity(cityName)); // Dispatch the selected city name
    
  };

  return (
    <div className="relative select-none">
      {countryData.cities.map((city, index) => (
        <div
          key={index}
          className={`w-[332px] sm:w-[350px] lg:w-[380px] h-[86px] my-2 p-4 rounded-md ${
            highlightTimeline(index)
              ? "bg-custom-gradient border border-gray-800"
              : ""
          }`}
          onClick={() => handleCityClick(city.name)} // Add onClick handler
        >
          <div className="flex items-center gap-2">
            {/* City Name */}
            <h2
              className={`${
                highlightTimeline(index)
                  ? "opacity-100 text-xl text-[18px]"
                  : "opacity-50 text-[11px]"
              }`}
            >
              {city.name}
            </h2>
            {/* Icon for highlighting the event */}
            {highlightTimeline(index) ? (
              <Link
              key={index}
              href={`/hackathon/${city.name.toLowerCase()}`} // Dynamically generate the URL
              onClick={() => handleCityClick(city.name)} // Dispatch action on click
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-arrow-out-up-right"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </span>
              </Link>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#969696"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-square-arrow-out-up-right"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </span>
            )}
          </div>

          {/* Event Description */}
          <div className="flex flex-col items-start gap-">
            <p
              className={`${
                highlightTimeline(index)
                  ? "opacity-100 text-[18px] text-[#969696]"
                  : "opacity-50 text-[10px]"
              }`}
            >
              <strong>Event Name:</strong> {city.event.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timelines;
