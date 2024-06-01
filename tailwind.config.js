/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        courier: ['Courier', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
