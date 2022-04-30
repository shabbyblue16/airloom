import * as React from 'react';
import {
  Box,
  Grid,
  Container,
  Typography,
} from '@mui/material';
import AccessTimeTwoToneIcon from '@mui/icons-material/AccessTimeTwoTone';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function Values() {
  return (
    <Box
      component='section'
      sx={{ display: 'flex', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 15,
          mb: 30,
          display: 'flex',
          position: 'relative',
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <AccessTimeTwoToneIcon fontSize='large' sx={{ height: 55 }} />
              <Typography variant='h6' sx={{ my: 5 }}>
                Stories
              </Typography>
              <Typography>
                Something about the stories we tell and keep
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <AccessTimeTwoToneIcon fontSize='large' sx={{ height: 55 }} />
              <Typography variant='h6' sx={{ my: 5 }}>
                Memories
              </Typography>
              <Typography>
                Something about the memories we make and treasure and forget
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <AccessTimeTwoToneIcon fontSize='large' sx={{ height: 55 }} />
              <Typography variant='h6' sx={{ my: 5 }}>
                Collectables
              </Typography>
              <Typography>
                Something about the things we value and derive joy from
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Values;
