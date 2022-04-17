import usersAlbums from '../usersAlbums';

const postItem = (item) => (dispatch) => {
  fetch('http://localhost:5001/items/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postItem;
