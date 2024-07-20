import React, { useState } from "react";
import forUpSideBgImg from "../../images/fottheUpSideBGContact.png";
import forDownSideBgImg from "../../images/downSideBgContact.png";
import mailIcon from "../../images/icons/dashicons_email.svg";
import callIcon from "../../images/icons/ant-design_phone-filled.svg";
import locationIcon from "../../images/icons/fa6-solid_location-dot.svg";
import { FaCheck } from "react-icons/fa";
import twitterYellow from "../../images/icons/teitteryellow.svg";
import igYellowIcon from "../../images/icons/igyellowIcon.svg";
import discordcon from "../../images/icons/discordSvg.svg";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-10 sm:mt-20 pt-8 bg-[#FBFBFB]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] text-accent font-extrabold font-AvenirMedium">
        Contact Us
      </h1>
      <p className="font-Avenir font-medium text-[#717171] text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-center">
        Got question or remarks? Leave us a message!
      </p>
      <div className="w-[90%] sm:w-[80%] bg-white flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 sm:p-5 rounded-2xl my-3 shadow-lg">
        <div className="w-full lg:w-[45%] bg-primary h-auto lg:h-[667px] rounded-2xl relative flex flex-col justify-between py-7 px-6 mb-8 lg:mb-0">
          <div>
            <h2 className="font-Avenir font-black text-2xl sm:text-3xl text-white mb-2">
              Contact Information
            </h2>
            <p className="text-[#C9C9C9] font-Avenir font-normal mb-8">
              Say something to start a live chat!
            </p>
            <div className="flex flex-col gap-8 sm:gap-12 mt-8 sm:mt-24">
              <ContactInfo icon={callIcon} text="(406) 555-0120" />
              <ContactInfo icon={mailIcon} text="orlo123@gmail.com" />
              <ContactInfo
                icon={locationIcon}
                text="132 Dartmouth Street, Lekki Phase 1"
              />
            </div>
          </div>
          <SocialIcons />
          <BackgroundImages />
        </div>
        <div className="w-full lg:w-[50%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 sm:gap-10 mx-auto p-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
              <InputField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4">
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <InputField
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Subject?
              </label>
              <div className="flex flex-wrap gap-4">
                {["General Inquiry", "Complaint", "Feedback"].map((subject) => (
                  <RadioButton
                    key={subject}
                    subject={subject}
                    checked={formData.subject === subject}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <label
                className={`block text-sm font-semibold transition-colors duration-200 font-Avenir ${
                  formData.message ? "text-[#011C2A]" : "text-[#8D8D8D]"
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-b-2 border-gray-300 focus:border-black h-20 outline-none py-2 px-1 transition-colors duration-200 focus:text-[#011C2A] text-[#8D8D8D]"
                rows="4"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-5 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-opacity-90 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ icon, text }) => (
  <div className="flex flex-row gap-3 items-center">
    <img src={icon} alt="icon" className="w-6 h-6" />
    <p className="font-light font-AvenirLight text-base sm:text-lg md:text-xl text-white">
      {text}
    </p>
  </div>
);

const SocialIcons = () => (
  <div className="flex space-x-4 mt-8">
    <img src={twitterYellow} alt="" />
    <img src={igYellowIcon} alt="" />
    <img src={discordcon} alt="" />
  </div>
);
const BackgroundImages = () => (
  <>
    <img
      src={forUpSideBgImg}
      className="absolute top-0 left-0 w-full h-auto"
      alt=""
    />
    <img
      src={forDownSideBgImg}
      className="absolute bottom-0 right-0 w-full h-auto"
      alt=""
    />
  </>
);

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="w-full sm:w-1/2">
    <label
      className={`block text-sm font-semibold transition-colors duration-200 font-Avenir ${
        value ? "text-[#011C2A]" : "text-[#8D8D8D]"
      }`}
      htmlFor={name}
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full border-b-2 font-AvenirMedium border-gray-300 focus:border-black outline-none py-2 px-1 transition-colors duration-200 focus:text-[#011C2A] text-[#8D8D8D]"
    />
  </div>
);

const RadioButton = ({ subject, checked, onChange }) => (
  <label className="inline-flex items-center">
    <input
      type="radio"
      name="subject"
      value={subject}
      checked={checked}
      onChange={onChange}
      className="hidden"
    />
    <span
      className={`w-4 h-4 rounded-full flex items-center justify-center border border-gray-300 mr-2 cursor-pointer ${
        checked ? "bg-black" : "bg-[#E0E0E0]"
      }`}
    >
      {checked && <FaCheck className="w-2 h-2 text-white" />}
    </span>
    <span className="text-sm">{subject}</span>
  </label>
);

export default ContactUsSection;
