import React, { useState, useContext } from "react";
import CustomButton from "./CustomButton";
import CustomModal from "./CustomModal";
import CustomInputField from "./CustomInputField";
import { ChangeIcon } from "../assets/icons";
import { AuthContext } from "../context/context";
import { auth } from "../firebase/firebase";
import { updatePassword } from "firebase/auth";

export default function EditPassword() {
  const { user, setUser } = useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  const editPassword = async () => {
    try {
      await updatePassword(auth.currentUser, password);
      const updatedUser = auth.currentUser;
      setUser({ ...updatedUser });
    } catch (error) {
      console.log(error.message);
    }
    setIsModalActive(false);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="h-[52px] flex flex-col  justify-between">
          <h1 className="text-[14px]">Password</h1>
          <h1 className="text-[16px] sm:text-[20px] font-semibold">
            **********
          </h1>
        </div>
        <CustomButton
          text="Change"
          style="w-[100px] sm:w-[140px] border-[1px] border-[#8DD3BB]"
          icon={ChangeIcon}
          handleClick={() => {
            setIsModalActive(true);
          }}
        />
      </div>
      {isModalActive && (
        <CustomModal>
          <h1 className="font-semibold text-[20px]">Edit your password.</h1>
          <CustomInputField
            title="New password"
            notError={true}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            inputType="password"
          />
          <div className="flex gap-2">
            <CustomButton
              text="Save"
              style="w-full bg-[#8DD3BB] font-semibold"
              handleClick={editPassword}
            />
            <CustomButton
              text="Discard"
              style="w-full border-[#8DD3BB] border-[1px] font-semibold"
              handleClick={() => setIsModalActive(false)}
            />
          </div>
        </CustomModal>
      )}
    </>
  );
}
