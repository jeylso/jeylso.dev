const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        42: "10.313rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const customClass = {
        ".no-select": {
          "-webkit-touch-callout": "none" /* iOS Safari */,
          "-webkit-user-select": "none" /* Safari */,
          "-khtml-user-select": "none" /* Konqueror HTML */,
          "-moz-user-select": "none" /* Firefox */,
          "-ms-user-select": "none" /* Internet Explorer/Edge */,
          "user-select":
            "none" /* Non-prefixed version, currently
                                           supported by Chrome and Opera */,
        },
        ".lines-top": {
          border: "0.125rem black solid",
          borderStyle: "solid solid none",
          marginTop: "0.5rem",
          height: "1.25rem",
        },
        ".lines-bottom": {
          border: "0.125rem black solid",
          borderStyle: "none solid solid",
          // height: "1.25rem",
        },
        ".vl": {
          borderLeft: "0.125rem solid black",
          position: "absolute",
          height: "0.625rem",
          left: "50%",
        },
      };
      addComponents(customClass);
    }),
  ],
};
