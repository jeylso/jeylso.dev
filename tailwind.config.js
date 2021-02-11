const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addComponents }) {
      const noSelect = {
        '.no-select': {
          "-webkit-touch-callout": 'none', /* iOS Safari */
            "-webkit-user-select": 'none', /* Safari */
             "-khtml-user-select": 'none', /* Konqueror HTML */
               "-moz-user-select": 'none', /* Firefox */
                "-ms-user-select": 'none', /* Internet Explorer/Edge */
                    "user-select": 'none'  /* Non-prefixed version, currently
                                           supported by Chrome and Opera */
        }
      }
      addComponents(noSelect)
    })
  ],
}
