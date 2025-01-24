import { Link } from "react-router-dom";
import LoginForm from "../app/user/LoginForm";

const LoginPage = () => {
  return (
    <div className="m-auto pt-10 w-1/4">
      <h1 className="mb-10 text-4xl font-bold">Login Page</h1>
      <LoginForm />
      <Link className="hover:text-violet-500" to="/register">
        Don't have an accout? Create One.
      </Link>
    </div>
  );
};

export default LoginPage;
