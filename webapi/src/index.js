//using express for routing
import { Router } from "express";
import roomRoute from "./room/index.js";
import userRoute from "./user/index.js";
import reservationRoute from "./reservation/index.js";
import bookingRoute from "./booking/index.js";
import employeeRoute from "./employee/index.js";
import guestRoute from "./guest/index.js";
// import auditRoute from "./audit/index.js";

//Routing
const routes = Router()
  .use("/room", roomRoute)
  .use("/user", userRoute)
  .use("/reservation", reservationRoute)
  .use("/guest", guestRoute)
  .use("/booking", bookingRoute)
  .use("/employee", employeeRoute);
// .use("/audit", auditRoute);

export default routes;
