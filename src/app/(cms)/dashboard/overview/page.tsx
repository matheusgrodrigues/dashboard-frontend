"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import {
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ListItem,
   List,
   Typography,
   IconButton,
   Divider,
   Toolbar,
   AppBar,
   Button,
   Drawer,
   Stack,
   Box,
} from "@mui/material";

import {
   ChatBubbleBottomCenterIcon,
   ChevronDoubleLeftIcon,
   Bars3BottomLeftIcon,
   BuildingLibraryIcon,
   UserCircleIcon,
   ChartBarIcon,
   SunIcon,
} from "@heroicons/react/16/solid";

import useThemeToggle from "@/core/hooks/useThemeToggle";

export default function Overview() {
   const [open, setOpen] = useState(false);

   const { toggleTheme } = useThemeToggle();

   const router = useRouter();

   return (
      <Stack>
         <AppBar className="bg-slate-800 dark:bg-white h-16" position="static">
            <Toolbar>
               <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} width={"100%"}>
                  <IconButton onClick={() => setOpen(!open)} edge="start">
                     <Bars3BottomLeftIcon className="size-6 text-white dark:text-slate-800" />
                  </IconButton>

                  <Box>
                     <IconButton size="large" edge="start" onClick={toggleTheme}>
                        <SunIcon className="size-6 dark:text-slate-800 text-yellow-200" />
                     </IconButton>
                     <IconButton>
                        <UserCircleIcon className="size-6 text-white dark:text-slate-800" />
                     </IconButton>
                  </Box>
               </Box>
            </Toolbar>
         </AppBar>

         <Drawer
            PaperProps={{
               style: { width: 240 },
            }}
            variant="persistent"
            open={open}
         >
            <Box display={"flex"} justifyContent={"end"}>
               <IconButton onClick={() => setOpen(!open)}>
                  <ChevronDoubleLeftIcon className="size-6 text-slate-800 dark:text-white" />
               </IconButton>
            </Box>

            <Divider />

            <List>
               {["Dashboard", "CRM", "Analytics"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                     <ListItemButton>
                        <ListItemIcon>
                           {text.toLowerCase() === "crm" && <ChatBubbleBottomCenterIcon className="size-6" />}
                           {text.toLowerCase() === "dashboard" && <BuildingLibraryIcon className="size-6" />}
                           {text.toLowerCase() === "analytics" && <ChartBarIcon className="size-6" />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                     </ListItemButton>
                  </ListItem>
               ))}
            </List>
         </Drawer>

         <Box component="main" marginTop={4} paddingX={4}>
            <Typography paragraph>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
               dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices
               mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis
               tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
               Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
               Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
               tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at
               consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie
               ac.
            </Typography>

            <Button variant="contained" onClick={() => router.push("/")}>
               Voltar para o login
            </Button>
         </Box>
      </Stack>
   );
}
