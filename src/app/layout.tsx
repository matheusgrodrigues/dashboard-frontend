import { Metadata } from "next";
import { Inter } from "next/font/google";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "./globals.css";

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
               <CssBaseline />
               <ThemeProvider theme={{}}>{children}</ThemeProvider>
            </AppRouterCacheProvider>
         </body>
      </html>
   );
}
