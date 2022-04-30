import * as React from 'react';
import {
  Button,
  Typography,
  Container,
} from '@mui/material';
import {
  HeroLayout,
  Hero,
  Values,
} from '../components';

function Landing() {
  return (
    <>
      <Hero />
      <Values />
    </>
  );
}

export default Landing;
