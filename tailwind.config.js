/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
}

