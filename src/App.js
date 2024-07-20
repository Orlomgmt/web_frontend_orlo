// App.js
import React from "react";
import { Route, Switch, Link, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import Onboarding from "./pages/Onboarding";
import NavBar from "./components/NavBar";
import BlogsPage from "./pages/BlogsPage";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
// import { useNavigate } from "react-router-dom";

function App() {
  // const navigate = useNavigate()

  return (
    <div className="w-[100%]">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
