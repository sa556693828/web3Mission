/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: '#FF7A00',
        gray: '#838383',
      },
      backgroundImage: {
        'text-orange-gradient': 'linear-gradient(89.56deg, #FF5C00 -6.61%, #FFFFFF 99.62%)',
        'gray-gradient': 'linear-gradient(180deg, #393939 0%, #262626 100%)',
        'text-gray-gradient': 'linear-gradient(256.2deg, #FFFFFF 40.14%, #999999 71.76%)',
        'homePagePic': "url('/assets/homePage.png')",
        'missionPagePic': "url('/assets/missionPage.png')",
      },
      fontFamily: {
        'chakra': ['"Chakra Petch"', 'sans-serif'],
      },
      fontSize: {
        sm: [
          "14px",
          {
            lineHeight: "24px",
            // letterSpacing: "2.1px",
          },
        ],
        title: [
          "64px",
          {
            lineHeight: "80px",
          },
        ],
      }
    },
  },
  plugins: [],
}