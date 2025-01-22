import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { getIsUserLoggedIn } from "../app/user";

const AuthLayout = () => {
  const isLoggedIn = useAppSelector(getIsUserLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthLayout;
