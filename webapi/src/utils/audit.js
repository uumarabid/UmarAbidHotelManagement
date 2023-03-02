import { insertQuery } from "../../utils/sql.js";

const auditEntry = (user_id, operation) => {
  const audit = {
    user_id,
    operation,
    operation_date_time: new Date().toISOString(),
  };
  insertQuery("audit", audit);
};

export default auditEntry;
