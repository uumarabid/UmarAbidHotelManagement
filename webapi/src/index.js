//using express for routing
import { Router } from "express";
import roomRoute from "./room/index.js";
import userRoute from "./user/index.js";
import reservationRoute from "./reservation/index.js";

//Routing
const routes = Router().use("/room", roomRoute).use("/user", userRoute).use("/reservation", reservationRoute);

export default routes;
