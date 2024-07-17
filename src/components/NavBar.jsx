import React, { useState, useEffect } from "react";
import OrloLogo from "../images/orloLogoBlue.svg";
import OrloLogoWhite from "../images/OrloWhiteLogo.svg"; // Assuming you have a white logo for the scroll effect
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavBar = ({
  color,
  bgcolor,
  initialColor,
  initialBgcolor,
  logo,
  scrolledLogo,
}) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 z-50 justify-center items-center transition-colors duration-300 h-20 ${
        scrolled
          ? `bg-${bgcolor} text-${color}`
          : `bg-${initialBgcolor} text-${initialColor}`
      }`}
      style={{
        backgroundColor: scrolled ? bgcolor : initialBgcolor,
        color: scrolled ? color : initialColor,
      }}
    >
      <div className="w-[90%] flex justify-between items-center flex-row h-20 mx-auto">
        <img
          src={scrolled ? scrolledLogo : logo}
          alt="OrloLogo"
          className="max-w-[120px]"
        />
        <div className="flex flex-row justify-center items-center gap-16">
          <div className="flex xl:flex-row lg:flex-row max-[1024px]:hidden justify-center items-center gap-10 font-Avenir max-[640px]:hidden">
            <a href="">ABOUT US</a>
            <a href="">SERVICES</a>
            <a href="">APP</a>
            <a href="">CONTACT</a>
            <a href="">BLOG</a>
          </div>
          <div className="flex flex-row gap-6 items-center">
            <button className="font-light font-Avenir">
              <IoSearchSharp size={24} />
            </button>
            <button className="font-Avenir">
              <IoMenu size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
