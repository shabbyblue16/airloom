const postUser = (user) => {
  console.log(user);
  fetch('http://localhost:5001/users/', {
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
