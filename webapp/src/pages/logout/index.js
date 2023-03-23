import { useEffect } from "react";
import Cookies from "universal-cookie";

const Logout = () => {
  useEffect(() => {
    const cookies = new Cookies();
    localStorage.removeItem("user");
    window.location.href = "/";
  }, []);
  return <div> Logout user</div>;
};

export default Logout;
