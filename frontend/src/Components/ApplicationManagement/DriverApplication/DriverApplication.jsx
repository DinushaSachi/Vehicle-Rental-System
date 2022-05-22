import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./form.css";
import axios from "axios";
import { Link } from "react-router-dom";

const DriverApplication = () => {
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [Gender, setGender] = useState("male");
  const [Age, setAge] = useState();
  const [Birthday, setBirthday] = useState();
  const [NIC, setnic] = useState("");
  const [ContactNumber, setContactNo] = useState();
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("Colombo");
  const [Experiences, setExpeirences] = useState("");

  function setData(event) {
    event.preventDefault();

    const newApplication = {
      FirstName,
      LastName,
      Gender,
      Age,
      Birthday,
      NIC,
      ContactNumber,
      Email,
      Address,
      District,
      Experiences,
    };

  
    axios
      .post("http://localhost:8070/ApplicationManagement/add", newApplication)
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
    <div style={{ marginLeft: "250px", marginRight: "250px" }}>
      <header>
        <h1>Want To Become A Professional Driver?</h1>
        <p>
          If You are a expierienced driver this is the Best Option For You to
          Work as a Professional Driver
        </p>
      </header>
      <form
        style={{ marginLeft: "", marginRight: "" }}
        onSubmit={(e) => {
          setData(e);
        }}
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
              onChange={(event) => {
                setFname(event.target.value);
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
          <div className="controls">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="male"
                defaultChecked
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label class="form-check-label radio" for="flexRadioDefault1">
                Male
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="female"
                onChange={(event) => {
                  setGender(event.target.value);
                }}
              />
              <label class="form-check-label radio" for="flexRadioDefault2">
                Female
              </label>
            </div>
          </div>
          <div class="controls">
            <input
              type="date"
              id="bday"
              class="floatLabel"
              name="bday"
              onChange={(event) => {
                setBirthday(event.target.value);
              }}
            />
            <label for="bday" class="active">
              Birthday
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="age"
              class="floatLabel"
              name="age"
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
            <label for="age" class="active">
              Age
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
            <label for="fruit" class="active">
              District
            </label>
          </div>
        </div>
        {/* <!--  More --> */}
        <div class="form-group">
          <h2 class="heading">Expeiriences</h2>
          <div class="controls">
            <textarea
              name="comments"
              class="floatLabel"
              id="comments"
              onChange={(event) => {
                setExpeirences(event.target.value);
              }}
            ></textarea>
            <label for="comments" class="active">
              Note down Your Expeirences
            </label>
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
};
export default DriverApplication;
