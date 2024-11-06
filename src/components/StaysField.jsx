import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import { PaperPlane } from "../assets/icons";
import { validateDates } from "../helper/flightDateValidation";
import { useLocation, useNavigate } from "react-router-dom";
import Destinations from "../constants/destinations.json";

export default function StaysField() {
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [startMonth, setStartMonth] = useState("May");
  const [endMonth, setEndMonth] = useState("May");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const [destination, setDestination] = useState("Select Destination");
  const [date, setDate] = useState("");

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

      const newURL = `/stays/stays_list?destination=${destination.replace(
        /\s+/g,
        ""
      )}&startdate=${newStartDate}&enddate=${newEndDate}`;

      navigate(newURL);
    }
  };

  const months = ["May", "Jun", "Jul"];

  const destinationQuery = new URLSearchParams(location.search).get(
    "destination"
  );
  const startDateQuery = new URLSearchParams(location.search).get("startdate");
  const endDateQuery = new URLSearchParams(location.search).get("enddate");

  useEffect(() => {
    if (destinationQuery) {
      setDestination(destinationQuery);
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
  }, [destinationQuery, startDateQuery, endDateQuery]);

  return (
    <>
      <div className="font-['Montserrat'] w-full flex justify-start gap-3 overflow-scroll py-1">
        <div className="relative">
          <select
            name=""
            id=""
            className="h-[56px] w-[300px] bg-transparent border-2 border-gray-500 rounded-md px-4 text-sm"
            onChange={(e) => setDestination(e.target.value)}
            value={destination}
          >
            <option>{destination.replace(/,\s*/g, ", ")}</option>
            {Destinations.destinations.map((item, index) => (
              <option key={index} className="font-['Montserrat']" value={item}>
                {item}
              </option>
            ))}
          </select>
          <p className="text-[14px] bg-white px-2 absolute -top-2 left-2">
            Enter Destination
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
            Check In - Check Out
          </p>
        </div>

        {location.pathname === "/stays/stays_list" && (
          <div className="h-full pt-1">
            <CustomButton
              style="w-[60px] bg-[#8DD3BB] rounded-md"
              icon={PaperPlane}
              handleClick={handleFilter}
            />
          </div>
        )}
      </div>
      {location.pathname === "/stays" && (
        <CustomButton
          style="w-full bg-[#8DD3BB] rounded-md"
          text="Show Places"
          icon={PaperPlane}
          handleClick={handleFilter}
        />
      )}
      {location.pathname === "/" && (
        <CustomButton
          style="w-full bg-[#8DD3BB] rounded-md"
          text="Show Places"
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
