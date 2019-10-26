CREATE SCHEMA IF NOT EXISTS test;

CREATE TABLE IF NOT EXISTS test."users" (
  id serial NOT NULL,
  username varchar(255),
  password varchar(255),
  PRIMARY KEY (id)
);