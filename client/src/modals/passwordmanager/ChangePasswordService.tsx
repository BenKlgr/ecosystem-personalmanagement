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
import {
  SetDecryptionPassword,
  UpdatePasswordService,
} from '../../redux/slices/passwords';
import { Password } from '../../types/passwords';
import { useAppDispatch } from '../../types/redux';

type ChangePasswordServiceProps = {
  open: boolean;
  handleClose: any;
  password: Password;
};
export default function ChangePasswordService({
  open,
  handleClose,
  password,
}: ChangePasswordServiceProps) {
  const [service, setService] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(UpdatePasswordService(password.id, service));
    handleClose();
  };

  useEffect(() => {
    if (!open) return;
    setService('');
  }, [open]);

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        <Typography variant={'h4'}>Decryption</Typography>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant={'subtitle2'}>Enter the new service name below</Typography>
          <TextField
            placeholder={password.service}
            value={service}
            onChange={(event) => setService(event.currentTarget.value)}
            autoFocus={true}
            onKeyUp={(event) => event.key == 'Enter' && handleSubmit()}
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
