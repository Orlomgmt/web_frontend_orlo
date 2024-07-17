import React from "react";
import AbooutHeroSection from "../components/AboutPageComponents/AbooutHeroSection";
import NavBar from "../components/NavBar";
import AboutContentSection from "../components/AboutPageComponents/AboutContentSection";
import OurTeamSection from "../components/AboutPageComponents/OurTeamSection";
import Footer from "../components/Footer";
import OrloLogoWhite from "../images/OrloWhiteLogo.svg";
const AboutPage = () => {
  return (
    <div className="">
      <NavBar
        color={"white"}
        bgcolor={"#3778C2"}
        initialBgcolor={"3778C2"}
        initialColor={"white"}
        logo={OrloLogoWhite}
        scrolledLogo={OrloLogoWhite}
      />
      <AbooutHeroSection />
      <AboutContentSection />
      <OurTeamSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
