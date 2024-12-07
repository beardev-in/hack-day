import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.1) 100%)",
          
          'corner-glow': `
          radial-gradient(circle at top left, rgba(6, 194, 112, 0.4), transparent 394px),
          radial-gradient(circle at top right, rgba(0, 255, 0, 0.1), transparent 154px),
          radial-gradient(circle at bottom right, rgba(6, 194, 112, 0.4), transparent 294px)
        `,
      },
      cityBorder: {
        "custom-border":
          "radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255,) 100%)",
      },
      animation: {
        "rotate-circular": "rotate-circular 20s linear infinite", // Add the circular rotation animation
        "border-glow": "glow-border 2s infinite",
        "inner-glow": "inner-glow 3s infinite",
      },
      keyframes: {
        "rotate-circular": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
