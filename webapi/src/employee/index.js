//using express for routing
import { Router } from "express";
import { addEmployee, deleteEmployee, editEmployee, getAllEmployee, getEmployee } from "./controller.js";

//Routing
const EmployeeRoute = Router()
  .post("/add", addEmployee)
  .post("/edit", editEmployee)
  .get("/get", getEmployee)
  .get("/getAll", getAllEmployee)
  .post("/delete", deleteEmployee);

export default EmployeeRoute;
