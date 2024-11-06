import React from "react";
import Flights from "../constants/flights_options.json";
import { useParams } from "react-router-dom";
import { LocationIcon } from "../assets/icons";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";
import {
  PlaneImg,
  PlaneFeaturesImg,
  PlaneFeatures,
  PlaneRouteImg,
} from "../assets/images";
import { ClockIcon } from "../assets/icons";

export default function FlightDetailsPage() {
  const navigate = useNavigate();

  const { id } = useParams();

  const flightDetails = Flights.flights[id];

  const flydubaiLogo =
    "https://logowik.com/content/uploads/images/flydubai7157.jpg";

  const emiratesLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png";

  const qatarairwaysLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbXmFgPpLIQHtjDUUhGD1CSb9u7xcPiAttw&s";

  const etihadLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4Nj-CViEXDbfigjzsRvX8tnrRnyuWpg2pg&s";

  return (
    <>
      <div className="font-['Montserrat']">
        <div className="max-w-[1136px] w-[90vw] mx-auto mt-14 flex sm:flex-row flex-col justify-between sm:items-end flex-warp">
          <div className="flex flex-col items-start gap-6 w-fit">
            <h1 className="font-bold text-lg sm:text-[30px]">
              {flightDetails.airline} A820
            </h1>
            <div className="flex items-center gap-2">
              <img className="w-[16px] text-[14px]" src={LocationIcon} alt="" />
              <p>{flightDetails.from} Airport</p>
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
              {flightDetails.price}
            </h1>
            <CustomButton
              text="Book Now"
              style="w-[150px] bg-[#8DD3BB] rounded-md font-semibold"
              handleClick={() => navigate(`/flights/flight/booking/${id}`)}
            />
          </div>
        </div>

        <div className="max-w-[1136px] w-[90vw] mx-auto mt-12">
          <img src={PlaneImg} alt="" />
          <p className="font-semibold text-lg sm:text-[32px] py-3 sm:py-12">
            Basic economic feature
          </p>
          <img src={PlaneFeaturesImg} alt="" />
        </div>

        <div className="max-w-[1136px] w-[90vw] mx-auto mt-12 p-4 bg-[#8DD3BB] rounded-md">
          <p className="font-semibold text-lg sm:text-[32px] mb-4">
            {flightDetails.airline} Policies
          </p>
          <div className="flex justify-between flex-wrap gap-2">
            <div className="flex items-center gap-6">
              <img src={ClockIcon} className="w-[20px] h-[22px]" alt="" />
              <p className="text-sm sm:text-[18px]">
                Pre-flight cleaning, installation of cabin HEPA filters.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <img src={ClockIcon} className="w-[20px] h-[22px]" alt="" />
              <p className="text-sm sm:text-[18px]">
                Pre-flight health screening questions
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 max-w-[1136px] w-[90vw] mx-auto mt-12 px-5 py-8 bg-white rounded-md">
          <div className="flex flex-wrap justify-between items-center">
            <h1 className="font-semibold text-lg sm:text-[32px]">
              Return {flightDetails.date}
            </h1>
            <p className="text-sm sm:text-[18px]">{flightDetails.duration}</p>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="flex w-fit border-[1px] border-gray-300 rounded-md overflow-hidden">
              <img
                className="bg-black w-[50px] sm:w-[100px]"
                src={
                  flightDetails.airline === "Emirates"
                    ? emiratesLogo
                    : flightDetails.airline === "Fly Dubai"
                    ? flydubaiLogo
                    : flightDetails.airline === "Etihad"
                    ? etihadLogo
                    : qatarairwaysLogo
                }
                alt=""
              />
              <div className="py-3 px-5">
                <p className="text-lg sm:text-[24px] font-semibold">
                  {flightDetails.airline}
                </p>
                <p className="text-sm">Airbus A820</p>
              </div>
            </div>

            <div>
              <img className="w-[360px]" src={PlaneFeatures} alt="" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <p className="text-lg sm:text-[24px] font-semibold">
                {flightDetails.start_time} PM
              </p>
              <p className="text-sm">{flightDetails.from}</p>
            </div>
            <img className="h-[15px] sm:h-[48px]" src={PlaneRouteImg} alt="" />
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <p className="text-lg sm:text-[24px] font-semibold">
                {flightDetails.landing_time} PM
              </p>
              <p className="text-sm">{flightDetails.to}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
