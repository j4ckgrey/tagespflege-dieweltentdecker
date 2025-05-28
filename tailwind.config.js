// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito"', "Arial", "sans-serif"],
      },
      colors: {
        ...defaultTheme.colors,
        primary: "#db2777",
        secondary: "#475569",
        accent: "#fef3c7",
        neutral: "#1f2937",
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
      },
      fontSize: {
        base: ["16px", "1.6"],
        lg: ["18px", "1.7"],
        xl: ["24px", "1.4"],
        "2xl": ["30px", "1.3"],
        "3xl": ["36px", "1.25"],
        "4xl": ["48px", "1.2"],
        "5xl": ["60px", "1.1"],
      },
      spacing: {
        section: "4rem",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
