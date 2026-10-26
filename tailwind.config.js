export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--charcoal)",
        cream: "var(--cream)",
        copper: "var(--copper)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Source Serif 4", "serif"],
      },
    },
  },
  plugins: [],
};
