const postUser = (user) => {
  fetch(`${process.env.REACT_APP_LOCAL_IP}/users/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  })
    .then((data) => {
      console.log(data.status);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default postUser;
