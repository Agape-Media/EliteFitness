module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    // safelist: ["bg-blue-500", "sm:bg-gray-300"],
    safelist: ["hover:border-gray-800"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["responsive"],
    },
  },
  plugins: [],
};
