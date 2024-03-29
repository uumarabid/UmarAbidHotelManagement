import mysql from "mysql2";

export const selectQuery = async (table, condition, columns, sort) => {
  const connection = mysql.createConnection({
    host: "127.0.0.1", //process.env.DB_HOST,
    user: "admin", //process.env.DB_USER,
    password: "123qwe123qwe", //process.env.DB_PASSWORD,
    database: "hotelmanagement", //process.env.DB_NAME,
  });

  try {
    await connection.connect();

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
    if (sort) {
      query += ` order by ${sort}`;
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

export const selectCustomQuery = async (query) => {
  const connection = mysql.createConnection({
    host: "127.0.0.1", //process.env.DB_HOST,
    user: "admin", //process.env.DB_USER,
    password: "123qwe123qwe", //process.env.DB_PASSWORD,
    database: "hotelmanagement", //process.env.DB_NAME,
  });

  try {
    await connection.connect();
    console.log(query);
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
  const connection = mysql.createConnection({
    host: "127.0.0.1", //process.env.DB_HOST,
    user: "admin", //process.env.DB_USER,
    password: "123qwe123qwe", //process.env.DB_PASSWORD,
    database: "hotelmanagement", //process.env.DB_NAME,
  });

  try {
    if (!condition) {
      throw new Error("Missing condition in delete query");
    }

    await connection.connect();

    let query = `DELETE FROM ${table} where ${condition}`;

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
  const connection = mysql.createConnection({
    host: "127.0.0.1", //process.env.DB_HOST,
    user: "admin", //process.env.DB_USER,
    password: "123qwe123qwe", //process.env.DB_PASSWORD,
    database: "hotelmanagement", //process.env.DB_NAME,
  });
  let id = 0;
  try {
    await connection.connect();

    const columns = Object.keys(data);
    const values = columns.map((column) => (typeof data[column] == "string" ? `"${data[column]}"` : `${data[column]}`));
    const placeholders = values.join(",");
    const query = `INSERT INTO ${table} (${columns.join(", ")}) VALUES (${placeholders})`;
    // insert entry into table
    console.log(query);
    id = await connection.promise().execute(query);
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
  return id;
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
  const connection = mysql.createConnection({
    host: "127.0.0.1", //process.env.DB_HOST,
    user: "admin", //process.env.DB_USER,
    password: "123qwe123qwe", //process.env.DB_PASSWORD,
    database: "hotelmanagement", //process.env.DB_NAME,
  });

  try {
    if (!condition) {
      throw new Error("Missing condition in update query");
    }

    await connection.connect();

    const keys = Object.keys(data);
    const values = Object.values(data);
    const set = keys
      .map((key, index) => (typeof values[index] == "string" ? `${key} = '${values[index]}' ` : `${key} = ${values[index]} `))
      .join(", ");

    const sql = `UPDATE ${table} SET ${set} WHERE ${condition}`;
    console.log(sql);
    // insert entry into table
    await connection.promise().execute(sql);
  } catch (err) {
    console.error(err);
  } finally {
    await connection.end();
  }
};
