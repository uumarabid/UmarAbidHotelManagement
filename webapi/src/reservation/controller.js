import { deleteQuery, insertQuery, updateQuery, selectCustomQuery } from "../../utils/sql.js";
import auditEntry from "../utils/audit.js";

export const addReservation = async (req, res) => {
  const data = req.body;
  const reservation = {
    guests_id: 0,
    rooms_id: data.rooms_id,
    reservation_check_in_date: `${data.reservation_check_in_date}`,
    reservation_check_out_date: `${data.reservation_check_out_date}`,
    total_cost: data.total_cost || 0,
    extra_cost: 0,
    deposit: data.deposit || 0,
  };

  const guest = {
    first_name: data.first_name,
    last_name: data.last_name,
    number_of_guests: 1, //data.number_of_guests,
    address: data.address,
    phone_number: data.phone_number,
    email: data.email,
    is_reserved: 1,
  };
  const result = await insertQuery("guests", guest);
  reservation.guests_id = result[0]?.insertId;
  await insertQuery("reservations", reservation);
  auditEntry(data.currentUserId, "add reservation with guest");
  res.send("New Reservation is added successfully.");
};

export const editReservation = async (req, res) => {
  const reservation = req.body;
  const userId = reservation.currentUserId;
  delete reservation.currentUserId;

  await updateQuery("reservations", reservation, `id = ${reservation.id}`);
  auditEntry(userId, "edit reservation");
  res.send("Updated successfully.");
};

export const getReservation = async (req, res) => {
  let { id } = req.query;
  const query = `SELECT * FROM reservations r INNER JOIN guests g ON r.guests_id =  g.id WHERE r.id = ${id}`;
  let reservation = await selectCustomQuery(query);
  res.send(reservation);
};

export const getAllReservation = async (req, res) => {
  const query =
    "SELECT r.*, CONCAT(g.first_name, ', ', g.last_name) as guest_name, ro.room_number from reservations r INNER JOIN guests g ON r.guests_id = g.id INNER JOIN rooms ro ON r.rooms_id = ro.id";
  let reservations = await selectCustomQuery(query);
  res.send(reservations);
};

export const deleteReservation = async (req, res) => {
  let { id, userId } = req.body;
  await deleteQuery("reservations", `id = ${id}`);
  auditEntry(userId, "delete reservation");
  res.send(true);
};
