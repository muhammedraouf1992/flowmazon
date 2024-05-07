/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#088178",

          secondary: "#00adff",

          accent: "#0090ff",

          neutral: "#1f2730",

          info: "#0090b4",

          success: "#4ba700",

          warning: "#ff8f00",

          error: "#ee333f",
        },
      },
    ],
  },
};
