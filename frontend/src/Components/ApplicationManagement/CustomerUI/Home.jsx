import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../3rdPartyVehicleApplication/application.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 style={{ fontSize: 40 }}>Find What We are Doing For You !!</h1>
      <div class="hero">
        <nav className="chinav">
          <img
            src="https://i.postimg.cc/DydN4snm/menu.png"
            alt=""
            class="menu-img"
          />
          <img
            src="https://www.cellutrak.ca/wp-content/uploads/2020/11/car-rental.png"
            alt=""
            class="logo"
          />
        </nav>

        <div class="lamp-container">
          <img 
            src="https://i.postimg.cc/yYz5Nnqw/lamp.png"
            alt=""
            class="lamp"
          />
          <img
            src="https://i.postimg.cc/SxgtDhXh/light.png"
            alt=""
            class="light"
            id="light"
          />
        </div>

        <div class="text-container">
        <h1 style={{ fontSize: 60 }}>
            Looking For a <br /> Extra Income?
          </h1>
          <p style={{ fontSize: 20 }}>Lease Your Vehicle Through Our Company</p>
          <Link to="/addVehicleApplication">
            <Button
              type="submit"
              style={{
                width: "120px",
                height: "40px",
                marginRight: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                border: "#27AE60 ",
                backgroundColor: "#27AE60 ",
              }}
            >
              Apply
            </Button>
          </Link>

          <br /> <br /> <br /> <br />
          <h1 style={{ fontSize: 60 }}>
            Looking For a <br />
            Job?
          </h1>
          <p style={{ fontSize: 20 }}>
        
            Join As a Driver to Get More Opportunities
          </p>
          <Link to="/add">
            <Button
              style={{
                width: "120px",
                height: "40px",
                marginRight: "20px",
                marginTop: "10px",
                marginBottom: "10px",
                border: "#27AE60 ",
                backgroundColor: "#27AE60 ",
              }}
            >
              Apply
            </Button>
          </Link>
         
       
        </div>
      </div>
    </div>
  );
}
