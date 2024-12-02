import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        'primary-dark': '#1A2B49',
        'primary-light': '#FF5533',
        'accent-white': '#FFFFFF',
        'accent-yellow': '#1A2B49',
=======
        'primary-dark': '#005022',
        'primary-light': '#37A45B',
        'accent-white': '#FFFFFF',
        'accent-yellow': '#FFEC4E',
>>>>>>> ecf2ba5509f9b07b050b83248c669f819d980e94
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
  plugins: [],
};

export default config;