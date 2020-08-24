import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return ( <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarColor03">
      <ul className="navbar-nav ml-auto" id="nav-rigth">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to="/">Action</NavLink>
            <NavLink className="dropdown-item" to="/">Action</NavLink>
            
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </nav> );
}
 
export default Navbar;