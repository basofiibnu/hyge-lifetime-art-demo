import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A0A',
        secondary: '#F5F5F5',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
