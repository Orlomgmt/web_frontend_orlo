import React, { useState, useEffect } from "react";
import blogImg from "../../images/drycleaningShop.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const RecentBlogSection = () => {
  const dummyBlogPosts = [
    {
      id: 1,
      title: "Guide for Great Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "May 20th 2020",
      image: blogImg,
    },
    {
      id: 2,
      title: "Eco-Friendly Dry Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "June 15th 2020",
      image: blogImg,
    },
    {
      id: 3,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 4,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 7,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 8,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 1,
      title: "Guide for Great Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "May 20th 2020",
      image: blogImg,
    },
    {
      id: 2,
      title: "Eco-Friendly Dry Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "June 15th 2020",
      image: blogImg,
    },
    {
      id: 3,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 4,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 7,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 8,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 1,
      title: "Guide for Great Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "May 20th 2020",
      image: blogImg,
    },
    {
      id: 2,
      title: "Eco-Friendly Dry Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "June 15th 2020",
      image: blogImg,
    },
    {
      id: 3,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 4,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 7,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 8,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 1,
      title: "Guide for Great Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "May 20th 2020",
      image: blogImg,
    },
    {
      id: 2,
      title: "Eco-Friendly Dry Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "June 15th 2020",
      image: blogImg,
    },
    {
      id: 3,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 4,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 7,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 8,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 1,
      title: "Guide for Great Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "May 20th 2020",
      image: blogImg,
    },
    {
      id: 2,
      title: "Eco-Friendly Dry Cleaning",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "June 15th 2020",
      image: blogImg,
    },
    {
      id: 3,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 4,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 5,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 7,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
    {
      id: 8,
      title: "Fabric Care 101",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar congue facilisis. Suspendisse placerat tortor quis nibh ornare maximus...",
      date: "July 3rd 2020",
      image: blogImg,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setPostsPerPage(4);
      } else if (window.innerWidth >= 1024) {
        setPostsPerPage(4);
      } else if (window.innerWidth >= 768) {
        setPostsPerPage(3);
      } else {
        setPostsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dummyBlogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(dummyBlogPosts.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPaginationButtons = () => {
    let buttons = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <PaginationButton
            key={i}
            pageNumber={i}
            currentPage={currentPage}
            onClick={() => paginate(i)}
          />
        );
      }
    } else {
      // First 3 pages
      for (let i = 1; i <= 3; i++) {
        buttons.push(
          <PaginationButton
            key={i}
            pageNumber={i}
            currentPage={currentPage}
            onClick={() => paginate(i)}
          />
        );
      }

      // Ellipsis and current page number if needed
      if (currentPage > 3 && currentPage < totalPages - 2) {
        buttons.push(
          <span
            key="ellipsis-left"
            className="px-3 py-1 border border-gray-300 text-sm font-medium bg-white text-gray-500"
          >
            ...
          </span>
        );
        buttons.push(
          <PaginationButton
            key={currentPage}
            pageNumber={currentPage}
            currentPage={currentPage}
            onClick={() => paginate(currentPage)}
          />
        );
        buttons.push(
          <span
            key="ellipsis-right"
            className="px-3 py-1 border border-gray-300 text-sm font-medium bg-white text-gray-500"
          >
            ...
          </span>
        );
      } else {
        buttons.push(
          <span
            key="ellipsis"
            className="px-3 py-1 border border-gray-300 text-sm font-medium bg-white text-gray-500"
          >
            ...
          </span>
        );
      }

      // Last 2 pages
      for (let i = totalPages - 1; i <= totalPages; i++) {
        buttons.push(
          <PaginationButton
            key={i}
            pageNumber={i}
            currentPage={currentPage}
            onClick={() => paginate(i)}
          />
        );
      }
    }
    return buttons;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-lightBg py-8">
      <div className="w-[90%] flex flex-col gap-5 justify-center items-start mx-auto">
        <h1 className="font-Avenir font-bold text-[32px] text-[#000]">
          Recent Posts
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-center items-center mx-auto">
          {currentPosts.map((item, id) => (
            <div
              key={id}
              className="flex-col flex gap-4 col-span-1 shadow-md h-[365.35px] w-full max-w-xs bg-white rounded-sm overflow-hidden"
            >
              <img src={item.image} alt="blogImg" className="w-full h-[50%]" />
              <div className="flex flex-col justify-center items-start px-4">
                <h1 className="text-[#2D3748] text-[20px] font-AvenirBlack font-bold">
                  {item.title}
                </h1>
                <p className="text-[#718096] text-base md:text-md lg:text-[13px] font-normal">
                  {item.excerpt}
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mt-3">
                  <p className="text-[#718096] text-base md:text-md lg:text-[11px] font-normal mb-2 sm:mb-0">
                    {item.date}
                  </p>
                  <button className="text-primary text-base md:text-md lg:text-[11px] font-bold">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full mt-8">
          <nav className="inline-flex">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaChevronLeft />
            </button>
            {renderPaginationButtons()}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-r-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <FaChevronRight />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const PaginationButton = ({ pageNumber, currentPage, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 bg-[#F6F6F6] text-sm font-medium ${
      currentPage === pageNumber
        ? "bg-[#b6b6b6] rounded-md text-black"
        : "bg-white text-[#B29E9E] hover:bg-gray-50"
    }`}
  >
    {pageNumber}
  </button>
);

export default RecentBlogSection;
