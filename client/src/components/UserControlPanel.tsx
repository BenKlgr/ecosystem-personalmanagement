import { Avatar, IconButton, Menu, MenuItem, Stack, useTheme } from '@mui/material';
import { useState, MouseEvent } from 'react';
import useAuth from '../hooks/useAuth';
import Iconify from './Iconify';

export default function UserControlPanel() {
  const [user] = useAuth();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack spacing={1} direction={'row'}>
      <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{`${user?.firstname
        .slice(0, 1)
        .toUpperCase()}${user?.lastname.slice(0, 1).toUpperCase()}`}</Avatar>
      <IconButton onClick={handleClick}>
        <Iconify icon={'ion:ellipsis-vertical'} />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
      </Menu>
    </Stack>
  );
}
