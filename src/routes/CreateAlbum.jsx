import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavBar } from '../components';
import { postAlbum } from '../actions';

function CreateAlbum({ page, handlePostAlbum, currentUser }) {
  const [nameValue, setNameValue] = React.useState('');
  const [textValue, setTextValue] = React.useState('');
  const [coverPic, setCoverPic] = React.useState('');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSave = () => {
    const album = {
      name: nameValue,
      text: textValue,
      coverPic,
      userId: currentUser.id,
    };
    handlePostAlbum(album, currentUser.albums);
    setNameValue('');
    setTextValue('');
  };

  return (
    <div>
      {/* <NavBar page='Create Album' /> */}
      <Grid
        container
        spacing={3}
        direction='column'
        justifyContent='center'
        alignItems='center'
        component='form'
      >
        <Grid item>
          <p style={{ width: '60ch' }}>
            Create a new album here.
            Tell your people reading this why you decided to document
            and share the things that store lost memories
            and what these things are and container.
          </p>
        </Grid>
        <Grid item>
          <TextField
            error={false}
            id='name-field'
            label='Name'
            variant='outlined'
            helperText=''
            sx={{ width: '60ch' }}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            error={false}
            id='text-field'
            label='Tell us your story'
            multiline
            rows={8}
            helperText=''
            sx={{ width: '60ch' }}
            // defaultValue='Tell us your story'
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            component='span'
          >
            Pick Cover
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            component='span'
            onClick={handleSave}
            // sx={{ backgroundColor: '#cc5500' }}
          >
            Save Album
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  handlePostAlbum: (album, currentAlbums) => {
    dispatch(postAlbum(album, currentAlbums));
  },
});

CreateAlbum.propTypes = {
  page: PropTypes.string,
  handlePostAlbum: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbum);
