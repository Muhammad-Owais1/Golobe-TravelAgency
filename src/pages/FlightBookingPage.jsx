import React from "react";
import Flights from "../constants/flights_options.json";
import { useParams } from "react-router-dom";
import { PlaneFeatures, PlaneRouteImg, PlaneImg } from "../assets/images";
import CustomButton from "../components/CustomButton";

export default function FlightBookingPage() {
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
        <div className="flex lg:flex-row flex-col-reverse gap-4 w-max-[1136px] w-[90vw] mx-auto">
          <div className="flex flex-col gap-6 h-fit mx-auto mt-12 px-5 py-8 bg-white rounded-md">
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
              <img
                className="h-[15px] sm:h-[48px]"
                src={PlaneRouteImg}
                alt=""
              />
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <p className="text-lg sm:text-[24px] font-semibold">
                  {flightDetails.landing_time} PM
                </p>
                <p className="text-sm">{flightDetails.to}</p>
              </div>
            </div>
          </div>
          <div className="px-5 py-8 flex flex-col gap-3 mt-12 bg-white rounded-md">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-lg">
                <img className="h-full" src={PlaneImg} alt="" />
              </div>
              <div>
                <p className="text-sm">Economy</p>
                <p className="text-lg font-semibold">
                  {flightDetails.airline} Airbus A820
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Price Details</h1>
              <div className="flex justify-between">
                <p className="text-base font-semibold">Base Price</p>
                <p>{flightDetails.price}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-semibold">Discount</p>
                <p>$000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-semibold">Taxes</p>
                <p>$000</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base font-semibold">Service Fee</p>
                <p>$000</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-base font-semibold">Total</p>
              <p>{flightDetails.price}</p>
            </div>
            <hr />
            <CustomButton
              text="Confirm Booking"
              style="bg-[#8DD3BB] rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
}
