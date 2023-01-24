const mysql = require("mysql2");

const myTest = () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "admin",
    password: "123qwe123qwe",
    database: "hotelmanagement",
  });
  let data = null;
  connection.connect();

  // query the database
  connection.query("SELECT * FROM employee", function (err, rows, fields) {
    if (!err) {
      console.log("The solution is: ", rows);
    } else {
      console.log("Error while performing Query.", err);
    }
    data = rows;
  });

  connection.end();

  return data;
};

module.exports = { myTest };
