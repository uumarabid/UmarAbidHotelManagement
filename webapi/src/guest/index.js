import { Router } from "express";
import { addGuest, deleteGuest, editGuest, getAllGuest, getGuest } from "./controller.js";

//routing
const guestRoute = Router()
  .post("/add", addGuest)
  .post("/edit", editGuest)
  .get("/get", getGuest)
  .get("/getall", getAllGuest)
  .post("/delete", deleteGuest);

export default guestRoute;
