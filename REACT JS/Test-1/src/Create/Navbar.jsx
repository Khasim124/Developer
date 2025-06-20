import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light px-3"
      style={{ height: "60px" }}
    >
      <Link className="navbar-brand" to="/home">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1I205QZ99qj7_wn6a3s3RWikCwJ5WJ3QUUg&s"
          alt="Logo"
          style={{ height: "40px" }}
        />
      </Link>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {["home", "employers", "consultants", "register"].map((item) => (
            <li className="nav-item" key={item}>
              <Link className="nav-link" to={`/${item}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link to="/contact" className="btn btn-primary ms-2 btn-sm">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
