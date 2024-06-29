/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#9333EA",
        accent: "#F59E0B",
        lghtBlueBg: "#ECF0FF",
        formTextClr: "#26203B",
        customGray: {
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
      },
      fontFamily: {
        "custom-font": ["Avenir", "sans-serif"],
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
    },
  },
  plugins: [],
};
