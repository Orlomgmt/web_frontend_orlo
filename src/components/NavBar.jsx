import React from "react";
import OrloLogo from "../images/orloLogoBlue.svg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="w-[90%] flex justify-between items-center flex-row mx-auto h-20 backdrop-blur-lg bg-transparent">
      <img src={OrloLogo} alt="OrloLogo" />
      <div className=" flex flex-row justify-center items-center gap-16">
        <div className=" flex flex-row justify-center items-center gap-10 text-BlueGray800 font-custom-font">
          <a href="">ABOUT US</a>
          <a href="">SERVICES</a>
          <a href="">APP</a>
          <a href="">CONTACT</a>
          <a href="">BLOG</a>
        </div>
        <div className=" flex flex-row gap-6 items-center">
          <button className=" font-light font-custom-font text-BlueGray800">
            <IoSearchSharp size={24} />
          </button>
          <button className=" font-custom-font text-BlueGray800">
            <IoMenu size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
