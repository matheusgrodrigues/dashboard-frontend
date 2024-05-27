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
    Collapse,
} from '@mui/material';

import {
    ChevronDoubleLeftIcon,
    Bars3BottomLeftIcon,
    RocketLaunchIcon,
    MinusCircleIcon,
    PlusCircleIcon,
    LanguageIcon,
    SunIcon,
} from '@heroicons/react/16/solid';

import useThemeToggle from '../../core/hooks/useThemeToggle';
import { RoutesProps } from '../config/routes';

const ChangeLanguage: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClose = useCallback(() => setAnchorEl(null), []);

    return (
        <>
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
                <LanguageIcon className="dark:text-slate-800 text-white size-6" />
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
                    <Typography>Português</Typography>
                </MenuItem>
                <MenuItem className="flex gap-4" onClick={handleClose}>
                    <Typography>Inglês</Typography>
                </MenuItem>
            </Menu>
        </>
    );
};

const ChangeTheme: React.FC = () => {
    const { toggleTheme } = useThemeToggle();

    return (
        <IconButton onClick={toggleTheme} size="large" edge="start">
            <SunIcon className="size-6 dark:text-slate-800 text-yellow-200" />
        </IconButton>
    );
};

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

interface ListWithSubMenuProps extends RoutesProps {}

const ListWithSubMenu: React.FC<ListWithSubMenuProps> = ({ displayName, subitems, icon }) => {
    const [open, setOpen] = useState(false);

    const Icon = icon;

    return (
        <List>
            <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                    <Icon className="size-6" />
                </ListItemIcon>

                <ListItemText primary={displayName} />

                {open ? <MinusCircleIcon className="size-4" /> : <PlusCircleIcon className="size-4" />}
            </ListItemButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subitems &&
                        subitems.map(({ displayName, name, icon }) => {
                            const Icon = icon;

                            return (
                                <ListItemButton key={name}>
                                    <ListItemIcon>
                                        <Icon className="size-5" />
                                    </ListItemIcon>

                                    {open && <ListItemText primary={displayName} />}
                                </ListItemButton>
                            );
                        })}
                </List>
            </Collapse>
        </List>
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
    routes: { menuRoutes: RoutesProps[] };
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ routes, children }) => {
    const [open, setOpen] = useState(false);

    const openCloseWidthValue = open ? '240px' : '60px';

    return (
        <Stack paddingLeft={openCloseWidthValue}>
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
                            <ChangeLanguage />
                            <ChangeTheme />
                            <UserMenu />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                PaperProps={{
                    style: {
                        width: openCloseWidthValue,
                    },
                }}
                variant="permanent"
                open={open}
            >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingY={2}>
                    <RocketLaunchIcon className="text-sky-800 size-8" />
                    {open && <Typography>Genese Dashboard</Typography>}
                </Box>

                <Divider />

                <List className="flex flex-col gap-4 py-4">
                    {routes.menuRoutes.map((props) => {
                        const { displayName, subitems, name, icon } = props;

                        const Icon = icon;

                        return (
                            <React.Fragment key={name}>
                                {subitems && subitems.length > 0 ? (
                                    <ListWithSubMenu {...props} />
                                ) : (
                                    <ListItem disablePadding>
                                        <ListItemButton className="p-0">
                                            <ListItemIcon className="size-6 justify-center">
                                                <Icon />
                                            </ListItemIcon>

                                            {open && <ListItemText primary={displayName} />}
                                        </ListItemButton>
                                    </ListItem>
                                )}
                            </React.Fragment>
                        );
                    })}
                </List>
            </Drawer>

            <BaseLayoutContent>{children}</BaseLayoutContent>
        </Stack>
    );
};

export default BaseLayout;
