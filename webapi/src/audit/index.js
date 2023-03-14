import { Router } from "express";
import { getAllAudit } from "./controller.js";

const auditRoute = Router().get("/getAll", getAllAudit);

export default auditRoute;
