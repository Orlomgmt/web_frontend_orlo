import React from "react";
import SeamIcon from "../images/icons/seamless.svg";
import locatIcon from "../images/icons/locationDD.svg";
import bookingIcon from "../images/icons/bookingIcon.svg";
import paymentIUcon from "../images/icons/paymentIconkk.svg";

const keyData = [
  {
    icon: SeamIcon,
    title: "Seamless User Registration and Authentication: .",
    content: "Effortless account creation using email or social media.",
  },
  {
    icon: locatIcon,
    title: "IN APP LOCATION BASED SEARCH:",
    content: "Locate the best dry-cleaners in your vicinity via GPS.",
  },
  {
    icon: bookingIcon,
    title: "organized booking & scheduling:",
    content: "Convenient scheduling of pickups and drop- offs.",
  },
  {
    icon: paymentIUcon,
    title: "Secure in-app payment processing:",
    content: "Secure and diverse payment options within the app.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="flex flex-row mx-auto w-[95%] justify-center items-center lg:-mt-20 md:-mt-16 sm:-mt-14 max-[640px]:-mt-14">
      <div className="lg:w-[1171px] md:w-full justify-center items-center flex flex-col mx-auto z-100">
        {/* Your header div */}
        <div className="lg:w-[283px] z-20 px-4 py-3 bg-white shadow-custom-shadow font-Avenir border-black-10 border-solid border-[5px] rounded-full flex flex-row justify-center items-center">
          <p className="font-black text-sm text-[#000] font-Avenir">
            {" "}
            KEY FEATURES
          </p>
        </div>

        {/* Grid container */}
        <div className="w-full justify-center  bg-primary rounded-3xl grid grid-cols-2 gap-y-3 gap-x-3 z-10 px-4 py-3 place-items-center -mt-8 marker:border-[#CFCFCF] border-[6px] pt-8">
          {keyData.map((item, index) => (
            <div
              key={index}
              className="xl:w-[446px] lg:w-[400px] md:w-[350px] max-[1024px]:w-[300px] sm:w-[250px] max-[640px]:w-[165px] max-[370px]:w-[150px] max-[640px]:leading-[8px] max-[640px]:gap-2 lg:gap-6 xl:px-4 xl:py-3 lg:px-4 lg:py-3 max-[1024px]:px-3 max-[1024px]:py-2 max-[640px]:px-[8px] max-[640px]:py-2 bg-white shadow-custom-shadow font-Avenir border-black-10 border-solid xl:border-[5px] max-[640px]:border-[2px]  rounded-full flex flex-row justify-center items-center"
            >
              <img
                src={item.icon}
                alt=""
                className=" xl:w-14 lg:w-12 md:w-14 max-[640px]:w-8 "
              />
              <div className="w-full flex flex-col gap-1 ">
                <h1 className="font-AvenirBlack xl:uppercase lg:uppercase md:uppercase xl:text-sm max-[640px]:text-[8px] font-black xl:w-[230px] text-[#000] ">
                  {item.title}
                </h1>
                <p className="text-sm font-normal max-[640px]:text-[8px] max-[640px]:leading-[8px] font-AvenirLight ">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
