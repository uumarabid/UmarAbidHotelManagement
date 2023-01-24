CREATE DATABASE `hotelmanagement`;

CREATE TABLE `hotelmanagement`.`employee` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_namel` VARCHAR(45) NULL,
  `adress` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `personal_email` VARCHAR(45) NULL,
  `company_email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `employee_id` VARCHAR(45) NULL,
  `is_admin` BIT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`rooms` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `room_number` INT NULL,
  `room_type` VARCHAR(45) NULL,
  `floor_number` INT NULL,
  `facilities` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`guests` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `number_of_guests` INT NULL,
  `address` VARCHAR(100) NULL,
  `phone_number` VARCHAR(45) NULL,
  `email` VARCHAR(60) NULL,
  `check_in_date` DATETIME NULL,
  `check_out_date` DATETIME NULL,
  `is_reserved` BIT NULL,
  PRIMARY KEY (`id`));