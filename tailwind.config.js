/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#061735", navy2: "#0B2046", deep: "#020B1B",
        brand: "#E60023", brand2: "#C9001D",
        light: "#F4F7FC", lblue: "#EAF1FB", body: "#172B50", muted: "#52627C",
      },
      fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
