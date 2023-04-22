/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    fontFamily: {
      sans: ["Quicksand"],
      serif: ["sans-serif"],
    },
    extend: {
      colors: {
        "primary-color": "#3a3a3a",
        "secondary-color": "#C93069",
        "lighter-secondary-color": "#e55f90 ",
        "support-color": "#FCE7EE",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
