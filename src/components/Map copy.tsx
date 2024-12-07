'use-client'
import React from "react";
import Image from "next/image";
import countries from "../countriesData";
console.log(countries.length);

const Map = () => {
  return (
    <div className="w-full flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6">
      {countries.map((country, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-2 min-h-[156.06px] min-w-[140px] sm:min-w-[120px] lg:min-w-[160px] xl:min-w-[180px]"
        >
          <p className="text-[14px] sm:text-[16px]">{country.name}</p>
          <Image
            src={country.image.replace("../public", "")}
            alt="Country_Image"
            width={100}
            height={100}
            className="bg-transparent"
          />
          <p className="text-[12px] sm:text-[14px]">{country.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
