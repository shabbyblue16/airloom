import changeItems from '../changeItems';

const getItems = (albumId) => (dispatch, getState) => {
  fetch(`http://localhost:5001/items/get/?albumId=${albumId}`)
    .then((res) => res.json())
    .then((data) => {
      const { usersItems } = getState();
      usersItems[albumId] = data;
      dispatch(changeItems(usersItems));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getItems;
