import React from "react";
import group from "../images/icons/Group.svg";
import downloadicon from "../images/icons/download.svg";
import regidterIcon from "../images/icons/registerIcon.svg";
import findIcon from "../images/icons/findIcon.svg";
import scheduleIcon from "../images/icons/scheduleIcon.svg";
import payIcon from "../images/icons/payasap.svg";
import trackIcon from "../images/icons/trackIcon.svg";

const howData = [
  {
    id: 1,
    icon: downloadicon,
    title: "Download theApp:",
    size: "w-10px",
    description: "Available on both the App Store and GooglePlay.",
    arrow: group,
    left: "260px",
    num: "6",
  },
  {
    id: 2,
    icon: regidterIcon,
    size: "w-60px",
    title: "Register and Login:",
    description: "Create an account using your email or social media.",
    arrow: group,
    left: "20",
    num: "6",
  },
  {
    id: 3,
    icon: findIcon,
    size: "w-3px",
    title: "Find a Dry-Cleaner:",
    description: "Utilize GPS to locate nearby dry-cleaners from App.",
    arrow: group,
    left: "20",
    num: "6",
  },
  {
    id: 4,
    icon: scheduleIcon,
    size: "w-60px",
    title: "Schedule a Pick-Up:",
    description: "Select your preferred time and date for service.",
    arrow: group,
    left: "20",
    num: "6",
  },
  {
    id: 5,
    icon: payIcon,
    title: "Secured Payments:",
    size: "w-60px",
    description: "Complete your transaction with in-app payment options.",
    arrow: group,
    left: "20",
    num: "6",
  },
  {
    id: 6,
    icon: trackIcon,
    size: "w-60px",
    title: "Track your Order:",
    description: "Monitor your order status in real-time until delivery.",
    arrow: "",
    left: "",
    num: "",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-[100%] bg-primary justify-center items-center mx-auto flex flex-col gap-6 py-9 mt-8 overflow-hidden">
      <h1 className="font-Avenir font-black text-4xl  text-[#fff]">
        How it Works
      </h1>
      <div className="w-[85%] grid xl:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 max-[640px]:grid-cols-2 xl:gap-x-20 max-[640px]:gap-x-12 place-items-center">
        {howData.map((each) => (
          <React.Fragment key={each.id}>
            <div className="flex flex-col justify-center items-center pt-2 relative">
              <img src={each.icon} alt="" className={`z-0 ${each.size}`} />
              <div className="border-[3px] w-[174px] max-[370px]:w-[160px] place-items-center border-solid -mt-6 border-white-10 rounded-[40px] py-8 px-2 flex flex-col items-center justify-center gap-[10px]">
                <div className="flex flex-row">
                  <div className={`flex flex-col gap-4 mr-${each.num}`}>
                    <h1 className="w-[122px] uppercase text-white text-center text-base font-black">
                      {each.title}
                    </h1>
                    <p className="w-[122px] text-white text-center text-base font-normal leading-[100%]">
                      {each.description}
                    </p>
                  </div>
                  {each.arrow && (
                    <img
                      src={each.arrow}
                      alt=""
                      className={`left-[170px] max-[370px]:left-[150px] top-[170px] absolute 
                        ${
                          (each.id === 2 && "hidden xl:flex lg:flex md:flex") ||
                          (each.id === 4 && "hidden xl:flex lg:flex md:flex") ||
                          (each.id === 3 &&
                            "xl:flex lg:flex md:hidden sm:flex flex")
                          // : "hidden sm:block"
                        }`}
                    />
                  )}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
