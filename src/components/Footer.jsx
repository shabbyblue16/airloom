/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
  Box,
  Typography,
  Link,
} from '@mui/material';

function Footer() {
  return (
    <Box sx={{ p: 6 }} component='footer'>
      <Typography variant='h6' align='center' gutterBottom>
        Footer
      </Typography>
      <Typography variant='subtitle1' align='center' component='p'>
        Thanks for using Airloom!
      </Typography>
      <Typography variant='body2' align='center'>
        {'Copyright © '}
        <Link href='#'>
          My Website
        </Link>
        {' '}
        {new Date().getFullYear()}
        .
      </Typography>
    </Box>
  );
}

export default Footer;
