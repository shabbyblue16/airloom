import * as React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { NavBar } from '../components';
import { postItem } from '../actions';

function CreateItem({ handlePostItem }) {
  const [nameValue, setNameValue] = React.useState('');
  const [textValue, setTextValue] = React.useState('');
  const [locValue, setLocValue] = React.useState('');
  const [files, setFiles] = React.useState([]);

  const location = useLocation();
  const { albumId } = location.state;

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleLocChange = (e) => {
    setLocValue(e.target.value);
  };

  const handleFileChange = (e) => {
    setFiles([...files, e.target.files[0]]);
  };

  const handleSave = () => {
    const item = {
      name: nameValue,
      location: locValue,
      text: textValue,
      albumId,
      files,
    };
    handlePostItem(item);
    setNameValue('');
    setTextValue('');
    setLocValue('');
    setFiles([]);
  };

  return (
    <div>
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
            Create a new item here for your album here.
          </p>
        </Grid>
        <Grid item>
          <TextField
            error={false}
            id='name-field'
            label='Name'
            variant='outlined'
            helperText=''
            value={nameValue}
            sx={{ width: '60ch' }}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            error={false}
            id='loc-field'
            label='Location'
            variant='outlined'
            helperText=''
            value={locValue}
            sx={{ width: '60ch' }}
            onChange={handleLocChange}
          />
        </Grid>
        <Grid item>
          <TextField
            error={false}
            id='text-field'
            label='What is this thing'
            multiline
            rows={8}
            helperText=''
            value={textValue}
            sx={{ width: '60ch' }}
            // defaultValue='Tell us your story'
            onChange={handleTextChange}
          />
        </Grid>
        <Grid item sx={{ width: '60ch' }}>
          <input
            hidden
            multiple
            accept='image/*'
            type='file'
            name='pictures'
            id='upload-image-input'
            onChange={handleFileChange}
          />
          <InputLabel htmlFor='upload-image-input'>
            <Button
              variant='contained'
              component='span'
              fullWidth
              sx={{ backgroundColor: '#cc5500' }}
            >
              Upload Pictures
            </Button>
          </InputLabel>
        </Grid>
        <Grid item sx={{ width: '60ch' }}>
          <Button
            variant='contained'
            component='span'
            fullWidth
            onClick={handleSave}
            sx={{ backgroundColor: '#cc5500' }}
          >
            Save Album
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handlePostItem: (item) => {
    dispatch(postItem(item));
  },
});

CreateItem.propTypes = {
  handlePostItem: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(CreateItem);
