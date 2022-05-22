import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router";

const EditVehicleOwner = () => {
  const { Ownerid } = useParams();

  const [VehicleOwnerDetails, setVehicleOwnerDetails] = useState([]);

  const [FirstName, setFname] = useState();
  const [LastName, setLname] = useState();
  const [NIC, setnic] = useState();
  const [ContactNumber, setContactNo] = useState();
  const [Email, setEmail] = useState();
  const [Address, setAddress] = useState();
  const [District, setDistrict] = useState();

  function UpdateData(event) {
    event.preventDefault();

    const newApplication = {
      FirstName,
      LastName,
      NIC,
      ContactNumber,
      Email,
      Address,
      District,
    };

    console.log(newApplication);

    axios
      .put(
        "http://localhost:8070/ApplicationManagement/UpdateVehicleOwner/" +
          Ownerid,
        newApplication
      )
      .then(() => {
        console.log(newApplication);
        alert("successfully Updated");

        window.location = "/vehicleowners";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get Driver Details To Edit Form

  useEffect(() => {
    function getVehicleOwnerDetails() {
      axios
        .get(
          "http://localhost:8070/ApplicationManagement/thirddPartyVehicleOwner/" +
            Ownerid
        )
        .then((res) => {
          setVehicleOwnerDetails(res.data);
          setFname(res.data.FirstName);
          setLname(res.data.LastName);
          setnic(res.data.NIC);
          setContactNo(res.data.ContactNumber);
          setEmail(res.data.Email);
          setAddress(res.data.Address);
          setDistrict(res.data.District);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getVehicleOwnerDetails();
  }, []);

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>
      <header>
        <h1 style={{ fontSize: "50px" }}>EDIT VEHICLE OWNER DETAILS</h1>
      </header>
      <form>
        {/* <!--  General --> */}
        <br />
        <div class="form-group">
          <h2 class="heading">Edit Details</h2>
          <br />
          <div class="controls">
            <input
              type="text"
              id="fname"
              class="floatLabel"
              name="fname"
              defaultValue={VehicleOwnerDetails.FirstName}
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
              defaultValue={VehicleOwnerDetails.LastName}
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
              defaultValue={VehicleOwnerDetails.NIC}
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
              defaultValue={VehicleOwnerDetails.ContactNumber}
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
              defaultValue={VehicleOwnerDetails.Email}
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
            defaultValue={VehicleOwnerDetails.Address}
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
          <Button
            style={{ width: "100px", height: "50px", marginRight: "20px" }}
            type="submit"
            onClick={(e) => {
              UpdateData(e);
            }}
          >
            Update
          </Button>
          <Button
            style={{ width: "100px", height: "50px", marginRight: "20px" }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditVehicleOwner;
