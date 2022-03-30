import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { postUser } from '../actions';

function Signup({ createUser }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      email: data.get('email'),
      password: data.get('password'),
    };
    createUser(user);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='firstname'
                label='First Name'
                name='firstname'
                autoComplete='given-name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastname'
                label='Last Name'
                name='lastname'
                autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // margin='normal'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                autoComplete='email'
              // autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // margin='normal'
                required
                fullWidth
                id='password'
                label='Password'
                name='password'
                type='password'
                autoComplete='new-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid
            container
            // justifyContent='flex-end'
          >
            <Grid item>
              {/* <Typography component='div' variant='h6'> */}
              <Link to='/login' style={{ color: 'blue' }}>
                Already have an account? Log in
              </Link>
              {/* </Typography> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (user) => {
    dispatch(postUser(user));
  },
});

Signup.propTypes = {
  createUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Signup);
