CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean,

PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO burgers (burger_name, devoured) VALUES ('Big Mac', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Whopper', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Jucie Lucy', false);

