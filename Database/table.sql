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