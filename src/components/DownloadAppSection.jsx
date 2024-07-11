import React from "react";
import Googleplay from "../images/icons/4202002_apps_google_googleplay_play_logo_icon.svg";

const DownloadAppSection = () => {
  return (
    <div className=" w-full bg-primary101 flex flex-col ">
      <div className=" flex flex-row justify-center w-[90%] items-center mx-auto py-24 ">
        <div className=" flex flex-col xl:w-[488px] gap-5 justify-start items-start ">
          <h1 className=" font-extralight leading-[64.765px] w-full text-[56px] font-Avenir">
            Get the <br /> <span className="font-bold">Better Experience </span>{" "}
            on our APP
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            pulvinar congue facilisis. Suspendisse placerat tortor quis nibh
            ornare maximus.
          </p>
          <div className=" flex flex-row gap-5">
            <button className=" flex flex-row gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className=" w-[30px]" />
              <div className=" flex flex-col justify-start items-start gap-0 ">
                <p className=" text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  GET IT ON
                </p>
                <h1 className=" text-lg text-white font-Avenir">Google Play</h1>
              </div>
            </button>
            <button className=" flex flex-row gap-1 px-3 py-2 bg-black rounded-lg justify-center items-center">
              <img src={Googleplay} alt="" className=" w-[30px]" />
              <div className=" flex flex-col justify-start items-start gap-0 ">
                <p className=" text-[10px] text-white font-light ml-1 -mb-1 leading-none">
                  Download on the
                </p>
                <h1 className=" text-lg text-white font-Avenir">App Store</h1>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadAppSection;
