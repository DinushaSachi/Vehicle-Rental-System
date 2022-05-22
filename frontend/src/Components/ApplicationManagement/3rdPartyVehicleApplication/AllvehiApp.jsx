import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

//creating basic component
export default function AllvehiApp() {
  const [AllvehiApp, setAllvehiApp] = useState([]);

  const [ID, setid] = useState();
  const [FirstName, setFname] = useState("");
  const [LastName, setLname] = useState("");
  const [NIC, setnic] = useState("");
  const [ContactNumber, setContactNo] = useState();
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("Colombo");

  const [vModel, setvModel] = useState("");
  const [vehicleNumber, setvehicleNumber] = useState("");
  const [manufacturedYear, setmanufacturedYear] = useState("");
  const [fuelType, setfuelType] = useState("");
  const [vCategory, setvCategory] = useState("");
  const [vStatus, setvStatus] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    function getAllApplications() {
      axios
        .get("http://localhost:8070/ApplicationManagement/getvapplications")
        .then((res) => {
          setAllvehiApp(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getAllApplications();
  }, []);

  // Entroll Function
  function Entroll(_id) {
    console.log(_id);
    const newVehicleOwner = {
      FirstName,
      LastName,
      NIC,
      ContactNumber,
      Email,
      Address,
      District,
    };
    const newTPvehicle = {
      vModel,
      vehicleNumber,
      manufacturedYear,
      fuelType,
      vCategory,
      vStatus,
      fileName,
    };

    console.log(newVehicleOwner);
    axios
      .post(
        "http://localhost:8070/ApplicationManagement/addVehicleOwner",
        newVehicleOwner
      )
      .then(() => {
        console.log(newVehicleOwner);
        axios
          .post(
            "http://localhost:8070/ApplicationManagement/addTvehicle",
            newTPvehicle
          )
          .then(() => {
            console.log(newTPvehicle);
          });
      })
      .then(() => {
        axios
          .delete(
            "http://localhost:8070/ApplicationManagement/VAppdelete/" + _id
          )
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

  function RejectApplication(e, _id) {
    axios
      .delete("http://localhost:8070/ApplicationManagement/VAppdelete/" + _id)
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
      <h1>All Vehicle Applications</h1>

      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">NIC</th>
            <th scope="col">ContactNumber</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">District</th>

            <th scope="col">vModel</th>
            <th scope="col">VehicleNumber</th>
            <th scope="col">manufacturedYear</th>
            <th scope="col">Fuel Type </th>
            <th scope="col">Category</th>
            <th scope="col">Status</th>
            <th scope="col">FileName</th>
            <th scope="col">Decision</th>
          </tr>
        </thead>
        <tbody>
          {AllvehiApp.map((data) => {
            return (
              <tr>
                <td>{data.FirstName}</td>
                <td>{data.LastName}</td>
                <td>{data.NIC}</td>
                <td>{data.ContactNumber}</td>
                <td>{data.Email}</td>
                <td>{data.Address}</td>
                <td>{data.District}</td>

                <td>{data.vModel}</td>
                <td>{data.vehicleNumber}</td>
                <td>{data.manufacturedYear}</td>
                <td>{data.fuelType}</td>
                <td>{data.vCategory}</td>
                <td>{data.vStatus}</td>
                <td>{data.fileName}</td>

                <td style={{ width: "250px", textAlign: "center" }}>
                  <Button
                    style={{ width: "60px" }}
                    size="sm"
                    variant="primary"
                    onClick={() => {
                      setid(data._id);
                      setFname(data.FirstName);
                      setLname(data.LastName);
                      setnic(data.NIC);
                      setContactNo(data.ContactNumber);
                      setEmail(data.Email);
                      setAddress(data.Address);
                      setDistrict(data.District);

                      setvModel(data.vModel);
                      setvehicleNumber(data.vehicleNumber);
                      setmanufacturedYear(data.manufacturedYear);
                      setfuelType(data.fuelType);
                      setvCategory(data.vCategory);
                      setvStatus(data.vStatus);
                      setFileName(data.fileName);

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
                      RejectApplication(e, data._id);
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
