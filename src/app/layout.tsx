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
      <html lang="en">
         <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
               <body className={inter.className}>{children}</body>
            </ThemeProvider>
         </AppRouterCacheProvider>
      </html>
   );
}
