import React, { useState } from "react";
import CustomInputField from "./CustomInputField";
import CustomButton from "./CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function SignupForm() {
  const [msg, setMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(true);
  const [isPasswordLong, setIsPasswordLong] = useState(true);
  const [isUserNamePresent, setIsUserNamePresent] = useState(true);
  const [isEmailPresent, setIsEmailPresent] = useState(true);

  const navigate = useNavigate();

  const handleSignup = async () => {
    setMsg("");
    setIsPasswordSame(true);
    setIsPasswordLong(true);
    setIsUserNamePresent(true);
    setIsEmailPresent(true);
    if (
      password === confirmPassword &&
      password.length > 7 &&
      email.length > 4 &&
      firstName.length != 0 &&
      lastName.length != 0
    ) {
      try {
        const newUserCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(newUserCredentials.user, {
          displayName: `${firstName} ${lastName}`,
        });

        setMsg("Signup successful!");
        setIsPasswordSame(true);

        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (err) {
        setMsg(err.message);
      }
    } else if (firstName.length == 0 || lastName.length == 0) {
      setMsg("Username is required to create account.");
      setIsUserNamePresent(false);
    } else if (email.length < 5) {
      setIsEmailPresent(false);
      setMsg("Valid email is required.");
    } else if (password.length < 7) {
      setMsg("Minimun 8 character password is required.");
      setIsPasswordLong(false);
    } else if (password != confirmPassword) {
      setMsg("Passwords are not same.");
      setIsPasswordSame(false);
    } else {
      setMsg("Account not created.");
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex justify-between max-w-[500px] w-full gap-4">
          <CustomInputField
            inputType="name"
            title="First Name"
            width="w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            notError={isUserNamePresent}
          />
          <CustomInputField
            inputType="name"
            title="Last Name"
            width="w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            notError={isUserNamePresent}
          />
        </div>
        <CustomInputField
          inputType="email"
          title="Email"
          width="max-w-[500px] w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          notError={isEmailPresent}
        />
        <div className="flex justify-between max-w-[500px] w-full gap-4">
          <CustomInputField
            inputType="password"
            title="Password"
            width=" w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            notError={isPasswordSame && isPasswordLong}
          />
          <CustomInputField
            inputType="password"
            title="Confirm Password"
            width="w-full"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            notError={isPasswordSame && isPasswordLong}
          />
        </div>
        <div className="flex gap-2 ">
          <input type="checkbox" checked name="" id="" />{" "}
          <p>I agree to all the Terms and Privacy Policies</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <CustomButton
          style="bg-[#8DD3BB] max-w-[500px] w-full rounded-md"
          text="Signup"
          handleClick={handleSignup}
        />
        <p className={`text-xs`}>{msg}</p>
        <p className="text-center max-w-[500px] w-full">
          Already have an account?{" "}
          <Link className="text-[#FF8682] text-[14px]" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </>
  );
}
