import * as React from 'react';
import {
  Button,
  Typography,
  Container,
} from '@mui/material';
import { HeroLayout } from '../components';

function Landing() {
  return (
    <HeroLayout>
      <img
        style={{ display: 'none' }}
        src='https://lh5.googleusercontent.com/Lw3SVGgtzNsW5Wy48rJ-SEZwaWOgoa4QXeplKEBoVYQbI4roEQITFJOmjIURytOYyBhzYmyNAPUT56kFNKgzoBoAIsFsNXGe7hA_C_z7lw1g1GhcPrVWdhNOXzxbGMcGILi4DjE3'
        alt='increase priority'
      />
      <Typography
        color='white'
        align='center'
        variant='h2'
        marked='center'
      >
        SECURE STORIES AND MEMORIES
      </Typography>
      <Typography
        color='white'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: 4 }}
      >
        Airloom provides space to tell stories of the things that store memories
        we share with one another.
      </Typography>
    </HeroLayout>
  );
}

export default Landing;
