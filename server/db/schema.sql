CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE albums (
  id INT NOT NULL PRIMARY KEY,
  text VARCHAR(8000)
  users_id INT NOT NULL,
  FOREIGN KEY(users_id) REFERENCES users(id)
);

CREATE TABLE items (
  id INT NOT NULL PRIMARY KEY,
  text VARCHAR(8000),
  albums_id INT NOT NULL,
  FOREIGN KEY (albums_id) REFERENCES albums(id)
);

CREATE TABLE pics (
  id INT NOT NULL PRIMARY KEY,
  url VARCHAR(200) NOT NULL,
  items_id INT NOT NULL,
  FOREIGN KEY (items_id) REFERENCES items(id)
);
