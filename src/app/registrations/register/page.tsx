import Navbar from "@/components/Navbar";
import React from "react";

const Registerpage = () => {
  return (
    <div className="bg-corner-glow" style={{ height: "calc(100vh - 10px)" }}>
      <Navbar />
      <div className="w-full flex items-center justify-center font-mono">
        <div className="w-[613px] bg-custom-gradient p-5 rounded-xl mt-20 border border-gray-600">
          <div className="text-[26px]">
            <p>Welcome to Hack $Day</p>
            <p>
              Let’s begin the <span className="text-[#06C270]">Hacking</span>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Registerpage;
