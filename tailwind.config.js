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
       "gradient-lightgray": "linear-gradient(to bottom, #f7f7f7, #d4d4d4)", // Soft light gray gradient
       "gradient-darkgray": "linear-gradient(to bottom, #4b4b4b, #1f1f1f)", // From medium gray to dark gray
       "gradient-softred": "radial-gradient(circle, #ff4d4d 30%, #b91c1c 100%)", // From bright red to deep red
       "gradient-deepblack": "linear-gradient(to bottom, #0d0d0d, #1a1a1a)", // Slight variation of pure black shades
       "gradient-mutedgray": "linear-gradient(to right, #e5e5e5, #bdbdbd)", // Horizontal muted gray tones
       "gradient-softblack": "radial-gradient(circle, #2a2a2a 50%, #000000 100%)", // Slightly softer black with a deep center
       "gradient-boldred": "linear-gradient(to bottom, #b91c1c, #810000)", // Bold red gradient, darker at the bottom // bg-gradient-to-r from-gray-100 to-gray-300
      
      },
      screens: {
        sm: "480px", // Small screens (e.g., smartphones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1280px", // Large screens (e.g., laptops)
        xl: "1880px", // Extra-large screens (e.g., desktops)
        xxl: "2000px", // 2x large screens (e.g., big monitors)
      },
    },
  },
  plugins: [],
};

