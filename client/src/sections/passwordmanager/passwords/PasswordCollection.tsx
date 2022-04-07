import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  IconButton,
  InputAdornment,
  Paper,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import Fuse from 'fuse.js';
import { useEffect, useMemo, useState } from 'react';
import Iconify from '../../../components/Iconify';
import Empty from '../../../components/placeholders/Empty';
import EnterDecryptionPassword from '../../../modals/passwordmanager/EnterDecryptionPassword';
import InsertNewPassword from '../../../modals/passwordmanager/InsertNewPassword';
import { RootState } from '../../../redux/rootReducer';
import { GetPasswords, SetDecryptionPassword } from '../../../redux/slices/passwords';
import { Password } from '../../../types/passwords';
import { useAppDispatch, useAppSelector } from '../../../types/redux';
import PasswordTableRow from './PasswordCollectionTableRow';

export default function PasswordCollection() {
  const dispatch = useAppDispatch();

  const passwordsLoading = useAppSelector((state: RootState) => state.passwords.loading);
  const isLoading = passwordsLoading == 'idle' || passwordsLoading == 'loading';
  const passwords = useAppSelector((state: RootState) => state.passwords.passwords);

  const decryptionPassword = useAppSelector(
    (state: RootState) => state.passwords.decryptionPassword
  );
  const locked = !Boolean(decryptionPassword);

  const [search, setSearch] = useState('');
  const fuseOptions: Fuse.IFuseOptions<Password> = { keys: ['service'] };
  const fuseIndexer = Fuse.createIndex<Password>(
    fuseOptions.keys as Fuse.FuseOptionKey[],
    passwords
  );
  const fuse = new Fuse(passwords, fuseOptions, fuseIndexer);

  const searchedPasswords = useMemo(() => {
    if (search.length > 0) {
      return fuse.search(search).map((_) => _.item);
    } else return passwords;
  }, [search, passwords]);

  const [newModalOpen, setNewModalOpen] = useState(false);
  const [enterDecryptionPasswordOpen, setEnterDecryptionPasswordOpen] = useState(false);

  const handleNewModalOpen = () => {
    setNewModalOpen(true);
  };
  const handleNewModalClose = () => {
    setNewModalOpen(false);
  };

  const handleEnterDecryptionPasswordOpen = () => {
    setEnterDecryptionPasswordOpen(true);
  };
  const handleEnterDecryptionPasswordClose = () => {
    setEnterDecryptionPasswordOpen(false);
  };
  const handleLockDecryptionPassword = () => {
    dispatch(SetDecryptionPassword(null));
  };

  useEffect(() => {
    dispatch(GetPasswords());
  }, [dispatch]);

  return (
    <>
      <InsertNewPassword open={newModalOpen} handleClose={handleNewModalClose} />
      <EnterDecryptionPassword
        open={enterDecryptionPasswordOpen}
        handleClose={handleEnterDecryptionPasswordClose}
      />
      <Card>
        <CardHeader
          title={
            <Stack direction={'row'} alignItems={'center'} spacing={4}>
              <>Your Passwords</>
              <TextField
                placeholder={'Search...'}
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                variant={'standard'}
                sx={{ marginLeft: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={() => setSearch('')} edge='end'>
                        <Iconify icon={'ion:close-outline'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box sx={{ flex: 1 }}></Box>

              <Button
                onClick={
                  locked
                    ? handleEnterDecryptionPasswordOpen
                    : handleLockDecryptionPassword
                }
                color={'inherit'}
                startIcon={
                  <Iconify
                    icon={locked ? 'ion:lock-closed-outline' : 'ion:lock-open-outline'}
                  />
                }>
                {locked ? 'Unlock' : 'Lock'}
              </Button>
              <Button
                onClick={handleNewModalOpen}
                startIcon={<Iconify icon={'ion:add'} />}>
                Insert Password
              </Button>
            </Stack>
          }
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '5rem' }}>#</TableCell>
                  <TableCell sx={{ width: '15rem' }}>Service</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell sx={{ width: '10rem' }}>Instant-Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ? (
                  [...Array(10)].map((_: any, index: number) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Skeleton variant={'text'} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant={'text'} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant={'text'} />
                      </TableCell>
                      <TableCell>
                        <Skeleton variant={'text'} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : searchedPasswords.length == 0 ? (
                  <></>
                ) : (
                  searchedPasswords.map((password: Password, index: number) => (
                    <PasswordTableRow password={password} key={index} />
                  ))
                )}
              </TableBody>
            </Table>
            {searchedPasswords.length == 0 && <Empty />}
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
}
