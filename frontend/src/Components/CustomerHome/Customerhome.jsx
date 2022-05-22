import "./cushome.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import "../3rdPartyVehicleApplication/application.css";
import { Link } from "react-router-dom";

export default function Customerhome() {
  return (
    <div>
      <div class="hero">
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                backgroundColor: "#b3d9ff",
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
                src="https://cdn-icons-png.flaticon.com/128/5807/5807942.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Home</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                People can choose various cars and various packages through
                system with few clicks, and as per the customer order and
                comfort, it place the order and deliver the car as per the
                location within the area with a driver.{" "}
              </p>

              <Link to="/cushome">
                <Button className="cushomebutton">Home</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2636/2636399.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Find a Vehicle</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                People can choose various cars and various packages through
                system with few clicks, and as per the customer order and
                comfort, it place the order and deliver the car as per the
                location within the area with a driver.{" "}
              </p>
              <Link to ="/cushome" >
              <Button className="cushomebutton">Booking</Button>
              </Link>
            </th>

            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4293/4293688.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Recovery</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                People can choose various cars and various packages through
                system with few clicks, and as per the customer order and
                comfort, it place the order and deliver the car as per the
                location within the area with a driver.{" "}
              </p>
              <Link to ="/cushome" >
              <Button className="cushomebutton">Recovery</Button>
              </Link>
            </th>
          </tr>

          <tr>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/4396/4396880.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Extra Option</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                People can choose various cars and various packages through
                system with few clicks, and as per the customer order and
                comfort, it place the order and deliver the car as per the
                location within the area with a driver.{" "}
              </p>
              <Link to ="/cushome" >
              <Button className="cushomebutton">Equipment</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://cdn-icons-png.flaticon.com/128/686/686379.png"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Bonus Opportunity</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                We provide opportunity to lease your vehilce and get a extra
                income Through our Company. As well as if you are a experienced
                driver this is the best option for you to work as a professional
                driver{" "}
              </p>

              <Link to="/Serviceshome">
                <Button className="cushomebutton">Services</Button>
              </Link>
            </th>
            <th>
              <img
                src="https://img-premium.flaticon.com/png/128/3055/premium/3055957.png?token=exp=1633348728~hmac=2e9b9066544d501ff42441269b950cb8"
                alt=""
                height="80px"
                class="logo"
              />
              <h1>Rate Us</h1>
              <p
                style={{
                  textAlign: "justify",
                  marginLeft: "60px",
                  marginRight: "60px",
                }}
              >
                People can choose various cars and various packages through
                system with few clicks, and as per the customer order and
                comfort, it place the order and deliver the car as per the
                location within the area with a driver.
              </p>
              <Link to ="/cushome" >
              <Button className="cushomebutton">Feedback</Button>
              </Link>
            </th>
          </tr>
        </table>
        <table style={{ width: "100%" }}>
          <tr>
            <th
              style={{
                backgroundColor: "#b3d9ff",
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
