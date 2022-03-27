import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavBar } from '../components';
import postAlbum from '../actions/postAlbum';

function CreateAlbum({ page }) {
  const [nameValue, setNameValue] = React.useState('Name');
  const [textValue, setTextValue] = React.useState('This item\'s story');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSave = () => {
    const album = {
      name: nameValue,
      story: textValue,
    };
    postAlbum(album);
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

// const mapDispatchToProps = (dispatch) => ({
//   handlePostAlbum: (album)
// })

CreateAlbum.propTypes = {
  page: PropTypes.string,
};

export default CreateAlbum;
