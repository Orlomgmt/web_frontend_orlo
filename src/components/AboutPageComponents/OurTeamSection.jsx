import React from "react";
import memberImage from "../../images/unsplash_ABuzWPku1Ug.png";

const teamData = [
  {
    id: 1,
    image: memberImage,
    MemberName: "Sola John",
    role: "CEO & Founder",
  },
  {
    id: 2,
    image: memberImage,
    MemberName: "Sola John",
    role: "CEO & Founder",
  },
  {
    id: 3,
    image: memberImage,
    MemberName: "Sola John",
    role: "CEO & Founder",
  },
  {
    id: 4,
    image: memberImage,
    MemberName: "Sola John",
    role: "CEO & Founder",
  },
  {
    id: 5,
    image: memberImage,
    MemberName: "Sola John",
    role: "CEO & Founder",
  },
];

const OurTeamSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full bg-[#E9E9E9] py-4">
      <h1 className=" xl:text-[48px] lg:text-[38px] md:text-[30px] sm:text-[24px] text-[20px] text-accent font-extrabold font-AvenirMedium">
        Our Team
      </h1>
      <p className=" text-center xl:text-[18px] xl:w-[488px] lg:w-[460px] md:w-[400px] sm:w-[380px] w-[300px] font-Avenir font-medium md:text-[16] sm:text-[14px] text-[12px]  ">
        We love what we do and we do it with passion. We value these
        experimentation of the message and smart incentives.
      </p>
      <div className=" mt-[20px] w-[85px] grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-y-4 items-center place-items-center place-content-center md:gap-x-[260px] lg:gap-x-[260px] xl:gap-x-[260px] sm:gap-x-[260px] gap-x-[180px]">
        {teamData.map((item, id) => (
          <div
            className={` ${
              id === teamData.length - 1
                ? " xl:col-span-1 lg:col-span-1 md:col-span-1-1/2 sm:col-span-1-1/2 col-span-2"
                : "col-span-1"
            }   ${
              id === 3
                ? " xl:col-span-1 lg:col-span-1 md:col-span-1-1/2 sm:col-span-1-1/2 col-span-1 ml-0 xl:ml-0 md:ml-[200px] sm:ml-[200px] "
                : "col-span-1"
            } h-[250px] xl:h-[340px] lg:h-[340px] md:h-[340px] sm:h-[340px] lg:w-[245.678px] md:w-[245.678px] sm:w-[245.678px] w-[170px] col-span-1 flex flex-col justify-center items-center `}
          >
            <div
              className=" h-[279.094px] w-full"
              style={{
                backgroundImage: `url('${item.image}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className=" flex flex-col w-[80%] bg-white justify-center items-center -mt-8 ">
              <div className=" w-full bg-primary h-[4px]"></div>
              <div className=" w-full justify-center items-center py-4 font-light flex flex-col ">
                <h3 className=" text-[11.296px] font-Avenir">
                  {item.MemberName}
                </h3>
                <p className=" text-[9px] font-AvenirLight ">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeamSection;
