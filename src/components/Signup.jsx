import React from "react";
import CustomButton from "./Button";
import CustomInput from "./CustomInput";
import PasswordChecker from "./PasswordChecker";
import GoogleIcon from "../images/icons/SSO Icon.svg";
import AppleIcon from "../images/icons/SSO Icon (1).svg";
import MicroftIcon from "../images/icons/ms-symbollockup_mssymbol_19 1.svg";

const Signup = () => {
  const userName = "JohnDoe";
  const userEmail = "john.doe@example.com";
  return (
    <div className=" flex-col flex gap-28  items-center ">
      <div className=" justify-center items-center relative ">
        <form className="w-full  max-w-xs">
          <CustomInput
            type="email"
            value={""}
            onChange={() => {}}
            placeholder=""
            label="Email Id"
            required={true}
            error={""}
          />
          <PasswordChecker name={userName} email={userEmail} label="Password" />

          <CustomButton
            color="blue"
            size="medium"
            active={true}
            loading={false}
            disabled={false}
          >
            Create Account
          </CustomButton>
        </form>
        <div className=" justify-center flex flex-row items-center">
          <div className="w-[172px] text-[#9C9AA5] flex flex-row justify-between items-center mt-2">
            <div className=" border-t w-[78px]"></div>
            <p>OR</p>
            <div className=" border-t w-[78px]"></div>
          </div>
        </div>

        <div className=" w-[350px] flex flex-row justify-between mt-6">
          <button className=" w-[112px] px-[20px] py-[10px] border border-borderColor rounded-lg justify-center items-center flex ">
            <img src={GoogleIcon} alt="GoogleIcon" />
          </button>
          <button className=" w-[112px] px-[20px] py-[10px] border border-borderColor rounded-lg justify-center items-center flex ">
            <img src={AppleIcon} alt="GoogleIcon" />
          </button>
          <button className=" w-[112px] px-[20px] py-[10px] border border-borderColor rounded-lg justify-center items-center flex ">
            <img src={MicroftIcon} alt="GoogleIcon" />
          </button>
        </div>
      </div>

      <div className="w-[400px] flex flex-col justify-center absolute items-center bottom-12">
        <p className=" text-[#9C9AA5] text-[10px] font-light ">
          By signing up to create an account I accept Company’s
        </p>
        <p className=" text-[#26203B] text-[10px] font-medium">
          Terms of use & Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Signup;
