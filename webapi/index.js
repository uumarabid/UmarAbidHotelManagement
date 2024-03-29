import routes from "./src/index.js";
import express from "express";
import env from "dotenv";
import cors from "cors"; // need this package for cross origin requests, (for any request that comes from outside of the application)
import bodyParser from "body-parser"; //  using this package to receive data in the api call, as sending paramteres to api calls like get, add, update

env.config();

const app = express()
  // .use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  //   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  //   next();
  // })
  .use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

const port = 3001;
app.get("/", async (req, res) => {
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
