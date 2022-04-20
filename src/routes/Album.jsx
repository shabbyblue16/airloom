import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Grid,
  TextField,
  Typography,
  Button,
  Box,
  Stack,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const itemData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
    featured: true,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

function Album({ usersAlbums }) {
  const location = useLocation();
  const { album } = location.state;

  return (
    <Stack
      direction='row'
      sx={{
        width: '100%',
        backgroundColor: 'beige',
      }}
    >
      <Box
        sx={{
          width: '49%',
        }}
      >
        <Grid
          container
          spacing={3}
          direction='column'
          // justifyContent='left'
          alignItems='center'
          component='div'
          sx={{
            mt: 4,
          }}
        >
          <Grid item>
            <Typography
              id='album-name'
              component='div'
              variant='h2'
            // sx={{ borderBottom: 'solid' }}
            >
              {album.name}
            </Typography>
          </Grid>
          <Grid
            item
            sx={{
              // border: 'solid lightGrey',
              backgroundColor: 'white',
              borderRadius: 8,
              width: '50%',
              height: 600,
              mt: 4,
              ml: 3,
            }}
          >
            <Typography
              id='album-text'
              component='div'
              variant='h5'
              // align='center'
              paragraph
            >
              {album.text}
            </Typography>
          </Grid>
          <Grid item sx={{ width: '50%' }}>
            <Link to='/create-item' state={{ albumId: album.id }} style={{ textDecoration: 'none', color: 'white' }}>
              <Button
                variant='contained'
                component='span'
                fullWidth
              >
                Add Item
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <ImageList
        sx={{
          width: '50%',
          // height: '30%',
          // transform: 'translateZ(0)',
          float: 'right',
        }}
        rowHeight={350}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.id} cols={cols} rows={rows}>
              <Link
                to='/item'
                state={{ item }}
                style={{ textDecoration: 'none' }}
              >
                <img
                  src={`${item.img}?w=${250 * cols}&h=${200 * rows}&fit=cover&auto=format`}
                  srcSet={`${item.img}?w=${250 * cols}&h=${200 * rows}&fit=cover&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading='lazy'
                />
              </Link>
              <ImageListItemBar
                sx={{
                  background: 'none',
                  // 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, '
                  // + 'rgba(0,0,0,0.3) 70% rgba(0,0,0,0) 100%)',
                }}
                title={item.title}
                position='top'
                actionIcon={(
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                  >
                    <StarBorderIcon />
                  </IconButton>
                )}
                actionPosition='left'
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Stack>
  );
}

const mapStateToProps = (state) => ({
  usersAlbums: state.usersAlbums,
});

Album.propTypes = ({
  usersAlbums: PropTypes.object,
});

export default Album;
