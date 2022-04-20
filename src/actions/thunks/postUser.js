import currentUser from '../currentUser';
import usersAlbums from '../usersAlbums';
import usersItems from '../usersItems';

const postUser = (user) => (dispatch) => {
  fetch('http://localhost:5001/users/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(currentUser(data));
      dispatch(usersAlbums(data.albums));
      dispatch(usersItems(data.items));
    })
    .catch((err) => {
      console.log('Email already exists', err); // Catch for certain http codes like 409
    });
};

export default postUser;
