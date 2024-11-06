import React, { useState, useContext } from "react";
import CustomModal from "./CustomModal";
import CustomButton from "./CustomButton";
import { AuthContext } from "../context/context";
import { ChangeIcon } from "../assets/icons";
import { storage } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";

export default function EditProfileImg() {
  const { user, setUser } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [isModalActive, setIsModalActive] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const editIcon = async () => {
    if (file) {
      setIsUploading(true);

      try {
        const storageRef = ref(
          storage,
          `profileImages/${user.uid}/${file.name}`
        );

        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        await updateProfile(user, {
          photoURL: downloadURL,
        });

        setUser({ ...user, photoURL: downloadURL });
        setIsModalActive(false);
      } catch (error) {
        console.error("Error updating profile image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <div className="h-[52px] flex flex-col justify-between">
          <h1 className="text-[14px]">Profile Image</h1>
          <div className="h-[30px] w-[30px] overflow-hidden rounded-full bg-black flex items-center justify-center">
            {user?.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-[30px]" />
            ) : (
              <img
                className="w-[30px]"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              />
            )}
          </div>
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
          <h1 className="font-semibold text-[20px]">Edit your profile.</h1>

          {/* Image preview if file is selected */}
          <div className="w-full aspect-square border-[2px] border-[#8DD3BB] border-dashed rounded-full overflow-hidden">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <p className="flex items-center justify-center h-full text-[#8DD3BB]">
                No Image Selected
              </p>
            )}
          </div>

          {/* Hidden file input */}
          <input
            type="file"
            className="hidden"
            id="profile-img-input"
            accept="image/*"
            onChange={handleFileChange}
          />
          <label
            className="w-full border-[#8DD3BB] border-[1px] font-semibold flex items-center justify-center gap-2 h-[48px] text-[14px]"
            htmlFor="profile-img-input"
          >
            Select
          </label>

          <div className="flex gap-2">
            {/* Save button */}
            <CustomButton
              text={isUploading ? "Saving..." : "Save"}
              style={`w-full bg-[#8DD3BB] font-semibold ${
                isUploading ? "opacity-50" : ""
              }`}
              handleClick={editIcon}
              disabled={isUploading}
            />

            {/* Discard button */}
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
