'use-client'
import React from "react";
// import IndiaLogo from "../../public/assets/countriesImg/India.svg";
import Image from "next/image";
import countries from "../countriesData";
console.log(countries.length);

const Map = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {countries.map((country, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2 min-h-[156.06px] min-w-[140px]">
          <p>{country.name}</p>
          <Image
            src={country.image.replace("../public", "")}
            alt="Country_Image"
            width={100}
            height={100}
            className="bg-transparent"
          />
          <p>{country.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Map;
