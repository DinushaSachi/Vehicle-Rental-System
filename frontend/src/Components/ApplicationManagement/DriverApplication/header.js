import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Header() {
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
      <Navbar.Brand href="#home">|STAFF|</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* Chathuranga */}
          <NavDropdown title="Booking" id="collasible-nav-dropdown">
            <Link className="dropdown-item" to="/seeAllBooking">
              Manage Bookings
            </Link>
          </NavDropdown>

          {/* Dineth */}
          <NavDropdown title="Company Vehicles" id="collasible-nav-dropdown">
            <Link className="dropdown-item" to="/addBooking">
              Add New Vehicle
            </Link>
            <Link className="dropdown-item" to="/add">
              Manage Company Vehicles
            </Link>
          </NavDropdown>

          {/* Chiumi */}
          <NavDropdown
            title="Third party Vehicles"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="/thirdpvehicles">
              Manage Thirdparty Vehicles
            </NavDropdown.Item>
          </NavDropdown>
          {/* Chiumi */}
          <NavDropdown title="Check Applications" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/vehi">
              Thirdparty Vehicle Applications
            </NavDropdown.Item>
            <NavDropdown.Item href="/check">
              Driver Applications
            </NavDropdown.Item>
            <NavDropdown.Item href="/checkBooking">
              Booking Applications
            </NavDropdown.Item>
          </NavDropdown>

          {/* Damsari */}
          <NavDropdown title="Payments" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              Driver Payments
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              VehicleOwner Payments
            </NavDropdown.Item>
          </NavDropdown>

          {/* Anjana */}
          <NavDropdown title="Recovery" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
              Driver Payments
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">
              VehicleOwner Payments
            </NavDropdown.Item>
          </NavDropdown>
          {/* Anushka */}
          <NavDropdown title="Equipment" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">
             Manage Equipments
            </NavDropdown.Item>
            
          </NavDropdown>
          {/* Chiumi*/}
          <NavDropdown title="Employee" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/SeeAllDrivers">
              Company Drivers
            </NavDropdown.Item>
            <NavDropdown.Item href="/vehicleowners">
              Vehicle Owners
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
