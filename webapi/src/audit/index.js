import { Router } from "express";
import { getAll } from "./controller.js";

const auditRoute = Router().get("/get", getAll);

export default auditRoute;
