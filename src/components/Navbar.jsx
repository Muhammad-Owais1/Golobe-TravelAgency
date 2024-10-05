import React, { useState } from "react";
import { Plane, Bed } from "../assets/icons";
import { Logo } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ iconColor, textColor, buttonStyle }) {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  return (
    <>
      <nav
        className={`mt-[30px] hidden md:flex justify-between items-center h-[90px] px-[104px] font-['Montserrat'] font-semibold text-[14px] ${textColor}`}
      >
        <div className="flex justify-between w-[242px]">
          <div className="flex gap-1">
            <Plane color={iconColor} />
            Find Flight
          </div>
          <div className="flex gap-1">
            <Bed color={iconColor} />
            Find Stays
          </div>
        </div>

        <Logo color={iconColor} />

        <div className="flex justify-between w-[177px]">
          <button>Login</button>
          <button className={`${buttonStyle} h-[48px] w-[104px] rounded-lg`}>
            Sign up
          </button>
        </div>
      </nav>

      <div className="h-[96px]">
        <nav
          className={`w-full flex flex-col gap-10  items-center py-[30px] md:hidden bg-white transition-all absolute z-10 ${
            navOpen ? "h-[248px]" : "h-[96px]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo color="black" />
            <button
              className="absolute right-[30px] flex items-center justify-center"
              onClick={handleNavToggle}
            >
              {navOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center overflow-hidden">
            <div className="flex justify-between w-[242px]">
              <div className="flex gap-1">
                <Plane color="black" />
                Find Flight
              </div>
              <div className="flex gap-1">
                <Bed color="black" />
                Find Stays
              </div>
            </div>

            <div className="flex justify-between w-[177px]">
              <button>Login</button>
              <button
                className={`text-white bg-black h-[48px] w-[104px] rounded-lg`}
              >
                Sign up
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
