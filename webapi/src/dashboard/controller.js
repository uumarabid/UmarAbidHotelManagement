import { selectCustomQuery } from "../../utils/sql.js";

export const getDashboardData = async (req, res) => {
  const query = `SELECT 
  (SELECT count(e.id) from employees e ) as 'employees',
  (SELECT count(e.id) from reservations e ) as 'reservations',
  (SELECT count(e.id) from bookings e ) as 'bookings',
  (SELECT count(e.id) from rooms e ) as 'rooms',
  (SELECT count(e.id) from users e ) as 'users'
  `;
  let users = await selectCustomQuery(query);
  res.send(users);
};
