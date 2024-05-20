"use client";

import { Button } from "@mui/material";

import useThemeToggle from "@/core/hooks/useThemeToggle";

export default function Home() {
   const { toggleTheme } = useThemeToggle();

   return (
      <>
         <Button onClick={toggleTheme}>Toggle</Button>

         <h1 className="bg-slate-600 dark:bg-slate-800">teste</h1>
      </>
   );
}
