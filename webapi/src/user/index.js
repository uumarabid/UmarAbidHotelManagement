//using express for routing
import { Router } from "express";
import { addUser, deleteUser, editUser, getAllUser, getUser } from "./controller.js";

//Routing
const userRoute = Router()
  .post("/add", addUser)
  .post("/edit", editUser)
  .get("/get", getUser)
  .get("/getAll", getAllUser)
  .post("/delete", deleteUser);

export default userRoute;
