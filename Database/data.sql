-- room types 
-- standard, deluxe, suites, executive, and luxury.


-- employees data
INSERT INTO `hotelmanagement`.`employees` (`first_name`, `last_namel`, `adress`, `phone`, `personal_email`, `company_email`) VALUES ('admin', 'admin', 'house 21', '0789456125', 'admin@test.com', 'admin@hotel.com');
INSERT INTO `hotelmanagement`.`employees` (`first_name`, `last_namel`, `adress`, `phone`, `personal_email`, `company_email`) VALUES ('umar', 'umar', 'house 88', '075648963', 'umar@test.com', 'umar@hotel.com');

-- User data
INSERT INTO `hotelmanagement`.`users` (`user_name`, `password`, `employee_id`, `is_admin`) VALUES ('admin', 'admin', 1, 1);
INSERT INTO `hotelmanagement`.`users` (`user_name`, `password`, `employee_id`, `is_admin`) VALUES ('umar', 'umar', 2, 0);


-- Rooms data
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('101', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('102', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('103', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('104', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('105', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('106', 'standard', '1','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('201', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('202', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('203', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('204', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('205', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('206', 'deluxe', '2','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('301', 'suites', '3','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('302', 'suites', '3','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('303', 'suites', '3','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('304', 'suites', '3','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('305', 'suites', '3','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('401', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('402', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('403', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('404', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('405', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('406', 'executive', '4','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('501', 'luxury', '5','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('502', 'luxury', '5','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('503', 'luxury', '5','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('504', 'luxury', '5','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');
INSERT INTO `hotelmanagement`.`rooms` (`room_number`, `room_type`, `floor_number`, `facilities`) VALUES ('505', 'luxury', '5','Fridge, Dinning table with chairs, Locker, TV, Hair dryer');


