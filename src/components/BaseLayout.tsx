'use client';

import Link from 'next/link';

import React, { useLayoutEffect, useCallback, useContext, useState, useMemo, memo } from 'react';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LightModeIcon from '@mui/icons-material/LightMode';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import MenuIcon from '@mui/icons-material/Menu';

import { ThemeProviderContext } from '../core/utils/theme-utils/theme-provider';
import { RoutesProps } from '../config/routes';
import menu from '../config/menu';

const ChangeTheme: React.FC = () => {
    const { toggleTheme } = useContext(ThemeProviderContext);

    return (
        <IconButton data-testid="changeTheme" onClick={toggleTheme} size="large" edge="start">
            <LightModeIcon className="size-6 dark:text-slate-800 text-yellow-200" />
        </IconButton>
    );
};

const UserMenu: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const router = useRouter();

    const t = useTranslations('baseLayout');

    const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget), []);
    const handleClose = useCallback(() => setAnchorEl(null), []);

    return (
        <Box data-testid="userMenu" component={'span'}>
            <IconButton onClick={handleClick}>
                <Avatar
                    sx={{
                        backgorundColor: 'background.default',
                    }}
                >
                    M
                </Avatar>
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
                    <Typography>{t('userMenu.menuItem.profile')}</Typography>
                </MenuItem>

                <Divider />

                <MenuItem className="flex gap-4" onClick={() => router.push('/')}>
                    <Typography>{t('userMenu.menuItem.sair')}</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
};

interface ListWithSubMenuProps extends RoutesProps {}

const ListWithSubMenu: React.FC<ListWithSubMenuProps> = ({ displayName, subitems, icon }) => {
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

                    {open ? (
                        <RemoveCircleOutlineIcon className="size-4" />
                    ) : (
                        <AddCircleOutlineIcon className="size-4" />
                    )}
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

export const BaseLayoutContent: React.FC<BaseLayoutContentProps> = ({ children, headerTitle, breadcrumb }) => {
    return (
        <Box component="main" marginTop={4} paddingX={2}>
            {breadcrumb && (
                <Breadcrumbs data-testid="breadcrumb">
                    {breadcrumb.map(({ displayName, path, name }, key) => (
                        <Box key={name}>
                            {key === breadcrumb.length - 1 ? (
                                <Typography className="capitalize" color="text.secondary">
                                    {displayName.replace('-', ' ')}
                                </Typography>
                            ) : (
                                <Link className="text-slate-600 capitalize" href={path} key={name}>
                                    {displayName.replace('-', ' ')}
                                </Link>
                            )}
                        </Box>
                    ))}
                </Breadcrumbs>
            )}

            <Stack paddingBottom={2} paddingTop={4} marginTop={4} paddingX={4} border={1}>
                {headerTitle && (
                    <Box marginBottom={2}>
                        <Typography textTransform={'capitalize'} variant="h5" fontSize={'32px'} fontWeight={'bold'}>
                            {headerTitle.replace('-', ' ')}
                        </Typography>
                    </Box>
                )}

                {children}
            </Stack>
        </Box>
    );
};

interface ContentMemoizedProps {
    children: React.ReactNode;
}

const ContentMemoized: React.NamedExoticComponent<ContentMemoizedProps> = memo(function ContentMemoized({ children }) {
    return <Box data-testid="layout-content">{children}</Box>;
});

interface BaseLayoutProps {
    children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
    const [open, setOpen] = useState(true);

    const t = useTranslations('baseLayout');

    const pathname = usePathname();
    const router = useRouter();
    const theme = useTheme();
    const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const openCloseWidthValue = open ? '240px' : '60px';

    const ToggleMenuButton = () => {
        return (
            <IconButton className="bg-slate-600" onClick={() => setOpen(!open)}>
                {open ? (
                    <KeyboardDoubleArrowLeftIcon className="size-6 text-white" />
                ) : (
                    <MenuIcon className="size-6 text-white" />
                )}
            </IconButton>
        );
    };

    return (
        <Stack paddingLeft={isMobileScreen ? '' : openCloseWidthValue}>
            <AppBar data-testid="appBar" className="dark:bg-white bg-slate-800 h-16" position="static">
                <Toolbar>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
                        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} paddingY={2} gap={2}>
                            <ToggleMenuButton />
                        </Box>

                        <Box>
                            <ChangeTheme />
                            <UserMenu />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                data-testid="drawer"
                PaperProps={{
                    className: 'overflow-x-hidden',
                    style: {
                        width: isMobileScreen ? '' : openCloseWidthValue,
                    },
                }}
                variant={isMobileScreen ? 'temporary' : 'permanent'}
                open={open}
            >
                <Box
                    display={'flex'}
                    justifyContent={open ? 'space-between' : 'center'}
                    alignItems={'center'}
                    padding={2}
                    gap={2}
                >
                    {open && <Typography>{t('drawer.name')}</Typography>}
                    {isMobileScreen ? <ToggleMenuButton /> : <LogoDevIcon className="text-blue-600 size-8" />}
                </Box>

                <Divider />

                <List className="flex flex-col gap-4 py-4">
                    {menu.map((props) => {
                        const { displayName, category, subitems, path, name, icon } = props;

                        const Icon = icon;

                        return (
                            <React.Fragment key={name}>
                                {category && (
                                    <ListSubheader className="font-bold">
                                        {isMobileScreen ? category.title : <Divider />}
                                    </ListSubheader>
                                )}

                                {subitems && subitems.length > 0 ? (
                                    <ListWithSubMenu {...props} />
                                ) : (
                                    <ListItem disablePadding onClick={() => router.push(path)}>
                                        <Tooltip placement="right" title={displayName}>
                                            <ListItemButton className="px-0" selected={pathname === path}>
                                                <ListItemIcon className="size-6 justify-center">
                                                    <Icon />
                                                </ListItemIcon>

                                                {open && (
                                                    <ListItemText
                                                        sx={{
                                                            fontFamily: '"Rubik", sans-serif',
                                                        }}
                                                        primary={displayName}
                                                    />
                                                )}
                                            </ListItemButton>
                                        </Tooltip>
                                    </ListItem>
                                )}
                            </React.Fragment>
                        );
                    })}
                </List>
            </Drawer>

            <ContentMemoized>{children}</ContentMemoized>
        </Stack>
    );
};

export default BaseLayout;
