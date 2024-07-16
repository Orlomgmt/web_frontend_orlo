import React from "react";
import bgImage from "../../images/postive-caring-relationships-teachers 1.png";

const AbooutHeroSection = () => {
  return (
    <div
      className=" w-full flex flex-col justify-center items-center mx-auto xl:h-[400px] py-10 "
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className=" custom-shadow text-[#F8A300] xl:text-[96px] lg:text-[63px] md:text-[40px] sm:text-[30px] text-[24px] font-Avenir font-bold">
        ABOUT US
      </h1>
      <h1 className=" text-white font-normal xl:w-[663px] lg:w-[600px] md:w-[400px] sm:w-[400px] w-[300px] xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[20px] text-[14px] font-Avenir text-center">
        From preschool to pre-tertiary, our students enjoy fun, interactive and
        relevant lessons and are empowered to think beyond the confines of the
        classroom.
      </h1>
    </div>
  );
};

export default AbooutHeroSection;
