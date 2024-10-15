import React, { useContext, useState } from "react";
import { AuthContext } from "../context/context";
import CustomButton from "./CustomButton";
import { ChangeIcon } from "../assets/icons";
import { updateProfile } from "firebase/auth";
import CustomModal from "./CustomModal";
import CustomInputField from "./CustomInputField";
import { auth } from "../firebase/firebase";

export default function EditName() {
  const { user, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [isModalActive, setIsModalActive] = useState(false);

  console.log(auth.currentUser);
  const editName = async () => {
    if (username != "") {
      try {
        await updateProfile(auth.currentUser, { displayName: username });
        const updatedUser = auth.currentUser;
        setUser({ ...updatedUser });
      } catch (error) {
        console.log(error);
      }
      setIsModalActive(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="h-[52px] flex flex-col  justify-between">
          <h1 className="text-[14px]">Name</h1>
          <h1 className="text-[16px] sm:text-[20px] font-semibold">
            {user?.displayName}
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
          <h1 className="font-semibold text-[20px]">Edit your name.</h1>
          <CustomInputField
            title="New Name"
            notError={true}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="flex gap-2">
            <CustomButton
              text="Save"
              style="w-full bg-[#8DD3BB] font-semibold"
              handleClick={editName}
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
