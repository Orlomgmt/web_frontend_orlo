/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        customGradient:
          "radial-gradient(150.06% 141.42% at 100% 100%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
      },
      fontFamily: {
        Avenir: ["Avenir", "sans-serif"],
        AvenirMedium: ["AvenirMedium", "sans-serif"],
        AvenirLight: ["AvenirLight", "sans-serif"],
        AvenirBlack: ["AvenirBlack", "sans-serif"],
      },
      boxShadow: {
        custom:
          "inset -4px -2px 16px 0px #FFF, inset 4px 2px 16px 0px rgba(136, 165, 191, 0.48)",
        customHover:
          "inset 10px 10px 20px 0px #FFF, inset 4px 2px 16px 0px rgba(136, 165, 100, 1.48)",
      },
    },
  },
  plugins: [],
};
