/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        primary: "#FD5200",
        secondary: "",
        text: "#1d1d1d",
        bgLight: "#FFFFFF",
        bgDarker: "#F4F2F3",
        lightOrg: "#FE621D",
      },
      screens: {
        ss: "300px",
        xs: "400px",
      },
    },
    fontFamily: {
      sans: "Philosopher",
    },
  },
  plugins: [],
};
