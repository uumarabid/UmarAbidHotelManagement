//using express for routing
import { Router } from "express";
import { addRoom, deleteRoom, editRoom, getAllRoom, getRoom } from "./controller";

//Routing
const routes = Router()
  .post("/add", addRoom)
  .post("/edit", editRoom)
  .get("/get", getRoom)
  .get("/getAll", getAllRoom)
  .post("/delete", deleteRoom);
