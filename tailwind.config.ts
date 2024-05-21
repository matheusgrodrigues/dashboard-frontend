import type { Config } from "tailwindcss";

const config: Config = {
   corePlugins: {
      preflight: false,
   },
   important: true,
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   darkMode: "selector",

   theme: {
      extend: {
         screens: {
            sm: "600px",
            md: "900px",
            lg: "1200px",
            xl: "1536px",
         },
      },
   },

   plugins: [],
};
export default config;
