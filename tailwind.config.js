/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3778C2",
        primary101: "#b5cceb",
        secondary: "#000",
        accent: "#E1AB20",
        lghtBlueBg: "#ECF0FF",
        formTextClr: "#26203B",
        BlueGray800: "#28353D",
        customGray: {
          100: "#f7fafc", /// edited
          200: "#6D7D8B", /// edited gray
          300: "#25313C", /// edited text color gray black
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      fontFamily: {
        Avenir: ["Avenir", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(34, 123, 225, 0.30) -50%, #3778C2 100%)",
      },
      borderColor: {
        "custom-blue": "rgba(70, 95, 241, 0.40)",
      },
      boxShadow: {
        "custom-blue": "0px 4px 8px 0px rgba(70, 95, 241, 0.10)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0.8" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.9" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s ease-in-out forwards",
        fadeOut: "fadeOut 0.3s ease-in-out forwards",
      },
      boxShadow: {
        "custom-shadow":
          "8px 7px 9px 0px rgba(0, 0, 0, 0.15), inset -11px -11px 6.7px 0px rgba(0, 0, 0, 0.15)",
      },
      borderColor: {
        "black-10": "rgba(0, 0, 0, 0.10)",
        "white-10": "rgba(255, 255, 255, 0.40)",
      },
    },
  },
  plugins: [],
};
