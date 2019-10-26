CREATE SCHEMA IF NOT EXISTS testdb;

CREATE TABLE IF NOT EXISTS testdb."user" (
  id serial NOT NULL,
  username varchar(255),
  userdata jsonb,
  PRIMARY KEY (id)
);