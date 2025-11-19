/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {colors: {
        primary: '#3F51B5',
        accent: '#00BFA5',
        background: '#F5F7FA',
        darkbg: '#1E1E2F',
        darktext: '#E0E0E0',
      },},
  },
  plugins: [],
}

