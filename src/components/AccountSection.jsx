import React, { useContext } from "react";
import { AuthContext } from "../context/context";
import CustomButton from "./CustomButton";
import { ChangeIcon } from "../assets/icons";
import EditName from "./EditName";
import EditPassword from "./EditPassword";
import EditEmail from "./EditEmail";
import EditProfileImg from "./EditProfileImg";

export default function AccountSection() {
  return (
    <>
      <h1 className="text-[32px] font-semibold text-start max-w-[1136px] w-[90vw]">
        Account
      </h1>
      <div className="flex flex-col items-center justify-center gap-[32px] max-w-[1136px] w-[90vw] bg-white rounded-lg py-[32px] px-[24px]">
        <EditName />
        <EditEmail />
        <EditPassword />
        <EditProfileImg />
      </div>
    </>
  );
}
