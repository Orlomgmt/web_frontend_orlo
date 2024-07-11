import React, { useState } from "react";
import bgHalfLogo from "../images/ORLO EMB LOGO PNG.png";
import bubble from "../images/bubbles-22491 1.png";
import orloLOgo from "../images/Frame 1000003446.png";
import Signup from "../components/Signup";
import Signin from "../components/Signin"; // Assuming you have a Signin component
import CustomButton from "../components/Button";
import CustomInput from "../components/CustomInput";
import PasswordChecker from "../components/PasswordChecker";

const Onboarding = () => {
  const [view, setView] = useState("signup"); // 'signup', 'signin', 'forgot'

  return (
    <div className="w-full flex select-none">
      <div className="w-[95%] mx-auto flex relative items-center my-auto flex-row h-[1000px] justify-between">
        <div className=" w-[676px] h-[960px]  flex flex-col pt-32 items-center rounded-2xl gap-5 bg-custom-gradient ">
          <h1 className=" text-white text-[32px] font-[350px] leading-0 font-Avenir">
            Welcome to
          </h1>
          <img src={orloLOgo} alt="orloLOgo" />
        </div>
        <img
          src={bgHalfLogo}
          alt="bgLogo"
          className="absolute -bottom-1 w-[750px]"
        />
        <img
          src={bubble}
          alt="bgLogo"
          className="absolute w-[1062px] h-[1062px] -z-10 -left-32"
        />
        <img
          src={bubble}
          alt="bgLogo"
          className="absolute w-[800px] h-[900px] -top-44 -z-10 -left-60"
        />
        <div className="justify-center items-center flex flex-col w-[50%] mx-auto">
          {view !== "forgot" && (
            <div className="flex flex-row w-[358px] h-[45px] items-center rounded-3xl bg-lghtBlueBg mb-10 max-w-base">
              <CustomButton
                color={view === "signup" ? "blue" : "none"}
                size="small"
                active={true}
                loading={false}
                disabled={false}
                onClick={() => setView("signup")}
              >
                Sign Up
              </CustomButton>
              <CustomButton
                color={view === "signin" ? "blue" : "none"}
                size="small"
                active={true}
                loading={false}
                disabled={false}
                onClick={() => setView("signin")}
              >
                Sign In
              </CustomButton>
            </div>
          )}

          {view === "signup" && <Signup />}
          {view === "signin" && <Signin setView={setView} />}
          {view === "forgot" && <ForgotPassword />}
        </div>
      </div>
    </div>
  );
};

const ForgotPassword = () => {
  return (
    <form className="w-full flex flex-col items-center">
      <h2 className=" font-extrabold text-[32px] mb-4">Reset Password</h2>
      <CustomInput
        type="email"
        value={""}
        onChange={() => {}}
        placeholder=""
        label="Email Id"
        required={true}
        error={""}
      />

      <PasswordChecker name={"john"} email={"john@1234567"} label="Password" />

      <CustomButton
        color="blue"
        size="medium"
        active={true}
        loading={false}
        disabled={false}
      >
        Reset
      </CustomButton>

      {/* Add your Forgot Password form here */}
    </form>
  );
};

export default Onboarding;
