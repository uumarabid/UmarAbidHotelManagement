-- room types 
-- standard, deluxe, suites, executive, and luxury.


-- employees data
INSERT INTO `hotelmanagement`.`employees` (`first_name`, `last_namel`, `adress`, `phone`, `personal_email`, `company_email`) VALUES ('admin', 'admin', 'house 21', '0789456125', 'admin@test.com', 'admin@hotel.com');
INSERT INTO `hotelmanagement`.`employees` (`first_name`, `last_namel`, `adress`, `phone`, `personal_email`, `company_email`) VALUES ('umar', 'umar', 'house 88', '075648963', 'umar@test.com', 'umar@hotel.com');

-- User data
INSERT INTO `hotelmanagement`.`users` (`user_name`, `password`, `employee_id`, `is_admin`) VALUES ('admin', 'admin', 1, 1);
INSERT INTO `hotelmanagement`.`users` (`user_name`, `password`, `employee_id`, `is_admin`) VALUES ('umar', 'umar', 2, 0);


-- Rooms data
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('101', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('102', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('103', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('104', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('105', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('106', 'standard', '1','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('201', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('202', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('203', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('204', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('205', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('206', 'deluxe', '2','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('301', 'suites', '3','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('302', 'suites', '3','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('303', 'suites', '3','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('304', 'suites', '3','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('305', 'suites', '3','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('401', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('402', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('403', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('404', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('405', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('406', 'executive', '4','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('501', 'luxury', '5','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('502', 'luxury', '5','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('503', 'luxury', '5','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('504', 'luxury', '5','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('505', 'luxury', '5','Fridge,Dinning table with chairs,Locker,TV,Hair dryer');


-- guests table
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest1', 'one', '4', 'house 09 ', '123113', 'abc1@test.com', '2023-02-02', '2023-02-13', 0);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest2', 'two', '1', 'house 01 ', '3123213', 'abc2@test.com', '2023-02-22', '2023-02-27', 0);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest3', 'three', '3', 'house 02 ', '45345345', 'abc22@test.com', '2023-02-12', '2023-02-16', 0);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest4', 'four', '5', 'house 03 ', '135887654', 'abc3@test.com', '2023-02-06', '2023-02-12', 0);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest5', 'five', '2', 'house 04 ', '12346', 'abc4@test.com', '2023-02-09', '2023-02-23', 0);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest6', 'six', '6', 'house 05 ', '8876664', 'abc5@test.com', '2023-02-16', '2023-02-28', 1);
INSERT INTO `hotelmanagement`.`guests` (`first_name`, `last_name`, `number_of_guests`, `address`, `phone_number`, `email`, `check_in_date`, `check_out_date`, `is_reserved`)  VALUES ('guest7', 'seven', '10', 'house 06 ', '23425677', 'abc6@test.com', '2023-02-19', '2023-02-24', 1);


-- reservation table
INSERT INTO `hotelmanagement`.`reservations` (`guests_id`, `rooms_id`, `reservation_check_in_date`, `reservation_check_out_date`, `total_cost`, `deposit`) VALUES ('6', '3', '2023-02-16', '2023-02-28', '220', '50');
INSERT INTO `hotelmanagement`.`reservations` (`guests_id`, `rooms_id`, `reservation_check_in_date`, `reservation_check_out_date`, `total_cost`, `deposit`) VALUES ('7', '6', '2023-02-19', '2023-02-24', '360', '100');
