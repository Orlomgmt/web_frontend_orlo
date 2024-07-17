import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import CustomButton from "./Button";
import laundryImg from "../images/laundryImg.jpeg";
import laundryImg2 from "../images/homebg2.png";
import laundryImg3 from "../images/homebg3.png";
import KeyFeatures from "./KeyFeatures";
import OrloLogo from "../images/orloLogoBlue.svg";
import OrloLogoWhite from "../images/OrloWhiteLogo.svg";

const images = [laundryImg, laundryImg2, laundryImg3];

const SlideData = [
  {
    title: "Transform your Dry Cleaning Experience",
    content:
      "Seamless scheduling, pickup, and payment solutions by ORLO. Download the App Today!",
    btnText: "Download App",
  },
  {
    title: "Connect with Premier Dry Cleaners near you",
    content:
      "Access top-rated services, real-time order tracking, and secure payments.",
    btnText: "Start Now",
  },
  {
    title: "Simplifying Dry Cleaning for you",
    content:
      "Exceptional service at your fingertips with ORLO's innovative mobile app. Join Us and Experience Excellence!",
    btnText: "Get Started",
  },
];

const HomeHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SlideData.length);
        setIsFading(false);
      }, 1000); // Fade out duration
    }, 10000); // Change slide every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentSlideIndex(index);
    setIsFading(true);
    setTimeout(() => {
      setIsFading(false);
    }, 1000);
  };

  return (
    <>
      <div
        className=" w-full xl:h-[100vh]  h-[450px] lg:h-[500px] -z-10 "
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row xl:pt-44 max-[1024px]:pt-24  max-[640px]:pt-32 relative z-10">
          <div className="lg:w-[561px] md:w-[300px] max-[640px]:w-[166px] flex flex-col gap-3 justify-start items-start xl:ml-32 lg:ml-28 md:ml-24 max-[640px]:ml-12 ">
            <h1
              className={`xl:text-6xl lg:text-4xl md:text-3xl max-[640px]:text-[20px] sm:w-fit  font-extrabold font-Avenir transition-opacity duration-1000 ${
                isFading ? "opacity-80" : "opacity-100"
              }`}
            >
              {SlideData[currentSlideIndex].title}
            </h1>
            <p
              className={`xl:text-2xl lg:text-2xl md:text-lg max-[640px]:text-[10px] font-AvenirLight transition-opacity duration-1000 ${
                isFading ? "opacity-60" : "opacity-100"
              }`}
            >
              {SlideData[currentSlideIndex].content}
            </p>
            <CustomButton
              color="blue"
              size="small"
              active={true}
              loading={false}
              disabled={false}
            >
              {SlideData[currentSlideIndex].btnText}
            </CustomButton>
            <div className="  flex space-x-3 max-[640px]:ml-8 md:ml-16">
              {SlideData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlideIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => handleDotClick(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <KeyFeatures />
    </>
  );
};

export default HomeHeroSection;
