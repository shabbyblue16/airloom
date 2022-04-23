import changeItems from '../changeItems';

const postItem = (newItem, items) => (dispatch) => {
  const form = new FormData();
  const {
    name,
    location,
    text,
    albumId,
    files,
  } = newItem;
  form.append('name', name);
  form.append('location', location);
  form.append('text', text);
  form.append('albumId', albumId);
  files.forEach(async (file) => {
    await form.append('pictures', file, file.name);
  });

  fetch('http://localhost:5001/items/create', {
    method: 'POST',
    // headers: { 'Content-Type': 'multipart/form-data' },
    body: form,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const updatedItems = items;
      updatedItems[albumId].push(data);
      dispatch(changeItems(updatedItems));
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postItem;
