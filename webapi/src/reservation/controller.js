import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

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
  let reservations = await selectQuery("reservations");
  res.send(reservations);
};

export const deleteReservation = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("reservations", `id = ${id}`);
  res.send(true);
};
