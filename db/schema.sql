### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN DEFAULT FALSE,
	PRIMARY KEY (id)
);

DELETE FROM tablename;
ALTER TABLE burgers AUTO_INCREMENT = 1;

select * from burgers