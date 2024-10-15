import React, { useState } from "react";
import { Bed, Plane } from "../assets/icons";
import FlightsField from "./FlightsField";
import StaysField from "./StaysField";
import { useLocation } from "react-router-dom";

export default function FilterBox() {
  const location = useLocation();

  if (location.pathname == "/") {
    return (
      <div className="bg-white font-['Montserrat'] relative z-50 left-[50%] -translate-x-[50%] -translate-y-[10vw] rounded-2xl flex flex-col justify-center items-center gap-4 max-w-[1136px] w-[90vw] px-[32px] shadow-2xl shadow-[#8DD3BB] py-4 overflow-hidden">
        <Options />
      </div>
    );
  } else if (location.pathname == "/flights") {
    return (
      <div className="bg-white font-['Montserrat'] relative z-50 left-[50%] -translate-x-[50%] -translate-y-[10vw] rounded-2xl flex flex-col justify-center items-center gap-4 max-w-[1136px] w-[90vw] px-[32px] shadow-2xl shadow-[#8DD3BB] py-4 overflow-hidden">
        <h2 className="text-[20px] font-semibold text-left w-full">
          Where are you flying?
        </h2>
        <FlightsField />
      </div>
    );
  } else if (location.pathname == "/stays") {
    return (
      <div className="bg-white font-['Montserrat'] relative z-50 left-[50%] -translate-x-[50%] -translate-y-[10vw] rounded-2xl flex flex-col justify-center items-center gap-4 max-w-[1136px] w-[90vw] px-[32px] shadow-2xl shadow-[#8DD3BB] py-4 overflow-hidden">
        <h2 className="text-[20px] font-semibold text-left w-full">
          Where are you staying?
        </h2>
        <StaysField />
      </div>
    );
  }
}

const Options = () => {
  const [isFligth, setIsFlight] = useState(true);

  const handleSwitch = (condition) => {
    if (condition == "Stays") {
      setIsFlight(false);
    } else if (condition == "Flights") {
      setIsFlight(true);
    }
  };

  return (
    <>
      <div className="flex justify-start w-full">
        <div className="flex justify-between w-[242px]">
          <button
            className={`w-[94px] h-20 flex items-center justify-center gap-3 box-content font-semibold ${
              isFligth && "border-b-[5px] border-[#8DD3BB]"
            }`}
            onClick={(condition) => handleSwitch("Flights")}
          >
            <Plane color="black" />
            Flights
          </button>
          <button
            className={`w-[94px] h-20 flex gap-3 items-center justify-center box-content font-semibold ${
              !isFligth && "border-b-[5px] border-[#8DD3BB]"
            }`}
            onClick={(condition) => handleSwitch("Stays")}
          >
            <Bed color="black" />
            Stays
          </button>
        </div>
      </div>
      {isFligth ? <FlightsField /> : <StaysField />}
    </>
  );
};
