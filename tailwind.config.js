/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      white: "#fafafa",
      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#1d1d1d",
      },
      olive: {
        50: "#f5f9f4",
        100: "#e8f2e6",
        200: "#d1e4ce",
        300: "#adcea7",
        400: "#81af79",
        500: "#5e9156",
        600: "#4f7e47",
        700: "#3c5e37",
        800: "#334c2f",
        900: "#2b3f28",
        950: "#142112",
      },
      teal: {
        50: "#f3f7f8",
        100: "#dfeaee",
        200: "#c3d7de",
        300: "#9abac6",
        400: "#6996a7",
        500: "#4e7a8c",
        600: "#476b7e",
        700: "#3b5463",
        800: "#364854",
        900: "#313f48",
        950: "#1d272f",
      },
    },
    extend: {},
  },
  plugins: [],
};
