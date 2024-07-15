import React from "react";

const Intro = () => {
  return (
    <div className=" w-[80%]  flex flex-col justify-center items-center gap-4 mx-auto text-center mt-6 mb-6">
      <h1 className="  font-AvenirBlack font-black xl:text-4xl lg:text-3xl md:text-2xl max-[640px]:text-[16px] text-[#000]">
        Introduction
      </h1>
      <p className=" font-normal text-xl max-[640px]:text-[13px] text-[#000] leading-4">
        Welcome to ORLO LTD, the premier platform for hassle-free dry-cleaning.
        Our state- of-the-art mobile application connects you with local
        dry-cleaners, offering unparalleled convenience in scheduling, pickuxp,
        and payment. Experience superior service and convenience like never
        before.
      </p>
    </div>
  );
};

export default Intro;
