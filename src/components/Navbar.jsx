import React, { useEffect, useState, useContext } from "react";
import { Plane, Bed } from "../assets/icons";
import { Logo } from "../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useLocation, Link, NavLink } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { AuthContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const [iconColor, setIconColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [buttonStyle, setButtonStyle] = useState("");
  const [navStyle, setNavStyle] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setIconColor("white");
      setTextColor("text-white");
      setButtonStyle("text-black bg-white");
      setNavStyle("mt-[30px] bg-transparent");
    } else {
      setIconColor("black");
      setTextColor("text-black");
      setButtonStyle("text-white bg-black");
      setNavStyle("mt-0 bg-white");
    }
  }, [location.pathname]);

  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    if (navOpen) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  const { user, loading } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth);
    navigate("/");
  };

  return (
    <>
      <nav
        className={`${navStyle} hidden md:flex justify-between items-center h-[90px] px-[104px] font-['Montserrat'] font-semibold text-[14px] ${textColor}`}
      >
        <div className="flex justify-between w-[242px]">
          <NavLink
            to="/flights"
            className={({ isActive }) =>
              `flex gap-1 py-8 ${
                isActive ? "border-b-[5px] border-[#8DD3BB]" : ""
              }`
            }
          >
            <Plane color={iconColor} />
            Find Flight
          </NavLink>
          <NavLink
            to="/stays"
            className={({ isActive }) =>
              `flex gap-1 py-8 ${
                isActive ? "border-b-[5px] border-[#8DD3BB]" : ""
              }`
            }
          >
            <Bed color={iconColor} />
            Find Stays
          </NavLink>
        </div>
        <Link to="/">
          <Logo color={iconColor} />
        </Link>

        {!user ? (
          <>
            <div className="flex justify-between w-[177px]">
              <Link
                to="/auth/login"
                className="flex items-center justify-center"
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className={`${buttonStyle} h-[48px] w-[104px] rounded-lg flex items-center justify-center`}
              >
                Sign up
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between gap-2">
              <Link
                className="flex items-center justify-center gap-2"
                to="/account"
              >
                <div className="flex items-center justify-center aspect-square overflow-hidden w-[30px] rounded-full bg-black">
                  <img src={user.photoURL} alt="" />
                </div>
                <p className="capitalize whitespace-nowrap">
                  {user.displayName}
                </p>
              </Link>
              <button
                onClick={handleLogout}
                className={`${buttonStyle} h-[48px] w-[104px] rounded-lg flex items-center justify-center`}
              >
                Logout
              </button>
            </div>
          </>
        )}
      </nav>

      <div className="h-[96px] block md:hidden">
        <nav
          className={`w-full flex flex-col gap-10  items-center py-[30px] md:hidden bg-white transition-all absolute z-[90] ${
            navOpen ? "h-[248px]" : "h-[96px]"
          }`}
        >
          <div className="flex items-center justify-between">
            <Link to="/">
              <Logo color="black" />
            </Link>
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
              <Link to="/fights" className="flex gap-1">
                <Plane color="black" />
                Find Flight
              </Link>
              <Link to="stays" className="flex gap-1">
                <Bed color="black" />
                Find Stays
              </Link>
            </div>

            {!user ? (
              <>
                <div className="flex justify-between w-[177px]">
                  <Link
                    className="flex items-center justify-center"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                  <Link
                    to="/auth/signup"
                    className={`text-white bg-black h-[48px] w-[104px] rounded-lg flex items-center justify-center`}
                  >
                    Sign up
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between gap-2">
                  <Link
                    className="flex items-center justify-center gap-2"
                    to="/account"
                  >
                    {user?.photoURL ? (
                      <div className="flex items-center justify-center aspect-square overflow-hidden w-[30px] rounded-full bg-black">
                        <img src={user.photoURL} alt="" />
                      </div>
                    ) : (
                      <img
                        className="w-[30px]"
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                      />
                    )}

                    <p className="capitalize whitespace-nowrap">
                      {user.displayName}
                    </p>
                  </Link>
                  <button
                    className={`text-white bg-black h-[48px] w-[104px] rounded-lg flex items-center justify-center`}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
