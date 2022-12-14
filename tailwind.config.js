/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
        colors: {
            PaleBlue: "hsl(243, 100%, 93%)",
            GrayishBlue: "hsl(229, 7%, 55%)",
            DarkBlue: "hsl(228, 56%, 26%)",
            VeryDarkBlue: "hsl(229, 57%, 11%)",
            Gradient1: "hsl(6, 100%, 80%)",
            Gradient2: "hsl(335, 100%, 65%)",
        },
        fontFamily: {
          "Raleway": ['Raleway'],
        },
        borderRadius: {
          "boom": "50%",
        }  
    },
  },
  plugins: [],
}

