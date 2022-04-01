import { useEffect, useState } from 'react';
import { SignIn } from '../../redux/slices/auth';
import { useAppDispatch, useAppSelector } from '../../types/redux';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import {
  Alert,
  Box,
  Button,
  Collapse,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import AuthLayout from '../../layouts/AuthLayout';
import Iconify from '../../components/Iconify';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/rootReducer';
import Logo from '../../components/Logo';
import { ExtendedTheme } from '../../types/theme';
import { useTheme } from '@mui/system';

export default function SignInPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme: ExtendedTheme = useTheme();

  const authLoadingState = useAppSelector((state: RootState) => state.auth.loading);

  const SignInShema = Yup.object().shape({
    usernameOrEmail: Yup.string()
      .min(4, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
    password: Yup.string()
      .min(8, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
  });

  function onFormSubmit(values: any) {
    dispatch(SignIn(values.usernameOrEmail, values.password));
  }

  return (
    <AuthLayout>
      <Stack spacing={4}>
        <Box sx={{ textAlign: 'center' }}>
          <Logo
            sx={{
              fill: theme.palette.primary.main,
              maxWidth: '70%',
              display: 'block',
              margin: '0 auto',
            }}
          />
          <Typography variant={'h4'} sx={{ opacity: 0.5 }}>
            Sign in
          </Typography>
        </Box>
        <Formik
          initialValues={{
            usernameOrEmail: '',
            password: '',
          }}
          validationSchema={SignInShema}
          onSubmit={onFormSubmit}>
          {({ errors, touched, setFieldValue, values }) => (
            <Form>
              <Stack spacing={2} alignItems={'center'}>
                <TextField
                  fullWidth
                  value={values.usernameOrEmail}
                  onChange={(event) =>
                    setFieldValue('usernameOrEmail', event.currentTarget.value)
                  }
                  placeholder={'Username or Email'}
                  helperText={
                    errors.usernameOrEmail && touched.usernameOrEmail
                      ? errors.usernameOrEmail
                      : ''
                  }
                  error={Boolean(errors.usernameOrEmail && touched.usernameOrEmail)}
                />
                <TextField
                  fullWidth
                  value={values.password}
                  onChange={(event) =>
                    setFieldValue('password', event.currentTarget.value)
                  }
                  placeholder={'Password'}
                  type={'password'}
                  helperText={errors.password && touched.password ? errors.password : ''}
                  error={Boolean(errors.password && touched.password)}
                />
                <Collapse in={authLoadingState == 'error'}>
                  <Alert severity={'error'}>Your last sign-in try failed.</Alert>
                </Collapse>
                <Stack direction={'row'} spacing={2}>
                  <Button
                    startIcon={<Iconify icon={'ion:chevron-back'} />}
                    variant={'text'}
                    sx={{ width: 'max-content' }}
                    color={'inherit'}
                    onClick={() => navigate('/')}>
                    Back
                  </Button>
                  <LoadingButton
                    startIcon={<Iconify icon={'ion:log-in-outline'} />}
                    type={'submit'}
                    variant={'contained'}
                    sx={{ width: 'max-content' }}
                    loading={authLoadingState == 'loading'}>
                    Sign in
                  </LoadingButton>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
        <Typography sx={{ opacity: 0.5, textAlign: 'center', width: '100%' }}>
          {t('pages.signin.infotext')} <Link to={'/register'}>here</Link>.
        </Typography>
      </Stack>
    </AuthLayout>
  );
}
