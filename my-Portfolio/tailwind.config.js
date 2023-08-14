/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':   "linear-gradient(180deg, rgba(0, 0, 0, 0.5), #000000 100%),url('https://ik.imagekit.io/riviaa/beach%20(1)%201.png?updatedAt=1690554009528')",
        'contactBG': "url('https://ik.imagekit.io/riviaa/Portfolio/IMG_2466%201%20(1).png?updatedAt=1690564937843')",

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

