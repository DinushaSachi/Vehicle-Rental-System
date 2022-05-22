import react, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

//creating basic component
export default function AllBooking() {
  const [BookingApplications, setBookingApplications] = useState([]);

  const [ID, setid] = useState();
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

  useEffect(() => {
    function getApplications() {
      axios
        .get("http://localhost:8070/Booking/")
        .then((res) => {
          setBookingApplications(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getApplications();
  }, []);

  // Entroll Function
  function Entroll(_id) {
    console.log(_id);
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
      .post("http://localhost:8070/Booking/addCBooking", newApplication)
      .then(() => {
        console.log(newApplication);
      })
      .then(() => {
        axios
          .delete("http://localhost:8070/Booking/delete/" + _id)
          .then((res) => {
            console.log(res);
            alert("successfully entrolled");

            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function RejectApplication(e,_id){
    axios
    .delete("http://localhost:8070/Booking/delete/" + _id)
    .then((res) => {
      console.log(res);
      alert("Application Rejected");

      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <h1>All Applications</h1>

      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">PickupLocation</th>
            <th scope="col">PickupDate</th>
            <th scope="col">PickupTime</th>
            <th scope="col">DropLocation</th>
            <th scope="col">Passengers</th>
            <th scope="col">VehicleType</th>
            <th scope="col">CustomerName</th>
            <th scope="col">Email</th>
            <th scope="col">MobileNo</th>
            <th scope="col">Message</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {BookingApplications.map((data) => {
            return (
              <tr>
                <td>{data.PickupLocation}</td>
                <td>{data.PickupDate}</td>
                <td>{data.PickupTime}</td>
                <td>{data.DropLocation}</td>
                <td>{data.Passengers}</td>
                <td>{data.VehicleType}</td>
                <td>{data.CustomerName}</td>
                <td>{data.Email}</td>
                <td>{data.MobileNo}</td>
                <td>{data.Message}</td>
                <td style={{ width: "250px", textAlign: "center" }}>
                  <Button
                    style={{ width: "60px" }}
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setid(data._id);
                      setPlocation(data.PickupLocation);
                      setPdate(data.PickupDate);
                      setPtime(data.PickupTime);
                      setDlocation(data.DropLocation);
                      setPassengers(data.Passengers);
                      setVtype(data.VehicleType);
                      setCname(data.CustomerName);
                      setEmail(data.Email);
                      setMobileNo(data.MobileNo);
                      setMessage(data.Message);
                      Entroll(data._id);
                    }}
                  >
                    Entroll
                  </Button>

                  <Button
                    size="sm"
                    variant="danger"
                    style={{ width: "60px", marginLeft: "10px" }}
                    onClick={(e) => {
                      RejectApplication(e,data._id)
                    }}
                  >
                    Reject
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}