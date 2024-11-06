import React from "react";
import StaysField from "../components/StaysField";
import Stays from "../constants/stays_options.json";
import CustomButton from "../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DashekHotel,
  ShaftHotel,
  LookitHotel,
  BasketeHotel,
  FiveStars,
} from "../assets/images";
import { LocationIcon } from "../assets/icons";

export default function StaysListPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const destinationQuery = new URLSearchParams(location.search)
    .get("destination")
    .replace(/,\s*/g, ", ");

  const staysWithIndex = Stays.stays.map((item, index) => ({
    ...item,
    index, // Add the index to each flight item
  }));
  return (
    <>
      <div className="font-['Montserrat']">
        <div className="max-w-[1136px] w-[90vw] mx-[auto] my-9 p-8 bg-white rounded-md">
          <StaysField />
        </div>

        <div>
          {staysWithIndex
            .filter((item) => item.destination === destinationQuery)
            .map((item) => (
              <div
                className="max-w-[1136px] w-[90vw] mx-[auto] my-9 bg-white rounded-2xl flex flex-col md:flex-row "
                key={item.index} // Use the index as the key
              >
                <img
                  src={
                    item.hotel == "Dashek Hotel"
                      ? DashekHotel
                      : item.hotel == "Shaft Hotel"
                      ? ShaftHotel
                      : item.hotel == "Lookit Hotel"
                      ? LookitHotel
                      : BasketeHotel
                  }
                  alt=""
                  className="w-[300px] hidden md:flex"
                />

                <div className="flex flex-col gap-4 w-full px-9 pt-9 pb-2">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <h1 className="font-semibold sm:text-[32px] text-lg">
                      {item.hotel}
                    </h1>
                    <div className="flex flex-col">
                      <p className="text-xs">starting from</p>
                      <h2 className="font-bold text-[#FF8682] text-[25px] ">
                        {item.price}
                        <span className="text-sm">/night</span>
                      </h2>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="h-[16px]" src={LocationIcon} alt="" />
                    <p className="text-sm sm:text-base">
                      Street 3, {item.destination}
                    </p>
                  </div>
                  <div className="w-fit">
                    <img src={FiveStars} className="h-[16px]" alt="" />
                  </div>
                  <div className="sm:flex items-center  gap-2 hidden">
                    <div className="w-[40px] h-[30px] flex items-center justify-center border-[#8DD3BB] border-2 rounded-md">
                      4.2
                    </div>
                    <div className="flex items-center">
                      <p className="text-[12px]">
                        <span className="font-bold">Very Good </span> 54 reviews
                      </p>
                    </div>
                  </div>
                  <hr />
                  <CustomButton
                    text="View Deals"
                    style="bg-[#8DD3BB] rounded-md w-full"
                    handleClick={() => navigate(`/stays/stay/${item.index}`)} // Use the index for navigation
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
