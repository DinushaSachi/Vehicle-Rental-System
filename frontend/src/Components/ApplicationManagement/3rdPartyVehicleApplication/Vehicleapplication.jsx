import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";

// For Vehicle Owner Details

export default function Vehicleapplication() {
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [NIC, setnic] = useState("");
  const [ContactNumber, setContactNo] = useState();
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("Colombo");

  // for Vehicle Details

  const [vModel, setvModel] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [manufacturedYear, setmanufacturedYear] = useState("");
  const [fuelType, setfuelType] = useState("");
  const [vCategory, setvCategory] = useState("");
  const [vStatus, setvStatus] = useState("");
  const [fileName, setFileName] = useState("");

  function setData(event) {
    event.preventDefault();

    const newApplication = {
      FirstName,
      LastName,
      NIC,
      ContactNumber,
      Email,
      Address,
      District,

      // for Vehicle Details
      vModel,
      vehicleNumber,
      manufacturedYear,
      fuelType,
      vCategory,
      vStatus,
      fileName,
    };
    console.log(newApplication);
    axios
      .post(
        "http://localhost:8070/ApplicationManagement/addVehicleApplication",
        newApplication
      )
      .then(() => {
        console.log(newApplication);
        alert("successfully Submitted");

        window.location = "/Serviceshome";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <header>
        <h1>Looking For an Extra Income?</h1>
        <p>We Provide Opportunity to Lease Your Vehicle through Our Company</p>
      </header>
      <form
       
      >
        {/* <!--  General --> */}
        <div class="form-group">
          <h2 class="heading">Application Form</h2>
          <div class="controls">
            <input
              type="text"
              id="fname"
              class="floatLabel"
              name="fname"
              onChange={(e) => {
                setFname(e.target.value);
              }}
            />
            <label for="name" class="active">
              First Name
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="lname"
              class="floatLabel"
              name="lname"
              onChange={(event) => {
                setLname(event.target.value);
              }}
            />
            <label for="name" class="active">
              Last Name
            </label>
          </div>

          <div class="controls">
            <input
              type="text"
              id="nic"
              class="floatLabel"
              name="nic"
              onChange={(event) => {
                setnic(event.target.value);
              }}
            />
            <label for="nic" class="active">
              NIC
            </label>
          </div>
          <div class="controls">
            <input
              type="tel"
              id="tp"
              class="floatLabel"
              name="tp"
              onChange={(event) => {
                setContactNo(event.target.value);
              }}
            />
            <label for="tp" class="active">
              Contact Number
            </label>
          </div>
          <div class="controls">
            <input
              type="email"
              id="email"
              class="floatLabel"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <label for="email" class="active">
              Email
            </label>
          </div>
        </div>
        <div class="controls">
          <input
            type="text"
            id="address"
            class="floatLabel"
            name="address"
            onChange={(event) => {
              setAddress(event.target.value);
            }}
          />
          <label for="address" class="active">
            Address
          </label>
        </div>
        <div class="form-group">
          <div class="controls">
            <i class="fa fa-sort"></i>
            <select
              class="Districts"
              onChange={(event) => {
                setDistrict(event.target.value);
              }}
            >
              <option value="Colombo" selected>
                Colombo
              </option>
              <option value="Kalutara">Kalutara</option>
              <option value="Gampaha">Gampaha</option>
              <option value="Galle">Galle</option>
              <option value="Ratnapura">Ratnapura</option>
              <option value="Matara">Matara</option>
              <option value="Anuradhapura">Anuradhapura</option>
              <option value="Jaffna">Jaffna</option>
            </select>
            <label for="district" class="active">
              District
            </label>
          </div>
        </div>
        {/* <!--  More --> */}
        <div class="form-group">
          <h2 class="heading">Vehicle Details</h2>

          {/* Vehicle  Details*/}

          <Container>
            <br></br>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="vName">
                <Form.Label>Vehicle Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter vehicle name"
                  onChange={(e) => {
                    setvModel(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="vNumber">
                <Form.Label>Vehicle Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="XX-0000"
                  onChange={(e) => {
                    setvehicleNumber(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="vMYear">
                <Form.Label>Manufactured Year</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="YYYY"
                  onChange={(e) => {
                    setmanufacturedYear(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="vFuelType">
                <Form.Label>FuelType</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setfuelType(e.target.value);
                  }}
                >
                  <option>Fuel Type</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="vType">
                <Form.Label>Vehicle Type</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setvCategory(e.target.value);
                  }}
                >
                  <option>Vehilce Category</option>
                  <option>SEDAN</option>
                  <option>COUPE</option>
                  <option>HATCHBACK</option>
                  <option>SUV</option>
                  <option>MINIVAN</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="vStatus">
                <Form.Label>Vehicle Status</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    setvStatus(e.target.value);
                  }}
                >
                  <option>Status</option>
                  <option>Need Service</option>
                  <option>Need Repair</option>
                  <option>In Good Condition</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>INPUT VEHICLE IMAGE</Form.Label>
              <Form.Control
                type="file"
                fileName="vehicleImage"
                className="form-control-file"
                //onChange={onChangeFile}
              />
            </Form.Group>

            <br></br>
          </Container>
       
            <Button
             
              style={{ width: "80px", height: "40px", marginRight: "20px" }}
              onClick= {e=>{
                setData(e);
              }}
            >
              Submit
            </Button>
          
          <Link to="/Serviceshome">
            <Button
              style={{
                width: "80px",
                height: "40px",
                backgroundColor: "#ff0000",
              }}
            >
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
