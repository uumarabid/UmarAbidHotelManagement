//using express for routing
import { Router } from "express";
import { addRoom, deleteRoom, editRoom, getAllRoom, getRoom } from "./controller.js";

//Routing
const roomRoute = Router()
  .post("/add", addRoom)
  .post("/edit", editRoom)
  .get("/get", getRoom)
  .get("/getAll", getAllRoom)
  .post("/delete", deleteRoom);

export default roomRoute;
