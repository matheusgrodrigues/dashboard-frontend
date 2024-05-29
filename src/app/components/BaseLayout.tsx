'use client';

import Link from 'next/link';

import React, { useLayoutEffect, useCallback, useState, useMemo } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListItem,
    List,
    Breadcrumbs,
    Typography,
    IconButton,
    MenuItem,
    Collapse,
    Tooltip,
    Divider,
    Toolbar,
    AppBar,
    Drawer,
    Avatar,
    Badge,
    Stack,
    Menu,
    Box,
    ListSubheader,
} from '@mui/material';

import {
    ChevronDoubleLeftIcon,
    Bars3BottomLeftIcon,
    LanguageIcon,
    MinusIcon,
    PlusIcon,
    SunIcon,
} from '@heroicons/react/16/solid';

import useThemeToggle from '../../core/hooks/useThemeToggle';

import { RoutesProps } from '../../config/routes';
import menu from '../../config/menu';

const ChangeLanguage = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClose = useCallback(() => setAnchorEl(null), []);

    return (
        <Box data-testid="changeLanguage" component={'span'}>
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
        </Box>
    );
};

const ChangeTheme = () => {
    const { toggleTheme } = useThemeToggle();

    return (
        <IconButton data-testid="changeTheme" onClick={toggleTheme} size="large" edge="start">
            <SunIcon className="size-6 dark:text-slate-800 text-yellow-200" />
        </IconButton>
    );
};

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const router = useRouter();

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget), []);
    const handleClose = useCallback(() => setAnchorEl(null), []);

    return (
        <Box data-testid="userMenu" component={'span'}>
            <IconButton onClick={handleClick}>
                <Avatar className="bg-slate-200 text-slate-800 size-8">M</Avatar>
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
        </Box>
    );
};

interface ListWithSubMenuProps extends RoutesProps {}

const ListWithSubMenu = ({ displayName, subitems, icon }: ListWithSubMenuProps) => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const Icon = icon;

    const findItem = useMemo(() => subitems?.find((item) => item.path === pathname), [subitems, pathname]);

    useLayoutEffect(() => {
        findItem ? setOpen(true) : setOpen(false);
    }, [findItem]);

    return (
        <List>
            <Tooltip placement="right" title={displayName}>
                <ListItemButton onClick={() => setOpen(!open)}>
                    <ListItemIcon>
                        <Badge badgeContent={subitems?.length} color="secondary" variant="standard">
                            <Icon className="size-6" />
                        </Badge>
                    </ListItemIcon>

                    <ListItemText primary={displayName} />

                    {open ? <MinusIcon className="size-4" /> : <PlusIcon className="size-4" />}
                </ListItemButton>
            </Tooltip>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {subitems &&
                        subitems.map(({ displayName, path, name, icon }) => {
                            const Icon = icon;

                            return (
                                <Tooltip placement="right" key={name} title={displayName}>
                                    <ListItemButton selected={pathname === path} onClick={() => router.push(path)}>
                                        <ListItemIcon>
                                            <Icon className="size-5" />
                                        </ListItemIcon>

                                        {open && <ListItemText primary={displayName} />}
                                    </ListItemButton>
                                </Tooltip>
                            );
                        })}
                </List>
            </Collapse>
        </List>
    );
};

interface BaseLayoutContentProps {
    children: React.ReactNode;
    headerTitle?: string;
    breadcrumb?: RoutesProps[];
}

export const BaseLayoutContent = ({ children, headerTitle, breadcrumb }: BaseLayoutContentProps) => {
    return (
        <Box data-testid="layout-content" component="main" marginTop={4} paddingX={2}>
            {breadcrumb && (
                <Breadcrumbs data-testid="breadcrumb">
                    {breadcrumb.map(({ displayName, path, name }, key) => (
                        <Box key={name}>
                            {key === breadcrumb.length - 1 ? (
                                <Typography color="text.primary">{displayName}</Typography>
                            ) : (
                                <Link className="text-slate-600" href={path} key={name}>
                                    {displayName}
                                </Link>
                            )}
                        </Box>
                    ))}
                </Breadcrumbs>
            )}

            <Stack>
                {headerTitle && (
                    <Box>
                        <Typography fontSize={'32px'} fontWeight={'bold'}>
                            {headerTitle}
                        </Typography>
                    </Box>
                )}

                {children}
            </Stack>
        </Box>
    );
};

interface BaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
    const [open, setOpen] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const openCloseWidthValue = open ? '240px' : '60px';

    return (
        <Stack paddingLeft={openCloseWidthValue}>
            <AppBar data-testid="appBar" className="dark:bg-white bg-slate-800 h-16" position="static">
                <Toolbar>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <Typography>{!open && 'Genese Dashboard'}</Typography>

                        <Box>
                            <ChangeLanguage />
                            <ChangeTheme />
                            <UserMenu />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                data-testid="drawer"
                PaperProps={{
                    style: {
                        width: openCloseWidthValue,
                    },
                }}
                variant="permanent"
                open={open}
            >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingY={2} gap={2}>
                    <IconButton className="bg-slate-600" onClick={() => setOpen(!open)}>
                        {open ? (
                            <ChevronDoubleLeftIcon className="size-6 text-white" />
                        ) : (
                            <Bars3BottomLeftIcon className="size-6 text-white" />
                        )}
                    </IconButton>

                    {open && <Typography>Genese Dashboard</Typography>}
                </Box>

                <Divider />

                <List className="flex flex-col gap-4 py-4">
                    {menu.map((props) => {
                        const { displayName, category, subitems, path, name, icon } = props;

                        const Icon = icon;

                        return (
                            <React.Fragment key={name}>
                                {category && <ListSubheader className="font-bold">{category.title}</ListSubheader>}

                                {subitems && subitems.length > 0 ? (
                                    <ListWithSubMenu {...props} />
                                ) : (
                                    <ListItem disablePadding onClick={() => router.push(path)}>
                                        <Tooltip placement="right" title={displayName}>
                                            <ListItemButton className="px-0" selected={pathname === path}>
                                                <ListItemIcon className="size-6 justify-center">
                                                    <Icon />
                                                </ListItemIcon>

                                                {open && <ListItemText primary={displayName} />}
                                            </ListItemButton>
                                        </Tooltip>
                                    </ListItem>
                                )}
                            </React.Fragment>
                        );
                    })}
                </List>
            </Drawer>

            {children}
        </Stack>
    );
};

export default BaseLayout;
