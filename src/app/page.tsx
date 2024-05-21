"use client";

import { TextField, Button, Stack, Paper, Grid } from "@mui/material";
import { BeakerIcon, SunIcon } from "@heroicons/react/16/solid";

import useThemeToggle from "@/core/hooks/useThemeToggle";

export default function Home() {
   const { toggleTheme } = useThemeToggle();

   return (
      <Grid
         className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
         justifyContent={"center"}
         alignItems={"center"}
         minHeight={"100vh"}
         display={"flex"}
         container
      >
         <Grid
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
            xs={11}
            sm={8}
            md={6}
            lg={4}
         >
            <Stack padding={4} gap={4}>
               <Button variant="contained" onClick={toggleTheme}>
                  ToggleTheme
               </Button>
               <BeakerIcon className="text-blue-600 mx-auto" width={64} />

               <TextField label="Username" />

               <TextField label="Password" />

               <Button className="p-4 hover:bg-opacity-90 dark:bg-slate-600" variant="contained">
                  Submit
               </Button>
            </Stack>
         </Grid>
      </Grid>
   );
}
