import React, { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import CustomButton from "./CustomButton";
import { getAuth, updateEmail, verifyBeforeUpdateEmail } from "firebase/auth";
import CustomModal from "./CustomModal";
import CustomInputField from "./CustomInputField";
import { ChangeIcon } from "../assets/icons";
import { auth } from "../firebase/firebase";

export default function EditEmail() {
  const { user, setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  const editEmail = async () => {
    if (email != "") {
      // const auth = getAuth();
      try {
        await verifyBeforeUpdateEmail(auth.currentUser, email);
        await updateEmail(auth.currentUser, email);
        const updatedUser = auth.currentUser;
        setUser({ ...updatedUser });
      } catch (error) {
        console.log(error);
      }
      setIsModalActive(false);
      console.log(auth.currentUser);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="h-[52px] flex flex-col  justify-between">
          <h1 className="text-[14px]">Email</h1>
          <h1 className="text-[16px] sm:text-[20px] font-semibold">
            {user?.email}
          </h1>
        </div>
        <CustomButton
          text="Change"
          style="w-[100px] sm:w-[140px] border-[1px] border-[#8DD3BB]"
          icon={ChangeIcon}
          handleClick={() => setIsModalActive(true)}
        />
      </div>
      {isModalActive && (
        <CustomModal>
          <h1 className="font-semibold text-[20px]">Edit your email.</h1>
          <CustomInputField
            title="New Email"
            notError={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex gap-2">
            <CustomButton
              text="Save"
              style="w-full bg-[#8DD3BB] font-semibold"
              handleClick={editEmail}
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
