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
    title: "secure in-app payment processing:",
    content: "Secure and diverse payment options within the app.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="flex flex-row mx-auto w-[80%] justify-center items-center -mt-20">
      <div className="lg:w-[1171px] justify-center items-center flex flex-col mx-auto z-100">
        {/* Your header div */}
        <div className="w-[283px] px-4 py-3 bg-white shadow-custom-shadow font-custom-font border-black-10 border-solid border-[5px] rounded-full flex flex-row justify-center items-center">
          <p className="font-black text-sm text-[#000] font-custom-font">
            {" "}
            KEY FEATURES
          </p>
        </div>

        {/* Grid container */}
        <div className="w-full justify-center bg-primary rounded-3xl grid grid-cols-2 gap-6 -z-10 px-4 py-3 place-items-center -mt-8 marker:border-[#CFCFCF] border-[6px] pt-8">
          {keyData.map((item, index) => (
            <div
              key={index}
              className="w-[446px] gap-6 px-4 py-3 bg-white shadow-custom-shadow font-custom-font border-black-10 border-solid border-[5px] rounded-full flex flex-row justify-center items-center"
            >
              <img src={item.icon} alt="" />
              <div className="w-[250px] flex flex-col gap-1">
                <h1 className="font-custom-font text-sm font-black text-[#000]">
                  {item.title}
                </h1>
                <p className="text-sm font-normal">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
