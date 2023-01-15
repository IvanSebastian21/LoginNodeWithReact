import React from 'react';
import Copyright from './Copyright';
import { Box, Button, Container, Link, Grid, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import loginSchema from '../schemas/loginSchemas'
import InputFormik from '../components/formComponents/InputFormik';
import CheckedFormik from '../components/formComponents/CheckedFormik';

const onSubmit = (values, submitProps) => {
  console.log(values)
  submitProps.resetForm()
}

function Login() {
  return (
    <Formik
      initialValues={{ email: '', password: '', remember: false }}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      <Container component="main" maxWidth="xs">
        <Box sx={{ margin: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {/* <Avatar alt="Logo" src={Logo} sx={{ width: 90, height: 90 }} ></Avatar> */}
          <Typography component="h1" variant="h5">Iniciar sesión</Typography>
          <Form>
            <InputFormik type="text" name="email" label="Email" extra="email" showAlert required />
            <InputFormik type="password" name="password" label="Password" extra="password" showAlert required />
            <CheckedFormik name="remember" label="Recordarme" />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Iniciar sesión</Button>
            <Grid container>
              <Grid item xs><Link href="#" variant="body2">¿Olvidaste tu contraseña?</Link></Grid>
              <Grid item xs><Link href="#" variant="body2">¿No tienes cuenta? Registrate</Link></Grid>
            </Grid>
          </Form>
        </Box>
        <Copyright />
      </Container>
    </Formik >
  )
}

export default Login
