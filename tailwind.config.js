/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light-pattern": "url('/src/assets/images/light.png')",
      },
    },
  },
  plugins: [],
};
