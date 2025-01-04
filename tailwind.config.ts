import daisyui from "daisyui";
import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        profileFadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        greenPulse: {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(51, 217, 78, 0.7)'
          },
          '70%': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 0 10px rgba(51, 217, 78, 0)'
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(51, 217, 78, 0)'
          },
        },
      },
      animation: {
        'profileFadeIn': 'profileFadeIn 0.6s ease-out forwards',
        'green-pulse': 'greenPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
} satisfies Config;
