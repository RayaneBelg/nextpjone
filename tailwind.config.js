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
        // Custom brand colors
        "rosa-pink": "#FF69B4",  // Replace with your exact shade
        "soft-beige": "#F5F5DC", // Soft beige for backgrounds
        "dark-blue": "#1B263B",  // A rich, dark blue
        "accent-yellow": "#FFD700", // Accent for highlights
      },

      fontFamily: {
        westmeath: ["var(--font-west)"], // Matches the variable from localFont
      },
      
      
      backgroundImage: {
        // Gradients
        "gradient-header": "radial-gradient(circle, rgba(247,247,247,1) 0%, rgba(185,28,28,1) 14%)", // From rosa-pink to yellow
        "gradient-card": "linear-gradient(to bottom, #810000, #F5F5DC)", // From dark-blue to soft-beige
       "gradient-body": "radial-gradient(circle, rgba(247,247,247,1) 47%, rgba(203,213,225,1) 100%)",
       "gradient-cta": "radial-gradient(circle, #dc2626 47%, #b91c1c 100%)",
      
      },
    },
  },
  plugins: [],
};

