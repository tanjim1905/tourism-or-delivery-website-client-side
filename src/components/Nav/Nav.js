import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-white navbar-light">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            E-Courier
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {user.email && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/myOrders">
                      My Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/manageOrders">
                      Manage All Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/addService">
                      Add Service
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <div className="register-part">
              {user.email ? (
                <button className="btn btn-danger rounded" onClick={logOut}>Logout</button>
              ) : (
                <Link to="/register">
                  <button className="btn btn-success rounded">Register</button>
                </Link>
              )}

              {user.photoURL && <img className="ms-2 rounded-circle" style={{width: "40px", height: "40px"}} src={user.photoURL} alt="" />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
