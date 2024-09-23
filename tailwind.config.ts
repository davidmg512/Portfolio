import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#0fa240",
        terciary: "#0f61be",
        darkBg: "#131424"
      },
      backgroundImage: {
        "gradient-cover": 
          //"linear-gradient(90.21deg, rgba(70, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
          "linear-gradient(90deg, rgba(18, 34, 61, 0.9) 0%, rgba(82, 178, 117, 0.8) 100%)",
        
      }
    },
  },
  plugins: [],
};
export default config;
