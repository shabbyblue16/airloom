const getUser = (user) => {
  fetch('/users/login', {
    method: 'GET',
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

export default getUser;
