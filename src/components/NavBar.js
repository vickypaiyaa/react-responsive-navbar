import React from "react";
import {Link} from 'react-router-dom';
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">NavBar</Link>
      <ul class="nav-links">
        <li className="nav-link"><Link to="/">Home</Link></li>
        <li className="nav-link"><Link to="/about">About</Link></li>
        <li className="nav-link"><Link to="/contact">Contact</Link></li>
        <li className="nav-link"><Link to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
