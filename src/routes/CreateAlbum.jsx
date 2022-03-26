import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { NavBar } from '../components';

function CreateAlbum() {
  const [nameValue, setNameValue] = React.useState('Name');
  const [textValue, setTextValue] = React.useState('This item\'s story');

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={3}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item>
          <TextField
            id='name-field'
            label='Name'
            variant='outlined'
            sx={{ width: '60ch' }}
            onChange={handleNameChange}
          />
        </Grid>
        <Grid item>
          <TextField
            id='text-field'
            label='Tell us your story'
            multiline
            rows={8}
            sx={{ width: '60ch' }}
            // defaultValue='Tell us your story'
            onChange={handleTextChange}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateAlbum;
