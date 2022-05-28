import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import Header from "./header";


export default function Booking() {
  const [PickupLocation, setPlocation] = useState("");
  const [PickupDate, setPdate] = useState("");
  const [PickupTime, setPtime] = useState("");
  const [DropLocation, setDlocation] = useState();
  const [Passengers, setPassengers] = useState("");
  const [VehicleType, setVtype] = useState("");
  const [CustomerName, setCname] = useState("");
  const [Email, setEmail] = useState("");
  const [MobileNo, setMobileNo] = useState("");
  const [Message, setMessage] = useState("");
  

  function setData(e) {
    e.preventDefault();

    const newApplication = {
      PickupLocation,
      PickupDate,
      PickupTime,
      DropLocation,
      Passengers,
      VehicleType,
      CustomerName,
      Email,
      MobileNo,
      Message,
      
    };
    console.log(newApplication);
    axios
      .post(
        "http://localhost:8070/Booking/addnewbookingApp",
        newApplication
      )
      .then(() => {
        console.log(newApplication);
        alert("successfully Submitted");

        window.location = "/staffhome";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
   
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>

<div style={{ marginLeft: "950px", marginRight: "10px" }}>
  <br></br>
<h5> Looking For Trip? </h5>
</div>
<Button
           
             style={{ width: "120px", height: "40px",marginTop:"-40px", marginLeft: "1150px", marginRight: "20px", backgroundColor: "##ff0000"}}
             onClick= {e=>{
               setData(e);
             }}
           >
             Book Now
           </Button>

        <br></br>
        <header>
        <h1>FASTER.SAFER.SMARTER</h1>
        <h4>Book Your Own Trip</h4>
        </header>
<br></br>

        
      <br></br>
      <form
        onSubmit={(e) => {
          setData(e);
        }}
       
      >
        
          <div class="controls">
            <input
              type="text"
              id="Plocation"
              class="floatLabel"
              name="Plocation"
              required
              value={PickupLocation}
              onChange={(e) => {
                setPlocation(e.target.value);
              }}
            />
            <label for="name" class="active">
              Pick-up-Location
            </label>
          </div>
          <div class="controls">
            <input
              type="Date"
              id="Pdate"
              class="floatLabel"
              name="Pdate"
              required
              onChange={(event) => {
                setPdate(event.target.value);
              }}
            />
            <label for="name" class="active">
              Pick-up-Date
            </label>
          </div>

          <div class="controls">
            <input
              type="text"
              id="Ptime"
              class="floatLabel"
              name="Ptime"
              required
              onChange={(event) => {
                setPtime(event.target.value);
              }}
            />
            <label for="put" class="active">
              Pick-up-Time
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="Dlocation"
              class="floatLabel"
              name="Dlocation"
              required
              onChange={(event) => {
                setDlocation(event.target.value);
              }}
            />
            <label for="tp" class="active">
              Drop-Location
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="Passengers"
              class="floatLabel"
              name="Passengers"
              required
              pattern="\d{1,2}" 
              onChange={(event) => {
                setPassengers(event.target.value);
              }}
            />
            <label for="passengers" class="active">
              Passengers
            </label>
          </div>
     
          <div class="form-group">
          <div class="controls">
            <i class="fa fa-sort"></i>
            <select
              class="VehicleType"
              onChange={(event) => {
                setVtype(event.target.value);
              }}
            >
          <option value="Vehicle Category" selected>
                Vehicle Category
              </option>
              <option value="SEDAN">SEDAN</option>
              <option value="COUPE">COUPE</option>
              <option value="HatchBack">HatchBack</option>
              <option value="SUV">SUV</option>
              <option value="MiniVan">MiniVan</option>
            </select>
          <label for="Vtype" class="active">
            Vehicle Type
          </label>
        </div>
        </div>
        <div class="form-group">
        <h2 class="heading">Customer Details</h2>
        <Container>
            

            <Row className="mb-3">
              <Form.Group as={Col} controlId="vName">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Customer name"
                  required
                  onChange={(e) => {
                    setCname(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="vNumber">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                  placeholder="Email"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="vMYear">
                <Form.Label>Mobile No</Form.Label>
                <Form.Control
                  type="text"
                  pattern="[947][0-9]{10}"
                  placeholder="Mobile No"
                  value={MobileNo}
                  required
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                  }}
                />
              </Form.Group>
            </Row>
       </Container>
       <div class="form-group">
          <h2 class="heading">Message</h2>
          <div class="controls">
            <textarea
              name="comments"
              class="floatLabel"
              id="comments"
              required
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
            <label for="comments" class="active">
              
            </label>
          </div>
          </div>

          <Button
            type="submit"
            style={{ width: "90px", height: "40px", marginRight: "20px" }}
          >
            Submit
          </Button>

          <Link to="/Serviceshome">
            <Button
              style={{ width: "90px", height: "40px", backgroundColor: "red" }}
            >
              Cancel
            </Button>
          </Link>
             
        </div>
      </form>
      
    </div>
    
  );
}