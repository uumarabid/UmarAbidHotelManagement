import { Router } from "express";
import { addReservation, deleteReservation, editReservation, getAllReservation, getReservation } from "./controller.js";

//routing
const reservationRoute = Router()
  .post("/add", addReservation)
  .post("/edit", editReservation)
  .get("/get", getReservation)
  .get("/getall", getAllReservation)
  .post("/delete", deleteReservation);

export default reservationRoute;
