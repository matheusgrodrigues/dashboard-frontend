import { colors } from "@mui/material";
import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: "selector",

   theme: {
      screens: {
         sm: "600px",
         md: "900px",
         lg: "1200px",
         xl: "1536px",
      },
   },
   plugins: [],
};
export default config;
