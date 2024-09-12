import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import "./navbar.scss";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    navigate("/"); 
    window.location.reload();
  };

  return (
    <nav className="icono-inicio">
      <NavLink to="/" className="nav-item">
        <IoHomeOutline className="icono-Home" />
      </NavLink>

      {isAuthenticated ? (
        <button
          onClick={handleLogout}
          className="nav-item flex flex-col items-center justify-center"
          aria-label="Logout"
        >
          <img
            src="/Assets/Logout-icon.svg"
            alt="icono-salir"
            className="w-8"
          />
        </button>
      ) : (
        <NavLink
        
          to={"/login"}
          className="nav-item flex flex-col items-center justify-center"
        >
          <CiLogin className="login-icon" />
        </NavLink>
      )}
    </nav>
  );
};

export default Navbar;
