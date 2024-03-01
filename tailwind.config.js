/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        beaver: "hsl(27,22%,51%)",
        codGray: "hsl(0,0%,7%)",
        mirage: "hsl(234,30%,13%)",
        ebonyClay: "hsl(218,21%,18%)",
        shuttleGray: "hsl(217,14%,42%)",
      },
    },
    backgroundImage: (theme) => ({
      "hero-mobile": "url(../public/images/homepage/hero-bg-mobile.jpg)",
      "footer-mobile": "url(../public/images/homepage/ready-bg-mobile.jpg)",
      "hero-desktop": "url(../public/images/homepage/hero-bg-desktop.jpg)",
      "hero-tablet": "url(../public/images/homepage/hero-bg-tablet.jpg)",
    }),
    fontFamily: {
      spartan: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};
