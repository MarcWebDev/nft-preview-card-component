import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        background: "var(--background)",
        card: "var(--cardBackground)",
        white: "var(--white)",
        softBlue: "var(--softBlue)",
        line: "var(--line)",
        cyan: "var(--cyan)",
      },
  },
  plugins: [],
};
export default config;
