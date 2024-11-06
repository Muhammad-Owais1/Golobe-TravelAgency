import React, { useContext } from "react";
import Stays from "../constants/stays_options.json";
import { useParams, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import {
  DashekHotel,
  ShaftHotel,
  LookitHotel,
  BasketeHotel,
} from "../assets/images";
import { AuthContext } from "../context/context";
import { useState } from "react";
import CustomModal from "../components/CustomModal";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

export default function StayBookingPage() {
  const { id } = useParams();

  const staysDetails = Stays.stays[id];

  const { user, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  const [isModalActive, setIsModalActive] = useState(false);

  const handleBooking = () => {
    if (!user) {
      navigate("/auth/login");
    } else {
      setIsModalActive(true);
    }
  };

  const confirmBooking = async () => {
    const bookingDetails = {
      userId: user.uid, // Use user's ID
      stayId: id, // ID of the stay
    };

    try {
      // Reference to the 'bookings' collection in Firestore
      const bookingsCollection = collection(db, "bookings");
      // Add a new document with the booking details
      await addDoc(bookingsCollection, bookingDetails);
      console.log("Booking confirmed:", bookingDetails);
      navigate("/booking-success"); // Navigate after booking is confirmed
    } catch (error) {
      console.error("Error booking stay: ", error);
      // You can handle the error further (like showing a notification)
    }
  };

  return (
    <>
      {isModalActive && (
        <CustomModal>
          <h1 className="font-semibold text-[20px]">Confirm Booking</h1>

          <div className="flex gap-2">
            <CustomButton
              text="Yes"
              style="w-full bg-[#8DD3BB] font-semibold"
              handleClick={confirmBooking}
            />
            <CustomButton
              text="No"
              style="w-full border-[#8DD3BB] border-[1px] font-semibold"
              handleClick={() => setIsModalActive(false)}
            />
          </div>
        </CustomModal>
      )}
      <div className="font-['Montserrat']">
        <div className="flex lg:flex-row flex-col-reverse gap-4 w-max-[1136px] w-[90vw] mx-auto">
          <div className="flex flex-col gap-6 h-fit mx-auto mt-12 px-5 py-8 bg-white rounded-md">
            <div className="flex justify-between gap-10">
              <h1 className="font-semibold text-lg sm:text-[32px]">
                Superior room - 1 double bed or 2 twin beds
              </h1>
              <h1 className="text-[32px] text-[#FF8682] font-bold  sm:text-right whitespace-nowrap">
                {staysDetails.price}
                <span className="text-sm">/night</span>
              </h1>
            </div>
            <div className=" rounded-md border-[1px] border-black p-4">
              <h1 className="font-semibold text-lg sm:text-[32px]">
                {staysDetails.hotel}
              </h1>
              <p>Street 3, {staysDetails.destination}</p>
            </div>
          </div>

          <div className="px-5 py-8 flex flex-col gap-3 mt-12 bg-white rounded-md">
            <div className="flex items-center justify-center gap-3">
              <div className="w-[100px] h-[100px] flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  className="h-full"
                  src={
                    staysDetails.hotel == "Dashked Hotel"
                      ? DashekHotel
                      : staysDetails.hotel == "Shaft Hotel"
                      ? ShaftHotel
                      : staysDetails.hotel == "Lookit Hotel"
                      ? LookitHotel
                      : BasketeHotel
                  }
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm">{staysDetails.hotel}</p>
                <p className="text-lg font-semibold">
                  Superior room - 1 double bed or 2 twin beds
                </p>
              </div>
            </div>
            <hr />
            <div className="flex flex-col gap-2">
              <h1 className="text-lg font-semibold">Price Details</h1>
              <div className="flex justify-between">
                <p className="text-base font-semibold">Base Price</p>
                <p>{staysDetails.price}</p>
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
              <p>{staysDetails.price}</p>
            </div>
            <hr />
            <CustomButton
              text="Confirm Booking"
              style="bg-[#8DD3BB] rounded-md"
              handleClick={handleBooking}
            />
          </div>
        </div>
      </div>
    </>
  );
}
