import * as React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Box,
  Toolbar,
  Typography,
  Container,
  Link,
} from '@mui/material';

const phCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Item() {
  const location = useLocation();
  const { item } = location.state;

  return (
    <>
      <Box
        sx={{
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Typography
            component='h1'
            variant='h2'
            align='center'
            gutterBottom
          >
            {item.name}
          </Typography>
          <Typography
            variant='h5'
            align='center'
          >
            <em>{item.location}</em>
          </Typography>
          <Typography
            variant='h5'
            align='center'
            paragraph
          >
            {item.text}
          </Typography>
        </Container>
      </Box>
      <Container
        sx={{ py: 8 }}
        maxWidth='md'
      >
        <Grid container spacing={4}>
          {item.urls.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component='img'
                  sx={{ pt: '56.25%' }}
                  image={card}
                  alt='item-pic'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant='h5' component='h2' gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. say whatever whatever blah blah
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>View</Button>
                  <Button size='small'>Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
          <Grid item key='addapic.com' xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component='img'
                sx={{ pt: '56.25%' }}
                alt='add a picture'
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant='h5' component='h2' gutterBottom>
                  Heading
                </Typography>
                <Typography>
                  Add a picture
                </Typography>
              </CardContent>
              <CardActions>
                <Button size='small'>Add</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Item;
