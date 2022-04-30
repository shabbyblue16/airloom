import * as React from 'react';
import {
  Button,
  Typography,
  Container,
} from '@mui/material';
import {
  Hero,
  Values,
  HowItWorks,
} from '../components';

function Landing() {
  return (
    <>
      <Hero />
      <Values />
      <HowItWorks />
    </>
  );
}

export default Landing;
