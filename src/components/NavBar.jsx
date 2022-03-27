import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

function NavBar({ page }) {
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
        <Typography
          variant='h4'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          {page}
        </Typography>
        <Typography
          variant='h6'
          component='div'
          sx={{ mr: 1 }}
        >
          Albums
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
          <MenuItem><Link to='/create-album' style={{ textDecoration: 'none' }}>New...</Link></MenuItem>
        </Menu>
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
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  page: PropTypes.string,
};

export default NavBar;
