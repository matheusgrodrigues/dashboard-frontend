import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import "./globals.css";

import theme from "@/config/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "",
   description: "",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR">
         <body className={inter.className}>
            <AppRouterCacheProvider options={{ enableCssLayer: true }}>
               <ThemeProvider theme={theme}>
                  {children}

                  <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-200">
                     Sign in to your account
                  </h2>
               </ThemeProvider>
            </AppRouterCacheProvider>
         </body>
      </html>
   );
}
