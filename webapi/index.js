import routes from "./src/index.js";
import express from "express";
import env from "dotenv";
import cors from "cors"; // need this package for cross origin requests, (for any request that comes from outside of the application)
import bodyParser from "body-parser"; //  using this package to receive data in the api call, as sending paramteres to api calls like get, add, update
import cookieParser from "cookie-parser";
import session from "express-session";
// const bcrypt = require("bcrypt");
// const saltRound = 10;

env.config();

const app = express().use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);
app.use(routes);

const port = 3001;
app.get("/", async (req, res) => {
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
