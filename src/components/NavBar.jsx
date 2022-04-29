/* eslint-disable react/forbid-prop-types */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import Container from '@mui/material/Container';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import { getItems } from '../actions';

function NavBar({ currentUser, usersAlbums, fetchItems }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElAlbums, setAnchorElAlbums] = React.useState(null);

  const handleUserOpen = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleUserClose = () => {
    setAnchorElUser(null);
  };

  const handleAlbumsOpen = (e) => {
    setAnchorElAlbums(e.currentTarget);
  };

  const handleAlbumsClose = () => {
    setAnchorElAlbums(null);
  };

  const handleAlbumClick = (albumId) => {
    fetchItems(albumId);
  };

  return (
    <AppBar position='static'>
      <Toolbar
        sx={{
          backgroundColor: '#cc5500',
        }}
      >
        <Typography
          variant='h4'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Airloom</Link>
        </Typography>
        {/* <Typography
          variant='h4'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          {page}
        </Typography> */}
        {currentUser && (
          <>
            <Typography
              variant='h6'
              component='div'
              sx={{ mr: 1 }}
            >
              Collections
            </Typography>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleAlbumsOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='albums-appbar'
              anchorEl={anchorElAlbums}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElAlbums)}
              onClick={handleAlbumsClose}
            >
              <MenuItem><Link to='/create-album' style={{ textDecoration: 'none', color: 'black' }}>New...</Link></MenuItem>
              {
                usersAlbums.map((album, key) => (
                  <MenuItem key={album.id} onClick={(() => handleAlbumClick(album.id))}>
                    <Link
                      to='/album'
                      state={{ album }}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      {album.name}
                    </Link>
                  </MenuItem>
                ))
              }
            </Menu>
          </>
        )}
        {
          (currentUser)
            ? (
              <div>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleUserOpen}
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id='user-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClick={handleUserClose}
                >
                  <MenuItem onClick={handleUserClose}>Profile</MenuItem>
                </Menu>
              </div>
            )
            : (
              <>
                <div>
                  <Typography
                    variant='h6'
                    component='div'
                    sx={{ mr: 4 }}
                  >
                    <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>Log In</Link>
                  </Typography>
                </div>
                <div>
                  <Typography
                    variant='h6'
                    component='div'
                  >
                    <Link to='/signup' style={{ textDecoration: 'none', color: 'white' }}>Sign Up</Link>
                  </Typography>
                </div>
              </>
            )
        }
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
  usersAlbums: state.usersAlbums,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: (albumId) => {
    dispatch(getItems(albumId));
  },
});

NavBar.propTypes = {
  currentUser: PropTypes.object,
  usersAlbums: PropTypes.array,
  fetchItems: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
