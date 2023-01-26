import { Router } from "express";
import { addBooking, deleteBokkig, editBokking, getAllBooking, getBokking } from "./controller.js";

const bookingRoutes = Router()
  .post("/add", addBooking)
  .post("/edit", editBokking)
  .get("/get", getBokking)
  .get("/getAll", getAllBooking)
  .post("/delete", deleteBokkig);

export default bookingRoutes;
