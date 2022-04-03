import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
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
import Alert from '@mui/material/Alert';
import { getUser } from '../actions';

function Login({ setUser, history }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (user.email === '' || user.password === '') {
      setError('Fields are required');
    } else {
      setUser(user);
      navigate('/profile');
    }
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
          Login
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='password'
            label='Password'
            name='password'
            type='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          {error && (
            <Alert severity='error' onClick={() => setError(null)}>
              {error}
            </Alert>
          )}
          <Grid container>
            {/* <Grid item xs>
              <Typography component='div' variant='h6'>
                Forgot password?
              </Typography>
            </Grid> */}
            <Grid item>
              {/* <Typography component='div' variant='h6'> */}
              <Link to='/signup' style={{ color: 'blue' }}>
                No account? Sign up
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
  setUser: (user) => {
    dispatch(getUser(user));
  },
});

Login.propTypes = ({
  setUser: PropTypes.func,
  history: PropTypes.object,
});

export default connect(null, mapDispatchToProps)(Login);
