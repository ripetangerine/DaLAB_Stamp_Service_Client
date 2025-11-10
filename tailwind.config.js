/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background : '#4192FF', // 커스텀 색상
      },
    },
  },
  plugins: [],
}
