import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "25%": { transform: "translateY(-10px) translateX(5px)" },
          "50%": { transform: "translateY(-5px) translateX(-5px)" },
          "75%": { transform: "translateY(-15px) translateX(3px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "33%": { transform: "translateY(-8px) translateX(-8px)" },
          "66%": { transform: "translateY(-12px) translateX(4px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-20px) translateX(-10px)" },
        },
        "float-horizontal": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(20px)" },
        },
        "float-horizontal-reverse": {
          "0%, 100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(-20px)" },
        },
        "float-rotate": {
          "0%": { transform: "rotate(45deg) translateY(0px)" },
          "50%": { transform: "rotate(225deg) translateY(-10px)" },
          "100%": { transform: "rotate(405deg) translateY(0px)" },
        },
        "float-rotate-reverse": {
          "0%": { transform: "rotate(45deg) translateY(0px)" },
          "50%": { transform: "rotate(-135deg) translateY(-10px)" },
          "100%": { transform: "rotate(-315deg) translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-medium": "float-medium 6s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
        "float-horizontal": "float-horizontal 10s ease-in-out infinite",
        "float-horizontal-reverse": "float-horizontal-reverse 12s ease-in-out infinite",
        "float-rotate": "float-rotate 15s linear infinite",
        "float-rotate-reverse": "float-rotate-reverse 20s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
