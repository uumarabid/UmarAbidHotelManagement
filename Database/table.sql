CREATE DATABASE `hotelmanagement`;

CREATE TABLE `hotelmanagement`.`employees` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `address` VARCHAR(100) NULL,
  `phone` VARCHAR(45) NULL,
  `personal_email` VARCHAR(45) NULL,
  `company_email` VARCHAR(45) NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `employee_id` INT NULL,
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
  `check_in_date` VARCHAR(60) NULL,
  `check_out_date` VARCHAR(60) NULL,
  `is_reserved` BIT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`reservations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `guests_id` INT NULL,
  `rooms_id` INT NULL,
  `reservation_check_in_date` VARCHAR(60) NULL,
  `reservation_check_out_date` VARCHAR(60) NULL,
  `total_cost` FLOAT NULL,
  `extra_cost` FLOAT NULL,
  `deposit` FLOAT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`bookings` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `guests_id` INT NULL,
  `rooms_id` INT NULL,
  `reservation_id` INT NULL,
  `check_in_date` VARCHAR(60) NULL,
  `check_out_date` VARCHAR(60) NULL,
  `total_cost` FLOAT NULL,
  `extra_cost` FLOAT NULL,
  ` deposit` FLOAT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `hotelmanagement`.`audit` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `operation` VARCHAR(60) NULL,
  `operation_date_time` VARCHAR(60) NULL,
  PRIMARY KEY (`id`));
