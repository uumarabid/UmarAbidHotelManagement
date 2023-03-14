//using express for routing
import { Router } from "express";
import { getDashboardData } from "./controller.js";

//Routing
const dashboardRoute = Router().get("/get", getDashboardData);

export default dashboardRoute;
