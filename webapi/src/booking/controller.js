import auditEntry from "../utils/audit.js";

export const addBooking = (req, res) => {
  auditEntry(1, "add booking");
  res.send("New booking is added successfully.");
};

export const editBokking = (req, res) => {
  auditEntry(1, "edit booking");
  res.send("Updated successfully.");
};

export const getBokking = (req, res) => {
  res.send("Required bokking is:....");
};

export const getAllBooking = (req, res) => {
  res.send("All bokkings in bokking table are.... ");
};

export const deleteBokkig = (req, res) => {
  auditEntry(1, "delete booking");
  res.send("Successfully deleted.");
};
