import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate("/login");
  }
  let location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          CloudBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
          {!localStorage.getItem('token')?<form className="d-flex" role="search">
          <Link className="btn btn-success mx-2" to="/login" role="button">
              Login
            </Link>
            <Link className="btn btn-success mx-2" to="/signup" role="button">
              Sign Up
            </Link>
          </form>
            :<Link onClick={handleLogout} className="btn btn-success mx-2" to="/login" role="button">Logout</Link>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
