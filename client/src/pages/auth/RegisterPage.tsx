import { Stack, Typography, TextField, Button, Box, useTheme } from '@mui/material';
import { Formik, Form } from 'formik';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Iconify from '../../components/Iconify';
import AuthLayout from '../../layouts/AuthLayout';
import { SignIn } from '../../redux/slices/auth';
import { useAppDispatch } from '../../types/redux';
import * as Yup from 'yup';
import moment from 'moment';
import Logo from '../../components/Logo';

export default function RegisterPage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const RegisterShema = Yup.object().shape({
    username: Yup.string()
      .min(4, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
    email: Yup.string().email(t('invalidEmail')).required(t('errormessages.required')),
    password: Yup.string()
      .min(8, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
    firstname: Yup.string()
      .min(2, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
    lastname: Yup.string()
      .min(2, t('errormessages.tooshort'))
      .max(64, t('errormessages.toolong'))
      .required(t('errormessages.required')),
    birthday: Yup.date()
      .nullable()
      .test('dob', t('errormessages.birthday'), ((value: Date) => {
        return moment().diff(moment(value), 'years') >= 18;
      }) as any)
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
            {t('pages.register.title')}
          </Typography>
        </Box>
        <Formik
          initialValues={{
            username: '',
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            birthday: new Date(),
          }}
          validationSchema={RegisterShema}
          onSubmit={onFormSubmit}>
          {({ errors, touched, setFieldValue, values }) => (
            <Form>
              <Stack spacing={2} alignItems={'center'}>
                <TextField
                  fullWidth
                  value={values.username}
                  onChange={(event) =>
                    setFieldValue('username', event.currentTarget.value)
                  }
                  placeholder={t('pages.register.fields.username')}
                  helperText={errors.username && touched.username ? errors.username : ''}
                  error={Boolean(errors.username && touched.username)}
                />
                <TextField
                  fullWidth
                  value={values.email}
                  onChange={(event) => setFieldValue('email', event.currentTarget.value)}
                  placeholder={t('pages.register.fields.email')}
                  helperText={errors.email && touched.email ? errors.email : ''}
                  error={Boolean(errors.email && touched.email)}
                />
                <TextField
                  fullWidth
                  value={values.password}
                  onChange={(event) =>
                    setFieldValue('password', event.currentTarget.value)
                  }
                  placeholder={t('pages.register.fields.password')}
                  type={'password'}
                  helperText={errors.password && touched.password ? errors.password : ''}
                  error={Boolean(errors.password && touched.password)}
                />
                <TextField
                  fullWidth
                  value={values.firstname}
                  onChange={(event) =>
                    setFieldValue('firstname', event.currentTarget.value)
                  }
                  placeholder={t('pages.register.fields.firstname')}
                  helperText={
                    errors.firstname && touched.firstname ? errors.firstname : ''
                  }
                  error={Boolean(errors.firstname && touched.firstname)}
                />
                <TextField
                  fullWidth
                  value={values.lastname}
                  onChange={(event) =>
                    setFieldValue('lastname', event.currentTarget.value)
                  }
                  placeholder={t('pages.register.fields.lastname')}
                  helperText={errors.lastname && touched.lastname ? errors.lastname : ''}
                  error={Boolean(errors.lastname && touched.lastname)}
                />
                <Stack direction={'row'} spacing={2}>
                  <Button
                    startIcon={<Iconify icon={'ion:chevron-back'} />}
                    variant={'text'}
                    sx={{ width: 'max-content' }}
                    color={'inherit'}
                    onClick={() => navigate('/')}>
                    {t('actions.back')}
                  </Button>
                  <Button
                    startIcon={<Iconify icon={'ion:log-in-outline'} />}
                    type={'submit'}
                    variant={'contained'}
                    sx={{ width: 'max-content' }}>
                    {t('actions.register')}
                  </Button>
                </Stack>
              </Stack>
            </Form>
          )}
        </Formik>
        <Typography sx={{ opacity: 0.5, textAlign: 'center', width: '100%' }}>
          {t('pages.register.infotext')}{' '}
          <Link to={'/signin'}>{t('general.linkHere')}</Link>.
        </Typography>
      </Stack>
    </AuthLayout>
  );
}
