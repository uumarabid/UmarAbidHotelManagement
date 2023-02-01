import routes from "./src/index.js";
import express from "express";
import env from "dotenv";
import cors from "cors"; // need this package for cross origin requests, (for any request that comes from outside of the application)
// import bodyParser from "body-parser"; //  using this package to receive data in the api call, as sending paramteres to api calls like get, add, update
import { json } from "express";

env.config();

const app = express().use(cors()).use(routes);
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(json({ limit: "100mb" }));
// app.use(cors({ origin: true, credentials: false })); // enable cors requests for the application

const port = 3001;
app.get("/", async (req, res) => {
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
