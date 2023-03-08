import auditEntry from "../utils/audit.js";
import { insertQuery, updateQuery } from "../../utils/sql.js";

export const addBooking = async (req, res) => {
  const data = req.body;
  const booking = {
    guests_id: 0,
    rooms_id: data.rooms_id,
    check_in_date: `${data.check_in_date}`,
    check_out_date: `${data.check_out_date}`,
    total_cost: data.total_cost || 0,
    extra_cost: 0, //data.extra_cost,
    deposit: Number(data.deposit) || 0,
  };

  const guest = {
    first_name: data.first_name,
    last_name: data.last_name,
    number_of_guests: 1, //data.number_of_guests,
    address: data.address,
    phone_number: data.phone_number,
    email: data.email,
    is_reserved: 0,
  };
  const result = await insertQuery("guests", guest);
  booking.guests_id = result[0]?.insertId;

  await insertQuery("bookings", booking);
  auditEntry(1, "add booking");
  res.send("New booking is added successfully.");
};

export const editBooking = async (req, res) => {
  let booking = req.body;
  await updateQuery("bookings", booking, `id = ${booking.id}`);
  auditEntry(1, "edit booking");
  res.send("Updated successfully.");
};

export const getBooking = (req, res) => {
  res.send("Required booking is:....");
};

export const getAllBooking = (req, res) => {
  res.send("All bookings in bokking table are.... ");
};

export const deleteBookig = (req, res) => {
  auditEntry(1, "delete booking");
  res.send("Successfully deleted.");
};
