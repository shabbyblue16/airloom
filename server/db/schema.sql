CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(20) NOT NULL,
  lastname VARCHAR(20) NOT NULL,
  email VARCHAR(20) NOT NULL UNIQUE,
  password VARCHAR(20) NOT NULL
);

CREATE TABLE albums (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  text TEXT,
  cover_pic VARCHAR(200),
  users_id INT NOT NULL,
  FOREIGN KEY(users_id) REFERENCES users(id)
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  text VARCHAR(8000),
  albums_id INT NOT NULL,
  FOREIGN KEY (albums_id) REFERENCES albums(id)
);

CREATE TABLE pics (
  id SERIAL PRIMARY KEY,
  url VARCHAR(200) NOT NULL,
  items_id INT NOT NULL,
  FOREIGN KEY (items_id) REFERENCES items(id)
);
