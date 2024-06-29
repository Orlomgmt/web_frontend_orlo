import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CustomInput from "./CustomInput";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordChecker = ({ name, email, label }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [strength, setStrength] = useState("Weak");
  const [conditions, setConditions] = useState([
    {
      id: 1,
      text: "Cannot contain your name or email address",
      isValid: false,
    },
    { id: 2, text: "At least 8 characters", isValid: false },
    { id: 3, text: "Contains a number or symbol", isValid: false },
  ]);

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
  };

  useEffect(() => {
    checkPassword(password);
  }, [password]);

  const checkPassword = (password) => {
    let errorMsg = "";
    let strengthLevel = "Weak";

    const updatedConditions = conditions.map((condition) => {
      switch (condition.id) {
        case 1:
          condition.isValid = !(
            password.includes(name) || password.includes(email)
          );
          break;
        case 2:
          condition.isValid = password.length >= 8;
          break;
        case 3:
          condition.isValid = /[0-9!@#$%^&*]/.test(password);
          break;
        default:
          break;
      }
      return condition;
    });

    if (!updatedConditions[1].isValid) {
      errorMsg = "Password must be at least 8 characters long.";
    } else if (!updatedConditions[2].isValid) {
      errorMsg = "Password must contain at least one number or symbol.";
    } else if (!updatedConditions[0].isValid) {
      errorMsg = "Password cannot contain your name or email address.";
    } else {
      if (password.length >= 12) {
        strengthLevel = "Strong";
      } else if (password.length >= 8) {
        strengthLevel = "Medium";
      }
    }

    setError(errorMsg);
    setStrength(strengthLevel);
    setConditions(updatedConditions);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className=" mb-4">
      <div className="relative">
        <CustomInput
          type={passwordVisible ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
          placeholder=""
          label={label}
          required={true}
          //   error={error}
        />
      </div>
      <div className="relative mt-4">
        <CustomInput
          type={confirmPasswordVisible ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder=""
          label="Confirm Password"
          required={true}
          error={password !== confirmPassword ? "Passwords do not match" : ""}
        />
      </div>
      <p
        className={`text-sm mt-2 ${
          strength === "Weak"
            ? "text-red-500"
            : strength === "Medium"
            ? "text-yellow-500"
            : "text-green-500"
        }`}
      >
        Password Strength: {strength}
      </p>
      <ul className="mt-2">
        {conditions.map((condition) => (
          <li key={condition.id} className="flex items-center">
            {condition.isValid ? (
              <FaCheck className="text-green-500 mr-2" />
            ) : (
              <span className="w-4 h-4 mr-2"></span>
            )}
            <span
              className={condition.isValid ? "text-green-500" : "text-red-500"}
            >
              {condition.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

PasswordChecker.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default PasswordChecker;
