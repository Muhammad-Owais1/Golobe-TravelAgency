import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInputField from "./CustomInputField";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loginDone, setLoginDone] = useState(true);
  const [isEmailPresent, setIsEmailPresent] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setMsg("");
    setLoginDone(true);
    setIsEmailPresent(true);
    if (email.length != 0 && password.length != 0) {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoginDone(true);
        setMsg("User login successfully.");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        setLoginDone(false);
        if (error.message == "Firebase: Error (auth/invalid-email).") {
          setMsg("Wrong email or password.");
        } else {
          setMsg(error.message);
        }
      }
    } else if (email.length == 0) {
      setMsg("Please enter your email.");
      setIsEmailPresent(false);
    } else if (password.length == 0) {
      setMsg("Please enter your password");
      setLoginDone(false);
    } else {
      setMsg("Cannot login.");
      setLoginDone(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <CustomInputField
          inputType="email"
          title="Email"
          width="max-w-[500px] w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          notError={isEmailPresent}
        />
        <CustomInputField
          inputType="password"
          title="Password"
          width="max-w-[500px] w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          notError={loginDone}
        />
        <Link
          className="text-[#FF8682] text-[14px] w-fit"
          to="/auth/forgot-password"
        >
          Forgot Password
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <CustomButton
          style="bg-[#8DD3BB] max-w-[500px] w-full rounded-md"
          text="Login"
          handleClick={handleLogin}
        />
        <p className={`text-xs`}>{msg}</p>
        <p className="text-center max-w-[500px] w-full">
          Don’t have an account?{" "}
          <Link className="text-[#FF8682] text-[14px]" to="/auth/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
