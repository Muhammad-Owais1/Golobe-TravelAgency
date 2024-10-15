import React from "react";
import { AuthImg, Logo } from "../assets/images";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="flex justify-between items-center gap-2 relative py-8 px-10 sm:px-28 font-['Montserrat'] bg-white h-screen">
        <div className="absolute top-8 left-28 sm:block hidden">
          <Link to="/">
            <Logo width="80" color="black" />
          </Link>
        </div>
        <div className="flex flex-col gap-10 lg:w-[500px] w-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between w-full">
              <h1 className="text-[40px] font-semibold">Login</h1>
              <div className="block sm:hidden">
                <Link to="/">
                  <Logo width="80" color="black" />
                </Link>
              </div>
            </div>
            <p className="text-[16px]">Login to access your Golobe Account</p>
          </div>

          <LoginForm />
        </div>
        <div className="lg:flex hidden justify-center items-center h-full aspect-[616/816] overflow-hidden">
          <img className="h-full" src={AuthImg} alt="" />
        </div>
      </div>
    </>
  );
}
