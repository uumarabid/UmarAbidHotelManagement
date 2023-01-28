import mysql from "mysql2";

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const selectQuery = async (table, columns, condition) => {
  try {
    await connection.connect();

    let query = `SELECT `;
    if (column) {
      query += `${columns.join(", ")} FROM `;
    } else {
      query += `* FROM `;
    }
    query += `${table}`;
    if (condition) {
      query += ` WHERE ${condition}`;
    }

    // select data from table
    // https://stackoverflow.com/questions/31875621/how-to-properly-return-a-result-from-mysql-with-node
    [rows] = await connection.query(query);

    return rows;
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};

const deleteQuery = async (table, condition) => {
  try {
    if (!condition) {
      throw new Error("Missing condition in delete query");
    }

    await connection.connect();

    let query = `DELETE * FROM ${table} where ${condition}`;

    // delete entry from table
    // https://stackoverflow.com/questions/31875621/how-to-properly-return-a-result-from-mysql-with-node
    let data = await connection.query(query);
    return data;
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};

const insertQuery = async (table, data) => {
  try {
    await connection.connect();

    const keys = Object.keys(data);
    const values = Object.values(data);
    const sql = `INSERT INTO ${table} (${keys.join(", ")}) VALUES (${values.map(() => "?").join(", ")})`;
    // insert entry into table
    // https://stackoverflow.com/questions/31875621/how-to-properly-return-a-result-from-mysql-with-node
    await connection.query(query);
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};

// example
// const data = {
//     name: 'John',
//     age: 25
// };
// const table = 'users';
// const condition = 'id = 1';

// updateTable(data, table, condition);
const updateQuery = async (data, table, condition) => {
  try {
    if (!condition) {
      throw new Error("Missing condition in update query");
    }

    await connection.connect();

    const keys = Object.keys(data);
    const values = Object.values(data);
    const set = keys.map((key, index) => key + "=?").join(", ");
    const sql = `UPDATE ${table} SET ${set} WHERE ${condition}`;

    // insert entry into table
    // https://stackoverflow.com/questions/31875621/how-to-properly-return-a-result-from-mysql-with-node
    await connection.query(query);
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};
