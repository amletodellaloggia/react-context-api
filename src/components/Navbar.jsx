import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand text-white" to="/">
          MyStore
        </NavLink>
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Homepage
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/prodotti" className="nav-link text-white">
              Prodotti
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chisiamo" className="nav-link text-white">
              Chi Siamo
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
