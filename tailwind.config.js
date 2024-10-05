/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inlander: ["Inlander"],
        rethink: ["Rethink Sans", "sans-serif"]
      },
      colors: {
        "red-ts": "#B51010",
        "gray-ts": "#414141",
        "yellow-ts": "#E2F85E"
      },
      fontSize: {
        "64": 64,
        "5xl": 100,
        "10xl": 240
      }
    },
  },
  plugins: [],
}