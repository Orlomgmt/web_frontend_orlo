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
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % SlideData.length);
        setIsFading(false);
      }, 1000);
    }, 10000);
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
        className="w-full h-[450px] lg:h-[500px] xl:h-[100vh] -z-10"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row pt-32 lg:pt-24 xl:pt-44 relative z-10">
          <div className="flex flex-col gap-3 justify-start items-start ml-12 md:ml-24 lg:ml-28 xl:ml-32 w-[166px] md:w-[300px] lg:w-[561px]">
            <h1
              className={`text-[20px] md:text-3xl lg:text-4xl xl:text-6xl font-extrabold font-Avenir transition-opacity duration-1000 ${
                isFading ? "opacity-80" : "opacity-100"
              }`}
            >
              {SlideData[currentSlideIndex].title}
            </h1>
            <p
              className={`text-[10px] md:text-lg lg:text-2xl xl:text-2xl font-AvenirLight transition-opacity duration-1000 ${
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
            <div className="flex space-x-3 ml-8 md:ml-16">
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
