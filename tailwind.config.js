module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      '2sm': '.938rem',
      base: '1rem',
      lg: '1.125rem',
      '2lg': '1.188rem',
      xl: '1.25rem',
      '2xl': '1.375rem',
      '3xl': '1.5rem',
      '4xl': '1.625rem',
      '5xl': '1.75rem',
      '6xl': '1.875rem',
      '7xl': '2.188rem',
      '8xl': '2.5rem',
      '9xl': '5rem',
    },
    colors: {
      // white
      transparent: 'transparent',
      white: {
        100: '#FFFFFF',
      },
      // black
      black: {
        100: "#454545",
        200: "#545454",
      },
      grey: {
        100: "#555555",
        200: "#666666",
        300: "#606060",
        400: "#888888",
        500: "#CCCCCC",
        600: "#DDDDDD",
      },
      // slate
      slate: {
        100: "#EEEEEE",
        200: "#F4F4F4",
        300: "#F2F4F7",
        400: "#F9F9F9",
        500: "#FCFCFC",
        600: "#FAFAFA",

      },
      // yellow
      yellow: {
        100: "#FDAE22",
        200: "#FFCC30",
        300: "#F9D260",
        400: "#FCE59F",
        500: "#FFD235"
      },
      // brown
      brown: {
        100: "#8D6E00"
      },
      // red
      red: {
        100: "#C40016",
      },
      // pink
      pink: {
        100: "#FCE8E8"
      },
      // blue
      blue: {
        100: "#5865F2",
        200: "#1890CF",
        300: "#55AEF0",
        400: "#F7F8FC",
        500: "#56ADEF"
      },
      // green
      green: {
        100: "#82C732",
      },
    },

    extend: {

      fontFamily: {
        'jost': ['Jost', 'sans-serif']
      },
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
      },
      boxShadow: {
        half: "0px 0px 6px 6px rgba(0, 0, 0, 0.02)",
        full: "0px 0px 6px 6px rgba(0, 0, 0, 0.04)",
        xs: "0 0 0 1px rgba(0, 0, 0, 0.16)",
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.16)",
        default: "0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
        none: "none",
      },
      maxWidth: {
        '7xl': '1440px'
      },
      screens:{
        'smmob':'320px', //small mobile
        'mob': '500px', // mobile
        'sm': '640px', // small
        'md': '768px', // medium
        'lg': '1024px', // large
        'xl': '1280px', // extra large
        '2xl': '1440px',
        '3xl': '1536px',
      }
    },
  },
  plugins: [],
}
