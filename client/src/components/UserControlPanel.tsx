import {
  Avatar,
  Badge,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from '@mui/material';
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
    <Stack spacing={2} direction={'row'}>
      <IconButton>
        <Badge badgeContent={4} color={'primary'}>
          <Iconify icon={'ion:notifications'} />
        </Badge>
      </IconButton>
      <IconButton onClick={handleClick} sx={{ padding: 0 }}>
        <Avatar sx={{ bgcolor: theme.palette.primary.main }}>{`${user?.firstname
          .slice(0, 1)
          .toUpperCase()}${user?.lastname.slice(0, 1).toUpperCase()}`}</Avatar>
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
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ marginRight: 0 }}>
            <Iconify icon={'ion:person'} />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ marginRight: 0 }}>
            <Iconify icon={'ion:cog-outline'} />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon sx={{ marginRight: 0 }}>
            <Iconify icon={'ion:log-out-outline'} />
          </ListItemIcon>
          <ListItemText>Sign out</ListItemText>
        </MenuItem>
      </Menu>
    </Stack>
  );
}
