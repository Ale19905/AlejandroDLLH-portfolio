import type { Config } from "tailwindcss";

import data from './src/data/data.json';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      'whisper': 'var(--font-whisper)',
    },
    colors: {
      primary: data.colors.primary,
      secondary: data.colors.secondary,
      dark: data.colors.dark,
      white: data.colors.white,
      gray: data.colors.gray,
      link: data.colors.link,
    },
    extend: {
      backgroundImage: {
        "gradient": data.colors.gradient,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
