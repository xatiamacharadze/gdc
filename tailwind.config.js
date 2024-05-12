/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#272727",
        red: "#E24848",
        pink: "#DBACFF",
        green: "#008F64",
        cyan: "#7DCDFA",
        grey: "#DAE5E8",
      },
      screens: {
        xs: "431px",
        sm: "640px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      regular: ["Neue Montreal"],
      medium: ["Neue Montreal Medium"],
      bold: ["Neue Montreal Bold"],
    },
    fontSize: {
      sm: "30px",
      lg: "6.25vw",
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
    extend: {
      cursor: ["disabled"],
      textOpacity: ["disabled"],
      textColor: ["disabled"],
    },
  },
};
