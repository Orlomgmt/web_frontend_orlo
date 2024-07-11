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
    icon: downloadicon,
    title: "Download theApp:",
    size: "w-10px",
    description: "Available on both the App Store and GooglePlay.",
    arrow: group,
    left: "50px",
    num: "6",
  },
  {
    icon: regidterIcon,
    size: "w-60px",
    title: "Register and Login:",
    description: "Create an account using your email or social media.",
    arrow: group,
    left: "50px",
    num: "6",
  },
  {
    icon: findIcon,
    size: "w-3px",
    title: "Find a Dry-Cleaner:",
    description: "Utilize GPS to locate nearby dry-cleaners from App.",
    arrow: group,
    left: "50px",
    num: "6",
  },
  {
    icon: scheduleIcon,
    size: "w-60px",
    title: "Schedule a Pick-Up:",
    description: "Select your preferred time and date for service.",
    arrow: group,
    left: "50px",
    num: "6",
  },
  {
    icon: payIcon,
    title: "Secured Payments:",
    size: "w-60px",
    description: "Complete your transaction with in-app payment options.",
    arrow: group,
    left: "50px",
    num: "6",
  },
  {
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
    <div className="w-[100%] bg-primary justify-center items-center mx-auto flex flex-col gap-6 py-9 my-8">
      <h1 className="font-Avenir font-black text-4xl text-[#fff]">
        How it Works
      </h1>
      <div className="w-[85%] grid lg:grid-cols-6 gap-10 place-items-center">
        {howData.map((each, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col justify-center items-center pt-2 relative">
              <img src={each.icon} alt="" className={`z-0 ${each.size}`} />
              <div className="border-[3px] w-[174px] place-items-center border-solid -mt-6 border-white-10 rounded-[40px] py-8 px-2 flex flex-col items-center justify-center gap-[10px]">
                <div className=" flex flex-row">
                  <div className={` flex flex-col gap-4 mr-${each.num}`}>
                    <h1 className="w-[122px] uppercase text-white text-center text-base font-black">
                      {each.title}
                    </h1>
                    <p className="w-[122px] text-white text-center text-base font-normal leading-[100%]">
                      {each.description}
                    </p>
                  </div>
                  <img
                    src={each.arrow}
                    alt=""
                    className={`-mr-[${each.left}]`}
                    // style={ } // Calculate the left position based on the index
                  />
                </div>
              </div>
              {/* {each.arrow && (
                <img
                  src={each.arrow}
                  alt=""
                  className={`absolute left-[${each.left}]`}
                  // style={ } // Calculate the left position based on the index
                />
              )} */}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
