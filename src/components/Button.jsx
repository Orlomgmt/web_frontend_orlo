import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({
  color,
  size,
  active,
  loading,
  disabled,
  children,
  ...props
}) => {
  const baseStyles =
    "rounded-full w-[175px]  transition duration-200 ease-in-out h-fit";

  const colors = {
    blue: "bg-[#3778C2] hover:bg-blue-600  text-white",
    none: "",
    red: "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white",
    green: "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white",
    // Add more colors as needed
  };

  const sizes = {
    small: "px-[20px] py-[8px] w-[175px] text-sm",
    medium: "px-[20px] py-[10px] w-[357px] h-[48px] text-[16px] font-Avenir",
    large: "px-8 py-4 text-lg",

    // Add more sizes as needed
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";
  //   const activeStyles = active ? "ring-2 ring-offset-2 ring-blue-500" : "";
  const loadingStyles = loading ? "cursor-wait" : "";

  // Combine classes into a single string
  const className = [
    baseStyles,
    colors[color],
    sizes[size],
    disabled ? disabledStyles : "",
    // active ? activeStyles : "",
    loading ? loadingStyles : "",
    "flex items-center justify-center",
  ].join(" ");

  return (
    <button className={className} disabled={disabled || loading} {...props}>
      {loading ? (
        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8h8a8 8 0 01-8 8v-8H4z"
          ></path>
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

CustomButton.propTypes = {
  color: PropTypes.oneOf(["blue", "red", "green"]), // Add more colors as needed
  size: PropTypes.oneOf(["small", "medium", "large"]), // Add more sizes as needed
  active: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

CustomButton.defaultProps = {
  color: "blue",
  size: "medium",
  active: false,
  loading: false,
  disabled: false,
};

export default CustomButton;
