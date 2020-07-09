/* Create and use the burgers db */
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INTEGER auto_increment,
burger_name VARCHAR(40),
devoured BOOLEAN,
PRIMARY KEY (id)
);
