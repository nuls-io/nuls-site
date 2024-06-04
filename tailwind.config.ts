import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      main: 'var(--colors-main)',
      sub: 'var(--colors-sub)',
      white: 'var(--colors-white)',
      text: 'var(--colors-text)',
      special: 'var(--colors-special)',
      label: 'var(--colors-label)',
    },
    fontFamily: {
      title: 'var(--font-title)',
      text: 'var(--font-text)'
    },
    screens: {
      lg: { max: '1200px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    extend: {
      fontSize: {
        '32': ['32px', '40px'],
        'm-title': ['40px', '46px']
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #2C867A 22.1%, #3B998B 77.72%)',
      },
      transitionProperty: {
        'header': 'opacity, transform',
      }
    },
  },
  plugins: [],
};
export default config;
