//using express for routing
import { Router } from "express";
import roomRoute from "./room/index.js";
import userRoute from "./user/index.js";
import reservationRoute from "./reservation/index.js";
import bookingRoute from "./booking/index.js";
import auditRoute from "./audit/index.js";
import employeeRoute from "./employee/index.js";

//Routing
const routes = Router()
  .use("/room", roomRoute)
  .use("/user", userRoute)
  .use("/reservation", reservationRoute)
  .use("/booking", bookingRoute)
  .use("/audit", auditRoute)
  .use("/employee", employeeRoute);

export default routes;
