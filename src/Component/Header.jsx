import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  return (

          <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <Link to="/"className="navbar-brand"><img src="photoprofile.jpg" width="50px"height="50px" class="profile"alt="..."/></Link>
              <button className="navbar-toggler  bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon  text-white"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-1 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active  text-white" aria-current="page">Home</Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/about" className="nav-link  text-white">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/project" className="nav-link  text-white">Project</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link  text-white">Contact</Link>
                  </li>

                </ul>

              </div>
            </div>
          </nav>

  );
};

export default Header;
