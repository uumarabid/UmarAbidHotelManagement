import mysql from "mysql2";

const myTest = async () => {
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
  data = await connection.promise().query("SELECT * FROM employee");

  connection.end();

  return data[0];
};

export default myTest;
