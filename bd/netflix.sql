CREATE DATABASE Netflix;

USE Netflix;

CREATE TABLE `movies` (
  `idMovies` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `image` VARCHAR(1000) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `year` FLOAT NOT NULL,
  PRIMARY KEY (`idMovies`));

CREATE TABLE `users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `user` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `plan_details` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUser`));
  
  CREATE TABLE `actors` (
  `idActors` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `birthday` DATE NOT NULL,
  PRIMARY KEY (`idActors`));
  