module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // white
      white : {
        'primary' : '#FFFFFF',
      },
      // black
      // slate
      // yellow
      // brown
      // red
      // pink
      // blue
      // green
      // white
      'white': '#FFFFFF',
      // yellow
      'yellow-primary' : '#FFCC30',
      'yellow-secondary' : '#FCE59F',
      // grey
      'grey-primary' : "#888888",
      'grey-200' : '#EEEEEE',
      'grey-300' : '#F2F4F7',
      'grey-400' : '#DDDDDD',
      'grey-500' : '#CCCCCC',
      'grey-600' : '#FCFCFC',
      'grey-700' : '#F4F4F4',
      'grey-800' : '#F7F8FC',
      // slate
      // black
      'black-100' : "#545454",
      'black-200' : '#454545',
      'black-300' : '#606060',
      // blue
      'blue-primary' : "#55AEF0",
      'blue-100' : '#5AA3D9',
      'blue-200' : '#1890CF',
      'blue-discord' : '#5865F2',
      // green
      'green-primary' : "#82C732"
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
