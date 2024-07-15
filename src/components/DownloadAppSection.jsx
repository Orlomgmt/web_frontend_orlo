import React from "react";
import Googleplay from "../images/icons/4202002_apps_google_googleplay_play_logo_icon.svg";
import PhoneImage from "../images/phoneForAppSection.png";

const DownloadAppSection = () => {
  return (
    <div
      className="w-full bg-[#D9E7F7] h-[700px] md:h-[920px] lg:h-auto flex flex-col bg-no-repeat 
           bg-[length:600px_auto]  
           bg-[center_top_400px] 
           md:bg-[length:1000px_auto] 
           lg:bg-[length:1000px_auto] 
           lg:bg-[left_400px_top]"
      style={{
        backgroundImage: `url(${PhoneImage})`,
      }}
    >
      <div className="flex flex-row justify-start w-[85%] items-start mx-auto py-20 overflow-hidden">
        <div className="flex flex-col w-full lg:w-[488px] gap-5 justify-start items-start">
          <h1 className="font-extralight w-[250px] text-[26.838px] md:w-full md:text-[40px] lg:text-[56px] lg:leading-[64.765px] font-Avenir">
            Get the <br />{" "}
            <span className="font-bold lg:text-nowrap font-AvenirBlack">
              Better Experience{" "}
            </span>{" "}
            on our APP
          </h1>

          <p className="w-full hidden lg:flex">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar congue facilisis. Suspendisse placerat tortor quis nibh
            ornare maximus.
          </p>
          <div className="flex flex-row gap-5">
            <button className="flex flex-row gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className="w-[20px]" />
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  GET IT ON
                </p>
                <h1 className="text-lg text-white flex-nowrap text-nowrap font-Avenir">
                  Google Play
                </h1>
              </div>
            </button>
            <button className="flex flex-row h-fit gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className="w-[20px]" />
              <div className="flex flex-col justify-start items-start gap-0">
                <p className="text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  Download on the
                </p>
                <h1 className="text-lg text-white font-Avenir">App Store</h1>
              </div>
            </button>
          </div>
          <p className="w-full flex lg:hidden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar congue facilisis. Suspendisse placerat tortor quis nibh
            ornare maximus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
