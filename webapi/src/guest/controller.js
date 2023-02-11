import { selectQuery, deleteQuery, insertQuery, updateQuery } from "../../utils/sql.js";

export const addGuest = async (req, res) => {
  let guest = req.body;
  await insertQuery("guests", guest);
  res.send("New Guest is added successfully.");
};

export const editGuest = async (req, res) => {
  const guest = req.body;
  await updateQuery("guests", guest, `id = ${guest.id}`);
  res.send("Updated successfully.");
};

export const getGuest = async (req, res) => {
  let { id } = req.query;
  let guest = await selectQuery("guests", `id = ${id}`);
  res.send(guest);
};

export const getAllGuest = async (req, res) => {
  let guests = await selectQuery("guests");
  res.send(guests);
};

export const deleteGuest = async (req, res) => {
  let { id } = req.body;
  await deleteQuery("guests", `id = ${id}`);
  res.send(true);
};
