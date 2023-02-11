import { selectQuery, deleteQuery, insertQuery, updateQuery, selectCustomQuery } from "../../utils/sql.js";

export const addReservation = async (req, res) => {
  let reservation = req.body;
  await insertQuery("reservations", reservation);
  res.send("New Reservation is added successfully.");
};

export const editReservation = async (req, res) => {
  const reservation = req.body;
  await updateQuery("reservations", reservation, `id = ${reservation.id}`);
  res.send("Updated successfully.");
};

export const getReservation = async (req, res) => {
  let { id } = req.query;
  let reservation = await selectQuery("reservations", `id = ${id}`);
  res.send(reservation);
};

export const getAllReservation = async (req, res) => {
  const query =
    "SELECT r.*, CONCAT(g.first_name, ', ', g.last_name) as guest_name, ro.room_number from reservations r INNER JOIN guests g ON r.guests_id = g.id INNER JOIN rooms ro ON r.rooms_id = ro.id";
  let reservations = await selectCustomQuery(query);
  res.send(reservations);
};

export const deleteReservation = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("reservations", `id = ${id}`);
  res.send(true);
};
