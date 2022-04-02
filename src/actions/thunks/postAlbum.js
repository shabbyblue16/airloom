import usersAlbums from '../usersAlbums';

const postAlbum = (album, currentAlbums) => (dispatch) => {
  fetch('http://localhost:5001/albums/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album),
  })
    .then((res) => res.json())
    .then((data) => {
      currentAlbums.push(data);
      dispatch(usersAlbums(currentAlbums));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postAlbum;
