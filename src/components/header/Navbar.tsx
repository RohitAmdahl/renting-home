import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto items-center py-2 px-2 m-4">
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" className="" />
        </NavLink>
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
