import React from "react";
import BlogImg11 from "../../images/blogImageinBLogsPage.png";

const BlogsSection = () => {
  const BlogData = [
    {
      title: "The 2020 Guide for Great Cleaning",
      img: BlogImg11,
      date: "May 20th 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
    },
    {
      title: "The 2020 Guide for Great Cleaning",
      img: BlogImg11,
      date: "May 20th 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
    },
    {
      title: "The 2020 Guide for Great Cleaning",
      img: BlogImg11,
      date: "May 20th 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
    },
    {
      title: "The 2020 Guide for Great Cleaning",
      img: BlogImg11,
      date: "May 20th 2024",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto bg-lightBg mt-16 md:mt-[82px] pt-8 md:pt-16">
      <div className="flex flex-col justify-center items-center w-[90%] gap-8  max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 w-full mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-[48px] text-black font-AvenirBlack font-bold mb-4 md:mb-0">
            Blogs
          </h1>

          <div className="relative w-full md:w-[300px]">
            <label htmlFor="Search" className="sr-only">
              Search
            </label>

            <input
              type="text"
              id="Search"
              placeholder="Search blog"
              className="w-full rounded-xl border-gray-300 border-[1px] pl-4 outline-[1px] outline-slate-500 py-2.5 pe-10 shadow-sm text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center gap-8 md:gap-11  ">
          {BlogData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col md:flex-row w-full bg-white rounded-2xl border-[#E2E2E2] shadow-lg border-[1px] overflow-hidden"
            >
              <div className="flex flex-col w-full md:w-[50%] justify-center items-start p-6 md:p-8 lg:p-10 gap-4 md:gap-5">
                <h2 className="font-Avenir font-extrabold text-[#2D3748] text-2xl md:text-3xl lg:text-[40.896px] leading-tight">
                  {item.title}
                </h2>
                <p className="text-[#718096] text-base md:text-lg lg:text-[19.085px] font-normal">
                  {item.content}
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-4">
                  <p className="text-[#718096] text-base md:text-lg lg:text-[19.085px] font-normal mb-2 sm:mb-0">
                    {item.date}
                  </p>
                  <a
                    href="/blogs/212"
                    className="text-primary text-base md:text-lg lg:text-[19.085px] font-bold"
                  >
                    Read more
                  </a>
                </div>
              </div>
              <div className="w-full md:w-[50%] h-48 md:h-auto">
                <img
                  src={item.img}
                  alt={`Blog ${id + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsSection;
