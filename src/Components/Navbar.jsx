import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand mx-4" to="/">
            React-Features
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
                <Link className="nav-link mx-2" aria-current="page" to="/">
                  Page 1
                </Link>
              </li>
              <li className="nav-item mx-2 ">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/idletimecontainer"
                >
                  Page 2
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link" aria-current="page" to="/charts">
                  Page 3
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link" aria-current="page" to="/formik">
                  Page 4
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/formiklogin"
                >
                  Page 5
                </Link>
              </li>

              <li className="nav-item mx-2">
                <Link className="nav-link " aria-current="page" to="/reactbeta">
                  Page 6
                </Link>
              </li>

              {/* <li className="nav-item mx-2">
                <Link className="nav-link " aria-current="page" to="/videochat">
                  Page 7
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
