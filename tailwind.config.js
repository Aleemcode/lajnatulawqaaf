/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          royal: "#123788",
          "royal-dark": "#0B245B",
          "royal-light": "#1A4CB8",
          sky: "#03BDE3",
          "sky-light": "#33CCEC",
          "sky-soft": "#E6F8FC",
          gold: "#EFAC02",
          "gold-light": "#FFC526",
          "gold-soft": "#FEF7E6",
          navy: "#0B1B3D",
          mist: "#F8FAFC",
          canvas: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        cairo: ["'Cairo'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "monospace"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        clay: "0 10px 30px -10px rgba(18, 55, 136, 0.12), 0 4px 6px -2px rgba(18, 55, 136, 0.05)",
        "clay-hover": "0 20px 40px -15px rgba(18, 55, 136, 0.2), 0 8px 12px -4px rgba(18, 55, 136, 0.08)",
        gold: "0 10px 25px -5px rgba(239, 172, 2, 0.3)",
        sky: "0 10px 25px -5px rgba(3, 189, 227, 0.3)",
      },
    },
  },
  plugins: [],
};
