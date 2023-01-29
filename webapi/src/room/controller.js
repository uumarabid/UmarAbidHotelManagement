// Create all methods here

import { selectQuery, deleteQuery, insertQuery } from "../../utils/sql.js";

export const addRoom = async (req, res) => {
  let room = {
    room_number: 107,
    room_type: "standard",
    floor_number: 1,
    facilities: "",
  };
  await insertQuery("rooms", room);

  res.send("New room is added successfully.");
};

export const editRoom = async (req, res) => {
  res.send("Updated successfully.");
};

export const getRoom = async (req, res) => {
  console.log(req.body);
  let room = await selectQuery("rooms", `id = 1`);
  res.send(room);
};

export const getAllRoom = async (req, res) => {
  let rooms = await selectQuery("rooms");
  res.send(rooms);
};

export const deleteRoom = async (req, res) => {
  await deleteQuery("rooms", `id = ${req.id}`);
  res.send(true);
};
