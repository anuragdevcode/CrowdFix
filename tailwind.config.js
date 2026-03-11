// tailwind.config.js
module.exports = {
  content: [
    "./index.{js,jsx,ts,tsx}",           // Catch your root index
    "./app/**/*.{js,jsx,ts,tsx}",         // Catch all files in the app folder
    "./components/**/*.{js,jsx,ts,tsx}",  // Catch your UI components
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};