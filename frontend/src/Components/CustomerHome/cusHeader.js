import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CusHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Nav>
        <img
          src="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png"
          alt=""
          class="logo"
          height="50px"
        />
      </Nav>
      {/* 

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle
        navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item " style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="/">
              Home
            </a>
          </li>

          <li className="nav-item" style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="">
              Booking
            </a>
          </li>

          <li className="nav-item" style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="">
              Recovery
            </a>
          </li>

          <li className="nav-item" style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="http://localhost:3000/userItems">
              Equipment
            </a>
          </li>
          <li className="nav-item" style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="/Serviceshome">
              ServicesFromUs
            </a>
          </li>
          <li className="nav-item" style={{ marginLeft: "50px" }}>
            <a className="nav-link" href="">
              Feedback
            </a>
          </li>
        </ul>
      </div>
    </Navbar>
  );
}
export default CusHeader;
