import React, { useState } from "react";
import { Bed, Plane, SwapArrow, DropArrow, PaperPlane } from "../assets/icons";
import FilterField from "./FilterField";
import CustomButton from "./CustomButton";

export default function FilterBox() {
  return (
    <div className="bg-white font-['Montserrat'] relative z-50 left-[50%] -translate-x-[50%] -translate-y-20 rounded-2xl flex flex-col justify-center items-center gap-4 max-w-[1136px] px-[32px] shadow-2xl shadow-[#8DD3BB] py-4">
      <div className="flex justify-start w-full">
        <Options />
      </div>
      <div className="flex items-center justify-between">
        <FilterField
          type="DoubleDropDown"
          title="From - To"
          width="w-[296px]"
          icon={SwapArrow}
        />
        <FilterField
          type="SingleDropDown"
          title="Trip"
          width="w-[140px]"
          icon={DropArrow}
        />
        <FilterField
          type="DoubleInput"
          title="Depart- Return"
          width="w-[324px]"
          inputType="date"
        />
        <FilterField
          type="DoubleDropDown"
          title="Passenger - Class"
          width="w-[296px]"
        />
      </div>
      <div className="flex justify-end w-full gap-4">
        <CustomButton text="+ Add Promo Code" style="w-[144px]" />
        <CustomButton
          text="Show Flights"
          icon={PaperPlane}
          style="bg-[#8DD3BB] w-[144px] rounded-md"
        />
      </div>
    </div>
  );
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
  );
};
