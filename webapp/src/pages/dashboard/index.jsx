import react from "react";
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  return <>{`this is the dashboard page ${id}`}</>;
};

export default Dashboard;
