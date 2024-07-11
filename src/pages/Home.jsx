import React from "react";
// import NavBar from "../components/NavBar";
import HomeHeroSection from "../components/HomeHeroSection";
import Intro from "../components/Intro";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <HomeHeroSection />
      <Intro />
      <HowItWorks />
      <Testimonials />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Home;
