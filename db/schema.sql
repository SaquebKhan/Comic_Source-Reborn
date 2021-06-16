DROP DATABASE IF EXISTS comicsource_db;
CREATE DATABASE comicsource_db;

USE comicsource_db;

CREATE TABLE profiles
(
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    password VARCHAR (255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE heros
(
    id INT NOT NULL AUTO_INCREMENT,
    heroname VARCHAR (255) NOT NULL,
    publisher VARCHAR (255) NOT NULL,
    PRIMARY KEY(id)
);