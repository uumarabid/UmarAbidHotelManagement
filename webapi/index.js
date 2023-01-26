import routes from "./src/index.js";
import express from "express";

const app = express().use(routes);
const port = 3001;

app.get("/", (req, res) => {
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
