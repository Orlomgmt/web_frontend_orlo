import React, { useEffect, useState } from "react";
import backgroundImage from "../images/blogSectionBg.png";
import imageBLog1 from "../images/blogImage1.png";
import profileBlogImage from "../images/Ellipse.png";

const BlogSection = () => {
  const [visibleItems, setVisibleItems] = useState(4);

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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        // xl breakpoint
        setVisibleItems(8);
      } else if (window.innerWidth >= 768) {
        // md breakpoint
        setVisibleItems(6);
      } else {
        setVisibleItems(4);
      }
    };

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        <h1 className=" font-Avenir font-bold text-black xl:text-5xl lg:text-4xl md:text-3xl text-[32px]">
          Blog Posts
        </h1>
        <p className=" font-Avenir xl:text-lg text-base font-normal text-customGray-200 mt-5">
          Our latest updates and blogs about managing your team
        </p>
        <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-6 gap-y-8 mt-16">
          {blogData.slice(0, visibleItems).map((item, id) => (
            <div
              kay={id}
              className=" lg:w-[285px] max-[625px]:w-[130px] gap-5 bg-white overflow-hidden lg:h-[380px] md:h-[340px] flex flex-col rounded-3xl"
            >
              <img src={item.image} alt={item.author} className="w-full flex" />

              <div className=" flex flex-col gap-3 px-5">
                <h2 className=" font-Avenir text-customGray-300 lg:text-xl md:text-lg max-[625px]:text-[16.891px] font-medium">
                  {item.title}
                </h2>
                <p className=" font-Avenir font-normal lg:text-[12px] md:text-[10px] text-[12.936px] text-customGray-200">
                  {item.content}
                </p>
              </div>
              <div className=" w-full px-5 gap-4 flex flex-row justify-center items-center lg:mt-6 md:mt-4 mb-2">
                <img
                  src={item.author.profileImage}
                  alt={profileBlogImage}
                  className="w-6 h-6 rounded-full"
                />
                <div className=" flex flex-row gap-4 font-Avenir lg:text-[9.4px] text-[10.945px] font-semibold  text-customGray-200">
                  <p className=" text-nowrap ">{item.author.name}</p>
                  <p>|</p>
                  <p className="  text-nowrap">{item.date}</p>
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
