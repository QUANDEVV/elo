/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        turquoise: "#5ACCCC",
        white: "#FFFFFF",
        steelBlue: "#335C6E",
        yellow: "#FABD33",
        turquoiseLight: "#CFFAFA",
        orangeRed: "#F76434",
        teal: "#4AA088",
        yellowDark: "#FAAD00",
        turquoiseDark1: "#53C2C2",
        orangePastel: "#FFE6DC",
        turquoiseDark2: "#28B8B8",
      },
      screens: {
        lg: { max: "1800px" },
        md: { max: "990px" },
        sm: { max: "600px" },
        xs: { max: "400px" },
        minmd: "1700px",
        minlg: "2100px",
      },
    },
  },
  plugins: [],
};
