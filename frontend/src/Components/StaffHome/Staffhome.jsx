import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./staffhome.css"

export default function Staffhome() {
  return (
    <div>
      <div class="hero">
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                backgroundColor: "#b3fff0",
                width: "100%",
                height: "250px",
              }}
            >
              <h1
                style={{
                  fontSize: "50px",
                  color: "black",
                  fontStyle: "inherit",
                }}
              >
                VEHICLE RENTAL SYSTEM
              </h1>
            </th>
          </tr>
        </table>

        <table style={{ width: "100%", marginTop: "60px" }}>
          <tr>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3203/3203244.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Booking Management</h1>
            

              <Link to="/SeeAllBooking">
                <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2063/2063181.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Company Vehicle Management</h1>
              
              <Link to ="/cushome" >
              <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>

            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5696/5696681.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>ThirdParty Vehicle Management</h1>
          
              <Link to ="/cushome" >
              <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://img-premium.flaticon.com/png/128/4514/premium/4514345.png?token=exp=1633421934~hmac=7c0b743c74ca009475c7992c194aa97b"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Application Management</h1>
          
              <Link to ="/cushome" >
              <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
          </tr>

          <tr>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3770/3770811.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Payment Management</h1>
             
              <Link to ="/cushome" >
              <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/5138/5138585.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Recovery Management</h1>
             
              <Link to="/Serviceshome">
                <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4214/4214547.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Equipment Management</h1>
             
              <Link to="/Serviceshome">
                <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1523/1523629.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Employee Management</h1>
            
              <Link to ="/cushome" >
              <Button className="staffhomebutton">Manage</Button>
              </Link>
            </th>
          </tr>
        </table>
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                backgroundColor: "#b3fff0",
                width: "100%",
                height: "50px",
              }}
            >
              <p>@vehicleRentalCompany right 2021-2024</p>
            </th>
          </tr>
        </table>
      </div>

    </div>
  );
}
