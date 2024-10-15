import React, { useContext, useState } from "react";
import { ProfileCoverImg } from "../assets/images";
import { AuthContext } from "../context/context";
import AccountSection from "../components/AccountSection";
import CardSection from "../components/CardSection";
import TicketSection from "../components/TicketSection";

export default function AccountPage() {
  const { user } = useContext(AuthContext);

  const [activeSection, setActiveSection] = useState("account");

  return (
    <>
      <section className="pt-14 pb-52 relative font-['Montserrat']">
        <img
          className="max-w-[1136px] w-[90vw] h-[322px] mx-auto"
          src={ProfileCoverImg}
          alt=""
        />
        <div className="absolute left-[50%] translate-x-[-50%] top-[40%] flex flex-col items-center justify-center">
          <div className="w-52 aspect-square bg-black rounded-full flex items-center justify-center overflow-hidden"></div>
          <h1 className="text-[24px] font-semibold capitalize">
            {user?.displayName}.
          </h1>
          <p>{user?.email}</p>
        </div>
      </section>
      <section className="font-['Montserrat'] flex flex-col items-center justify-center gap-[16px]">
        <div className="flex items-center justify-center max-w-[1136px] w-[90vw] h-[80px] bg-white rounded-md font-semibold">
          <div
            onClick={() => setActiveSection("account")}
            className={`cursor-pointer w-full h-[80px] flex items-center justify-center box-border ${
              activeSection == "account"
                ? "border-b-4 border-[#8DD3BB] pb-0 "
                : "pb-[4px]"
            }`}
          >
            <div className={`w-full text-center `}>Account</div>
          </div>
          <div
            onClick={() => setActiveSection("tickets")}
            className={`cursor-pointer w-full h-[80px] flex items-center justify-center box-border ${
              activeSection == "tickets"
                ? "border-b-4 border-[#8DD3BB] pb-0 "
                : "pb-[4px]"
            }`}
          >
            <div
              className={`w-full text-center border-l-[1px] border-r-[1px] border-l-black border-r-black `}
            >
              Tickets/Bookings
            </div>
          </div>
          <div
            onClick={() => setActiveSection("card")}
            className={`cursor-pointer w-full h-[80px] flex items-center justify-center box-border ${
              activeSection == "card"
                ? "border-b-4 border-[#8DD3BB] pb-0 "
                : "pb-[4px]"
            }`}
          >
            <div className={`w-full text-center`}>Payment methods</div>
          </div>
        </div>
        {activeSection == "account" && <AccountSection />}
        {activeSection == "tickets" && <TicketSection />}
        {activeSection == "card" && <CardSection />}
      </section>
    </>
  );
}
