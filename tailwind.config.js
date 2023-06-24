/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  media: false,
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
        "2xl": "1600px",
        "3xl": "1800px",
        "4xl": "1920px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
