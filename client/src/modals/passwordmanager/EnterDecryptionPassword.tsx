import {
  Dialog,
  DialogTitle,
  Typography,
  DialogContent,
  Stack,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { SetDecryptionPassword } from '../../redux/slices/passwords';
import { useAppDispatch } from '../../types/redux';

type EnterDecryptionPassword = {
  open: boolean;
  handleClose: any;
};
export default function EnterDecryptionPassword({
  open,
  handleClose,
}: EnterDecryptionPassword) {
  const [decryptionPassword, setDecryptionPassword] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(SetDecryptionPassword(decryptionPassword));
    handleClose();
  };

  useEffect(() => {
    if (!open) return;
    setDecryptionPassword('');
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant={'h4'}>Decryption</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant={'subtitle2'}>
            Enter the used decryption password below
          </Typography>
          <TextField
            placeholder={'Hashing password'}
            value={decryptionPassword}
            onChange={(event) => setDecryptionPassword(event.currentTarget.value)}
            autoFocus={true}
            onKeyUp={(event) => event.key == 'Enter' && handleSubmit()}
            type={'password'}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button color={'inherit'} onClick={handleClose}>
          Abort
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
