/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "cover-desktop": "url('assets/illustration-sign-up-desktop.svg')",
        "cover-mobile": "url('assets/illustration-sign-up-mobile.svg')",
      },
    },
  },
  plugins: [],
};
