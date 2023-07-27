/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://ik.imagekit.io/riviaa/beach.jpg?updatedAt=1689284195871')",
        'contactBG': "url('https://ik.imagekit.io/riviaa/Portfolio/IMG_2476%201.png?updatedAt=1690470475643')",

      },
      colors: {
        'special-purple': '#e49dfc',
      },
    },

    fontFamily: {
      Tektur: ['Tektur', 'cursive'],
      Roboto: ['Roboto', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
    },
    screens: {
      'xs': '375px',
      'xs-max': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'max': '2000px'
    },

  },
  plugins: [],
}

