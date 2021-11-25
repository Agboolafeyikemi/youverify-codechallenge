module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        primary: "#46B2C8",
        secondary: "#0F808C",
        primaryDark: "#1C697A",
        primaryLight: "#C2E2E9",
        whiteLight: "#FDFDFD",
        redDark: "#D72830",
        blackLight: "#200E32",
      },
      textColor: {
        secondary: "#C2E2E9",
        darkPrimary: "#0F808C",
        grayLight: "#ACB6BE",
        grayLighter: "#828282",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
