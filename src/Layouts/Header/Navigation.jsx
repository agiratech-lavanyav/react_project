import {  Outlet, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      {/* <div>New Arrivals</div>
      <div>Women's Clothing</div>
      <div>Accessories</div>
      <div>Shoes</div>
      <div>Sale</div> */}
      <nav className="navigation">
        <ul className="navigation__link">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/women-clothing">Women's Clothing</NavLink>
          </li>
          <li>
            <NavLink to="/accessories">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />

    </div>
  );
};

export default Navigation;
