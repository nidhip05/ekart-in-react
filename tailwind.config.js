/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // md: "768px",
      md: "1024px",
      lg: "1025px",
      xl: "1280px",
      // '2xl' : '1536px',
    },
    container: {
      center: true,
      // default breakpoints but with 40px removed
    },
    extend: {
      maxWidth: {
        maxContainer: "1080px",
      },
      width: {
        maxContainer: "1080px",
      },
    },
  },
  plugins: [],
};
