import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavigationLinks, navItems } from "../../helpers/type";
const Navbar: React.FC = () => {
  return (
    <div className="flex justify-around items-center w-full max-w-4xl container border-b-2 mx-auto py-2 px-2 m-4">
      <div>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className=" flex max-w-4xl">
        <nav className="flex">
          <ul className="flex">
            {navItems.map((items: NavigationLinks) => {
              return (
                <li key={items.id} className="justify-around px-2">
                  <NavLink to={items.link}>{items.name}</NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
