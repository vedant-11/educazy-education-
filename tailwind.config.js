module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#F4F4F4",
        "bg-primary": "#F3F3F3",
        "bg-green": "#62C733",
        "text-para": "#404040",
        "text-heading": "#3D3D3D",
        "text-sub": "#6B6B6B",
      },
      fontFamily: {
        squada: ["Squada One"],
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "2xl": "2px 4px 13px  rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
