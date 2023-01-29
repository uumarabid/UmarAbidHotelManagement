import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "127.0.0.1", //process.env.DB_HOST,
  user: "admin", //process.env.DB_USER,
  password: "123qwe123qwe", //process.env.DB_PASSWORD,
  database: "hotelmanagement", //process.env.DB_NAME,
});

export const selectQuery = async (table, condition, columns) => {
  try {
    await connection.connect();
    console.log(table, condition);
    let query = `SELECT `;
    if (columns) {
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
    let data = await connection.promise().query(query);

    return data[0];
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};

export const deleteQuery = async (table, condition) => {
  try {
    if (!condition) {
      throw new Error("Missing condition in delete query");
    }

    await connection.connect();

    let query = `DELETE * FROM ${table} where ${condition}`;

    // delete entry from table
    let data = await connection.promise().query(query);
    return data;
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};

export const insertQuery = async (table, data) => {
  try {
    await connection.connect();

    const columns = Object.keys(data);
    const values = columns.map((column) => `"${data[column]}"`);
    const placeholders = values.join(",");
    const query = `INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders})`;
    console.log(query);
    // insert entry into table
    await connection.promise().execute(query);
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
export const updateQuery = async (table, data, condition) => {
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
    await connection.promise().execute(query);
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};
