import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const EditThirdPartyVehicle = () => {
  const { id } = useParams();

  const [Vdetails, setVdetails] = useState([]);

  const [vModel, setvModel] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [manufacturedYear, setmanufacturedYear] = useState("");
  const [fuelType, setfuelType] = useState("");
  const [vCategory, setvCategory] = useState("");
  const [vStatus, setvStatus] = useState("");
  const [fileName, setFileName] = useState("");

  function UpdateData(event) {
    event.preventDefault();

    const newApplication = {
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
      .put(
        "http://localhost:8070/ApplicationManagement/UpdateTvehicle/" + id,
        newApplication
      )
      .then(() => {
        console.log(newApplication);
        alert("successfully Updated");

        window.location = "/thirdpvehicles";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get Driver Details To Edit Form

  useEffect(() => {
    function getVdetails() {
      axios
        .get(
          "http://localhost:8070/ApplicationManagement/ThirdParty_Vehicle/" + id
        )
        .then((res) => {
          setVdetails(res.data);
          setvModel(res.data.vModel);
          setvehicleNumber(res.data.vehicleNumber);
          setmanufacturedYear(res.data.manufacturedYear);
          setfuelType(res.data.fuelType);
          setvCategory(res.data.vCategory);
          setvStatus(res.data.vStatus);
          setFileName(res.data.fileName);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getVdetails();
  }, []);

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <header>
        <h1 style={{ fontSize: "40px" }}>EDIT THIRD PARTY VEHICLE DETAILS</h1>
      </header>
      <form>
        <Container>
          <br></br>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="vName">
              <Form.Label>Vehicle Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter vehicle name"
                defaultValue={Vdetails.vModel}
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
                defaultValue={Vdetails.vehicleNumber}
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
                defaultValue={Vdetails.manufacturedYear}
                onChange={(e) => {
                  setmanufacturedYear(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <div class="form-group">
            <div class="controls">
              <i class="fa fa-sort"></i>
              <select
                onChange={(e) => {
                  setfuelType(e.target.value);
                }}
              >
                <option value="Colombo" selected>
                  Fuel Type
                </option>
                <option value="Diesal">Diesal</option>
                <option value="Petrol">Petrol</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="controls">
              <i class="fa fa-sort"></i>
              <select
               onChange={(e) => {
                setvCategory(e.target.value);
              }}
            >
              <option>Select Vehicle Type...</option>
              <option>SEDAN</option>
              <option>COUPE</option>
              <option>HATCHBACK</option>
              <option>SUV</option>
              <option>MINIVAN</option>
              </select>
            </div>
          </div>

          <div class="form-group">
            <div class="controls">
              <i class="fa fa-sort"></i>
              <select
              onChange={(e) => {
                setvStatus(e.target.value);
              }}
            >
              <option>Select...</option>
              <option>Need Service</option>
              <option>Need Repair</option>
              <option>In Good Condition</option>
              </select>
            </div>
          </div>

          <br></br>
          <Button
            style={{ width: "80px", height: "40px", marginRight: "20px" }}
            onClick={(e) => {
              UpdateData(e);
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
        </Container>
      </form>
    </div>
  );
};
export default EditThirdPartyVehicle;
