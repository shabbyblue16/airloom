const postAlbum = (album) => {
  fetch(`${process.env.REACT_APP_LOCAL_IP}/albums/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(album),
  })
    .then((data) => {
      console.log(data.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postAlbum;
