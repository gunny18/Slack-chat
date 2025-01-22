import { Link } from "react-router-dom";
import RegisterForm from "../app/user/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="m-auto pt-10 w-1/4">
      <h1 className="mb-10 text-4xl font-bold">Register Page</h1>
      <RegisterForm />
      <Link className="hover:text-violet-500" to="/login">
        Already have an accout? Sign In.
      </Link>
    </div>
  );
};

export default RegisterPage;
