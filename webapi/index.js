import routes from "./src/index.js";
import express from "express";
import myTest from "./test.js";

const app = express().use(routes);
const port = 3001;

app.get("/", async (req, res) => {
  const test = await myTest();
  console.log(test);
  res.send("The application is running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
