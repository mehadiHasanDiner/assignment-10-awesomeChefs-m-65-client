/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ae8ef9",

          secondary: "#ffd7cc",

          accent: "#f9f59f",

          neutral: "#1e1c2b",

          "base-100": "#433b44",

          info: "#92bbe8",

          success: "#63e3d0",

          warning: "#f39b20",

          error: "#f22c40",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
