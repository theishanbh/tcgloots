module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      colors: {
        // white
        'white': '#FFFFFF',
        // yellow
        'yellow-primary' : '#FFCC30',
        // grey
        'grey-100' : "#888888",
        'grey-200' : '#EEEEEE',
        'grey-300' : '#F2F4F7',
        'grey-400' : '#DDDDDD',
        // black
        'black-100' : "#545454",
        'black-200' : '#454545',
        // blue
        'blue-primary' : "#55AEF0",
        'blue-100' : '#5AA3D9',
        // green
        'green-primary' : "#82C732"
      },
    },
    extend: {
      
      fontFamily : {
        'jost' : ['Jost', 'sans-serif']
      }
    },
  },
  plugins: [],
}
