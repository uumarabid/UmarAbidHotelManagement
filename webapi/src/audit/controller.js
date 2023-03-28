import { selectQuery } from "../../utils/sql.js";

export const getAllAudit = async (req, res) => {
  let audit = await selectQuery("audit", null, null, "id desc");
  // console.log("data is receiving");
  res.send(audit);
};
