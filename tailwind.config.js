/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#1a5efe",
        "color-text-color": "#202b38",
        "color-secondary": "#1a5eff",
        "color-backgroung": "#ffffff",
      },
    },
    container: {
      center: true,
      padding: '20px',
      md: "50px"
    }
  },
  plugins: [],
};
