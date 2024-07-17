import React, { useState, useEffect } from "react";
import OrloLogo from "../images/orloLogoBlue.svg";
import OrloLogoWhite from "../images/OrloWhiteLogo.svg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getStyles = () => {
    if (location.pathname === "/") {
      if (scrolled) {
        return {
          backgroundColor: "#3778C2",
          color: "white",
          logo: OrloLogoWhite,
        };
      } else {
        return {
          backgroundColor: "transparent",
          color: "black",
          logo: OrloLogo,
        };
      }
    } else {
      return {
        backgroundColor: "#3778C2",
        color: "white",
        logo: OrloLogoWhite,
      };
    }
  };

  const styles = getStyles();

  return (
    <div
      className={`w-full fixed top-0 z-50 justify-center items-center transition-colors duration-300 h-20`}
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.color,
      }}
    >
      <div className="w-[90%] flex justify-between items-center flex-row h-20 mx-auto">
        <img src={styles.logo} alt="OrloLogo" className="max-w-[120px]" />
        <div className="flex flex-row justify-center items-center gap-16">
          <div className="flex xl:flex-row lg:flex-row max-[1024px]:hidden justify-center items-center gap-10 font-Avenir max-[640px]:hidden">
            <a href="/about">ABOUT US</a>
            <a href="/services">SERVICES</a>
            <a href="">APP</a>
            <a href="/contact">CONTACT</a>
            <a href="/blogs">BLOG</a>
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
