import React, { useCallback, useState, memo } from 'react';
import { useRouter } from 'next/navigation';

import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    List,
    Typography,
    IconButton,
    MenuItem,
    Divider,
    Toolbar,
    AppBar,
    Drawer,
    Avatar,
    Stack,
    Menu,
    Box,
} from '@mui/material';

import {
    ChatBubbleBottomCenterIcon,
    ChevronDoubleLeftIcon,
    Bars3BottomLeftIcon,
    BuildingLibraryIcon,
    RocketLaunchIcon,
    ChartBarIcon,
    SunIcon,
} from '@heroicons/react/16/solid';

import useThemeToggle from '@/core/hooks/useThemeToggle';

const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const router = useRouter();

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget), []);
    const handleClose = useCallback(() => setAnchorEl(null), []);

    return (
        <>
            <IconButton onClick={handleClick}>
                <Avatar className="size-8">M</Avatar>
            </IconButton>

            <Menu
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                anchorEl={anchorEl}
                onClose={handleClose}
                onClick={handleClose}
                open={Boolean(anchorEl)}
            >
                <MenuItem className="flex gap-4" onClick={handleClose}>
                    <Avatar className="size-6" />
                    <Typography>Profile</Typography>
                </MenuItem>

                <Divider />

                <MenuItem className="flex gap-4" onClick={() => router.push('/')}>
                    <Typography>Sair</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

interface BaseLayoutContentProps {
    children: React.ReactNode;
}

const BaseLayoutContent: React.NamedExoticComponent<BaseLayoutContentProps> = memo(function BaseLayoutContent({
    children,
}) {
    return (
        <Box component="main" marginTop={4} paddingX={2}>
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

    const drawerWidth = {
        opened: '240px',
        closed: '60px',
    };

    return (
        <Stack paddingLeft={open ? drawerWidth.opened : drawerWidth.closed}>
            <AppBar className="dark:bg-white bg-slate-800 h-16" position="static">
                <Toolbar>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <IconButton onClick={() => setOpen(!open)} edge="start">
                            {open ? (
                                <ChevronDoubleLeftIcon className="size-6 dark:text-slate-800 text-white" />
                            ) : (
                                <Bars3BottomLeftIcon className="size-6 dark:text-slate-800 text-white" />
                            )}
                        </IconButton>

                        <Box>
                            <IconButton onClick={toggleTheme} size="large" edge="start">
                                <SunIcon className="size-6 dark:text-slate-800 text-yellow-200" />
                            </IconButton>

                            <UserMenu />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                PaperProps={{
                    style: {
                        width: `${open ? drawerWidth.opened : drawerWidth.closed}`,
                    },
                }}
                variant="permanent"
                open={open}
            >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <IconButton>
                        <RocketLaunchIcon className="text-sky-800 size-8" />
                    </IconButton>

                    {open && <Typography>Genese Dashboard</Typography>}
                </Box>

                <Divider />

                <List className="flex flex-col gap-4 py-4">
                    {['Dashboard', 'CRM', 'Analytics'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton className="p-0">
                                <ListItemIcon className="size-6  justify-center">
                                    {text.toLowerCase() === 'crm' && <ChatBubbleBottomCenterIcon />}
                                    {text.toLowerCase() === 'dashboard' && <BuildingLibraryIcon />}
                                    {text.toLowerCase() === 'analytics' && <ChartBarIcon />}
                                </ListItemIcon>

                                {open && <ListItemText primary={text} />}
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <Divider />
                </List>
            </Drawer>

            <BaseLayoutContent>{children}</BaseLayoutContent>
        </Stack>
    );
};

export default BaseLayout;
