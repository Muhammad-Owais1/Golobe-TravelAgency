import React, { useState, useEffect } from "react";
import { SwapArrow } from "../assets/icons";
import TravelRoutes from "../constants/travel_routes.json";
import CustomButton from "./CustomButton";
import { PaperPlane } from "../assets/icons";
import { validateDates } from "../helper/flightDateValidation";
import { useNavigate, useLocation } from "react-router-dom";

export default function FlightsField() {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [startMonth, setStartMonth] = useState("May");
  const [endMonth, setEndMonth] = useState("May");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [route, setRoute] = useState("Select Route");
  const [date, setDate] = useState("");

  const URL = `/flights/flights_list?route=${route
    .replace(/\s+/g, "")
    .replace(/-/g, "_")}&date=${date}`;

  const handleFilter = () => {
    const { valid, error: validationError } = validateDates(
      startDay,
      startMonth,
      endDay,
      endMonth
    );
    if (!valid) {
      setError(validationError);
    } else {
      const newStartDate = `2024_${startMonth}_${startDay}`;
      const newEndDate = `2024_${endMonth}_${endDay}`;
      setDate(newStartDate);
      setError("");

      const newURL = `/flights/flights_list?route=${route
        .replace(/\s+/g, "")
        .replace(/-/g, "_")}&startdate=${newStartDate}&enddate=${newEndDate}`;

      navigate(newURL);
    }
  };

  // Only include May, June, and July
  const months = ["May", "Jun", "Jul"];

  // Retrieve query parameters from the URL
  const routeQuery = new URLSearchParams(location.search).get("route");
  const startDateQuery = new URLSearchParams(location.search).get("startdate");
  const endDateQuery = new URLSearchParams(location.search).get("enddate");

  useEffect(() => {
    // Set state from query parameters if available
    if (routeQuery) {
      const formattedRoute = routeQuery;
      setRoute(formattedRoute); // Update to set the route based on the query parameter
    }
    if (startDateQuery) {
      const [year, month, day] = startDateQuery.split("_");
      setStartMonth(month);
      setStartDay(day);
    }
    if (endDateQuery) {
      const [year, month, day] = endDateQuery.split("_");
      setEndMonth(month);
      setEndDay(day);
    }
  }, [routeQuery, startDateQuery, endDateQuery]);

  return (
    <>
      <div className="font-['Montserrat'] w-full flex justify-start gap-3 overflow-scroll py-1">
        <div className="relative">
          <select
            className="h-[56px] w-[300px] bg-transparent border-2 border-gray-500 rounded-md px-4 text-sm"
            onChange={(e) => setRoute(e.target.value)}
            value={route} // Set value to route state
          >
            <option>{route.replace(/,/g, ", ").replace(/_/g, " - ")}</option>
            {TravelRoutes.routes.map((item, index) => (
              <option
                key={index}
                className="font-['Montserrat']"
                value={`${item.from}_${item.to}`}
              >
                {`${item.from} - ${item.to}`}
              </option>
            ))}
          </select>
          <img
            src={SwapArrow}
            className="w-[16px] absolute top-[50%] -translate-y-[50%] bg-white right-4"
            alt=""
          />
          <p className="text-[14px] bg-white px-2 absolute -top-2 left-2">
            From - To
          </p>
        </div>

        <div className="relative">
          <div className="h-[56px] w-[200px] bg-transparent border-2 border-gray-500 rounded-md px-4 text-sm flex items-center">
            <input
              type="text"
              placeholder="01"
              className="outline-none h-4 w-6 text-center"
              value={startDay}
              onChange={(e) =>
                setStartDay(e.target.value.replace(/[^0-9]/g, "").slice(0, 2))
              }
            />
            <select
              className="w-8 text-sm px-0 border-none text-center"
              value={startMonth}
              onChange={(e) => setStartMonth(e.target.value)}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <p>24</p>
            <p className="pl-1">-</p>
            <input
              type="text"
              placeholder="01"
              className="outline-none h-4 w-6 text-center"
              value={endDay}
              onChange={(e) =>
                setEndDay(e.target.value.replace(/[^0-9]/g, "").slice(0, 2))
              }
            />
            <select
              className="w-8 text-sm px-0 border-none text-center"
              value={endMonth}
              onChange={(e) => setEndMonth(e.target.value)}
            >
              {months.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <p>24</p>
          </div>
          <p className="text-[14px] bg-white px-2 absolute -top-2 left-2">
            Depart- Return
          </p>
        </div>

        {location.pathname === "/flights/flights_list" && (
          <div className="h-full pt-1">
            <CustomButton
              style="w-[60px] bg-[#8DD3BB] rounded-md"
              icon={PaperPlane}
              handleClick={handleFilter}
            />
          </div>
        )}
      </div>
      {location.pathname === "/flights" && (
        <CustomButton
          style="w-full bg-[#8DD3BB] rounded-md"
          text="Show Flights"
          icon={PaperPlane}
          handleClick={handleFilter}
        />
      )}
      {location.pathname === "/" && (
        <CustomButton
          style="w-full bg-[#8DD3BB] rounded-md"
          text="Show Flights"
          icon={PaperPlane}
          handleClick={handleFilter}
        />
      )}
      {error && (
        <p className="text-left w-full text-xs text-red-500">{error}</p>
      )}
    </>
  );
}
