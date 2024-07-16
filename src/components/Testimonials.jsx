import React from "react";
import imageIcon from "../images/Ellipse 1.png";

const testimonalData = [
  {
    img: imageIcon,
    review:
      "ORLO has revolutionized my dry-cleaning routine. It is incredibly convenient and reliable!",
    name: "Teju Alawiye",
    location: "Ikeja, Lagos.",
  },
  {
    img: imageIcon,
    review:
      "ORLO has revolutionized my dry-cleaning routine. It is incredibly convenient and reliable!",
    name: "Teju Alawiye",
    location: "Ikeja, Lagos.",
  },
  {
    img: imageIcon,
    review:
      "ORLO has revolutionized my dry-cleaning routine. It is incredibly convenient and reliable!",
    name: "Teju Alawiye",
    location: "Ikeja, Lagos.",
  },
  {
    img: imageIcon,
    review:
      "ORLO has revolutionized my dry-cleaning routine. It is incredibly convenient and reliable!",
    name: "Teju Alawiye",
    location: "Ikeja, Lagos.",
  },
];

const Testimonials = () => {
  return (
    <div className=" w-[90%] flex flex-col justify-center items-center mx-auto mb-20 mt-5 ">
      <h1 className="text-[#000] lg:text-[24px] text-[11.25px] font-Avenir font-bold leading-[26.2px]">
        TESTIMONIALS
      </h1>
      <h1 className=" text-accent font-medium lg:text-[63px] md:text-[29.277px] font-Avenir text-center">
        {" "}
        What Our Customers Say{" "}
      </h1>
      <p className=" text-secondary text-center lg:text-[18.34px] text-[11px] max-[640px]:w-[294px] font-normal lg:w-[900px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className=" w-full flex flex-row lg:gap-8 gap-4 mx-auto justify-center items-center overflow-hidden mt-8">
        {testimonalData.map((each, index) => (
          <div className="flex flex-col justify-center items-center">
            <img src={each.img} alt={each.img} className=" w-[60px] z-10" />
            <div className=" -mt-6 flex lg:w-[375px] md:w-[200px] w-[200px] text-center flex-col lg:gap-10 gap-4 py-10 px-7 border z-0 rounded-3xl">
              <h1 className=" lg:text-xl md:text-[16px] text-[10px] font-Avenir font-normal">
                {each.review}
              </h1>
              <div className=" flex flex-col lg:gap-2 gap-1 justify-center items-center">
                <h1 className="lg:text-2xl text-[11.692px] font-medium text-accent font-Avenir">
                  {each.name}
                </h1>
                <p className="lg:text-sm text-[7.795px] font-normal text-secondary font-Avenir">
                  {each.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
