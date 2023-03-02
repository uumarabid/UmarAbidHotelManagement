//using express for routing
import { Router } from "express";
import { loginGet, loginPost, addUser, deleteUser, editUser, getAllUser, getUser } from "./controller.js";

//Routing
const userRoute = Router()
  .get("/login", loginGet)
  .post("/login", loginPost)
  .post("/add", addUser)
  .post("/edit", editUser)
  .get("/get", getUser)
  .get("/getAll", getAllUser)
  .post("/delete", deleteUser);

export default userRoute;
