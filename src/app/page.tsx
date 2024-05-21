"use client";

import { TextField, Button, Stack, Paper, Grid } from "@mui/material";
import { BeakerIcon } from "@heroicons/react/16/solid";

import useThemeToggle from "@/core/hooks/useThemeToggle";

export default function Home() {
   const { toggleTheme } = useThemeToggle();

   return (
      <Grid justifyContent={"center"} alignItems={"center"} minHeight={"98vh"} display={"flex"} container>
         <Grid xs={12} sm={8} md={6} lg={4}>
            <Paper variant="outlined">
               <Stack padding={4} gap={4}>
                  <BeakerIcon className="bg-blue" />
                  <TextField variant="standard" label="Username" />
                  <TextField variant="standard" label="Password" />
                  <Button variant="contained">Submit</Button>
               </Stack>

               <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               >
                  Sign in
               </button>
            </Paper>
         </Grid>
      </Grid>
   );
}
