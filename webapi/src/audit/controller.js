import { selectQuery } from "../../utils/sql";

export const getAllAudit = async (req, res) => {
  let audit = await selectQuery("audit");
  console.log("data is receiving");
  res.send(audit);
};
