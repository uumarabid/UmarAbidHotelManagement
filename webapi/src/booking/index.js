import { Router } from "express";
import { addBooking, deleteBookig, editBooking, checkoutBooking, getAllBooking, getBooking } from "./controller.js";

const bookingRoute = Router()
  .post("/add", addBooking)
  .post("/edit", editBooking)
  .post("/checkout", checkoutBooking)
  .get("/get", getBooking)
  .get("/getAll", getAllBooking)
  .post("/delete", deleteBookig);

export default bookingRoute;
