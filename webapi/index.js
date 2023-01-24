const express = require("express");
const { myTest } = require("./test");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  const employee = myTest();

  res.send("Hello World!" + JSON.stringify(employee));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
