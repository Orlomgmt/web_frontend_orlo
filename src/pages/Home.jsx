import React from "react";
// import NavBar from "../components/NavBar";
import HomeHeroSection from "../components/HomeHeroSection";
import Intro from "../components/Intro";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import DownloadAppSection from "../components/DownloadAppSection";

const Home = () => {
  return (
    <div className=" overflow-x-hidden">
      <HomeHeroSection />
      <Intro />
      <HowItWorks />
      <DownloadAppSection />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
