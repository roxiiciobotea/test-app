CREATE SCHEMA IF NOT EXISTS testdb;

CREATE TABLE IF NOT EXISTS testdb."users" (
  id serial NOT NULL,
  username varchar(255),
  password varchar(255),
  PRIMARY KEY (id)
);