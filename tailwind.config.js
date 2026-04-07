/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // 이 줄이 반드시 있어야 app 폴더를 감시합니다!
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // 이 줄이 있어야 AdFit 같은 컴포넌트 스타일이 나옵니다.
  ],
  theme: {
    extend: {
      fontFamily: {
        jua: ["Jua", "sans-serif"],
      },
    },
  },
  plugins: [],
};