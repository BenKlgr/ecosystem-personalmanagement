import {
  SelectChangeEvent,
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Stack,
  TextField,
  MenuItem,
  Button,
  DialogActions,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { CreatePassword } from '../../redux/slices/passwords';
import { useAppDispatch } from '../../types/redux';
import { encryptPassword } from '../../utils/encryption';

const alphabetCharCodes = [
  ...Array(26)
    .fill(65)
    .map((_, i) => 65 + i),
  ...Array(26)
    .fill(65)
    .map((_, i) => 97 + i),
];
const numericCharCodes = [
  ...Array(10)
    .fill(65)
    .map((_, i) => 48 + i),
];
const specialCharCodes = [
  ...Array(5)
    .fill(65)
    .map((_, i) => 91 + i),
  ...Array(7)
    .fill(65)
    .map((_, i) => 58 + i),
  ...Array(6)
    .fill(65)
    .map((_, i) => 33 + i),
];

const securityLevels = [
  {
    charCodes: [...alphabetCharCodes],
    length: 8,
  },
  {
    charCodes: [...alphabetCharCodes, ...numericCharCodes],
    length: 10,
  },
  {
    charCodes: [...alphabetCharCodes, ...numericCharCodes, ...specialCharCodes],
    length: 14,
  },
  {
    charCodes: [...alphabetCharCodes, ...numericCharCodes, ...specialCharCodes],
    length: 32,
  },
];

type InsertNewPasswordProps = {
  open: boolean;
  handleClose: any;
};
export default function InsertNewPassword({ open, handleClose }: InsertNewPasswordProps) {
  const [passwordStrength, setPasswordStrength] = useState(3);

  const [password, setPassword] = useState('');
  const [decryptionPassword, setDecryptionPassword] = useState('');
  const [service, setService] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(CreatePassword(service, encryptPassword(password, decryptionPassword)));

    handleClose();
  };

  const handleChangePasswordStrength = (event: SelectChangeEvent<number>) => {
    setPasswordStrength(event.target.value as number);
  };

  const handleGeneratePassword = () => {
    const securityLevel = securityLevels[passwordStrength];

    const generatedPassword = Array(securityLevel.length)
      .fill('a')
      .map(
        (_) =>
          String.fromCharCode(
            securityLevel.charCodes[
              Math.floor(Math.random() * securityLevel.charCodes.length)
            ]
          ) ?? 'a'
      )
      .join('');

    setPassword(generatedPassword);
  };

  useEffect(() => {
    if (!open) return;
    setPassword('');
    setService('');
    setDecryptionPassword('');
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant={'h4'}>Insert New Password</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant={'subtitle2'}>
              Choose your password wisely. If you need help finding a secure password, you
              can use the generator.
            </Typography>
            <TextField
              placeholder={'Your new password'}
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              tabIndex={0}
              autoFocus
            />
            <Stack spacing={2} direction={'row'}>
              <TextField
                id={'select'}
                value={passwordStrength}
                onChange={handleChangePasswordStrength as any}
                sx={{ flex: 1 }}
                select
                tabIndex={-1}
                SelectProps={{
                  tabIndex: -1,
                }}
                InputProps={{
                  inputProps: { tabIndex: -1 },
                  tabIndex: -1,
                }}>
                <MenuItem value={0}>Low Security</MenuItem>
                <MenuItem value={1}>Mid Security</MenuItem>
                <MenuItem value={2}>High Security</MenuItem>
                <MenuItem value={3}>Complete Security</MenuItem>
              </TextField>
              <Button onClick={handleGeneratePassword} tabIndex={-1}>
                Generate Password
              </Button>
            </Stack>
          </Stack>
          <Stack spacing={4} direction={'row'}>
            <Stack spacing={2}>
              <Typography variant={'subtitle2'}>
                Name the service, where you will use the password.
              </Typography>
              <TextField
                placeholder={'Service'}
                value={service}
                onChange={(event) => setService(event.currentTarget.value)}
                tabIndex={1}
              />
            </Stack>
            <Stack spacing={2}>
              <Typography variant={'subtitle2'}>
                Enter your decryption password. You should always use the same
                decryption-password.
              </Typography>
              <TextField
                placeholder={'Hashing password'}
                value={decryptionPassword}
                onChange={(event) => setDecryptionPassword(event.currentTarget.value)}
                tabIndex={2}
              />
            </Stack>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color={'inherit'} onClick={handleClose} tabIndex={-1}>
          Abort
        </Button>
        <Button onClick={handleSubmit} tabIndex={3}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
