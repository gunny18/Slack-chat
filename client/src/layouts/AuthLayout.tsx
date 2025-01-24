import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { getIsUserLoggedIn } from "../app/user";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  const isLoggedIn = useAppSelector(getIsUserLoggedIn);
  return isLoggedIn ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default AuthLayout;
