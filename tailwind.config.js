/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Garamond: ["Garamond", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      xsm: "300px",
      sm: "640px",
      md: "780px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        lightPink: "#FBCFE8",
        pink: "#F9A8D4",
        darkPink: "#BE185D",
        neutral: "#f5f5f5",
        neutral700: "#404040",
        darkNeutral: "#171717",
      },
      animation: {
        text: "text 2.5s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
