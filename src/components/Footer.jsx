import React from "react";
import OrloLogo from "../images/OrloWhiteLogo.svg";
import Googleplay from "../images/icons/4202002_apps_google_googleplay_play_logo_icon.svg";
import callIcon from "../images/icons/ant-design_phone-filled.svg";
import mailIcon from "../images/icons/dashicons_email.svg";
import TweeterIcon from "../images/icons/Twitter logo.svg";
import InstagramIcon from "../images/icons/instagram logo.svg";
import LinkedInLOgo from "../images/icons/linkedin logo.svg";
import facebookIcon from "../images/icons/facebook logo.svg";

import locationIcon from "../images/icons/fa6-solid_location-dot.svg";

const socialMediaData = [
  {
    icon: facebookIcon,
    link: "https://facebook.com",
    size: "w-[10px]",
  },
  {
    icon: TweeterIcon,
    link: "https://tweeter.com",
    size: "w-[21px]",
  },
  {
    icon: LinkedInLOgo,
    link: "https://linkedin.com",
    size: "w-[21px]",
  },
  {
    icon: InstagramIcon,
    link: "https://instagram.com",
    size: "w-[21px]",
  },
];

const Footer = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center px-10 py-10 bg-primary mt-2">
      <div className=" flex flex-row justify-between items-start w-[90%]">
        <div className=" flex flex-col gap-3">
          <img src={OrloLogo} alt="OrloLogo" className=" p-4 w-[165px]" />
          <p className=" text-white text-sm font-normal">
            Download the app by clicking the link below :
          </p>
          <div className=" flex flex-row gap-5">
            <button className=" flex flex-row gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className=" w-[30px]" />
              <div className=" flex flex-col justify-start items-start gap-0 ">
                <p className=" text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  GET IT ON
                </p>
                <h1 className=" text-lg text-white font-custom-font">
                  Google Play
                </h1>
              </div>
            </button>
            <button className=" flex flex-row gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className=" w-[30px]" />
              <div className=" flex flex-col justify-start items-start gap-0 ">
                <p className=" text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  Download on the
                </p>
                <h1 className=" text-lg text-white font-custom-font">
                  App Store
                </h1>
              </div>
            </button>
          </div>
        </div>
        <div className=" flex flex-row justify-between items-start w-[500px]">
          <div className=" flex flex-col gap-6">
            <h1 className=" font-custom-font font-bold text-lg text-white  ">
              Pages
            </h1>
            <div className=" flex flex-col gap-4">
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                About Us
              </a>
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                Services
              </a>
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                App
              </a>
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                Blog
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <h1 className=" font-custom-font font-bold text-lg text-white">
              Services
            </h1>
            <div className=" flex flex-col gap-4">
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                About Us
              </a>
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                Services
              </a>
              <a
                href=""
                className="font-normal font-custom-font text-sm text-white"
              >
                App
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-6">
            <h1 className=" font-custom-font font-bold text-lg text-white">
              Contact
            </h1>
            <div className=" flex flex-col gap-4">
              <div className=" flex flex-row gap-3">
                <img src={callIcon} alt="callIcon" className=" w-[20px]" />
                <p className="font-normal font-custom-font text-sm text-white">
                  (406) 555-0120
                </p>
              </div>
              <div className=" flex flex-row gap-3">
                <img src={mailIcon} alt="callIcon" className=" w-[20px]" />
                <p className="font-normal font-custom-font text-sm text-white">
                  orlo123@gmail.com
                </p>
              </div>
              <div className=" flex flex-row gap-3 items-start">
                <img
                  src={locationIcon}
                  alt="callIcon"
                  className=" w-[18px]  "
                />
                <p className="font-normal font-custom-font text-sm text-white w-[164px] ">
                  2972 Westheimer Rd. Lekki - Lagos
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8 ">
          <h1 className=" font-custom-font font-bold text-lg text-white">
            Social media
          </h1>
          <div className=" flex flex-row gap-4 items-center">
            {socialMediaData.map((item) => (
              <a href={item.link} key={item.icon}>
                <img src={item.icon} alt="" className={item.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
