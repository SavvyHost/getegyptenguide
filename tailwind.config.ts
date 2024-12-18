import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A2B49',
        'primary-light': '#FF5533',
        'accent-white': '#FFFFFF',
        'accent-yellow': '#1A2B49',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-gradient": "linear-gradient(82deg, #945E13 0%, #CFB758 100%)",
      },
      fontFamily: {
        'segoe': ['Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'special-offer': ['36px', {
          lineHeight: '47.88px',
        }],
      },
      fontWeight: {
        'semi-bold': '600',
      },
      textShadow: {
        custom: '0.0625rem 0 0.625rem #000',
      },
    },
  },
 plugins: [require("@tailwindcss/aspect-ratio")],
};

export default config;