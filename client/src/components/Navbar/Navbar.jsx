import { NavLink } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import "./Navbar.css";

const Navbar = () => {
  // We are getting the user and some functions from the context
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  // console.log(currentUser)
  return (
    <nav className="Navbar">
      <NavLink className="logo" to="/">
        The Phone Cave
      </NavLink>
      <NavLink to="/phones">phones</NavLink>
    </nav>
  );
};

export default Navbar;
