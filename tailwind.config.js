const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      twitter: "rgb(29, 161, 242)",
      facebook: "rgb(66, 103, 178)",
    }),
    extend: {
      spacing: {
        "-1.3": "-0.2rem",
        42: "10.5rem",
        30: "7.5rem",
      },
      inset: {
        "-8.1": "-2.1rem",
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
        },
        ".vl": {
          borderLeft: "0.125rem solid black",
          position: "absolute",
          height: "0.625rem",
          left: "50%",
        },
        ".text-shadow": {
          textShadow: "3px 3px 4px grey",
        },
      };
      addComponents(customClass);
    }),
  ],
};
