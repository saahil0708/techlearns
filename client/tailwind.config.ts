import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marquee_reverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        marquee: 'marquee 40s linear infinite',
        marquee_reverse: 'marquee_reverse 40s linear infinite'
      }
    },
  },
  plugins: [],
};
export default config;
