import currentUser from '../currentUser';
import usersAlbums from '../usersAlbums';

const getUser = (user) => (dispatch) => {
  fetch('http://localhost:5001/users/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch(currentUser(data));
      dispatch(usersAlbums(data.albums));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUser;
