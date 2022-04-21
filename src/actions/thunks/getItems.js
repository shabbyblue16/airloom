import usersItems from '../usersItems';

const getItems = (albumId) => (dispatch, getState) => {
  console.log('type', typeof albumId);
  fetch(`http://localhost:5001/items/get/?albumId=${albumId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log('items', data);
      const { items } = getState().usersItems;
      items[albumId] = data;
      dispatch(usersItems(items));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getItems;
