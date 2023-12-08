/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: { max: "780px" },
        widescreen: { min: "780px" },
      },
      colors: {
        primary: "#55e794",
        secondary: "#64b3ae",
        background: "#000000",
        foreground: "#cc3937",
        front: "#ffffff",
        back: "#1a1a1a",
      },
      borderRadius: {
        inherit: "inherit",
      },
      transitionDuration: {
        inherit: "inherit",
      },
      fontFamily: {
        poppins: '"Poppins", sans-serif',
        raleway: '"Raleway", sans-serif',
        lato: '"Lato", sans-serif',
      },
      zIndex: {
        1: 1,
      },
    },
  },
  plugins: [],
};
