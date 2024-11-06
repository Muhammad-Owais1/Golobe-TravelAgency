import React from "react";
import FlightsField from "../components/FlightsField";
import Flights from "../constants/flights_options.json";
import CustomButton from "../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";

export default function FlightsListPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const routeQuery = new URLSearchParams(location.search)
    .get("route")
    .replace(/,/g, ", ")
    .replace(/_/g, " - ");

  // Define airline logos
  const flydubaiLogo =
    "https://logowik.com/content/uploads/images/flydubai7157.jpg";

  const emiratesLogo =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/850px-Emirates_logo.svg.png";

  const qatarairwaysLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUbXmFgPpLIQHtjDUUhGD1CSb9u7xcPiAttw&s";

  const etihadLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo4Nj-CViEXDbfigjzsRvX8tnrRnyuWpg2pg&s";

  // Map to create a new array with index
  const flightsWithIndex = Flights.flights.map((item, index) => ({
    ...item,
    index, // Add the index to each flight item
  }));

  return (
    <>
      <div className="font-['Montserrat']">
        <div className="max-w-[1136px] w-[90vw] mx-[auto] my-9 p-8 bg-white rounded-md">
          <FlightsField />
        </div>
        <div>
          {flightsWithIndex
            .filter((item) => `${item.from} - ${item.to}` === routeQuery)
            .map((item) => (
              <div
                className="max-w-[1136px] w-[90vw] mx-[auto] my-9 p-9 bg-white rounded-md flex gap-3 items-start justify-between flex-wrap"
                key={item.index} // Use the index as the key
              >
                <div className="flex items-center justify-center h-[50px] w-[50px] sm:h-[160px] sm:w-[160px] border-black border-2 overflow-hidden">
                  <img
                    src={
                      item.airline === "Emirates"
                        ? emiratesLogo
                        : item.airline === "Fly Dubai"
                        ? flydubaiLogo
                        : item.airline === "Etihad"
                        ? etihadLogo
                        : qatarairwaysLogo
                    }
                    alt=""
                    className="w-full"
                  />
                </div>
                <div className="w-full pl-0 sm:pl-9 flex flex-col gap-8">
                  <div className="flex flex-col sm:flex-row justify-between w-full">
                    <div className="flex flex-col justify-center items-start gap-4">
                      <div className="sm:flex items-center justify-center gap-2 hidden">
                        <div className="w-[40px] h-[30px] flex items-center justify-center border-[#8DD3BB] border-2 rounded-md">
                          4.2
                        </div>
                        <div className="flex items-center">
                          <p className="text-[12px]">
                            <span className="font-bold">Very Good </span> 54
                            reviews
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start flex-wrap gap-2">
                        <div className="w-[40px] h-[30px] hidden sm:flex items-center justify-center border-[#8DD3BB] border-[1px] ">
                          ✔
                        </div>
                        <p className="font-semibold text-[15px] sm:text-[20px]">
                          {item.from} - {item.to}
                        </p>
                        <p className="text-xs">
                          <span className="font-semibold">Date </span>{" "}
                          {item.date}
                        </p>
                      </div>
                      <div className="flex items-center justify-start flex-warp gap-2">
                        <div className="w-[40px] h-[30px] hidden sm:flex items-center justify-center border-[#8DD3BB] border-[1px] ">
                          ✔
                        </div>
                        <p className="font-semibold text-[15px] sm:text-[20px]">
                          {item.start_time} - {item.landing_time}
                        </p>
                        <p className="text-xs">
                          <span className="font-semibold">Duration </span>{" "}
                          {item.duration}
                        </p>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row sm:items-end gap-2 items-center">
                      <p className="text-xs">starting from</p>
                      <h2 className="font-bold text-[#FF8682] text-[25px] text-right">
                        {item.price}
                      </h2>
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-4">
                    <hr />
                    <CustomButton
                      text="View Deals"
                      style="bg-[#8DD3BB] rounded-md w-full"
                      handleClick={() =>
                        navigate(`/flights/flight/${item.index}`)
                      } // Use the index for navigation
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
