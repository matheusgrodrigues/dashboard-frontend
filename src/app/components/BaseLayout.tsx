import React, { useState, memo } from "react";

import {
   IconButton,
   Divider,
   Toolbar,
   AppBar,
   Drawer,
   Stack,
   Box,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   ListItem,
   List,
} from "@mui/material";

import {
   ChatBubbleBottomCenterIcon,
   ChevronDoubleLeftIcon,
   Bars3BottomLeftIcon,
   BuildingLibraryIcon,
   Square2StackIcon,
   UserCircleIcon,
   ChartBarIcon,
   SunIcon,
} from "@heroicons/react/16/solid";

import useThemeToggle from "@/core/hooks/useThemeToggle";

interface BaseLayoutContentProps {
   children: React.ReactNode;
}

const BaseLayoutContent: React.NamedExoticComponent<BaseLayoutContentProps> = memo(function BaseLayoutContent({
   children,
}) {
   console.log("BaseLayoutContent");

   return (
      <Box component="main" marginTop={4} paddingX={4}>
         {children}
      </Box>
   );
});

interface BaseLayoutProps {
   children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
   const [open, setOpen] = useState(false);

   const { toggleTheme } = useThemeToggle();

   console.log("BaseLayout");

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

               <Divider />
            </List>

            <List>
               {Array(3)
                  .fill("Menu item")
                  .map((text, index) => (
                     <ListItem key={index} disablePadding>
                        <ListItemButton>
                           <ListItemIcon>
                              <Square2StackIcon className="size-6" />
                           </ListItemIcon>
                           <ListItemText primary={text} />
                        </ListItemButton>
                     </ListItem>
                  ))}
            </List>
         </Drawer>

         <BaseLayoutContent>{children}</BaseLayoutContent>
      </Stack>
   );
};

export default BaseLayout;
