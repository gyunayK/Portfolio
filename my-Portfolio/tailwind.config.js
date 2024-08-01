/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "linear-gradient(180deg, rgba(0, 0, 0, 0.5), #000000 100%),url('/img/beach.webp')"
      },
      colors: {
        'special-purple': '#e49dfc'
      }
    },

    fontFamily: {
      Tektur: ['Tektur', 'cursive'],
      Roboto: ['Roboto', 'sans-serif'],
      sans: ['ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia']
    },
    screens: {
      xs: '375px',
      xsMax: '450px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
      max: '2000px'
    }
  }
}
