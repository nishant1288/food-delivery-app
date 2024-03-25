/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", //this tells that tailwind can be use in various files including html,js, ts, jsx,tsx. We can omit the file extensions which we are not using.
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

