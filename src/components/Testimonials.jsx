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
    <div className=" w-[100%] flex flex-col justify-center items-center mx-auto mb-20 ">
      <h1 className="text-[#000] text-[24px] font-Avenir font-medium leading-[26.2px]">
        TESTIMONIALS
      </h1>
      <h1 className=" text-accent font-medium text-[63px] font-Avenir text-center">
        {" "}
        What Our Customers Say{" "}
      </h1>
      <p className=" text-secondary text-center text-[18.34px] font-normal w-[900px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
      <div className=" w-full flex flex-row gap-8 mx-auto justify-center items-center overflow-hidden mt-8">
        {testimonalData.map((each, index) => (
          <div className="flex flex-col justify-center items-center">
            <img src={each.img} alt={each.img} className=" w-[60px] z-10" />
            <div className=" -mt-6 flex text-center flex-col gap-10 py-10 px-7 border z-0 rounded-3xl">
              <h1 className="w-[375px] text-xl font-Avenir font-normal">
                {each.review}
              </h1>
              <div className=" flex flex-col gap-2 justify-center items-center">
                <h1 className="text-2xl font-medium text-accent font-Avenir">
                  {each.name}
                </h1>
                <p className="text-sm font-normal text-secondary font-Avenir">
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
