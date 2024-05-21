"use client";

import { TextField, Button, Stack, Paper, Grid } from "@mui/material";
import { BeakerIcon, SunIcon } from "@heroicons/react/16/solid";

import useThemeToggle from "@/core/hooks/useThemeToggle";

export default function Home() {
   const { toggleTheme } = useThemeToggle();

   return (
      <Grid
         className="tw-bg-gradient-to-r tw-from-indigo-500 tw-from-10% tw-via-sky-500 tw-via-30% tw-to-emerald-500 tw-to-90%"
         justifyContent={"center"}
         alignItems={"center"}
         minHeight={"100vh"}
         display={"flex"}
         container
      >
         <Grid
            className="tw-rounded-sm tw-border tw-border-stroke tw-bg-white tw-shadow-default tw-dark:border-strokedark tw-dark:bg-boxdark"
            xs={11}
            sm={8}
            md={6}
            lg={4}
         >
            <Stack padding={4} gap={4}>
               <Button variant="contained" onClick={toggleTheme}>
                  ToggleTheme
               </Button>
               <BeakerIcon className="tw-text-blue-600 tw-mx-auto" width={64} />

               <TextField label="Username" />

               <TextField label="Password" />

               <Button className="tw-p-4 tw-hover:bg-opacity-90 tw-bg-blue-600" variant="contained">
                  Submit
               </Button>
            </Stack>
         </Grid>
      </Grid>
   );
}
