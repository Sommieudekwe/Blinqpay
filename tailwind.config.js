/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: "#020014",
        input: "#15122C",
        "button-primary": "#4A33FB",
        "primary-dashboard": "#04002A",
        "text-fade": "#f5f5f599",
        "border-fade": "#ffffff25",
        "button-connect": "#ffffff24",
        "border-connect": "#ffffff14",
        typography: "#ffffff61",
        "bank-bg": "#ffffff0a",
        "button-bg": "#07041B",
        "light-green": "#058658",
        cancel: "#EC4545",
        "onboard-bg": "#04021D",
        success: "#2CF293",
        pending: "#F2AF2C",
        failed: "#EC4545",
        rate: "#4B34FF",
        switch: "#3524BC",
        "ghost-border": "#7C2F2F",
        "ghost-text": "#D53030",
      },
      fontFamily: {
        aeonikbold: ["var(--font-aeonikProBold)"],
        aeoniklight: ["var(--font-aeonikProLight)"],
        aeonikRegular: ["var(--font-aeonikProRegular)"],
        inter: ["var(--font-inter)"],
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
