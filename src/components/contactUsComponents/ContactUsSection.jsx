import React from "react";

const ContactUsSection = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center mt-24 bg-[#FBFBFB] ">
      <h1 className=" xl:text-[48px] lg:text-[38px] md:text-[30px] sm:text-[24px] text-[20px] text-accent font-extrabold font-AvenirMedium">
        Contact Us
      </h1>
      <p className=" font-Avenir font-medium text-[#717171] text-[24px]">
        Got question or remarks? Leave us a message!
      </p>
      <div className=" w-[80%] flex flex-row justify-center items-center px-5 py-5">
        <div className=" w-[45%] bg-primary h-[500px]"></div>
        <div className=" w-[55%]"></div>
      </div>
    </div>
  );
};

export default ContactUsSection;
