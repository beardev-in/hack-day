'use client'
import React from "react";
import Image from "next/image";
import countries from "../countriesData";
import { useDispatch } from 'react-redux'; // Import the useDispatch hook
import { setSelectedCountry } from '../app/redux/features/EventSlice'; // Import the action for selecting the country

const Map = () => {
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle the country click to set the selected country and smooth scroll to the timeline section
  const handleCountryClick = (countryName: string) => {
    dispatch(setSelectedCountry(countryName)); // Dispatch the action to update the selected country in the Redux store
    // Smooth scroll to the timeline section
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-wrap items-center justify-between">
      {countries.map((country, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2 min-h-[150px] min-w-[130px]">
          <p>{country.name}</p>
          {/* Wrap the image with a div and handle the click with the handleCountryClick function */}
          <div onClick={() => handleCountryClick(country.name)} style={{ cursor: 'pointer' }}>
            <Image
              src={country.image.replace("../public", "")}
              alt="Country_Image"
              width={100}
              height={100}
              className="bg-transparent"
            />
          </div>
          <p>{country.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
