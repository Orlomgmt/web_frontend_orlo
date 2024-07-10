import React, { useState } from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  type,
  value,
  onChange,
  placeholder,
  label,
  required,
  disabled,
  error,
  className,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value || "");
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  const inputClasses = `
    w-full p-2 border rounded-full focus:outline-none border-custom-blue shadow-custom-blue font-custom-font font-medium focus:ring-2 
    ${
      error && isTouched
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-blue-500"
    }
    ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
    ${className}
  `;

  return (
    <div className="mb-4 w-[356px]  ">
      {label && (
        <label className="block text-base  font-medium text-formTextClr mb-1">
          {label}
          {/* {required && <span className="text-red-500">*</span>} */}
        </label>
      )}
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClasses}
        {...props}
      />
      {error && isTouched && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.oneOf(["text", "number", "email", "password", "tel", "url"]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

CustomInput.defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  label: "",
  required: false,
  disabled: false,
  error: "",
  className: "",
};

export default CustomInput;
