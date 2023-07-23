import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  let logged = localStorage.getItem("Logged");

  if (!logged) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
