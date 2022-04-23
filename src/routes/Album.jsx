import * as React from 'react';
import { connect } from 'react-redux';
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
import { ItemList } from '../components';

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
      <ItemList albumId={album.id} />
    </Stack>
  );
}

const mapStateToProps = (state) => ({
  usersAlbums: state.usersAlbums,
});

Album.propTypes = ({
  usersAlbums: PropTypes.array,
});

export default connect(mapStateToProps)(Album);
