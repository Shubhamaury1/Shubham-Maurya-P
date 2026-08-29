/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        agustina: ["Agustina", "cursive"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      colors: {
        themeBg: "#edf9fe",
        themeNavy: "#001c55",
        themeBlue: "#043d5d",
      },
    },
  },
  plugins: [],
};
