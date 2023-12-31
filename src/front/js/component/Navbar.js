import { useState } from "react";
import React from "react";
import logo from "../../img/logo.png"

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="hoobank" className="logo"  style={{ width: "220px" }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setToggle(!toggle)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${toggle ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li
              className={`nav-item ${active === "Home" ? "active" : ""}`}
              onClick={() => setActive("Home")}
            >
              <a
                className="nav-link"
                href="#"
                style={{
                  color: "#FFF",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  lineHeight: "130%",
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/login"
                style={{
                  color: "#FFF",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  lineHeight: "130%",
                }}
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/signup"
                style={{
                  color: "#FFF",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  lineHeight: "130%",
                }}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
