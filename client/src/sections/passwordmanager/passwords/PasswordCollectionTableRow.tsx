import {
  TableRow,
  TableCell,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import Iconify from '../../../components/Iconify';
import ChangePasswordService from '../../../modals/passwordmanager/ChangePasswordService';
import { RootState } from '../../../redux/rootReducer';
import { DeletePassword } from '../../../redux/slices/passwords';
import { Password } from '../../../types/passwords';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import { ExtendedTheme } from '../../../types/theme';
import { decryptPassword } from '../../../utils/encryption';

type PasswordTableRowProps = {
  password: Password;
};
export default function PasswordTableRow({ password }: PasswordTableRowProps) {
  const theme: ExtendedTheme = useTheme();
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(menuAnchor);

  const [changePasswordServiceOpen, setChangePasswordServiceOpen] = useState(false);

  const handleChangePasswordServiceOpen = () => {
    setChangePasswordServiceOpen(true);
  };
  const handleChangePasswordServiceClose = () => {
    setChangePasswordServiceOpen(false);
  };

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useAppDispatch();

  const decryptionPassword = useAppSelector(
    (state: RootState) => state.passwords.decryptionPassword
  );

  const handleMenuOpen = (event: any) => {
    setMenuAnchor(event.target);
  };
  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  const [showingPassword, setShowingPassword] = useState(false);
  const [decryptedPassword, setDecryptedPassword] = useState('');
  const handleShowPassword = () => {
    if (decryptionPassword != null) {
      setDecryptedPassword(decryptPassword(password.password, decryptionPassword));
      setShowingPassword(true);
    } else {
      enqueueSnackbar('You must unlock the passwords first', { variant: 'error' });
    }
  };
  const handleHidePassword = () => {
    setShowingPassword(false);
  };
  const handleCopyPassword = async () => {
    if (decryptionPassword != null) {
      await navigator.clipboard.writeText(
        decryptPassword(password.password, decryptionPassword)
      );
      enqueueSnackbar('Copied to clipboard', { variant: 'success' });
    } else {
      enqueueSnackbar('You must unlock the passwords first', { variant: 'error' });
    }
  };

  const handleChangeServiceName = () => {
    handleChangePasswordServiceOpen();
    handleMenuClose();
  };
  const handleDeletePassword = () => {
    dispatch(DeletePassword(password.id));
    handleMenuClose();
  };

  return (
    <>
      <ChangePasswordService
        password={password}
        open={changePasswordServiceOpen}
        handleClose={handleChangePasswordServiceClose}
      />
      <TableRow>
        <TableCell>
          <Tooltip title={password.id}>
            <Typography>{password.id.slice(0, 6)}...</Typography>
          </Tooltip>
        </TableCell>
        <TableCell>{password.service}</TableCell>
        <TableCell>{showingPassword ? decryptedPassword : '*********'}</TableCell>
        <TableCell sx={{ textAlign: 'right' }}>
          <Tooltip title={'Hold to show password'}>
            <IconButton
              onMouseDown={handleShowPassword}
              onMouseUp={handleHidePassword}
              onMouseLeave={handleHidePassword}>
              <Iconify
                icon={showingPassword ? 'ion:eye-off-outline' : 'ion:eye-outline'}
              />
            </IconButton>
          </Tooltip>
          <Tooltip title={'Copy password to clipboard'}>
            <IconButton onClick={handleCopyPassword}>
              <Iconify icon={'ion:clipboard-outline'} />
            </IconButton>
          </Tooltip>
          <IconButton onClick={handleMenuOpen}>
            <Iconify icon={'ion:ellipsis-vertical'} />
          </IconButton>
          <Menu
            open={menuOpen}
            anchorEl={menuAnchor}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}>
            <MenuItem onClick={handleChangeServiceName}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Iconify icon={'ion:backspace-outline'} />
                <Typography>Change Service-Name</Typography>
              </Stack>
            </MenuItem>
            <MenuItem onClick={handleDeletePassword}>
              <Stack direction={'row'} spacing={2} alignItems={'center'}>
                <Iconify
                  icon={'ion:trash-outline'}
                  sx={{ color: theme.palette.error.main }}
                />
                <Typography sx={{ color: theme.palette.error.main }}>
                  Delete Password
                </Typography>
              </Stack>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
    </>
  );
}
