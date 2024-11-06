import React from "react";
import Stays from "../constants/stays_options.json";
import { useParams } from "react-router-dom";
import { LocationIcon } from "../assets/icons";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import {
  DashekHotel,
  ShaftHotel,
  LookitHotel,
  BasketeHotel,
  HotelRoomsImg,
} from "../assets/images";

export default function StayDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const hotelDetails = Stays.stays[id];
  return (
    <>
      <div className="font-['Montserrat']">
        <div className="max-w-[1136px] w-[90vw] mx-auto mt-14 flex sm:flex-row flex-col justify-between sm:items-end flex-warp">
          <div className="flex flex-col items-start gap-6 w-fit">
            <h1 className="font-bold text-lg sm:text-[30px]">
              {hotelDetails.hotel}
            </h1>
            <div className="flex items-center gap-2">
              <img className="w-[16px] text-[14px]" src={LocationIcon} alt="" />
              <p>Street 3, {hotelDetails.destination}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-[40px] h-[30px] flex items-center justify-center border-[#8DD3BB] border-2 rounded-md">
                4.2
              </div>
              <div className="flex items-center w-fit">
                <p className="text-[12px]">
                  <span className="font-bold">Very Good </span> 54 reviews
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h1 className="text-[32px] text-[#FF8682] font-bold w-full sm:text-right">
              {hotelDetails.price}
              <span className="text-sm">/night</span>
            </h1>
            <CustomButton
              text="Book Now"
              style="w-[150px] bg-[#8DD3BB] rounded-md font-semibold"
              handleClick={() => navigate(`/stays/stay/booking/${id}`)}
            />
          </div>
        </div>
        <div className="max-w-[1136px] w-[90vw] my-14 mx-auto flex flex-wrap items-center justify-center gap-2">
          <img
            src={
              hotelDetails.hotel == "Dashek Hotel"
                ? DashekHotel
                : hotelDetails.hotel == "Shaft Hotel"
                ? ShaftHotel
                : hotelDetails.hotel == "Lookit Hotel"
                ? LookitHotel
                : BasketeHotel
            }
            alt=""
            className="sm:h-[500px]"
          />
          <img src={HotelRoomsImg} className="sm:h-[500px]" alt="" />
        </div>
        <hr />
        <div className="max-w-[1136px] w-[90vw] my-14 mx-auto">
          <h1 className="text-lg font-semibold">Overview</h1>
          <p>
            Located in Taksim Gmsuyu, the heart of Istanbul, the CVK Park
            Bosphorus Hotel Istanbul has risen from the ashes of the historic
            Park Hotel, which also served as Foreign Affairs Palace 120 years
            ago and is hosting its guests by assuming this hospitality mission.
            With its 452 luxurious rooms and suites, 8500 m2 SPA and fitness
            area, 18 meeting rooms including 4 dividable ones and 3 terraces
            with Bosphorus view, Istanbuls largest terrace with Bosphorus view
            (4500 m2) and latest technology infrastructure, CVK Park Bosphorus
            Hotel Istanbul is destined to be the popular attraction point of the
            city. Room and suite categories at various sizes with city and
            Bosphorus view, as well as 68 separate luxury suites, are offered to
            its special guests as a wide variety of selection.
          </p>
        </div>
      </div>
    </>
  );
}
