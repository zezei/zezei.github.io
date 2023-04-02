/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'body-pattern': "url('./assets/bg.svg')",
      },
      keyframes: {
        fadeLeft: {
          '0%': { transform: 'translateX(-100px)',
            opacity: '0' },
          '100%': { transform: 'translateX(0)',
          opacity: '1' },
        }
      },
      animation: {
        'fade-left': 'fadeLeft 1s ease-in'
      }
    }
  },
  plugins: [],
}

