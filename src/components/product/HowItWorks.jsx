import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Grid,
  Container,
  Button,
  Typography,
} from '@mui/material';
import HandymanTwoToneIcon from '@mui/icons-material/HandymanTwoTone';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontWeight: 'medium',
  color: 'red',
};

const image = {
  height: 55,
  my: 4,
};

function HowItWorks() {
  return (
    <Box
      component='section'
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'beige' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          postion: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant='h4'
          marked='center'
          component='h2'
          sx={{ mb: 14 }}
        >
          How it works
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>1.</Box>
              <HandymanTwoToneIcon fontSize='large' sx={image} />
              <Typography variant='h5' align='center'>
                Create a new collection
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>2.</Box>
              <HandymanTwoToneIcon fontSize='large' sx={image} />
              <Typography variant='h5' align='center'>
                Add items with images and stories to collection
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}>3.</Box>
              <HandymanTwoToneIcon fontSize='large' sx={image} />
              <Typography variant='h5' align='center'>
                Share collections with friends and family
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>
          <Button
            size='large'
            variant='contained'
            sx={{ mt: 8, bgcolor: 'red' }}
          >
            Get started
          </Button>
        </Link>
      </Container>
    </Box>
  );
}

export default HowItWorks;
