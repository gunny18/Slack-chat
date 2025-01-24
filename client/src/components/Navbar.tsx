import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-2 flex justify-around">
      <Link to="/namespace/create" className="hover:text-blue-600">
        Create Namespace
      </Link>
    </nav>
  );
};

export default Navbar;
