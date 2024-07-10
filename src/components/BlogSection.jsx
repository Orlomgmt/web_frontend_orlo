import React from "react";
import backgroundImage from "../images/blogSectionBg.png";
import imageBLog1 from "../images/blogImage1.png";
import profileBlogImage from "../images/Ellipse.png";

const BlogSection = () => {
  const blogData = [
    {
      id: 1,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 2,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 3,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 4,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 5,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 6,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 7,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
    {
      id: 8,
      image: imageBLog1,
      title: " The 2020 Guide for Great Cleaning",
      content:
        "ORLO is a one-stop solution for managing your team, from task management to communication. This blog post will help you get started with ORLO and learn how to use its features effectively.",
      author: {
        name: "John Doe",
        profileImage: profileBlogImage,
      },
      date: "July 12, 2022",
    },
  ];
  return (
    <section
      className=" w-[100%] flex flex-col justify-center items-center mx-auto bg-primary101 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col justify-start items-start w-[90%] mx-auto mt-5 overflow-x-hidden mb-12 ">
        <h1 className=" font-custom-font font-bold text-black xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl">
          Blog Posts
        </h1>
        <p className=" font-custom-font xl:text-lg lg:text-base text-base font-normal text-customGray-200 mt-5">
          Our latest updates and blogs about managing your team
        </p>
        <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-8 mt-16">
          {blogData.map((item, id) => (
            <div
              kay={id}
              className=" w-[285px] gap-5 bg-white overflow-hidden h-[380px] flex flex-col rounded-3xl"
            >
              <img src={item.image} alt={item.author} className="w-full flex" />

              <div className=" flex flex-col gap-3 px-5">
                <h2 className=" font-custom-font text-customGray-300 text-xl font-medium">
                  {item.title}
                </h2>
                <p className=" font-custom-font font-normal text-[12px] text-customGray-200">
                  {item.content}
                </p>
              </div>
              <div className=" px-5 gap-4 flex flex-row justify-center items-center mt-6">
                <img src={item.author.profileImage} alt={profileBlogImage} />
                <div className=" flex flex-row gap-4 font-custom-font text-[9.4px] font-semibold  text-customGray-200">
                  <p>{item.author.name}</p>
                  <p>|</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
