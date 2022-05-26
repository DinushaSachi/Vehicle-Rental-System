import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./form.css";
import axios from "axios";
import { useParams } from "react-router";

const EditBookingDetails = () => {
  const { id } = useParams();

  const [BookingDetails, setBookingDetails] = useState([]);

  const [PickupLocation, setPlocation] = useState();
  const [PickupDate, setPdate] = useState();
  const [PickupTime, setPtime] = useState();
  const [DropLocation, setDlocation] = useState();
  const [Passengers, setPassengers] = useState();
  const [VehicleType, setVtype] = useState();
  const [CustomerName, setCname] = useState();
  const [Email, setEmail] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [Message, setMessage] = useState();

  function UpdateData(event) {
    event.preventDefault();

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
      .put("http://localhost:8070/Booking/EditBooking/" + id, newApplication)
      .then(() => {
        console.log(newApplication);
        alert("successfully Updated");
        
        window.location = "/SeeAllBooking";
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Get Booking Details To Edit Form

  useEffect(() => {
    function getBookingDetails() {
      axios
        .get("http://localhost:8070/Booking/CompanyBooking/" + id)
        .then((res) => {
          setBookingDetails(res.data);
          setPlocation(res.data.PickupLocation);
          setPdate(res.data.PickupDate);
          setPtime(res.data.PickupTime);
          setDlocation(res.data.DropLocation);
          setPassengers(res.data.Passengers);
          setVtype(res.data.VehicleType);
          setCname(res.data.CustomerName);
          setEmail(res.data.Email);
          setMobileNo(res.data.MobileNo);
          setMessage(res.data.Message);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getBookingDetails();
  }, []);

  return (
    <div style={{ marginLeft: "200px", marginRight: "200px" }}>

      <form>
        {/* <!--  General --> */}
        <br />
        <div class="form-group">
          <h2 class="heading">Edit Details</h2>
          <br />
          <div class="controls">
            <input
              type="text"
              id="Plocation"
              class="floatLabel"
              name="Plocation"
              defaultValue={BookingDetails.PickupLocation}
              onChange={(event) => {
                setPlocation(event.target.value);
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
              defaultValue={BookingDetails. PickupDate}
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
              defaultValue={BookingDetails.PickupTime}
              onChange={(event) => {
                setPtime(event.target.value);
              }}
            />
            <label for="name" class="active">
                Pick-up-Time
            </label>
          </div>
          
          <div class="controls">
            <input
              type="text"
              id="Dlocation"
              class="floatLabel"
              name="Dlocation"
              defaultValue={BookingDetails.DropLocation}
              onChange={(event) => {
                setDlocation(event.target.value);
              }}
            />
            <label for="bday" class="active">
              Drop-Location
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="Passengers"
              class="floatLabel"
              name="Passengers"
              defaultValue={BookingDetails.Passengers}
              onChange={(event) => {
                setPassengers(event.target.value);
              }}
            />
            <label for="age" class="active">
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
          <div class="controls">
            <input
              type="text"
              id="Cname"
              class="floatLabel"
              name="Cname"
              defaultValue={BookingDetails.CustomerName}
              onChange={(event) => {
                setCname(event.target.value);
              }}
            />
            <label for="tp" class="active">
                Customer Name
            </label>
          </div>
          <div class="controls">
            <input
              type="text"
              id="email"
              class="floatLabel"
              name="email"
              defaultValue={BookingDetails.Email}
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
            id="MobileNo"
            class="floatLabel"
            name="MobileNo"
            defaultValue={BookingDetails.MobileNo}
            onChange={(event) => {
              setMobileNo(event.target.value);
            }}
          />
          <label for="address" class="active">
                Mobile No
          </label>
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
            style={{ width: "100px", height: "50px", marginRight: "20px", backgroundColor: "#ff0000" }}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};
export default EditBookingDetails;
