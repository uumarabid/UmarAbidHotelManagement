import { Router } from "express";
import { addBooking, deleteBookig, editBooking, getAllBooking, getBooking } from "./controller.js";

const bookingRoute = Router()
  .post("/add", addBooking)
  .post("/edit", editBooking)
  .get("/get", getBooking)
  .get("/getAll", getAllBooking)
  .post("/delete", deleteBookig);

export default bookingRoute;
