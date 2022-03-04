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
      '2lg' : '1.188rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.375rem',
      '4xl': '1.625rem',
      '5xl': '1.75rem',
      '6xl': '1.875rem',
      '7xl': '2.188rem',
      '8xl': '2.5rem',
      '9xl': '5rem',
    },
    colors: {
      // white
      transparent : 'transparent',
      white : {
        100 : '#FFFFFF',
      },
      // black
      black : {
        100 : "#454545",
      },
      grey : {
        100 : "#555555",
        200 : "#666666",
        300 : "#606060",
        400 : "#888888",
        500 : "#CCCCCC",
        600 : "#DDDDDD",
      },
      // slate
      slate : {
        100 : "#EEEEEE",
        200 : "#F4F4F4",
        300 : "#F2F4F7",
        400 : "#F9F9F9",
        500 : "#FCFCFC",
      },
      // yellow
      yellow : {
        100 : "#FDAE22",
        200 : "#FFCC30",
        300 : "#F9D260",
        400 : "#FCE59F",
      },
      // brown
      brown : {
        100 : "#8D6E00"
      },
      // red
      red : {
        100 : "#C40016",
      },
      // pink
      pink : {
        100 : "#FCE8E8"
      },
      // blue
      blue : {
        100 : "#5865F2",
        200 : "#1890CF",
        300 : "#55AEF0",
      },
      // green
      green : {
        100 : "#82C732",
      },
    },
    
    extend: {
      
      fontFamily : {
        'jost' : ['Jost', 'sans-serif']
      },
      flex :{
        '2' : '2 2 0%',
        '3' : '3 3 0%',
        '4' : '4 4 0%',
        '5' : '5 5 0%',
        '6' : '6 6 0%',
        '7' : '7 7 0%',
        '8' : '8 8 0%',
        '9' : '9 9 0%',
      },
      
    },
  },
  plugins: [],
}
